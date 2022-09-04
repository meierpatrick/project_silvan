/** @format */

import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Flex,
  Highlight,
} from "@chakra-ui/react";
import BgImg from "../images/bG.svg";
const Hero = () => {
  return (
    <Box
      textAlign="center"
      flex-direction="column"
      align="center"
      maxWidth="67rem"
      margin="0px auto"
      pt="10rem"
    >
      <Heading as="h1" size="2xl" mb="2.5rem">
        <Highlight
          query="Web3 and DeFi"
          styles={{
            px: "2",
            py: "1",
            color: "#006cff",
          }}
        >
          The trading engine for Web3 and DeFi
        </Highlight>
      </Heading>

      <Button variant="ghost" size="lg">
        Testnet Explorer
      </Button>
      <Button ml="20px" size="lg">
        Orderbook Open Beta
      </Button>

      <Flex
        m="0 auto"
        mt="3rem"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        alignItems="center"
        p="4rem 2.5rem"
      >
        <Box textAlign="left">
          <Heading size="lg" pb="20px">
            Polkadex has won a Polkadot Parachain slot!
          </Heading>
          <Text pb="20px">
            Polkadex secured a parachain slot on Polkadot with 973k DOT ($13.8M)
            contributed to the Polkadex Crowdloan!
          </Text>
          <Button>More Info</Button>
        </Box>
        <Box>
          <Image src={BgImg} objectFit="cover" alt="dapp" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
