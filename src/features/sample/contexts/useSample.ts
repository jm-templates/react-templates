import { useContext } from "react";
import { SampleContext } from "./SampleProvider";

export function useSample() {
  const ctx = useContext(SampleContext);
  if (!ctx) throw new Error("SampleProvider가 필요합니다.");
  return ctx;
}

export const useSampleCount = () => useSample().sampleCount;

export const useSampleActions = () => {
  const { sampleIncrement, sampleDecrement, sampleReset } = useSample();
  return { sampleIncrement, sampleDecrement, sampleReset };
};