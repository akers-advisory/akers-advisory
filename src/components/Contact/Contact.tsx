import { ContactFormDynamic } from './ContactForm/ContactFormDynamic';
import { Container } from '../UI/Container/Container';
import { AIconCD, AIconCM } from '../UI/Icons/Icons';
import { FramerWrapper } from '../UI/FramerWrapper/FramerWrapper';

export const Contact = () => {
  return (
    <div
      id="contact"
      className="relative pt-[59px] pb-[60px] bg-[#D9D9D9] text-primary"
    >
      <Container>
        <FramerWrapper customIndex={0}>
          <div className="relative">
            <AIconCM className="block tablet-xl:hidden w-[361px] h-[314px] absolute top-[-59px] right-[-24px] fill-secondary opacity-40" />
            <AIconCD className="hidden tablet-xl:block w-[926px] h-[567px] absolute top-[-59px] left-[-60px] fill-secondary opacity-40" />
          </div>
        </FramerWrapper>
        <div className="tablet-xl:flex tablet-xl:gap-[80px]">
          <div className="relative z-10 mb-[48px] tablet-xl:mb-0 tablet-xl:w-[576px]">
            <span
              className="flex gap-[12px] absolute top-[15px] tablet-xl:top-[46px] right-0"
              aria-hidden="true"
            >
              <div className="w-[12px] h-[12px] tablet-xl:w-[16px] tablet-xl:h-[16px] bg-primary rounded-full"></div>
              <div className="w-[12px] h-[12px] tablet-xl:w-[16px] tablet-xl:h-[16px] bg-primary rounded-full"></div>
              <div className="w-[12px] h-[12px] tablet-xl:w-[16px] tablet-xl:h-[16px] bg-primary rounded-full"></div>
            </span>
            <FramerWrapper customIndex={1}>
              <h2 className="text-[32px] font-normal leading-[43px] tablet-xl:text-[90px] tablet-xl:leading-[120px] uppercase mb-[24px]">
                Re<span className="font-junge">q</span>uest a Confidential
                Consultation
              </h2>
            </FramerWrapper>
            <FramerWrapper customIndex={2}>
              <p className="text-[12px] leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px]">
                We work exclusively with clients who require absolute discretion
                and strategic clarity. Submit your inquiry below — our team will
                respond
                <span className="block">via a secure channel.</span>
              </p>
            </FramerWrapper>
          </div>

          <div className="tablet-xl:w-[504px] tablet-xl:h-full">
            <FramerWrapper customIndex={3}>
              {/*old: mb-[46px] tablet-xl:mb-[109px] */}
              <div className="mb-[46px] tablet-xl:mb-[30px]">
                <ContactFormDynamic />
              </div>
            </FramerWrapper>
            <FramerWrapper customIndex={4}>
              <address className="p-0 m-0">
                <ul className="flex flex-col gap-[8px] items-end">
                  <li className="h-[20px]">
                    <p className="sr-only">Phone</p>
                    <a
                      href="tel:+16178524137"
                      className="font-montserrat text-[16px] font-normal leading-[20px] text-primary not-italic hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
                    >
                      +1 (617) 852-4137
                    </a>
                  </li>
                  <li className="h-[20px]">
                    <p className="sr-only">Email</p>
                    <a
                      href="mailto:info@akersadvisory.com"
                      className="font-montserrat text-[16px] font-normal leading-[20px] text-primary not-italic hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80"
                    >
                      info@akersadvisory.com
                    </a>
                  </li>
                </ul>
              </address>
            </FramerWrapper>
          </div>
        </div>
      </Container>
    </div>
  );
};
