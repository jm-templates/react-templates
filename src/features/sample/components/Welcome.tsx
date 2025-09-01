import { BasicButton } from "../../../shared/components/buttons.tsx/Buttons";
import { useSampleCount, useSampleIncrement } from "../context/sample.context";

export default function Welcome() {
  const sampleCount = useSampleCount();
  const sampleIncrement = useSampleIncrement();

  return (
    <>
      <h2 className="text-2xl">Welcome</h2>
      <p>count: {sampleCount}</p>
      <BasicButton onClick={sampleIncrement}>click</BasicButton>
    </>
  );
}
