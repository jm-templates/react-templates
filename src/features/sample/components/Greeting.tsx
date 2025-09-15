import { BasicButton } from "../../../shared/components/buttons/BasicButton";

import useWelcome from "../hooks/useWelcome";
import { useSampleActions, useSampleCount } from "../contexts/useSample";

export default function Greeting() {
  const { getNameByParms } = useWelcome();
  const count = useSampleCount();
  const { sampleIncrement, sampleDecrement, sampleReset } = useSampleActions();

  return (
    <>
      <h2 className="text-2xl"> Greeting {`${getNameByParms()}`}</h2>
      <p>count: {count}</p>
      <BasicButton onClick={sampleIncrement}>increase</BasicButton>
      <BasicButton onClick={sampleDecrement}>decrease</BasicButton>
      <BasicButton onClick={sampleReset}>reset</BasicButton>
    </>
  );
}
