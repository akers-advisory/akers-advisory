import { Container } from '../UI/Container/Container';
import { FramerWrapper } from '../UI/FramerWrapper/FramerWrapper';

export const Approach = () => {
  return (
    <div
      id="approach"
      className="py-[60px] tablet-xl:pt-[72px] tablet-xl:pb-[180px]"
    >
      <Container>
        <FramerWrapper customIndex={0}>
          <div className="mb-[40px] tablet-xl:mb-[70px] flex justify-center items-center relative">
            <div className="w-[12px] h-[12px] bg-text rounded-full mr-[40px] desktop:mr-[262px] tablet-xl:w-[16px] tablet-xl:h-[16px]"></div>
            <div className="w-[12px] h-[12px] bg-text rounded-full mr-[16px] desktop:mr-[167px] tablet-xl:w-[16px] tablet-xl:h-[16px]"></div>
            <h2 className="text-[32px] font-normal leading-[43px] tablet-xl:text-[50px] tablet-xl:leading-[67px] uppercase before:content-[''] before:block before:absolute before:top-[50%] before:left-0 before:translate-y-[-50%] before:w-[82px] tablet:before:w-[35%] desktop:before:w-[467px] before:h-0 before:border-t before:border-text after:content-[''] after:absolute after:top-[50%] after:right-0 after:translate-y-[-50%] after:w-[80px] tablet:after:w-[35%] desktop:after:w-[467px] after:h-0 after:border-t after:border-text">
              Approach
            </h2>
            <div className="w-[12px] h-[12px] bg-text rounded-full ml-[16px] desktop:ml-[171px] tablet-xl:w-[16px] tablet-xl:h-[16px]"></div>
            <div className="w-[12px] h-[12px] bg-text rounded-full ml-[40px] desktop:ml-[259px] tablet-xl:w-[16px] tablet-xl:h-[16px]"></div>
          </div>
        </FramerWrapper>
        <ul className="flex flex-wrap gap-[12px] tablet:gap-[15px] desktop:gap-[20px] mb-[41px] tablet-xl:mb-[60px] tablet:max-w-[600px] desktop:max-w-[1160px] items-center justify-center mx-auto">
          <li>
            <FramerWrapper
              customIndex={1}
              className="font-moglan-demo text-[16px] font-normal leading-[21px] tablet-xl:text-[31.7697px] tablet-xl:leading-[43px] uppercase w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[275px] desktop:h-[275px] rounded-full border border-secondary flex flex-col gap-[8px] tablet:gap-[16px] desktop:gap-[8px] items-center pt-[22.5px] tablet-xl:pt-[37px]"
            >
              <span className="font-athelas text-[70px] font-400 leading-[63px] tablet:text-[100px] tablet:leading-[70%] desktop:text-[140px] desktop:leading-[70%] desktop:h-[131px]">
                1
              </span>
              Engage
            </FramerWrapper>
          </li>
          <li>
            <FramerWrapper
              customIndex={2}
              className="font-moglan-demo text-[16px] font-normal leading-[21px] tablet-xl:text-[31.7697px] tablet-xl:leading-[43px] uppercase w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[275px] desktop:h-[275px] rounded-full border border-secondary flex flex-col gap-[8px] tablet:gap-[16px] desktop:gap-[8px] items-center pt-[23.5px] tablet-xl:pt-[37px]"
            >
              <span className="font-athelas text-[70px] font-400 leading-[63px] tablet:text-[100px] tablet:leading-[70%] desktop:text-[140px] desktop:leading-[70%] desktop:h-[131px]">
                2
              </span>
              Clarify
            </FramerWrapper>
          </li>
          <li>
            <FramerWrapper
              customIndex={3}
              className="font-moglan-demo text-[16px] font-normal leading-[21px] tablet-xl:text-[31.7697px] tablet-xl:leading-[43px] uppercase w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[275px] desktop:h-[275px] rounded-full border border-secondary flex flex-col gap-[8px] tablet:gap-[16px] desktop:gap-[8px] items-center pt-[22.5px] tablet-xl:pt-[37px]"
            >
              <span className="font-athelas text-[70px] font-400 leading-[63px] tablet:text-[100px] tablet:leading-[70%] desktop:text-[140px] desktop:leading-[70%] desktop:h-[131px]">
                3
              </span>
              Execute
            </FramerWrapper>
          </li>
          <li>
            <FramerWrapper
              customIndex={4}
              className="font-moglan-demo text-[16px] font-normal leading-[21px] tablet-xl:text-[31.7697px] tablet-xl:leading-[43px] uppercase w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[275px] desktop:h-[275px] rounded-full border border-secondary flex flex-col gap-[8px] tablet:gap-[16px] desktop:gap-[8px] items-center pt-[22.5px] tablet-xl:pt-[37px]"
            >
              <span className="font-athelas text-[70px] font-400 leading-[63px] tablet:text-[100px] tablet:leading-[70%] desktop:text-[140px] desktop:leading-[70%] desktop:h-[131px]">
                4
              </span>
              Deliver
            </FramerWrapper>
          </li>
        </ul>
        <div className="tablet-xl:flex tablet-xl:items-center tablet-xl:justify-between">
          <FramerWrapper customIndex={5}>
            <p className="pb-[24px] tablet-xl:pb-0 text-[12px] font-light leading-[15px] tablet-xl:text-[16px] tablet-xl:leading-[20px] tablet-xl:w-[450px] text-secondary whitespace-pre-line tracking-normal tablet-xl:tracking-[-0.002em]">
              We begin with discretion and dialogue — understanding your
              priorities and the sensitivities surrounding them.
              <br />
              Every engagement is prepaid and confidential, designed for
              clarity, trust, and measurable results
            </p>
          </FramerWrapper>
          <FramerWrapper customIndex={6}>
            <span className="font-moglan-demo text-[32px] font-normal leading-[43px] tablet-xl:text-[50.3151px] tablet-xl:leading-[67px] uppercase">
              Discretion is power
            </span>
          </FramerWrapper>
        </div>
      </Container>
    </div>
  );
};
