import { useState, useRef, useEffect } from "react";
import { RealOrAIAnswer } from "~/constants/enum";
import { dataset, type RealOrAIDatasetType } from "~/data/realOrAI";

const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const useRandomImages = () => {
  const [randomImages, setRandomImages] = useState<RealOrAIDatasetType | null>(
    null
  );

  const usedImagesQueue = useRef<number[]>([]);

  useEffect(() => {
    const randomizeImages = shuffleArray([...dataset]);
    setRandomImages(randomizeImages[0]);
    if (usedImagesQueue.current.length === 0) {
      usedImagesQueue.current.push(randomizeImages[0].key);
    }
  }, []);

  const handleGenerateRandomImages = () => {
    const newDataset = [...dataset].filter(
      (item) => !usedImagesQueue.current.includes(item.key)
    );
    const randomImage = shuffleArray(newDataset)[0];
    usedImagesQueue.current.push(randomImage.key);
    setRandomImages(randomImage);
  };
  return { randomImages, handleGenerateRandomImages };
};
