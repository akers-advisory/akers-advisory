import { ServiceCard, ServiceCardProps } from './ServiceCard/ServiceCard';
import { Container } from '../UI/Container/Container';
import { FramerWrapper } from '../UI/FramerWrapper/FramerWrapper';

export const Services = () => {
  const cardsData: ServiceCardProps[] = [
    {
      title: 'Strategic Advisory',
      description:
        'We provide objective insight, long-term planning, and confidential advice to help leaders make informed, high-impact decisions',
      variant: { mobile: 'dark', desktop: 'dark' },
      position: 'tl',
    },
    {
      title: 'Crisis Navigation',
      description:
        'Decisive, discreet guidance during critical moments — helping protect reputation,\n assets, and trust',
      variant: { mobile: 'light', desktop: 'dark' },
      position: 'tr',
    },
    {
      title: 'Fractional Chief of Staff',
      description:
        'Executive-level support without the full-time commitment.\nWe streamline decision-making, manage priorities, and ensure flawless execution',
      variant: { mobile: 'light', desktop: 'light' },
      position: 'bl',
    },
    {
      title: 'Private Office Services',
      description:
        'Tailored operational and administrative support designed to simplify complex private and family affairs',
      variant: { mobile: 'dark', desktop: 'light' },
      position: 'br',
    },
  ];

  return (
    <div
      id="services"
      className="py-[60px] tablet-xl:pt-[101px] tablet-xl:pb-[70px]"
    >
      <Container>
        <FramerWrapper customIndex={0}>
          <div className="mb-[40px] tablet-xl:mb-[60px]">
            <ul className="flex gap-[12px] items-center justify-center">
              <li className="bg-text rounded-full w-[12px] h-[12px] tablet-xl:w-[16px] tablet-xl:h-[16px]"></li>
              <li className="bg-text rounded-full w-[12px] h-[12px] tablet-xl:w-[16px] tablet-xl:h-[16px]"></li>
              <li className="bg-text rounded-full w-[12px] h-[12px] tablet-xl:w-[16px] tablet-xl:h-[16px]"></li>
            </ul>
          </div>
        </FramerWrapper>
        <FramerWrapper customIndex={1}>
          <h2 className="text-center text-[80px] font-400 leading-[107px] tablet:text-[200px] tablet:leading-[200px] desktop:text-[281.167px] tablet-xl:leading-[376px] uppercase text-secondary mb-[-48px] ml-[-9px] tablet:ml-[-30px] tablet:mb-[-80px] tablet-xl:mb-[-192px] desktop:ml-0">
            Services
          </h2>
        </FramerWrapper>

        <ul className="flex flex-wrap gap-[12px] tablet-xl:gap-[20px] tablet:max-w-[600px] desktop:max-w-[1160px] items-center justify-center mx-auto">
          {cardsData.map((data, index) => (
            <li key={data.title}>
              <FramerWrapper customIndex={index + 2}>
                <ServiceCard
                  variant={data.variant}
                  title={data.title}
                  description={data.description}
                  position={data.position}
                />
              </FramerWrapper>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
