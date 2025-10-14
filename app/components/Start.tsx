import { Button } from "~/components";

interface StartProps {
  onStart: () => void;
}

export function Start({ onStart }: StartProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <Button size="lg" onClick={onStart}>
        Start
      </Button>
    </div>
  );
}
