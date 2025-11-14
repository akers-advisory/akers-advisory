'use client';
import { useId, useState, ChangeEvent, FocusEvent, useRef } from 'react';
import { ArrowRightIcon, LoaderIcon } from '../../UI/Icons/Icons';
import * as Yup from 'yup';
import { Formik, FormikHelpers, Field, ErrorMessage, Form, useFormikContext } from 'formik';
import { IMaskInput } from 'react-imask';
import { mailFormData } from '@/lib/api/mailFormData';
import DialogController from '@/components/UI/DialogController/DialogController';
import { DialogData } from '@/components/UI/Dialog/Dialog';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
}

// More permissive international phone regex - accepts various formats with/without country codes
const phoneRegExp = /^[\+]?[0-9]{1,4}[\s]?[(]?[0-9]{1,4}[)]?[\s]?[0-9]{1,4}[\s\-]?[0-9]{1,9}$/;

const PhoneNumberField = ({ fieldId }: { fieldId: string }) => {
  const { setFieldValue } = useFormikContext<ContactFormValues>();

  return (
    <div className="relative">
      <label htmlFor={fieldId} className="sr-only">
        Phone Number
      </label>
      <Field name="phoneNumber">
        {({
          field,
          meta,
        }: {
          field: { name: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; onBlur: (e: FocusEvent<HTMLInputElement>) => void };
          meta: { touched: boolean; error?: string };
        }) => (
          <IMaskInput
            {...field}
            id={fieldId}
            mask="+1 (000) 000-0000"
            lazy={true}
            overwrite={false}
            prepare={(appended: string, masked: { value: string }) => {
              // If user starts typing a digit without +, prepend +
              if (appended && /^\d/.test(appended) && !masked.value.startsWith('+')) {
                return '+' + appended;
              }
              return appended;
            }}
            autoComplete="tel"
            type="tel"
            placeholder="Phone Number"
            className={`w-full h-[35px] tablet-xl:h-[40px] p-[10px] pr-[30px] font-montserrat text-[12px] font-light leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] text-primary placeholder:opacity-60 border-b ${
              meta.touched && meta.error ? 'border-red-500' : 'border-primary'
            }`}
            onAccept={(value: string) => {
              setFieldValue('phoneNumber', value || '');
            }}
          />
        )}
      </Field>
      <span className="absolute top-[50%] right-[10px] translate-y-[-50%] font-montserrat text-[12px] font-light leading-[15px] text-primary pointer-events-none">
        *
      </span>
      <ErrorMessage
        id={`${fieldId}-error`}
        name="phoneNumber"
        component="div"
        className="absolute bottom-0 left-0 font-montserrat text-[12px] leading-[14px] tablet-xl:text-[14px] tablet-xl:leading-[16px] font-medium text-red-500 translate-y-full"
      />
    </div>
  );
};

