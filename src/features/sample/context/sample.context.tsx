import { createContext, ReactNode, useContext, useReducer } from "react";

type State = { count: number };
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export const SampleStateContext = createContext<State | null>(null);
export const SampleActionsContext = createContext<{
  increaseCount: () => void;
  resetCount: () => void;
} | null>(null);

export function SampleProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increaseCount = () => dispatch({ type: "increment" });
  const resetCount = () => dispatch({ type: "reset" });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleActionsContext.Provider value={{ increaseCount, resetCount }}>
        {children}
      </SampleActionsContext.Provider>
    </SampleStateContext.Provider>
  );
}
