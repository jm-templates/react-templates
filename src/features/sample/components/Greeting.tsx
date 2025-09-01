import useWelcome from "../hooks/useWelcome";

export default function Greeting() {
  const { getNameByParms } = useWelcome();

  return (
    <>
      <h2> Greeting {`${getNameByParms()}`}</h2>
    </>
  );
}
