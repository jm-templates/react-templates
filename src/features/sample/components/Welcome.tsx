import { BasicButton } from "../../../shared/components/buttons.tsx/Buttons";
import { useSampleActions, useSampleCount } from "../contexts/useSample";

export default function Welcome() {
    const count = useSampleCount()
    const { sampleIncrement, sampleDecrement, sampleReset} = useSampleActions()

  return (
    <>
      <h2 className="text-2xl">Welcome</h2>
      <p>count: {count}</p>
      <BasicButton onClick={sampleIncrement}>increase</BasicButton>
      <BasicButton onClick={sampleDecrement}>decrease</BasicButton>
      <BasicButton onClick={sampleReset}>reset</BasicButton>
    </>
  );
}
