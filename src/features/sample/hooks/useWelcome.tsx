import { useParams } from "react-router";

const useWelcome = () => {
  const { name } = useParams();

  const getNameByParms = () => {
    return name || "guest";
  };

  return {
    getNameByParms,
  };
};

export default useWelcome;
