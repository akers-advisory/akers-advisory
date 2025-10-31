import { CloseButtonIcon } from '../Icons/Icons';

export interface DialogData {
  title: string;
  description: string;
  buttonText?: string;
}

interface DialogProps {
  dialogData: DialogData;
  onClose: () => void;
}

export const Dialog = ({ onClose, dialogData }: DialogProps) => {
  return (
    <div className="relative max-w-78.25 ds:max-w-none bg-secondary rounded-[8px] px-10 py-15 ds:px-20 ds:py-22 flex flex-col">
      <button
        onClick={onClose}
        className="absolute right-[16px] top-[16px] w-[24px] h-[24px] tablet:w-[40px] tablet:h-[40px] hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
      >
        <CloseButtonIcon className="fill-primary" />
      </button>
      <h3 className="font-moglan-demo text-primary text-[18px] leading-[24px] text-center uppercase mb-[8px] desktop:text-[32px] desktop:leading-[43px]">
        {dialogData.title}
      </h3>
      <p className="text-primary text-[12px] leading-[15px] text-center mb-[24px] tracking-normal ds:text-[16px] ds:leading-[20px] ds:tracking-[-0.008em]">
        {dialogData.description}
      </p>
      <button
        type="button"
        onClick={onClose}
        className="font-montserrat mx-auto relative w-full tablet-xl:max-w-[353px] h-[50px] flex items-center justify-center text-[12px] leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] bg-primary text-text uppercase rounded-full hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
      >
        {dialogData.buttonText || 'OK'}
      </button>
    </div>
  );
};
