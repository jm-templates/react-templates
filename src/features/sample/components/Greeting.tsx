import { BasicButton } from "../../../shared/components/buttons.tsx/Buttons";
import { useSampleCount, useSampleIncrement } from "../context/sample.context";
import useWelcome from "../hooks/useWelcome";

export default function Greeting() {
  const { getNameByParms } = useWelcome();

  const sampleCount = useSampleCount();
  const sampleIncrement = useSampleIncrement();

  return (
    <>
      <h2 className="text-2xl"> Greeting {`${getNameByParms()}`}</h2>
      <p>count: {sampleCount}</p>
      <BasicButton onClick={sampleIncrement}>click</BasicButton>
    </>
  );
}
