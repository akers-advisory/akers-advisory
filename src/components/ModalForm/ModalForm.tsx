'use client';
import { useId } from 'react';
import { ArrowRightIcon, CloseButtonIcon, LoaderIcon } from '../UI/Icons/Icons';
import * as Yup from 'yup';
import { Formik, FormikHelpers, Field, ErrorMessage, Form } from 'formik';
import { FramerWrapper } from '../UI/FramerWrapper/FramerWrapper';

interface ModalFormProps {
  onSubmit: (values: ModalFormValues) => void;
  isSubmitting?: boolean;
  onClose: () => void;
}

export interface ModalFormValues {
  name: string;
  email: string;
  phoneNumber?: string;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ModalForm = ({
  onSubmit,
  isSubmitting,
  onClose,
}: ModalFormProps) => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const phoneNumberFieldId = useId();

  const initialValues: ModalFormValues = {
    name: '',
    email: '',
    phoneNumber: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required('Name is required'),
    email: Yup.string()
      .trim()
      .email('Invalid email')
      .required('Email is required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Invalid phone number'),
  });

  const handleSubmit = (
    values: ModalFormValues,
    actions: FormikHelpers<ModalFormValues>,
  ) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <FramerWrapper customIndex={0}>
      <div className="relative px-[24px] bg-[#D9D9D9] pt-[32px] pb-[24px] rounded-[8px] max-w-[312px] mx-auto tablet-xl:max-w-[700px] tablet-xl:pt-[56px] tablet-xl:pb-[48px] tablet-xl:px-[48px]">
        <button
          onClick={onClose}
          className="absolute right-[16px] top-[16px] w-[24px] h-[24px] tablet:w-[40px] tablet:h-[40px]"
        >
          <CloseButtonIcon className="fill-primary" />
        </button>
        <div className="mb-[24px] tablet-xl:mb-[32px] text-primary">
          <h2 className="text-center text-[32px] font-400 leading-[43px] uppercase mb-[24px] tablet-xl:mb-[32px] tablet-xl:text-[50.3151px] tablet-xl:leading-[67px]">
            Re<span className="font-junge">q</span>uest a Confidential
            Consultation
          </h2>
          <p className="text-center text-[12px] font-300 leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px]">
            Your message will be handled <br className="tablet-xl:hidden" />{' '}
            with absolute discretion. <br />
            Please provide your details below.
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur={true}
          validateOnChange={false}
        >
          <Form>
            <div className="flex flex-col gap-[16px] mb-[24px] tablet-xl:gap-[24px] tablet-xl:mb-[32px]">
              <div className="relative w-full">
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
              <div className="relative w-full">
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
              <div className="relative w-full">
                <label htmlFor={phoneNumberFieldId} className="sr-only">
                  Phone Number
                </label>
                <Field
                  id={phoneNumberFieldId}
                  name="phoneNumber"
                  type="text"
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
              className="font-montserrat mx-auto relative w-full tablet-xl:max-w-[353px] h-[50px] flex items-center justify-center text-[12px] leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] bg-primary text-text uppercase rounded-full hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
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
      </div>
    </FramerWrapper>
  );
};
