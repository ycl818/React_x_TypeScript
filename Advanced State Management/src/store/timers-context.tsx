import { type ReactNode, createContext, useContext } from "react";

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

// 因為一開始沒有符合TimersContextValue的Type值，所以先設定為null type
const TimersContext = createContext<TimersContextValue | null>(null);

// 因為可能為null，所以要加上!，確保不會為null
// 直接做一個hook，方便使用，不然每次用context都要加! 或是 判斷是否為null
export function useTimerContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error("useTimerContext is null - that should not be the case!");
  }

  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer() {
      // ...
    },
    startTimers() {
      // ...
    },
    stopTimers() {
      // ...
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimersContextProvider;
