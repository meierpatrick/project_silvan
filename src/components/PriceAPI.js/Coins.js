/** @format */

import React, { useState } from "react";
import CoinItem from "./CoinItem";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Box,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

const Coins = (props) => {
  const [noOfElement, setnoOfElement] = useState(4);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = props.coins.slice(0, noOfElement);
  return (
    <Box>
      <TableContainer>
        <Table variant="simple" className="TableBackground">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Coin</Th>
              <Th>Price</Th>
              <Th>24h</Th>
              <Th>Volume</Th>
              <Th>Mkt Cap</Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            {slice.map((coins) => {
              return (
                <>
                  <Tr h="60px" className="TableColor">
                    <CoinItem coins={coins} />
                  </Tr>
                </>
              );
            })}
            <Box>
              <Button
                onClick={() => loadMore()}
                size="lg"
                rightIcon={<ArrowDownIcon />}
                fontSize="17px"
                background="#0b72e7"
                color="#fff"
              >
                Load More
              </Button>
            </Box>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Coins;
