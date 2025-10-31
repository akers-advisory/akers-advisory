import { Container } from '../UI/Container/Container';
import { AIconHD, AIconHM, ArrowRightIcon } from '../UI/Icons/Icons';
import { FormController } from '../UI/FormController/FormController';

export const Hero = () => {
  return (
    <div className="relative tablet-xl:pt-[93px]">
      <Container>
        <div className="tablet:flex tablet:flex-col tablet:items-center tablet:justify-center tablet-xl:block">
          <div className="absolute top-[129px] tablet-xl:top-[292px] left-0 w-[40vw] h-[270px] bg-secondary tablet-xl:h-[123px] -z-30"></div>
          <div className="relative">
            <AIconHM className="block tablet-xl:hidden absolute top-[-12px] left-[107px] w-[442px] h-[367px] tablet:w-[300px] tablet:h-[250px] tablet:left-[50px] fill-secondary -z-20" />
            <AIconHD className="hidden tablet-xl:block absolute top-[-93px] right-[-259px] w-[945px] h-[634px] fill-secondary -z-20" />
          </div>
          <div className="relative">
            <div className="hidden desktop:block tablet:block tablet-xl:hidden desktop:absolute tablet:fixed desktop-xl:fixed desktop:w-[935px] tablet:w-[40vw] desktop-xl:w-[50vw] h-[120vh] desktop:left-[-90%] tablet:left-[-90%] desktop-xl:left-[-30vw] top-0 bg-primary blur-[91.6px] z-9999"></div>
            <div className="hidden desktop:block tablet:block tablet-xl:hidden desktop:absolute tablet:fixed desktop-xl:fixed desktop:w-[935px] tablet:w-[40vw] desktop-xl:w-[50vw] h-[120vh] desktop:right-[-90%] tablet:right-[-90%] desktop-xl:right-[-30vw] top-0 bg-primary blur-[91.6px] z-9999"></div>
            <div className="block tablet-xl:hidden absolute -z-10 w-[449px] h-[221px] left-[77px] top-[-79px] bg-primary blur-[25.4px] rounded-full"></div>
            <div className="hidden tablet-xl:block absolute -z-10 w-[2343px] h-[411px] left-[56px] top-[365px] bg-primary blur-[91.6px] rounded-full"></div>
          </div>
          <div>
            <h1 className="font-moglan-demo text-[32px] font-400 leading-[43px] uppercase text-text mb-[24px] tablet-xl:text-[50.3151px] tablet-xl:leading-[67px]">
              Discretion is power
            </h1>
            <p className="text-[12px] font-300 leading-[15px] text-text mb-[32px] tablet-xl:mb-[68px] tracking-normal tablet-xl:text-[16px] tablet-xl:leading-[20px] tablet-xl:w-[350px] tablet-xl:tracking-[-0.008em]">
              Strategic advisory and private office support for
              <br className="tablet-xl:hidden" /> those who can&apos;t afford
              mistakes.
            </p>
          </div>
          <div className="trapezoid -z-20 relative bg-secondary pl-[24px] py-[12px] tablet-xl:py-[14px] tablet-xl:pl-[60px] w-[267px] tablet-xl:w-[770px] tablet-xl:h-auto translate-x-[-24px] tablet-xl:translate-x-[-60px] mb-[32px] tablet-xl:mb-[48px] h-[270px]">
            <ul className="flex flex-col tablet-xl:flex-row gap-[12px] tablet-xl:gap-[23px]">
              <li className="flex flex-col gap-[8px] tablet-xl:gap-0 w-[143px] tablet-xl:w-[170px] bg-text rounded-[4px] p-[12px] tablet-xl:py-0 tablet-xl:px-[16px] tablet-xl:h-[95px] tablet-xl:justify-center">
                <span className="font-bodoni-moda text-[32px] font-400 leading-[32px] tablet-xl:text-[44px] tablet-xl:leading-[52px] uppercase text-primary">
                  100+
                </span>
                <p className="text-[8px] font-300 leading-[10px] tablet-xl:text-[10px] tablet-xl:leading-[12px] text-primary">
                  strategic consulting projects
                </p>
              </li>
              <li className="flex flex-col gap-[8px] tablet-xl:gap-0 w-[143px] bg-text rounded-[4px] p-[12px] tablet-xl:w-[170px] tablet-xl:py-0 tablet-xl:px-[16px] tablet-xl:h-[95px] tablet-xl:justify-center">
                <span className="font-bodoni-moda text-[32px] font-400 leading-[32px] tablet-xl:text-[44px] tablet-xl:leading-[52px] uppercase text-primary flex items-baseline h-[32px] tablet-xl:h-[52px]">
                  500
                  <span className="font-moglan-demo text-[32px] font-400 leading-[32px] tablet-xl:text-[44px] tablet-xl:leading-[52px]">
                    M
                  </span>
                  +
                </span>
                <p className="text-[8px] font-300 leading-[10px] tablet-xl:text-[10px] tablet-xl:leading-[12px] text-primary">
                  in deal value supported
                </p>
              </li>
              <li className="flex flex-col gap-[8px] tablet-xl:gap-0 w-[143px] bg-primary rounded-[4px] p-[12px] tablet-xl:w-[170px] tablet-xl:py-0 tablet-xl:px-[16px] tablet-xl:h-[95px] tablet-xl:justify-center">
                <span className="font-bodoni-moda text-[32px] font-400 leading-[32px] tablet-xl:text-[44px] tablet-xl:leading-[52px] uppercase text-text">
                  0
                </span>
                <p className="text-[8px] font-300 leading-[10px] tablet-xl:text-[10px] tablet-xl:leading-[12px] text-text">
                  confidentiality breaches
                </p>
              </li>
            </ul>
          </div>

          <FormController>
            <button className="relative mb-[20px] tablet-xl:mb-[10px] w-[312px] tablet-xl:w-[353px] h-[50px] font-montserrat text-[12px] font-400 leading-[15px] uppercase text-text rounded-full flex items-center justify-center tablet-xl:px-[20px] tablet-xl:justify-start border-text border hover:opacity-80 transition-opacity duration-250 ease-in-out focus:outline-none focus:ring-0 focus:opacity-80">
              Request a Confidential Consultation
              <span>
                <ArrowRightIcon className="block tablet-xl:hidden desktop:block fill-text absolute top-[50%] right-[20px] translate-y-[-50%]" />
              </span>
            </button>
          </FormController>
          <div className="overflow-visible flex justify-center translate-y-[20px] tablet:translate-y-[20px] tablet-xl:translate-y-[53px] ">
            <h2 className="font-moglan-demo text-center text-[50px] font-400 leading-[67px] tablet-xl:text-[174.658px] tablet-xl:leading-[200px] uppercase text-secondary text-nowrap">
              Akers Advisory
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};
