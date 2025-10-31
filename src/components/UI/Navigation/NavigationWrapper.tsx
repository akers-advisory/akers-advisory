'use client';

import { Navigation } from './Navigation';

interface NavigationWrapperProps {
  closeMenu?: () => void;
  containerClassName?: string;
  dotClassName?: string;
  itemClassName?: string;
  className?: string;
}

export const NavigationWrapper = ({
  closeMenu,
  containerClassName,
  dotClassName,
  itemClassName,
  className,
}: NavigationWrapperProps) => {
  return (
    <div
      onClick={(e) => {
        const link = (e.target as HTMLElement).closest('a');
        if (link && link.hash) {
          e.preventDefault();
          const targetId = link.hash.substring(1); // Remove the #

          if (closeMenu) closeMenu();
          requestAnimationFrame(() => {
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
              targetEl.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          });
        }
      }}
      className={className}
    >
      <Navigation
        containerClassName={containerClassName}
        dotClassName={dotClassName}
        itemClassName={itemClassName}
      />
    </div>
  );
};
