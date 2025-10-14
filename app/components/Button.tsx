import { cn } from "~/utils/cn";

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  colour?: "amber" | "green" | "red";
  icon?: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  onClick,
  disabled,
  size = "md",
  colour = "amber",
  icon,
  className,
}: ButtonProps) {
  const sizeMap = {
    sm: "py-2 px-4 text-sm",
    md: "py-4 px-8 text-lg",
    lg: "py-6 px-12 text-2xl",
  };

  const colourMap = {
    amber: "bg-amber-600 hover:bg-amber-700 active:bg-amber-700",
    green: "bg-green-600 hover:bg-green-700 active:bg-green-700",
    red: "bg-red-600 hover:bg-red-700 active:bg-red-700",
  };
  return (
    <button
      className={cn(
        "rounded-md border border-transparent text-center transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 font-medium text-white",
        sizeMap[size],
        colourMap[colour],
        icon && "flex items-center gap-2",
        className
      )}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {icon}
    </button>
  );
}
