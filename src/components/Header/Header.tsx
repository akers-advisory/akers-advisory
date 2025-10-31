'use client';
import { Navigation } from '../UI/Navigation/Navigation';
import { BurgerButton } from '../UI/BurgerButton/BurgerButton';
import { Logo } from '../UI/Icons/Icons';
import { Container } from '../UI/Container/Container';
import { useEffect, useRef, useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import Link from 'next/link';

export const Header = () => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const openMenu = () => setIsNavMenuOpened(true);
  const closeMenu = () => setIsNavMenuOpened(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mt-[24px] mb-[60px] tablet-xl:mt-[44px] tablet-xl:mb-[31px]">
      <Container>
        <div
          className={`flex items-center justify-between ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <Link href="/" aria-label="Akers Advisory - Go to homepage">
            <Logo
              className="fill-text w-[191.6px] h-[8px] desktop:w-[331.5px] desktop:h-[13.8px]"
              preserveAspectRatio="none"
            />
          </Link>
          <Navigation
            containerClassName="hidden tablet-xl:flex items-center gap-[20px] desktop:gap-[63px]"
            itemClassName="font-montserrat text-[16px] font-400 leading-[20px] uppercase hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
            dotClassName="w-[10px] h-[10px] bg-text rounded-full"
          />
          <BurgerButton openMenu={openMenu} />
        </div>
      </Container>
      <MobileMenu isOpen={isNavMenuOpened} closeMenu={closeMenu} />
    </div>
  );
};
