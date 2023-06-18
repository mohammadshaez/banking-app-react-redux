import { Input, Button, Flex } from "@mantine/core";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

// Action Creators

const createDeposit = (value) => {
    return {
        type : "DEPOSIT",
        amount : Number(value),
    }
}
const createWithdraw = (value) => {
    return {
        type : "WITHDRAWAL",
        amount : Number(value),
    }
}
const createCollectInterest = (value) => {
    return {
        type : "COLLECT_INTEREST",
    }
}
const createDeleteAccount = (value) => {
    return {
        type : "DELETE_ACCOUNT",
    }
}

const Banking = () => {
    
    // using useState
    // const [value, setValue] = useState("");
    // const handleChange = (event) => {
    //     setValue(event.target.value)
        // createDeposit(value)
    // }

    // using useRef
    const inputRef =  useRef(null);
    const dispatch = useDispatch();

    const handleDeposit = () => {
       dispatch(createDeposit(inputRef.current.value))
    }
    const handleWithdraw = () => {
        dispatch(createWithdraw(inputRef.current.value))
    }
    const handleCollectInterest = () => {
        dispatch(createCollectInterest())
    }
    const handleDeleteAccount = () => {
        dispatch(createDeleteAccount())
    }
    

  return (
    <div>
      <Input ref={inputRef} style={{ width: "50%", margin: "auto" }} />

      <Flex
        mih={50}
        gap="lg"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        style={{ marginTop: "1rem" }}
      >
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
        //   value={value}
          onClick={handleDeposit}
        >
          Deposit
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          onClick={handleWithdraw}
        >
          Withdraw
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
          onClick={handleCollectInterest}
        >
          Collect Interest
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          onClick={handleDeleteAccount}
        >
          Delete Account
        </Button>
      </Flex>
    </div>
  );
};

export default Banking;
