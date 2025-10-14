import { useState } from "react";
import { correctDataset, wrongDataset } from "~/data/bestPractices";

export interface StatementDataset {
  allCorrect: boolean;
  statements: { statement: string; isCorrect: boolean }[];
}

const generateRandomStatements = ({
  numberOfQuestions,
  percentageOfCorrectStatements,
}: {
  numberOfQuestions: number;
  percentageOfCorrectStatements: number;
}) => {
  const statements: StatementDataset[] = [];
  for (let i = 0; i < numberOfQuestions; i++) {
    const currentPercentage =
      statements.filter((item) => item.allCorrect).length / statements.length;

    if (currentPercentage < percentageOfCorrectStatements) {
      statements.push({
        allCorrect: true,
        statements: [...correctDataset.sort(() => Math.random() - 0.5)]
          .slice(0, 3)
          .map((statement) => ({
            statement,
            isCorrect: true,
          })),
      });
    } else {
      const randomWrongStatements = [
        ...wrongDataset.sort(() => Math.random() - 0.5),
      ].slice(0, 2);
      const randomCorrectStatements = [
        ...correctDataset.sort(() => Math.random() - 0.5),
      ].slice(0, 1);
      statements.push({
        allCorrect: false,
        statements: [
          ...randomCorrectStatements.map((item) => ({
            statement: item,
            isCorrect: true,
          })),
          ...randomWrongStatements.map((item) => ({
            statement: item,
            isCorrect: false,
          })),
        ].sort(() => Math.random() - 0.5),
      });
    }
  }
  return statements.sort(() => Math.random() - 0.6);
};

export const useRandomizeStatements = (
  numberOfQuestions: number,
  percentageOfCorrectStatements: number
) => {
  const [questions] = useState<StatementDataset[]>(
    generateRandomStatements({
      numberOfQuestions,
      percentageOfCorrectStatements,
    })
  );

  return questions;
};
