import { FormController } from '../../UI/FormController/FormController';
import { AIconSD, AIconSM } from '../../UI/Icons/Icons';
import clsx from 'clsx';

export interface ServiceCardProps {
  variant?: { mobile: 'light' | 'dark'; desktop: 'light' | 'dark' };
  position?: 'tl' | 'tr' | 'bl' | 'br';
  title: string;
  description: string;
}

export const ServiceCard = ({
  variant = { mobile: 'light', desktop: 'light' },
  position = 'tl',
  title,
  description,
}: ServiceCardProps) => {
  const variants = {
    card: {
      mobile: {
        light: 'bg-secondary text-primary',
        dark: 'bg-primary text-text',
      },
      desktop: {
        light:
          'tablet-xl:bg-secondary tablet-xl:text-primary tablet-xl:border-text',
        dark: 'tablet-xl:bg-primary tablet-xl:text-text',
      },
    },
    button: {
      mobile: { light: 'bg-primary text-text', dark: 'bg-text text-primary' },
      desktop: {
        light: 'tablet-xl:bg-primary tablet-xl:text-text',
        dark: 'tablet-xl:bg-text tablet-xl:text-primary',
      },
    },
    svg: { light: 'fill-primary', dark: 'fill-secondary' },
    position: {
      tl: {
        svg: 'left-[11px] bottom-[-1px] tablet-xl:left-[38px] tablet-xl:bottom-[-1px]',
        order: 'tablet-xl:order-1',
      },
      tr: {
        svg: 'left-[-151px] bottom-[-1px] tablet-xl:left-[40px] tablet-xl:bottom-[-1px] tablet-xl:scale-x-[-1]',
        order: 'tablet-xl:order-3',
      },
      bl: {
        svg: 'left-[11px] bottom-[-1px] tablet-xl:left-[-255px] tablet-xl:bottom-[-1px] tablet-xl:scale-x-[-1]',
        order: 'tablet-xl:order-4',
      },
      br: {
        svg: 'left-[-151px] bottom-[-1px] tablet-xl:left-[-255px] tablet-xl:bottom-[-1px]',
        order: 'tablet-xl:order-2',
      },
    },
  };

  return (
    <div
      className={clsx(
        variants.card.mobile[variant.mobile],
        variants.card.desktop[variant.desktop],
        variants.position[position].order,
        'relative overflow-hidden w-[150px] h-[180px] tablet:w-[200px] tablet:h-[200px] desktop:w-[275px] desktop:h-[371px] border border-secondary rounded-[8px] p-[11px] tablet-xl:p-[19px] flex flex-col justify-between',
      )}
    >
      <AIconSM
        className={`block tablet-xl:hidden w-[288px] h-[138px] absolute opacity-10 ${variants.position[position].svg} ${variants.svg[variant.mobile]} pointer-events-none`}
      />
      <AIconSD
        className={`hidden tablet-xl:block w-[489px] h-[233px] absolute opacity-10 ${variants.position[position].svg} ${variants.svg[variant.desktop]} pointer-events-none`}
      />

      <div className="z-10">
        <h3 className="text-[18px] font-normal leading-[24px] mb-[8px] tablet-xl:mb-[16px] tablet-xl:text-[32px] tablet-xl:leading-[43px] uppercase tracking-[-0.02em] tablet-xl:tracking-normal">
          {title}
        </h3>
        <p className="text-[8px] font-300 leading-[10px] tablet-xl:text-[14px] tablet-xl:leading-[17px] tracking-[-0.02em] whitespace-pre-line tablet-xl:tracking-[-0.008em]">
          {description}
        </p>
      </div>
      <FormController>
        <button
          className={clsx(
            variants.button.mobile[variant.mobile],
            variants.button.desktop[variant.desktop],
            'z-10 font-montserrat w-[126px] tablet:w-[170px] desktop:w-[235px] py-[8px] tablet-xl:pt-[13px] tablet-xl:pb-[14px] rounded-full text-[8px] font-normal leading-[10px] tablet-xl:text-[12px] tablet-xl:leading-[15px] text-center uppercase hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80',
          )}
        >
          request a consultation
        </button>
      </FormController>
    </div>
  );
};
