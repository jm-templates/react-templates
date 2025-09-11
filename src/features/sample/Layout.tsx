import { Outlet } from "react-router";
import Nav from "../../shared/components/Nav";
import { createContext } from "react";

export type SampleContextValue = {
  sampleCount: number;
  sampleIncrement: () => void;
};

export const SampleContext = createContext<SampleContextValue | null>(null);

const contextValue: SampleContextValue = {
  sampleCount: 1,
  sampleIncrement: () => {},
};

export default function Layout() {
  return (
    <SampleContext.Provider value={contextValue}>
      <Nav />
      <main>
        <Outlet />
      </main>
    </SampleContext.Provider>
  );
}
