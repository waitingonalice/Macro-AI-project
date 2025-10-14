import { useEffect, useState, useRef } from "react";
import { cn } from "~/utils/cn";
import { type StatementDataset } from "../hooks/useRandomize";

interface GridProps {
  statement: StatementDataset["statements"][number];
  delay?: number;
  timer: number;
}

const colorCombinations = [
  {
    bg: "from-pink-300 to-rose-500",
    border: "border-rose-600",
    hoverBorder: "hover:border-rose-700",
    hoverBg: "hover:from-pink-400 hover:to-rose-600",
  },
  {
    bg: "from-purple-300 to-violet-500",
    border: "border-violet-600",
    hoverBorder: "hover:border-violet-700",
    hoverBg: "hover:from-purple-400 hover:to-violet-600",
  },
  {
    bg: "from-yellow-300 to-amber-500",
    border: "border-amber-600",
    hoverBorder: "hover:border-amber-700",
    hoverBg: "hover:from-yellow-400 hover:to-amber-600",
  },
  {
    bg: "from-cyan-300 to-teal-500",
    border: "border-teal-600",
    hoverBorder: "hover:border-teal-700",
    hoverBg: "hover:from-cyan-400 hover:to-teal-600",
  },
  {
    bg: "from-blue-300 to-indigo-500",
    border: "border-indigo-600",
    hoverBorder: "hover:border-indigo-700",
    hoverBg: "hover:from-blue-400 hover:to-indigo-600",
  },
  {
    bg: "from-orange-300 to-yellow-500",
    border: "border-orange-600",
    hoverBorder: "hover:border-orange-700",
    hoverBg: "hover:from-orange-400 hover:to-yellow-600",
  },
];

const correctColor = {
  bg: "from-green-300 to-lime-500",
  border: "border-lime-600",
  hoverBorder: "hover:border-lime-700",
  hoverBg: "hover:from-green-400 hover:to-lime-600",
};

const incorrectColor = {
  bg: "from-red-300 to-rose-500",
  border: "border-rose-600",
  hoverBorder: "hover:border-rose-700",
  hoverBg: "hover:from-red-400 hover:to-rose-600",
};

export function Grid({ statement, delay = 0, timer }: GridProps) {
  const [isVisible, setIsVisible] = useState(false);
  const colors = useRef(
    colorCombinations[Math.floor(Math.random() * colorCombinations.length)]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="rounded-2xl">
      <div
        className={cn(
          `h-full bg-gradient-to-br ${colors.current.bg} border-2 ${colors.current.border} rounded-2xl p-6 shadow-lg cursor-pointer hover:scale-105 hover:rotate-2 hover:shadow-xl ${colors.current.hoverBorder} ${colors.current.hoverBg} flex justify-center items-center ${
            isVisible ? "animate-slide-down" : "opacity-0 -translate-y-full"
          }`,
          timer === 0
            ? statement.isCorrect
              ? Object.values(correctColor).join(" ")
              : Object.values(incorrectColor).join(" ")
            : ""
        )}
        style={{
          boxShadow: isVisible
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 15px 30px -8px rgba(0, 0, 0, 0.15)"
            : "0 0 0 rgba(0, 0, 0, 0)",
        }}
      >
        <div className="text-gray-900 font-semibold leading-relaxed text-center text-4xl">
          {statement.statement}
        </div>
      </div>
    </div>
  );
}
