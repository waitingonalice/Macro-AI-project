import { cn } from "~/utils/cn";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Text({ children, className }: TextProps) {
  return (
    <h3
      className={cn(
        "text-4xl font-semibold font-conthrax-sb text-white",
        className
      )}
    >
      {children}
    </h3>
  );
}
