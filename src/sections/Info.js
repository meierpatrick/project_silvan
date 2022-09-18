/** @format */

import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import ImgFooterThree from "../images/locks.png";
import ImgFooterFour from "../images/coins.svg";

const Info = () => {
  return (
    <Box
      textAlign="center"
      flex-direction="column"
      paddingTop=" 6.4em"
      paddingBottom=" 16.3em"
    >
      <Heading as="h2" mb="1.5rem" size="xl">
        Advantages of Aptos Deployments
      </Heading>
      <Text
        fontSize="lg"
        mb="2.5rem"
        maxWidth="44em"
        margin="0 auto"
        fontWeight="700"
        color="#8a89a2"
      >
        Aptos is a new Layer 1 blockchain using the Move language, pipelined
        execution and other innovations for enabling production-ready smart
        contract infrastructure with an emphasis on safety, scalability, and
        reliability for Web3 mass adoption
      </Text>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={16}
        mt="6rem"
        alignItems="center"
      >
        <Image src={ImgFooterThree} />
        <GridItem textAlign="left" justifySelf="end" maxWidth="39em">
          <Heading as="h1" mb="1.5rem" size="xl">
            Secure
          </Heading>
          <UnorderedList
            fontWeight=" 700"
            color="#8a89a2"
            fontSize="var(--chakra-fontSizes-lg)"
          >
            <ListItem>Prover for smart contract formal verification</ListItem>
            <ListItem>Deterministic transaction finality</ListItem>
            <ListItem>
              Move Tokens are atomic ‘resource’ data types that can’t copied or
              discarded
            </ListItem>
          </UnorderedList>
        </GridItem>
      </Grid>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={16}
        mt="16rem"
        alignItems="center"
      >
        <GridItem h="10" textAlign="left">
          <Heading as="h2" mb="1.5rem" size="xl">
            Efficient
          </Heading>
          <UnorderedList
            fontWeight=" 700"
            color="#8a89a2"
            fontSize="var(--chakra-fontSizes-lg)"
          >
            <ListItem>Prover for smart contract formal verification</ListItem>
            <ListItem>Deterministic transaction finality</ListItem>
            <ListItem>
              Move Tokens are atomic ‘resource’ data types that can’t copied or
              discarded
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem h="10">
          <Image src={ImgFooterFour} />
        </GridItem>
      </Grid>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={16}
        mt="16rem"
        alignItems="center"
      >
        <GridItem h="10">
          <Image src={ImgFooterFour} />
        </GridItem>
        <GridItem h="10" textAlign="left">
          <Heading as="h2" mb="1.5rem" size="xl">
            Secure
          </Heading>
          <UnorderedList
            fontWeight=" 700"
            color="#8a89a2"
            fontSize="var(--chakra-fontSizes-lg)"
          >
            <ListItem>Prover for smart contract formal verification</ListItem>
            <ListItem>Deterministic transaction finality</ListItem>
            <ListItem>
              Move Tokens are atomic ‘resource’ data types that can’t copied or
              discarded
            </ListItem>
          </UnorderedList>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Info;
