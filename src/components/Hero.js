/** @format */

import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Box
      textAlign="center"
      flex-direction="column"
      align="center"
      maxWidth="85rem"
      margin="0px auto"
      mt="10rem"
    >
      <Heading as="h1" mb="1.5rem" size="2xl">
        The trading engine for Web3 and DeFi
      </Heading>
      <Text fontSize="md" mb="2.5rem">
        Polkadex is a fully decentralized peer-to-peer orderbook-based
        cryptocurrency exchange for the DeFi ecosystem built on Substrate.
      </Text>
      <Button>Orderbook Open Beta</Button>
    </Box>
  );
};

export default Hero;
