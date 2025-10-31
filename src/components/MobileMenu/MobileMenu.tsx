import { CloseButtonIcon } from '../UI/Icons/Icons';
import { NavigationWrapper } from '../UI/Navigation/NavigationWrapper';
import { FormController } from '../UI/FormController/FormController';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  return (
    <div
      className={`desktop:hidden bg-primary py-[80px] px-[60px] fixed inset-0 z-50 h-screen w-screen tablet:w-tablet overflow-y-auto transition duration-600 ${isOpen ? 'no-doc-scroll translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
    >
      <div className="max-w-mobile mx-auto flex flex-col items-center justify-between h-full">
        <button
          onClick={closeMenu}
          className="absolute right-[36px] top-[36px] w-[24px] h-[24px] tablet:w-[40px] tablet:h-[40px] hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
          aria-label="Close navigation menu"
        >
          <CloseButtonIcon className="fill-text" />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-center text-[32px] font-400 leading-[43px] uppercase mb-[16px]">
            Re<span className="font-junge">q</span>uest a Confidential
            Consultation
          </h2>
          <p className="text-center text-[12px] font-300 leading-[15px] mb-[32px]">
            Your message will be handled <br /> with absolute discretion. <br />
            Please provide your details below.
          </p>
          <FormController>
            <button
              type="button"
              onClick={() => closeMenu()}
              className="font-montserrat w-[241px] h-[40px] text-[12px] font-400 leading-[15px] uppercase rounded-full border-text border flex items-center justify-center hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
            >
              Submit Request
            </button>
          </FormController>
        </div>
        <NavigationWrapper
          containerClassName="flex flex-col gap-[32px] w-full"
          dotClassName="hidden"
          itemClassName="font-montserrat text-[16px] font-400 leading-[20px] hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
          closeMenu={closeMenu}
        />
      </div>
    </div>
  );
};
