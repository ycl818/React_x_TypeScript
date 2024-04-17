import { useTimerContext } from "../store/timers-context.tsx";
import Button from "./UI/Button.tsx";

export default function Header() {
  const timerCtx = useTimerContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timerCtx.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