const AutoExpandingTextarea = ({ fieldId }: { fieldId: string }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      const minHeight = 35; // Base height matching other inputs
      textarea.style.height = `${Math.max(scrollHeight, minHeight)}px`;
    }
  };

  return (
    <div className="relative">
      <label htmlFor={fieldId} className="sr-only">
        Message
      </label>
      <Field name="message">
        {({
          field,
          meta,
        }: {
          field: { name: string; value: string; onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void; onBlur: (e: FocusEvent<HTMLTextAreaElement>) => void };
          meta: { touched: boolean; error?: string };
        }) => {
          return (
            <textarea
              {...field}
              ref={(el) => {
                textareaRef.current = el;
                if (el) {
                  // Adjust height on mount and when value changes externally
                  setTimeout(adjustHeight, 0);
                }
              }}
              id={fieldId}
              rows={1}
              placeholder="Message"
              onInput={adjustHeight}
              onChange={(e) => {
                field.onChange(e);
                adjustHeight();
              }}
              className={`w-full min-h-[35px] tablet-xl:min-h-[40px] p-[10px] pr-[30px] font-montserrat text-[12px] font-light leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] text-primary placeholder:opacity-60 border-b border-primary resize-none overflow-hidden ${
                meta.touched && meta.error ? 'border-red-500' : 'border-primary'
              }`}
            />
          );
        }}
      </Field>
      <span className="absolute top-[10px] right-[10px] font-montserrat text-[12px] font-light leading-[15px] text-primary pointer-events-none">
        *
      </span>
      <ErrorMessage
        id={`${fieldId}-error`}
        name="message"
        component="div"
        className="absolute bottom-0 left-0 font-montserrat text-[12px] leading-[14px] tablet-xl:text-[14px] tablet-xl:leading-[16px] font-medium text-red-500 translate-y-full"
      />
    </div>
  );
};

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState<DialogData>({
    title: 'Thank you for your message!',
    description: 'We will get back to you as soon as possible.',
    buttonText: 'OK',
  });
  const nameFieldId = useId();
  const emailFieldId = useId();
  const messageFieldId = useId();
  const phoneNumberFieldId = useId();

  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required('Name is required'),
    email: Yup.string()
      .trim()
      .email('Invalid email')
      .required('Email is required'),
    message: Yup.string().trim().required('Message is required'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(phoneRegExp, 'Invalid phone number'),
  });

  const handleSubmit = (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>,
  ) => {
    setIsSubmitting(true);
    mailFormData(values.name, values.email, values.message, values.phoneNumber)
      .then(() => {
        setIsSubmitting(false);
        actions.resetForm();
        setDialogData({
          title: 'Thank you for your message!',
          description: 'We will get back to you as soon as possible.',
          buttonText: 'OK',
        });
        setIsDialogOpen(true);
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error(error);
        setDialogData({
          title: 'Oops! Something went wrong.',
          description: 'Please try again later.',
          buttonText: 'OK',
        });
        setIsDialogOpen(true);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnChange={false}
      >
        <Form>
          <div className="flex flex-col gap-[16px] tablet-xl:gap-[24px] mb-[32px] tablet-xl:mb-[48px] tablet-xl:pt-[24px]">
            <div className="relative">
              <label htmlFor={nameFieldId} className="sr-only">
                Name
              </label>
              <Field
                id={nameFieldId}
                name="name"
                type="text"
                placeholder="Name"
                className="w-full h-[35px] tablet-xl:h-[40px] p-[10px] pr-[30px] font-montserrat text-[12px] font-light leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] text-primary placeholder:opacity-60 border-b border-primary"
              />
              <span className="absolute top-[50%] right-[10px] translate-y-[-50%] font-montserrat text-[12px] font-light leading-[15px] text-primary pointer-events-none">
                *
              </span>
              <ErrorMessage
                id={`${nameFieldId}-error`}
                name="name"
                component="div"
                className="absolute bottom-0 left-0 font-montserrat text-[12px] leading-[14px] tablet-xl:text-[14px] tablet-xl:leading-[16px] font-medium text-red-500 translate-y-full"
              />
            </div>
            <div className="relative">
              <label htmlFor={emailFieldId} className="sr-only">
                Email
              </label>
              <Field
                id={emailFieldId}
                name="email"
                type="email"
                placeholder="Email"
                className="w-full h-[35px] tablet-xl:h-[40px] p-[10px] pr-[30px] font-montserrat text-[12px] font-light leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] text-primary placeholder:opacity-60 border-b border-primary"
              />
              <span className="absolute top-[50%] right-[10px] translate-y-[-50%] font-montserrat text-[12px] font-light leading-[15px] text-primary pointer-events-none">
                *
              </span>
              <ErrorMessage
                id={`${emailFieldId}-error`}
                name="email"
                component="div"
                className="absolute bottom-0 left-0 font-montserrat text-[12px] leading-[14px] tablet-xl:text-[14px] tablet-xl:leading-[16px] font-medium text-red-500 translate-y-full"
              />
            </div>
            <AutoExpandingTextarea fieldId={messageFieldId} />
            <PhoneNumberField fieldId={phoneNumberFieldId} />
          </div>
          <button
            type="submit"
            className="font-montserrat relative w-full max-w-[353px] h-[50px] flex items-center justify-center ml-auto text-[12px] leading-[15px] bg-primary text-text uppercase rounded-full hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
            <span>
              {isSubmitting ? (
                <LoaderIcon className="fill-text absolute top-[50%] right-[20px] translate-y-[-50%] animate-spin" />
              ) : (
                <ArrowRightIcon className="fill-text absolute top-[50%] right-[20px] translate-y-[-50%]" />
              )}
            </span>
          </button>
        </Form>
      </Formik>
      <DialogController
        isDialogOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        dialogData={dialogData}
      />
    </>
  );
};
