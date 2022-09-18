/** @format */

import React, { Fragment } from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Box flex="0 0 50%">
      <Heading fontSize="14px" fontWeight="800" textTransform="uppercase">
        Sale Starts In
      </Heading>
      <Flex className="clock">
        <Box
          p="12px 16px"
          m="5"
          background="#1a1d29"
          borderRadius=" var(--chakra-radii-lg)"
        >
          <Heading fontSize="32px" fontWeight="800">
            {timerDays}
          </Heading>
          <Text
            fontSize="12px"
            fontWeight="800"
            color="#b1b6c6"
            textTransform="uppercase"
          >
            Days
          </Text>
        </Box>
        <Box
          p="12px 16px"
          m="5"
          background="#1a1d29"
          borderRadius=" var(--chakra-radii-lg)"
        >
          <Heading fontSize="32px" fontWeight="800">
            {timerHours}
          </Heading>
          <Text
            fontSize="12px"
            fontWeight="800"
            color="#b1b6c6"
            textTransform="uppercase"
          >
            Hours
          </Text>
        </Box>{" "}
        <Box
          p="12px 16px"
          m="5"
          background="#1a1d29"
          borderRadius=" var(--chakra-radii-lg)"
        >
          <Heading fontSize="32px" fontWeight="800">
            {timerMinutes}
          </Heading>
          <Text
            fontSize="12px"
            fontWeight="800"
            color="#b1b6c6"
            textTransform="uppercase"
          >
            Minutes
          </Text>
        </Box>{" "}
        <Box
          p="12px 16px"
          m="5"
          background="#1a1d29"
          borderRadius=" var(--chakra-radii-lg)"
        >
          <Heading fontSize="32px" fontWeight="800">
            {timerSeconds}
          </Heading>
          <Text
            fontSize="12px"
            fontWeight="800"
            color="#b1b6c6"
            textTransform="uppercase"
          >
            Seconds
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
