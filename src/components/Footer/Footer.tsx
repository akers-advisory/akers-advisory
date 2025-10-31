import { Navigation } from '../UI/Navigation/Navigation';
import { Logo } from '../UI/Icons/Icons';
import { Container } from '../UI/Container/Container';
import { FramerWrapper } from '../UI/FramerWrapper/FramerWrapper';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="pt-[61px] pb-[31px] tablet-xl:pt-[120px] tablet-xl:pb-[36px]">
      <Container>
        <FramerWrapper customIndex={0}>
          <Link
            href="/"
            className="mb-[48px] flex justify-center tablet-xl:hidden hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
            aria-label="Akers Advisory - Go to homepage"
          >
            <Logo
              className="fill-text w-full h-[13px]"
              preserveAspectRatio="none"
            />
          </Link>
        </FramerWrapper>
        <FramerWrapper customIndex={1}>
          <Navigation
            dotClassName="hidden tablet-xl:block tablet-xl:w-[10px] tablet-xl:h-[10px] tablet-xl:bg-text tablet-xl:rounded-full"
            containerClassName="flex flex-col items-center gap-[24px] mb-[46px] tablet-xl:mb-[55px] tablet-xl:flex-row tablet-xl:justify-between"
            itemClassName="relative font-montserrat text-[16px] font-400 leading-[20px] w-full tablet-xl:w-auto text-center uppercase before:content-[''] before:absolute before:top-[50%] before:left-0 before:translate-y-[-50%] before:w-[10px] before:h-[10px] before:bg-text before:rounded-full after:content-[''] after:absolute after:top-[50%] after:right-0 after:translate-y-[-50%] after:w-[10px] after:h-[10px] after:bg-text after:rounded-full tablet-xl:before:hidden tablet-xl:after:hidden hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
          />
        </FramerWrapper>
        <div className="tablet-xl:flex tablet-xl:justify-between tablet-xl:items-center tablet-xl:mb-[63px]">
          <FramerWrapper customIndex={2}>
            <address className="mb-[50px] tablet-xl:mb-0">
              <ul className="flex flex-col gap-[14px]">
                <li className="h-[20px]">
                  <p className="sr-only">Phone</p>
                  <a
                    href="tel:+16178524137"
                    className="font-montserrat text-[16px] font-400 leading-[20px] not-italic hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
                  >
                    +1 (617) 852-4137
                  </a>
                </li>
                <li className="h-[20px]">
                  <p className="sr-only">Email</p>
                  <a
                    href="mailto:info@akersadvisory.com"
                    className="font-montserrat text-[16px] font-400 leading-[20px] not-italic hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
                  >
                    info@akersadvisory.com
                  </a>
                </li>
              </ul>
            </address>
          </FramerWrapper>
          <FramerWrapper customIndex={3}>
            <Link
              href="/"
              className="hidden tablet-xl:flex justify-center items-center mt-[10px] hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
              aria-label="Akers Advisory - Go to homepage"
            >
              <Logo
                className="fill-text w-[331.5px] h-[14px]"
                preserveAspectRatio="none"
              />
            </Link>
          </FramerWrapper>
        </div>
        <FramerWrapper customIndex={4}>
          <p className="text-[16px] font-400 leading-[29px] text-secondary tracking-[0.64px] tablet-xl:text-center">
            © 2025 Akers Advisory
          </p>
        </FramerWrapper>
      </Container>
    </div>
  );
};
