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
  Grid,
  GridItem,
  List,
  Link,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import BgImg from "../images/bgHero.svg";
import {
  CheckIcon,
  ArrowForwardIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Border from "../images/Border";

const Contracts = () => {
  return (
    <Box
      textAlign="center"
      flex-direction="column"
      align="center"
      padding="0px 24px"
    >
      <Grid templateColumns="repeat(5, 1fr)" gap={6} w="100%">
        {" "}
        <GridItem
          w="100%"
          m="0 auto"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="2.5rem 2.5rem"
          className="heroBackground"
          textAlign="left"
          position="relative"
        >
          <Heading size="lg" as="h2" lineHeight="1.6">
            Whitelistin{" "}
          </Heading>
        </GridItem>
        <GridItem
          w="100%"
          m="0 auto"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="2.5rem 2.5rem"
          className="heroBackground"
          textAlign="left"
          position="relative"
        >
          <Heading size="lg" as="h2" lineHeight="1.6">
            Whitelistin{" "}
          </Heading>
        </GridItem>
        <GridItem
          w="100%"
          m="0 auto"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="2.5rem 2.5rem"
          className="heroBackground"
          textAlign="left"
          position="relative"
        >
          <Heading size="lg" as="h2" lineHeight="1.6">
            Whitelistin{" "}
          </Heading>
        </GridItem>
        <GridItem
          w="100%"
          m="0 auto"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="2.5rem 2.5rem"
          className="heroBackground"
          textAlign="left"
          position="relative"
        >
          <Heading size="lg" as="h2" lineHeight="1.6">
            Whitelistin{" "}
          </Heading>
        </GridItem>
        <GridItem
          w="100%"
          m="0 auto"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="2.5rem 2.5rem"
          className="heroBackground"
          textAlign="left"
          position="relative"
        >
          <Heading size="lg" as="h2" lineHeight="1.6">
            Whitelistin{" "}
          </Heading>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contracts;
