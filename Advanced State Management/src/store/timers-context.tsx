import { createContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerDate: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

// 因為一開始沒有符合TimersContextValue的Type值，所以先設定為null
const TimersContext = createContext<TimersContextValue | null>(null);
