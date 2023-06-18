import AccountStatus from "./components/AccountStatus";
import Auth from "./components/Auth";
import Balance from "./components/Balance";
import Banking from "./components/Banking";
import { Flex } from '@mantine/core';

function App() {
  return (
    <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
      style={{textAlign : "center"}}
    >
      <main style={{border : "2px solid black",height : '100vh'}}>
        <Auth />
        <Balance />
        <Banking /><br/>
        <AccountStatus />
      </main>
    </Flex>
  );
}

export default App;
