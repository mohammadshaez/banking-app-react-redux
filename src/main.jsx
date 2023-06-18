import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider, Text } from "@mantine/core";
import { createStore } from "redux";
import bankingReducer from "./reducers/BankingReducers.jsx";
import { Provider } from "react-redux";

const store = createStore(bankingReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
);
