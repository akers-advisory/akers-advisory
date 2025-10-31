interface NavigationProps {
  containerClassName?: string;
  itemClassName?: string;
  dotClassName?: string;
}

export const Navigation = ({
  containerClassName = '',
  itemClassName = '',
  dotClassName = '',
}: NavigationProps) => {
  return (
    <div className={containerClassName}>
      <a href="#about" className={itemClassName}>
        About
      </a>
      <div className={dotClassName}></div>
      <a href="#services" className={itemClassName}>
        Services
      </a>
      <div className={dotClassName}></div>
      <a href="#approach" className={itemClassName}>
        Approach
      </a>
      <div className={dotClassName}></div>
      <a href="#contact" className={itemClassName}>
        Contact
      </a>
    </div>
  );
};
