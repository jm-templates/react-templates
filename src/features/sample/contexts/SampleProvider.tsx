import { createContext, useReducer } from "react";
import type { ReactNode } from "react";
import type { SampleContextValue } from "./sample.types";
import { sampleReducer, initialCount } from "./sample.reducer";

export const SampleContext = createContext<SampleContextValue | null>(null);

export function SampleProvider({ children }: { children: ReactNode }) {
  const [count, dispatch] = useReducer(sampleReducer, initialCount);

  const sampleIncrement = () => dispatch({ type: "increase" });
  const sampleDecrement = () => dispatch({ type: "decrease" });
  const sampleReset = () => dispatch({ type: "reset" });

  const value: SampleContextValue = {
    sampleCount: count,
    sampleIncrement,
    sampleDecrement,
    sampleReset,
  };

  return (
    <SampleContext.Provider value={value}>{children}</SampleContext.Provider>
  );
}