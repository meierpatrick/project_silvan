/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import WalletCardEthers from "./WalletEthers";
import { extendTheme } from "@chakra-ui/react";
//import "@fontsource/inter";
//import "@fontsource/fira-sans";
import "@fontsource/mulish";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";
import Layout from "./components/Layout/Layout.js";
import { BrowserRouter } from "react-router-dom";

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
      ".navBackground": {
        background: props.colorMode === "light" ? "#f3f5f9" : "#1b1d29",
      },
      ".TableBackground": {
        borderCollapse: "separate !important",
        borderSpacing: "0px 8px !important",
      },
      ".TableColor": {
        background: props.colorMode === "light" ? "#f3f5f9" : "#252735",
      },
      ".TrColor": {
        border: "none",
        borderRadius: " 8px 0px 0px 8px",
      },
      ".TrColorTwo": {
        border: "none",
      },
      ".TrColorThree": {
        border: "none",
        color: "#0b72e7",
        borderRadius: " 0px 8px 8px 0px",
      },
    }),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Layout>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
