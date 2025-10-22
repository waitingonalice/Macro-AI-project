import { useEffect, useState } from "react";
import { Grid } from "./Grid";
import { Button, Text } from "~/components";
import { useRandomizeStatements } from "../hooks/useRandomize";
import { useTimer } from "~/hooks/useTimer";
import backgroundMusic from "/audio/mixkit-game-level-music-689.wav";
import correctSound from "/audio/mixkit-game-level-completed-2059.wav";

export const MAX_QUESTIONS = 6;

interface BestPracticesGameProps {
  onReset: () => void;
}
const backgroundAudio = new Audio(backgroundMusic);
export function BestPracticesGame({ onReset }: BestPracticesGameProps) {
  const [questionCount, setQuestionCount] = useState(0);
  const questions = useRandomizeStatements(MAX_QUESTIONS, 0.5);

  const generateAnimationKeys = () => {
    return questions[questionCount].statements.map(() =>
      Math.random().toString()
    );
  };
  const [animationKeys, setAnimationKeys] = useState<string[]>(
    generateAnimationKeys()
  );
  const { time, handleReset, handleSkipTime } = useTimer(20);
  const isReset = questionCount === MAX_QUESTIONS - 1;

  const handleClickShowAnswer = () => {
    handleSkipTime();
  };
  const handleNext = () => {
    setQuestionCount((prev) => {
      if (prev < MAX_QUESTIONS) {
        return prev + 1;
      }
      return prev;
    });
    handleReset();
    setAnimationKeys(() => generateAnimationKeys());
  };

  const handleResetGame = () => {
    backgroundAudio.currentTime = 0;
    backgroundAudio.pause();
    onReset();
  };

  useEffect(() => {
    if (time === 0) {
      new Audio(correctSound).play();
    }
  }, [time]);

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

  return (
    <div className="flex flex-col items-center size-full gap-10 mt-10">
      <Text className="absolute top-[6.5%] right-[8%]">Timer: {time}</Text>
      <Text className="absolute top-[6.5%] left-[8%]">
        Question: {isReset ? MAX_QUESTIONS : questionCount + 1}/{MAX_QUESTIONS}
      </Text>

      <Text className="mt-[2%]">
        Press the <span className="text-green-600">green</span> button if all
        statements are best practices.
      </Text>
      <Text className="mt-[2%]">
        Press the <span className="text-red-600">red</span> button if any of the
        statements are bad practices.
      </Text>
      <div className="grid grid-cols-3 gap-2 w-full h-[calc(100vh-36rem)] px-[8%]">
        {questions[questionCount].statements.map((statement, index) => (
          // Generate random key to trigger rerender when statements are shuffled for animation
          <Grid
            key={animationKeys[index]}
            statement={statement}
            delay={index * 200}
            timer={time}
          />
        ))}
      </div>
      <div className="flex justify-center h-fit">
        {time > 0 ? (
          <Button onClick={handleClickShowAnswer}>Show Answer</Button>
        ) : isReset ? (
          <Button onClick={handleResetGame}>Reset</Button>
        ) : (
          <Button onClick={handleNext}>Next</Button>
        )}
      </div>
    </div>
  );
}
