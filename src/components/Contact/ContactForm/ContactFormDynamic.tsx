'use client';
import dynamic from 'next/dynamic';
import { ContactForm } from './ContactForm';

export const ContactFormDynamic = dynamic(() => Promise.resolve(ContactForm), {
  ssr: false,
});
