import { cn } from "~/utils/cn";

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  colour?: "default" | "green" | "red";
  icon?: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  onClick,
  disabled,
  size = "md",
  colour = "default",
  icon,
  className,
}: ButtonProps) {
  const sizeMap = {
    sm: "py-2 px-6 text-sm",
    md: "py-3 px-8 text-lg",
    lg: "py-5 px-12 text-2xl",
  };

  const colourMap = {
    default: "bg-[#8000FF]",
    green: "bg-green-600",
    red: "bg-red-600",
  };

  return (
    <button
      className={cn(
        "relative text-center transition-all duration-300 font-bold text-white uppercase tracking-wider disabled:pointer-events-none disabled:opacity-50",
        "shadow-lg hover:shadow-xl focus:outline-none",
        sizeMap[size],
        colourMap[colour],
        icon && "flex items-center justify-center gap-2",
        className
      )}
      style={{
        clipPath:
          "polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
      }}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative flex items-center justify-center font-conthrax-sb">
        {children}
        {icon}
      </span>
    </button>
  );
}
