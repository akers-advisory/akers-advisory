'use client';
import { useId, useState } from 'react';
import { ArrowRightIcon, LoaderIcon } from '../../UI/Icons/Icons';
import * as Yup from 'yup';
import { Formik, FormikHelpers, Field, ErrorMessage, Form } from 'formik';
import { mailFormData } from '@/lib/api/mailFormData';
import DialogController from '@/components/UI/DialogController/DialogController';
import { DialogData } from '@/components/UI/Dialog/Dialog';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  phoneNumber?: string;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
    phoneNumber: Yup.string().matches(phoneRegExp, 'Invalid phone number'),
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
                className="w-full h-[35px] tablet-xl:h-[40px] p-[10px] font-montserrat text-[12px] font-light leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] text-primary placeholder:opacity-60 border-b border-primary"
              />
              <span className="absolute top-[50%] right-[10px] translate-y-[-50%] font-montserrat text-[12px] font-light leading-[15px] text-primary pointer-events-none">
                *
              </span>
              <ErrorMessage
                id={`${nameFieldId}-error`}
                name="name"
                component="div"
                className="absolute bottom-0 left-0 font-montserrat text-[10px] font-light leading-[12px] text-red-500 translate-y-full"
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
                className="w-full h-[35px] tablet-xl:h-[40px] p-[10px] font-montserrat text-[12px] font-light leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] text-primary placeholder:opacity-60 border-b border-primary"
              />
              <span className="absolute top-[50%] right-[10px] translate-y-[-50%] font-montserrat text-[12px] font-light leading-[15px] text-primary pointer-events-none">
                *
              </span>
              <ErrorMessage
                id={`${emailFieldId}-error`}
                name="email"
                component="div"
                className="absolute bottom-0 left-0 font-montserrat text-[10px] font-light leading-[12px] text-red-500 translate-y-full"
              />
            </div>
            <div className="relative">
              <label htmlFor={messageFieldId} className="sr-only">
                Message
              </label>
              <Field
                id={messageFieldId}
                name="message"
                placeholder="Message"
                className="w-full h-[35px] tablet-xl:h-[40px] p-[10px] font-montserrat text-[12px] font-light leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] text-primary placeholder:opacity-60 border-b border-primary"
              />
              <span className="absolute top-[50%] right-[10px] translate-y-[-50%] font-montserrat text-[12px] font-light leading-[15px] text-primary pointer-events-none">
                *
              </span>
              <ErrorMessage
                id={`${messageFieldId}-error`}
                name="message"
                component="div"
                className="absolute bottom-0 left-0 font-montserrat text-[10px] font-light leading-[12px] text-red-500 translate-y-full"
              />
            </div>
            <div className="relative">
              <label htmlFor={phoneNumberFieldId} className="sr-only">
                Phone Number
              </label>
              <Field
                id={phoneNumberFieldId}
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full h-[35px] tablet-xl:h-[40px] p-[10px] font-montserrat text-[12px] font-light leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] text-primary placeholder:opacity-60 border-b border-primary"
              />
              <span className="absolute top-[50%] right-[10px] translate-y-[-50%] font-montserrat text-[12px] font-light leading-[15px] text-primary pointer-events-none">
                *
              </span>
              <ErrorMessage
                id={`${phoneNumberFieldId}-error`}
                name="phoneNumber"
                component="div"
                className="absolute bottom-0 left-0 font-montserrat text-[10px] font-light leading-[12px] text-red-500 translate-y-full"
              />
            </div>
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
