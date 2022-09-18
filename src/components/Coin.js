/** @format */

import React from "react";
import { Box, Flex, Image, Text, Center, Divider } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Box m="0 auto" borderRadius="lg" alignItems="center" p="5px">
      <Flex gap={3} align="center" width="100%">
        <Center height="30px" color="red">
          <Divider orientation="vertical" />
        </Center>
        <Image
          src={image}
          alt="crypto"
          boxSize="20px"
          bg="#fff"
          borderRadius="50%"
          m="10px"
        />

        <Text
          textTransform="uppercase"
          fontWeight="var(--chakra-fontWeights-semibold)"
          className="coin-symbol"
          fontSize="15px"
        >
          {symbol}
        </Text>
        <Text
          fontWeight="var(--chakra-fontWeights-semibold)"
          className="coin-price"
          fontSize="12px"
        >
          ${price}
        </Text>
        {priceChange < 0 ? (
          <Text
            className="coin-percent red"
            color="#ea3943"
            fontSize="12px"
            fontWeight="var(--chakra-fontWeights-semibold)"
          >
            <Flex alignItems="center">
              {priceChange.toFixed(2)}%
              <FiArrowDownRight />
            </Flex>
          </Text>
        ) : (
          <Text
            className="coin-percent green"
            color="#16c784"
            fontSize="12px"
            fontWeight="var(--chakra-fontWeights-semibold)"
          >
            <Flex alignItems="center">
              {priceChange.toFixed(2)}%
              <FiArrowUpRight />
            </Flex>
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default Coin;
