export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-mobile mx-auto px-[24px] desktop:max-w-desktop desktop:px-[60px] tablet-xl:max-w-tablet-xl tablet-xl:px-[20px] tablet:px-[30px] tablet:max-w-tablet">
      {children}
    </div>
  );
};
