/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import WalletCardEthers from "./WalletEthers";
import { extendTheme } from "@chakra-ui/react";
//import "@fontsource/inter";
//import "@fontsource/fira-sans";
import "@fontsource/mulish";
import "@fontsource/mulish/700.css";

const theme = extendTheme({
  fonts: {
    heading: `"Mulish", sans-serif,`,
    body: `"Mulish", sans-serif`,
  },
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "sm",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        background: props.colorMode === "light" ? "#f3f5f9" : "#1b1d29",
        lineHeight: "tall",
      },
      ".heroBackground": {
        background: props.colorMode === "light" ? "#fff" : "#202330",
      },
    }),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
