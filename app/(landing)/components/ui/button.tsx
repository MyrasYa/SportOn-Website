type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "ghost";
  size?: "normal" | "small";
  gap?: "normal" | "long";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant = "primary",
  size = "normal",
  gap = "normal",
  ...props
}: TButtonProps) => {
  const baseStyles =
    "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-103";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/85",
    dark: "bg-dark text-white hover:bg-dark/85",
    ghost: "bg-transparent text-dark border border-gray-100 hover:border-black",
  };

  const gaps = {
    normal: "gap-4",
    long: "gap-6",
  };

  const sizes = {
    normal: "py-4 px-9",
    small: "py-[12px] px-7",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${gaps[gap]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
