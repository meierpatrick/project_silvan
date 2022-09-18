/** @format */

import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Box,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoHome, IoPulse } from "react-icons/io5";
import { WarningIcon } from "@chakra-ui/icons";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "./Layout/NavItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex>
      <Flex
        as="nav"
        flexShrink="0"
        h="100%"
        overflow="scroll"
        overflowX="hidden"
      >
        <Flex
          alignItems={navSize === "small" ? "center" : "flex-start"}
          position="fixed"
          p="15px"
          zIndex="1200"
          top="70px"
          left="0px"
          height="100%"
          w={navSize === "small" ? "75px" : "236px"}
          display="flex"
          flexDirection="column"
          className="heroBackground"
          overflowY="auto"
        >
          <Box
            p="10px"
            bg="#141622"
            w="100%"
            borderRadius="var(--chakra-radii-md)"
            alignItems="center"
          >
            Total Balance
            <WarningIcon marginLeft="10px" />
          </Box>
          <Flex align="center" w="100%">
            <Box>
              <Heading
                fontSize="12px"
                p="16px 0px 12px"
                color="#686d7b"
                fontWeight="800"
              >
                ABOUT
              </Heading>
            </Box>
            <Spacer />
            <Box>
              <IconButton
                background="none"
                _hover={{ background: "none" }}
                icon={<FiMenu />}
                onClick={() => {
                  if (navSize === "small") changeNavSize("large");
                  else changeNavSize("small");
                }}
              />
            </Box>
          </Flex>
          <NavItem
            navSize={navSize}
            icon={IoHome}
            variant="outline"
            title="Overview"
            link="/"
            subMenu="Next point"
            description="This is the description for the dashboard."
          />
          <Box>
            <Heading
              fontSize="12px"
              p="16px 0px 12px"
              color="#686d7b"
              fontWeight="800"
            >
              OTHER
            </Heading>
          </Box>
          <NavItem
            bg="#cbd7ff13"
            navSize={navSize}
            icon={FiCalendar}
            title="Portfolio"
          />
          <NavItem
            bg="#cbd7ff13"
            navSize={navSize}
            icon={IoPulse}
            title="Markets"
            link="/markets"
          />
          <Box>
            <Heading
              fontSize="12px"
              p="16px 0px 12px"
              color="#686d7b"
              fontWeight="800"
            >
              CONTRACTS
            </Heading>
          </Box>
          <NavItem navSize={navSize} icon={IoPawOutline} title="Main Token" />
          <NavItem navSize={navSize} icon={IoPawOutline} title="Private Sale" />
          <NavItem
            navSize={navSize}
            icon={IoPawOutline}
            title="Vesting Schedules"
          />
          <Divider p="10px 0px" />
        </Flex>
      </Flex>
    </Flex>
  );
}
