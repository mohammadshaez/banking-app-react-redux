import { Title } from "@mantine/core";
import { useSelector } from "react-redux";


const Balance = () => {
  const state = useSelector((storeState) => {
    return storeState;
  });
  return <Title order={1}>Balance is Rs. {state}</Title>;
};

export default Balance;
