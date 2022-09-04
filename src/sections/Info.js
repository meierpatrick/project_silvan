/** @format */

import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
const Info = () => {
  return (
    <Box
      textAlign="left"
      flex-direction="column"
      align="left"
      margin="0px auto"
      mt="10rem"
      bg="black"
      height="100vh"
    >
      <Heading as="h1" mb="1.5rem" size="2xl">
        The trading engine for Web3 and DeFi
      </Heading>
      <Text fontSize="md" mb="2.5rem">
        Polkadex is a fully decentralized peer-to-peer orderbook-based
        cryptocurrency exchange for the DeFi ecosystem built on Substrate.
      </Text>
      <p></p>
      <Button>Orderbook Open Beta</Button>
    </Box>
  );
};

export default Info;
