'use client';
import dynamic from 'next/dynamic';
import { ModalForm } from './ModalForm';

export const ModalFormDynamic = dynamic(() => Promise.resolve(ModalForm), {
  ssr: false,
});
