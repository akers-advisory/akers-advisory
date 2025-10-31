import { BurgerButtonIcon } from '../Icons/Icons';

interface BurgerButtonProps {
  openMenu: () => void;
}

export const BurgerButton = ({ openMenu }: BurgerButtonProps) => {
  return (
    <button
      className="cursor-pointer tablet-xl:hidden w-[40px] h-[40px]"
      onClick={openMenu}
      aria-label="Open navigation menu"
    >
      <BurgerButtonIcon className="fill-text" />
    </button>
  );
};
