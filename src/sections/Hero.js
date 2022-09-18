/** @format */

import React from "react";
import { Box, Button, Heading, Flex, Highlight, Text } from "@chakra-ui/react";
import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Border from "../images/cube_blu.svg";
import PrivateSale from "../components/PrivateSale";

const Hero = ({ web3Account }) => {
  console.log();
  return (
    <Box
      textAlign="center"
      flex-direction="column"
      align="center"
      position="relative"
      paddingTop="10rem"
    >
      <Box margin="0px auto" width="100%">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent=" center"
          align-items=" flex-start"
          className="heroBackground"
          backgroundSize=" auto 100%"
          backgroundPosition=" 100% 50%"
          backgroundRepeat=" no-repeat"
          backgroundImage={Border}
          borderRadius=" 8px"
          minHeight=" 210px"
          padding=" 55px 32px"
        >
          <Flex
            borderRadius="lg"
            overflow="hidden"
            alignItems="center"
            flex="0 0 50%"
            gap="3rem"
          >
            <Box textAlign="left" position="relative">
              <Text>Status: Offline.</Text>
              <Heading size="xl" pb="2rem" as="h2" lineHeight="1.6">
                <Highlight
                  query="Private Sale"
                  styles={{
                    px: "2",
                    py: "1",
                    color: "#006cff",
                  }}
                >
                  NOT Token Private Sale
                </Highlight>
              </Heading>

              <Button
                size="lg"
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
                ml="1rem"
                rightIcon={<ChevronRightIcon />}
                color="#0b72e7"
                fontSize="17px"
              >
                View Details
              </Button>
            </Box>
            <Box>
              <PrivateSale />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
