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
    [RealOrAIAnswer.REAL]: "border-16 border-red-500 hover:scale-110 scale-110",
    [RealOrAIAnswer.AI]: "border-16 border-green-500 hover:scale-110 scale-110",
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
      {sortedImage.map((item: DatasetType) => (
        <button
          className=""
          key={item.image}
          onClick={() => handleSelectImage(item)}
        >
          <Image
            src={item.image}
            className={cn(
              "transition-all duration-500 ease-bounce transform",
              visibleImages.has(item.image)
                ? "opacity-100 scale-100 translate-y-0 rotate-0"
                : "opacity-0 scale-75 translate-y-8 rotate-12",
              !disabled && "hover:cursor-pointer hover:scale-105",
              selected?.image === item.image &&
                selectedColorMap[selected?.answer as RealOrAIAnswer]
            )}
          />
        </button>
      ))}
    </div>
  );
}
