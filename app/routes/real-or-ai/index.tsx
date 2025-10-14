import { useState } from "react";
import type { Route } from "../+types/home";
import { Layout } from "~/components";
import { Start } from "../../components/Start";
import { RealOrAIGame } from "./components/RealOrAI";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Real or AI?" }];
}

export default function RealOrAI() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleReset = () => {
    setIsStarted(false);
  };

  return (
    <Layout title="Real or AI?">
      {isStarted ? (
        <RealOrAIGame onReset={handleReset} />
      ) : (
        <Start onStart={handleStart} />
      )}
    </Layout>
  );
}
