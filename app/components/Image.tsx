import { cn } from "~/utils/cn";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function Image({ src, alt = "Real or AI?", className }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "object-cover rounded-xl shadow-md size-[calc(100vh-480px)]",
        className
      )}
    />
  );
}
