import { BasicButton } from "../../../shared/components/buttons/BasicButton";
import { useSampleActions, useSampleCount } from "../contexts/useSample";

export default function Welcome() {
  const count = useSampleCount();
  const { sampleIncrement, sampleDecrement, sampleReset } = useSampleActions();

  return (
    <>
      <h2 className="text-2xl">Welcome</h2>
      <p>count: {count}</p>
      <BasicButton onClick={sampleIncrement} size="xl">
        increase
      </BasicButton>
      <BasicButton onClick={sampleDecrement} variant="outline">decrease</BasicButton>
      <BasicButton onClick={sampleReset} size="2xs" disabled={true}>
        reset
      </BasicButton>
    </>
  );
}
