import { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { RxReset } from "react-icons/rx";
import confetti from "canvas-confetti";
import { Button } from "~/components";
import { type DatasetType } from "~/data/realOrAI";
import { PhotoGrid } from "../components/PhotoGrid";
import { useTimer } from "../../../hooks/useTimer";
import { RealOrAIAnswer } from "~/constants/enum";
import { useRandomImages } from "../hooks/useRandomImages";
import correctSound from "/audio/mixkit-game-level-completed-2059.wav";
import incorrectSound from "/audio/mixkit-player-losing-or-failing-2042.wav";
import backgroundMusic from "/audio/mixkit-game-level-music-689.wav";

interface RealOrAIGameProps {
  onReset: () => void;
}
const backgroundAudio = new Audio(backgroundMusic);
const MAX_QUESTIONS = 6;
export function RealOrAIGame({ onReset }: RealOrAIGameProps) {
  const [selected, setSelected] = useState<DatasetType | null>(null);

  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);

  const { time, handleReset: handleResetTimer } = useTimer(10);
  const { randomImages, handleGenerateRandomImages } = useRandomImages();

  const isReset = questionCount === MAX_QUESTIONS;

  const handleSelectImage = (image: DatasetType) => {
    if (selected || time === 0) return;
    if (image.answer === RealOrAIAnswer.AI) {
      setScore((prev) => prev + 1);
      confetti({
        particleCount: 1000,
        spread: 5000,
        origin: { y: 0.6 },
      });
      new Audio(correctSound).play();
    } else {
      new Audio(incorrectSound).play();
    }
    setSelected(image);
  };

  const handleClickNext = () => {
    if (!selected) return;
    handleGenerateRandomImages();
    setSelected(null);
    setQuestionCount((prev) => {
      const update = prev + 1;
      if (update < MAX_QUESTIONS) {
        handleResetTimer();
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    if (isReset) {
      backgroundAudio.pause();
      return;
    }
    if (time === 0 && randomImages && !selected) {
      setSelected(randomImages.ai);
      new Audio(incorrectSound).play();
    }
  }, [time, randomImages, selected, isReset]);

  useEffect(() => {
    backgroundAudio.play();
    backgroundAudio.addEventListener("ended", () => {
      backgroundAudio.currentTime = 0;
      backgroundAudio.play();
    });

    return () => {
      backgroundAudio.removeEventListener("ended", () => {
        backgroundAudio.currentTime = 0;
        backgroundAudio.pause();
      });
    };
  }, []);

  const handleResetGame = () => {
    backgroundAudio.currentTime = 0;
    backgroundAudio.pause();
    onReset();
  };

  return (
    <div className="flex flex-col items-center my-10">
      <h3 className="absolute top-0 right-0 m-4 text-4xl font-semibold">
        Timer: {time}
      </h3>
      <h3 className="absolute top-0 left-0 m-4 text-4xl font-semibold">
        Question: {isReset ? MAX_QUESTIONS : questionCount + 1}/{MAX_QUESTIONS}
      </h3>
      <div className="space-y-4">
        <h3 className="text-4xl font-bold text-center">
          {isReset ? `Game Over!` : "Which one is AI?"}
        </h3>
        {isReset && (
          <h3 className="text-3xl font-bold text-center">
            Score: {score} / {MAX_QUESTIONS}
          </h3>
        )}
      </div>
      {randomImages && !isReset && (
        <PhotoGrid
          disabled={time === 0}
          onSelectImage={handleSelectImage}
          images={randomImages}
          selected={selected}
        />
      )}
      <div className="flex gap-8">
        {(!selected && time === 0 && !isReset) ||
          (selected && !isReset && (
            <Button
              colour={selected?.answer === RealOrAIAnswer.AI ? "green" : "red"}
              onClick={handleClickNext}
              icon={<MdOutlineNavigateNext />}
            >
              Next
            </Button>
          ))}

        {isReset && (
          <Button
            className="mt-10"
            onClick={handleResetGame}
            colour="amber"
            icon={<RxReset />}
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}
