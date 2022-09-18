/** @format */

import React from "react";
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
  Flex,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import {
  CheckIcon,
  ArrowForwardIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const CoinItem = (props) => {
  return (
    <>
      <Td fontSize="14px" className="TrColor">
        <Box textAlign="center" textAlign=" -webkit-center" float=" left">
          <img src={props.coins.image} width="35px" height="35px" alt="" />
          {props.coins.symbol.toUpperCase()}
        </Box>
      </Td>
      <Td className="TrColorTwo">
        ${props.coins.current_price.toLocaleString()}
      </Td>
      <Td>{props.coins.price_change_percentage_24h.toFixed(2)}%</Td>
      <Td className="TrColorTwo">
        ${props.coins.total_volume.toLocaleString()}
      </Td>
      <Td className="TrColorTwo">${props.coins.market_cap.toLocaleString()}</Td>
      <Td className="TrColorThree">
        <Link
          to={`/coin/${props.coins.id}`}
          element={<Coin />}
          key={props.coins.id}
        >
          More Details
        </Link>
      </Td>
    </>
  );
};

export default CoinItem;
