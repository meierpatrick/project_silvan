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

const Contracts = () => {
  return (
    <Box
      textAlign="center"
      flex-direction="column"
      align="center"
      maxWidth="67rem"
      margin="0px auto"
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={6} w="100%">
        {" "}
        <GridItem
          w="100%"
          h="10"
          m="0 auto"
          mt="3rem"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="4.5rem 2.5rem"
          className="heroBackground"
        />
        <GridItem
          w="100%"
          h="10"
          m="0 auto"
          mt="3rem"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="4.5rem 2.5rem"
          className="heroBackground"
        />
        <GridItem
          w="100%"
          h="10"
          m="0 auto"
          mt="3rem"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="4.5rem 2.5rem"
          className="heroBackground"
        />
      </Grid>
    </Box>
  );
};

export default Contracts;
