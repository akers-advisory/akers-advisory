'use client';

import { Navigation } from './Navigation';

interface NavigationWrapperProps {
  closeMenu: () => void;
  containerClassName?: string;
  dotClassName?: string;
  itemClassName?: string;
}

export const NavigationWrapper = ({
  closeMenu,
  containerClassName,
  dotClassName,
  itemClassName,
}: NavigationWrapperProps) => {
  return (
    <div
      onClick={(e) => {
        const link = (e.target as HTMLElement).closest('a');
        if (link && link.hash) {
          e.preventDefault();
          closeMenu();
          setTimeout(() => {
            const targetEl = document.querySelector(
              link.getAttribute('href') || '',
            );
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }}
      className="w-full"
    >
      <Navigation
        containerClassName={containerClassName}
        dotClassName={dotClassName}
        itemClassName={itemClassName}
      />
    </div>
  );
};
