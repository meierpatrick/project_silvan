/** @format */

import React, { useState } from "react";
import Navbar from "./Navbar";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({ children, navSize }) {
  return (
    <>
      <Navbar />
      <Box width=" 85%" m="0px auto">
        {children}
      </Box>
    </>
  );
}
