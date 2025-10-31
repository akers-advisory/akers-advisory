import { Container } from '../UI/Container/Container';
import { FramerWrapper } from '../UI/FramerWrapper/FramerWrapper';
import { AIconAD, AIconAM, Logo } from '../UI/Icons/Icons';

export const AboutUs = () => {
  return (
    <div
      id="about"
      className="bg-secondary pt-[60px] pb-[48px] tablet-xl:pt-[45px] tablet-xl:pb-[37px] text-primary"
    >
      <Container>
        <div className="mb-[59px] tablet-xl:mb-[45px] tablet-xl:flex tablet-xl:items-center tablet-xl:justify-between">
          <FramerWrapper customIndex={1}>
            <h2 className="text-[32px] font-400 leading-[43px] tablet-xl:text-[50px] tablet-xl:leading-[67px] uppercase mb-[24px] tablet-xl:mb-0">
              Who We Are
            </h2>
          </FramerWrapper>

          <div className="text-[12px] font-300 leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] tablet-xl:w-[329px]">
            <FramerWrapper customIndex={2}>
              <p className="mb-[24px] tracking-normal tablet-xl:mb-[16px] tablet-xl:tracking-[-0.008em]">
                Akers Advisory is a boutique consultancy offering strategic
                insight, discreet problem-solving, and private office
                management.
              </p>
            </FramerWrapper>
            <FramerWrapper customIndex={3}>
              <p className="tracking-normal tablet-xl:tracking-[-0.008em]">
                Our philosophy is built on discretion, trust, and tangible
                results — serving those who value{' '}
                <br className="tablet-xl:hidden" />
                precision and <br className="hidden tablet-xl:block" />
                privacy above all.
              </p>
            </FramerWrapper>
          </div>
        </div>

        <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-tablet-xl-xl">
          <div className="overflow-hidden bg-primary h-[40px] tablet-xl:h-[60px] flex items-center">
            <div className="flex animate-marquee">
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
              <Logo className="fill-secondary mx-[18px] w-[225.4px] h-[12px] tablet-xl:w-[281px] tablet-xl:h-[15px]" />
            </div>
          </div>
        </div>

        <div className="relative pt-[60px] tablet:pt-[40px] tablet-xl:pt-[37px] flex flex-col justify-between tablet-xl:flex-row-reverse tablet-xl:items-center">
          <FramerWrapper
            customIndex={4}
            className="absolute top-[-10px] left-[-348px] tablet-xl:left-[200px] tablet-xl:top-[-10px] desktop:left-[295px] tablet:left-[150px]"
          >
            <AIconAM className="block tablet-xl:hidden w-[599px] h-[285px] tablet:w-[400px] tablet:h-[200px] fill-primary" />
            <AIconAD className="hidden tablet-xl:block desktop:w-[601px] desktop:h-[286px] fill-primary" />
          </FramerWrapper>
          <div className="absolute tablet-xl:hidden tablet:bottom-[73px] bottom-[95px] right-1/2 translate-x-[50%] w-screen h-[10px] bg-primary"></div>

          <ul className="flex flex-col items-end mb-[136px] tablet:mb-[60px] tablet-xl:mb-0 text-[32px] font-400 leading-[43px] tablet-xl:text-[48px] tablet-xl:leading-[64px] uppercase">
            <FramerWrapper customIndex={5}>
              <li>
                <h3>Discretion</h3>
              </li>
            </FramerWrapper>
            <FramerWrapper customIndex={6}>
              <li>
                <h3>Trust</h3>
              </li>
            </FramerWrapper>
            <FramerWrapper customIndex={7}>
              <li>
                <h3>Results</h3>
              </li>
            </FramerWrapper>
          </ul>

          <FramerWrapper customIndex={8}>
            <p className="text-[12px] font-300 leading-[15px] tracking-normal tablet-xl:tracking-[-0.008em] tablet-xl:text-[16px] tablet-xl:leading-[20px] tablet-xl:w-[297px] desktop:pt-0">
              Every engagement is guided by integrity and confidentiality,
              ensuring that sensitive matters{' '}
              <span className="tracking-[-0.016em]">
                remain private while outcomes remain exceptional.
              </span>
            </p>
          </FramerWrapper>
        </div>
      </Container>
    </div>
  );
};
