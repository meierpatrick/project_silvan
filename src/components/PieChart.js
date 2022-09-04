/** @format */

import React from "react";
import { Box, Button, Heading, Flex, Divider, Stack } from "@chakra-ui/react";
const PieChart = () => {
  return (
    <Flex gap="2.5rem">
      <Box
        display="block"
        transform="translate -50% -50%"
        w="100%"
        h="200px"
        border="20px solid red"
        bgColor="var(--chakra-colors-chakra-body-bg)"
        borderRadius="100%"
        borderTop="20px solid blue"
        borderLeft="20px solid purple"
        borderRight="20px solid green"
      ></Box>
      <Box>
        <Heading as="h3" fontSize="16px">
          Key
        </Heading>
        <Divider pt="10px" />
        <Stack>
          <Flex pt="10px">
            <Box
              display="block"
              transform="translate -50% -50%"
              w="20px"
              h="20px"
              border="10px solid red"
              bgColor="red"
              borderRadius="100%"
              mr="20px"
            ></Box>
            <Heading as="h3" fontSize="13px">
              10% = Vesting 1 year
            </Heading>
          </Flex>
          <Flex pt="10px">
            <Box
              display="block"
              transform="translate -50% -50%"
              w="20px"
              h="20px"
              border="10px solid green"
              bgColor="green"
              borderRadius="100%"
              mr="20px"
            ></Box>
            <Heading as="h3" fontSize="13px">
              10% = Vesting 1 year
            </Heading>
          </Flex>
          <Flex pt="10px">
            <Box
              display="block"
              transform="translate -50% -50%"
              w="20px"
              h="20px"
              border="10px solid blue"
              bgColor="blue"
              borderRadius="100%"
              mr="20px"
            ></Box>
            <Heading as="h3" fontSize="13px">
              10% = Vesting 1 year
            </Heading>
          </Flex>
          <Flex pt="10px">
            <Box
              display="block"
              transform="translate -50% -50%"
              w="20px"
              h="20px"
              border="10px solid purple"
              bgColor="purple"
              borderRadius="100%"
              mr="20px"
            ></Box>
            <Heading as="h3" fontSize="13px">
              10% = Vesting 1 year
            </Heading>
          </Flex>
        </Stack>
        <Divider pt="10px" />
      </Box>
    </Flex>
  );
};

export default PieChart;
