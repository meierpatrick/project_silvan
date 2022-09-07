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

const Hero = () => {
  return (
    <Box
      textAlign="center"
      flex-direction="column"
      align="center"
      maxWidth="67rem"
      margin="0px auto"
    >
      <Flex
        m="0 auto"
        mt="3rem"
        borderRadius="lg"
        overflow="hidden"
        alignItems="center"
        p="4.5rem 2.5rem"
        className="heroBackground"
      >
        <Box textAlign="left">
          <Heading size="lg" pb="2rem" as="h2" lineHeight="1.6">
            <Highlight
              query="Payment Gateway"
              styles={{
                px: "2",
                py: "1",
                color: "#006cff",
              }}
            >
              Supercharge your business with the all‑powerful Payment Gateway
            </Highlight>
          </Heading>
          <List spacing={3}>
            <ListItem fontSize="16px">
              <ListIcon
                as={CheckIcon}
                color="green.500"
                mr="20px"
                fontSize="15px"
              />
              100+ Payment Methods
            </ListItem>
            <ListItem fontSize="16px">
              <ListIcon
                as={CheckIcon}
                color="green.500"
                mr="20px"
                fontSize="15px"
              />
              Industry Leading Success Rate
            </ListItem>
            <ListItem fontSize="16px">
              <ListIcon
                as={CheckIcon}
                color="green.500"
                mr="20px"
                fontSize="15px"
              />
              Superior Checkout Experience
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem fontSize="16px">
              <ListIcon
                as={CheckIcon}
                color="green.500"
                mr="20px"
                fontSize="15px"
              />
              Easy to Integrate
            </ListItem>
            <ListItem fontSize="16px">
              <ListIcon
                as={CheckIcon}
                color="green.500"
                mr="20px"
                fontSize="15px"
              />
              Instant Settlements from day 1
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem fontSize="16px">
              <ListIcon
                as={CheckIcon}
                color="green.500"
                mr="20px"
                fontSize="15px"
              />
              In-depth Reporting and Insights
            </ListItem>
          </List>
          <Button
            size="lg"
            mt="3rem"
            rightIcon={<ArrowForwardIcon />}
            fontSize="17px"
            background="#0b72e7"
            color="#fff"
          >
            Get Whitelisted
          </Button>
          <Button
            variant="ghost"
            size="lg"
            mt="3rem"
            ml="1rem"
            rightIcon={<ChevronRightIcon />}
            color="#0b72e7"
            fontSize="17px"
          >
            Testnet Explorer
          </Button>
        </Box>
        <Box>
          <Image src={BgImg} objectFit="cover" alt="dapp" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
