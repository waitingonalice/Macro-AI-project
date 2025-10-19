import { useEffect, useState, useRef } from "react";
import { cn } from "~/utils/cn";
import { type StatementDataset } from "../hooks/useRandomize";

interface GridProps {
  statement: StatementDataset["statements"][number];
  delay?: number;
  timer: number;
}

export function Grid({ statement, delay = 0, timer }: GridProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getBorderColorClass = () => {
    if (timer === 0) {
      return statement.isCorrect ? "bg-lime-600" : "bg-rose-600";
    }
    return "bg-purple-500";
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Border layer */}
      <div
        className={cn(
          "absolute w-full aspect-square transition-all duration-300",
          getBorderColorClass()
        )}
        style={{
          clipPath:
            "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)",
        }}
      />

      {/* Content layer */}
      <div
        className={cn(
          `absolute w-full p-10 aspect-square cursor-pointer hover:scale-105 hover:shadow-xl flex justify-center items-center transition-all duration-300 ${
            isVisible ? "animate-slide-down" : "opacity-0 -translate-y-full"
          }`,
          timer === 0
            ? statement.isCorrect
              ? "bg-green-900/80"
              : "bg-red-900/80"
            : "bg-purple-900/80"
        )}
        style={{
          clipPath:
            "polygon(50% 4%, 96% 32%, 96% 68%, 50% 96%, 4% 68%, 4% 32%)",
          boxShadow: isVisible
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 15px 30px -8px rgba(0, 0, 0, 0.15)"
            : "0 0 0 rgba(0, 0, 0, 0)",
        }}
      >
        <div className="text-white font-conthrax-sb leading-relaxed text-center text-xl px-4 z-10">
          {statement.statement}
        </div>
      </div>
    </div>
  );
}
