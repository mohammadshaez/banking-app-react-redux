import { useState } from "react";
import { Title } from "@mantine/core";


const AccountStatus = () => {
  const [isToggled, setIsToggle] = useState(false);
  
  return (
    <div>
      <Title order={1}>{isToggled ? "Savings" : "Current"} Account</Title>
      <button onClick={() => {isToggled ? setIsToggle(false) : setIsToggle(true)}}>Convert Account</button>
    </div>
  );
};

export default AccountStatus;
