export type SampleAction =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "reset" };

export type SampleContextValue = {
  sampleCount: number;
  sampleIncrement: () => void;
  sampleDecrement: () => void;
  sampleReset: () => void;
};