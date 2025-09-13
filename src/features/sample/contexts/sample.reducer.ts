import type { SampleAction } from "./sample.types";

export const initialCount = 1;

export function sampleReducer(state: number, action: SampleAction): number {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state > 0 ? state - 1 : state;
    case "reset":
      return initialCount;
    default:
      return state;
  }
}