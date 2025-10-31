export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-mobile mx-auto px-[24px] desktop:max-w-desktop desktop:px-[60px] tablet-xl:max-w-tablet-xl tablet-xl:px-[60px] tablet:px-[40px] tablet:max-w-tablet">
      {children}
    </div>
  );
};
