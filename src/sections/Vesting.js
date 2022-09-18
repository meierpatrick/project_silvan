/** @format */

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Stack,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import PieChart from "../components/PieChart";
import { WarningIcon } from "@chakra-ui/icons";
import LiveSchedules from "../components/LiveSchedules";
import Tokenomics from "../components/Tokenomics";
import Border from "../images/Border";

const Vesting = () => {
  return (
    <Box mt="2.5rem">
      <Flex m="0px auto" maxWidth="67rem">
        <Flex
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="4rem 2.5rem"
          width="50%"
          background="var(--chakra-colors-chakra-body-bg)"
        >
          <Box w="100%">
            <Flex pb="2.5rem">
              <Heading as="h3" fontSize="18px">
                Tokenomics
              </Heading>
              <Spacer />
              <WarningIcon size="sz" />
            </Flex>
            <Tokenomics />
            <PieChart />
          </Box>
        </Flex>

        <Flex
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          alignItems="center"
          p="4rem 2.5rem"
          ml="20px"
          width="50%"
          background="var(--chakra-colors-chakra-body-bg)"
        >
          <Box textAlign="left">
            <Heading as="h3" fontSize="18px">
              Vesting Schedules
            </Heading>
            <LiveSchedules />
          </Box>
        </Flex>
      </Flex>
      <Stack
        m="0 auto"
        mt="3rem"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        alignItems="center"
        p="1rem 1rem"
        maxWidth="67rem"
        background="var(--chakra-colors-chakra-body-bg)"
      >
        <Box m="0px auto">
          <Text pb="20px">
            Polkadex secured a parachain slot on Polkadot with 973k DOT ($13.8M)
            contributed to the Polkadex Crowdloan!
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Vesting;
