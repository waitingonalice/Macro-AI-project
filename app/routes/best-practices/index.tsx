import { Layout } from "~/components";
import type { Route } from "../../+types/root";
import { useState } from "react";
import { Start } from "../../components/Start";
import { BestPracticesGame } from "./components/BestPractices";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Best Practices" }];
}

export default function BestPractices() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <Layout title="Best Practices">
      {isStarted ? <BestPracticesGame /> : <Start onStart={handleStart} />}
    </Layout>
  );
}
