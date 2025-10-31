'use client';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { ModalFormDynamic } from '@/components/ModalForm/ModalFormDynamic';
import { ModalFormValues } from '@/components/ModalForm/ModalForm';
import { mailFormData } from '@/lib/api/mailFormData';
import DialogController from '../DialogController/DialogController';
import { DialogData } from '../Dialog/Dialog';

interface FormControllerProps {
  children?: React.ReactElement;
}

export const FormController = ({ children }: FormControllerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState<DialogData>({
    title: 'Thank you for your message!',
    description: 'We will get back to you as soon as possible.',
    buttonText: 'OK',
  });

  const handleSubmit = async (data: ModalFormValues) => {
    setIsSubmitting(true);

    mailFormData(data.name, data.email, '')
      .then(() => {
        setIsSubmitting(false);
        setIsOpen(false);
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
      <div className="w-fit" onClick={() => setIsOpen(true)}>
        {children}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalFormDynamic
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
      <DialogController
        isDialogOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        dialogData={dialogData}
      />
    </>
  );
};
