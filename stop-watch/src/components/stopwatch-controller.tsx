import { memo } from "react";

type Props = {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
};

const StopwatchController = memo(({ onStart, onStop, onReset }: Props) => {
  console.log("render controller");

  return (
    <div style={{ display: "flex" }}>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
});

export default StopwatchController;
