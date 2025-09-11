import { useContext } from "react";
import { BasicButton } from "../../../shared/components/buttons.tsx/Buttons";
import { SampleContext } from "../Layout";

export default function Welcome() {
  const ctx = useContext(SampleContext);

  return (
    <>
      <h2 className="text-2xl">Welcome</h2>
      <p>count: {ctx?.sampleCount}</p>
      <BasicButton onClick={ctx?.sampleIncrement}>click</BasicButton>
    </>
  );
}
