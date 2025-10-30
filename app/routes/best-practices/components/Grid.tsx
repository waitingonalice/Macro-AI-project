import { useEffect, useState, useRef } from "react";
import { cn } from "~/utils/cn";
import { type StatementDataset } from "../hooks/useRandomize";

interface GridProps {
  statement: StatementDataset["statements"][number];
  delay?: number;
  showAnswer: boolean;
}

export function Grid({ statement, delay = 0, showAnswer }: GridProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getBorderColorClass = () => {
    if (showAnswer) {
      return statement.isCorrect ? "bg-lime-600" : "bg-rose-600";
    }
    return "bg-purple-500";
  };

  return (
    <div className="relative size-full flex items-center justify-center">
      {/* Border layer */}
      <div
        className={cn(
          "absolute w-full h-full transition-all duration-300 rounded-lg",
          getBorderColorClass()
        )}
      />

      {/* Content layer */}
      <div
        className={cn(
          `absolute w-[calc(100%-32px)] h-[calc(100%-32px)] cursor-pointer hover:scale-105 hover:shadow-xl flex justify-center items-center transition-all duration-300 rounded-lg ${
            isVisible ? "animate-slide-down" : "opacity-0 -translate-y-full"
          }`,
          showAnswer
            ? statement.isCorrect
              ? "bg-green-900/80"
              : "bg-red-900/80"
            : "bg-purple-900/80"
        )}
        style={{
          boxShadow: isVisible
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 15px 30px -8px rgba(0, 0, 0, 0.15)"
            : "0 0 0 rgba(0, 0, 0, 0)",
        }}
      >
        <div className="text-white font-conthrax-sb leading-relaxed text-center text-3xl px-6 z-10">
          {statement.statement}
        </div>
      </div>
    </div>
  );
}
