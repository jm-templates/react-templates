import { useContext } from "react";
import { BasicButton } from "../../../shared/components/buttons.tsx/Buttons";

import useWelcome from "../hooks/useWelcome";
import { SampleContext } from "../Layout";

export default function Greeting() {
  const { getNameByParms } = useWelcome();

  const ctx = useContext(SampleContext);

  return (
    <>
      <h2 className="text-2xl"> Greeting {`${getNameByParms()}`}</h2>
      <p>count: {ctx?.sampleCount}</p>
      <BasicButton onClick={ctx?.sampleIncrement}>click</BasicButton>
    </>
  );
}
