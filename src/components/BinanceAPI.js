/** @format */
import React, { useEffect } from "react";
import { Box, Flex, Heading, Center, Divider } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

const BinanceAPI = () => {
  useEffect(() => {
    let ws = new WebSocket("wss://stream.binance.com:9443/ws/bnbeur@trade");

    let stockPriceElement = document.getElementById("stock-price");
    let stockNameElement = document.getElementById("stock-name");

    let lastPrice = null;

    ws.onmessage = (event) => {
      let stockObject = JSON.parse(event.data);
      let price = parseFloat(stockObject.p).toFixed(2);
      let name = stockObject.s.toString();

      stockPriceElement.innerText = "€" + price;
      stockNameElement.innerText = name.slice(0, 3) + " / " + name.slice(3);

      console.log(event.data);

      stockPriceElement.style.color =
        !lastPrice || lastPrice === price
          ? ""
          : price > lastPrice
          ? "green"
          : "red";
      lastPrice = price;
    };
  }, [1]);

  useEffect(() => {
    let ws2 = new WebSocket("wss://stream.binance.com:9443/ws/btceur@trade");

    let stockPriceElement2 = document.getElementById("stock-pricee");
    let stockNameElement2 = document.getElementById("stock-namee");

    let lastPrice2 = null;

    ws2.onmessage = (event) => {
      let stockObject = JSON.parse(event.data);
      let price2 = parseFloat(stockObject.p).toFixed(2);
      let name2 = stockObject.s.toString();

      stockPriceElement2.innerText = "€" + price2;
      stockNameElement2.innerText = name2.slice(0, 3) + " / " + name2.slice(3);

      console.log(event.data);

      stockPriceElement2.style.color =
        !lastPrice2 || lastPrice2 === price2
          ? ""
          : price2 > lastPrice2
          ? "green"
          : "red";
      lastPrice2 = price2;
    };
  }, [1]);

  return (
    <Flex
      p="0px 10px"
      w="fit-content"
      size="sm"
      borderRadius="md"
      alignItems="center"
      leftIcon={<BellIcon />}
    >
      <Heading id="stock-name" fontSize="sm" pr="5px"></Heading>
      <Heading id="stock-price" fontSize="sm">
        ---
      </Heading>
      <Center height="20px" m="0px 5px">
        <Divider orientation="vertical" colorScheme="#0b72e7" />
      </Center>
      <Heading id="stock-namee" fontSize="sm" pr="5px"></Heading>
      <Heading id="stock-pricee" fontSize="sm">
        ---
      </Heading>
    </Flex>
  );
};

export default BinanceAPI;
