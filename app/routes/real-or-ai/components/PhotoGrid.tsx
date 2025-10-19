import { useMemo, useEffect, useState } from "react";
import { Image } from "~/components";
import { RealOrAIAnswer } from "~/constants/enum";
import type { DatasetType, RealOrAIDatasetType } from "~/data/realOrAI";
import { cn } from "~/utils/cn";

interface PhotoGridProps {
  images: RealOrAIDatasetType;
  onSelectImage: (image: DatasetType) => void;
  selected: DatasetType | null;
  disabled?: boolean;
}

const borderColors = [
  {
    border: "border-cyan-400",
    shadow: "shadow-[0_0_30px_rgba(34,211,238,0.6)]",
    hover: "hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]",
  },
  {
    border: "border-purple-400",
    shadow: "shadow-[0_0_30px_rgba(192,132,252,0.6)]",
    hover: "hover:shadow-[0_0_40px_rgba(192,132,252,0.8)]",
  },
];

export function PhotoGrid({
  images,
  onSelectImage,
  selected,
  disabled,
}: PhotoGridProps) {
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());

  const handleSelectImage = (image: DatasetType) => {
    onSelectImage(image);
  };

  const selectedColorMap = {
    [RealOrAIAnswer.REAL]: "hover:scale-110 scale-110 animate-red-glow",
    [RealOrAIAnswer.AI]: "hover:scale-110 scale-110 animate-rainbow-border",
  };
  const image: DatasetType[] = useMemo(
    () => Object.values(images).filter((item) => typeof item !== "number"),
    [images]
  );

  const sortedImage = useMemo(() => {
    return image.sort(() => Math.random() - 0.5);
  }, [image]);

  useEffect(() => {
    // Add initial delay to allow images to load
    const initialDelay = setTimeout(() => {
      sortedImage.forEach((item, index) => {
        const timer = setTimeout(() => {
          setVisibleImages((prev) => new Set([...prev, item.image]));
        }, index * 150);

        return () => clearTimeout(timer);
      });
    }, 300); // 300ms delay for image loading

    return () => clearTimeout(initialDelay);
  }, [sortedImage]);

  return (
    <div className="grid grid-cols-2 gap-x-16 my-16 max-h-[calc(100vh-200px)]">
      {sortedImage.map((item: DatasetType, index: number) => {
        const colorScheme = borderColors[index % borderColors.length];
        return (
          <button
            className=""
            key={item.image}
            onClick={() => handleSelectImage(item)}
          >
            <Image
              src={item.image}
              className={cn(
                "transition-all duration-500 ease-bounce transform border-4 rounded-lg",
                visibleImages.has(item.image)
                  ? "opacity-100 scale-100 translate-y-0 rotate-0"
                  : "opacity-0 scale-75 translate-y-8 rotate-12",
                !disabled && "hover:cursor-pointer hover:scale-105",
                selected?.image === item.image
                  ? selectedColorMap[selected?.answer as RealOrAIAnswer]
                  : `${colorScheme.border} ${colorScheme.shadow} ${!disabled && colorScheme.hover}`
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
