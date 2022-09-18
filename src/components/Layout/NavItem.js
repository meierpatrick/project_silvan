/** @format */

import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox";
import { IoCaretDown } from "react-icons/io5";

export default function NavItem({
  icon,
  title,
  description,
  active,
  link,
  navSize,
  subMenu,
}) {
  return (
    <Flex
      mt={2}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          p={3}
          borderRadius={8}
          background="#2d303f "
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
          w={navSize == "large" && "100%"}
          height=" 40px"
          display=" flex"
          webkitBoxAlign="center"
          alignItems="center"
          userSelect="none"
          href={link}
        >
          <Flex alignItems="center">
            <Icon
              as={icon}
              fontSize="xl"
              color={active ? "#82AAAD" : "#0b72e7"}
            />
            <Text
              ml={5}
              display={navSize == "small" ? "none" : "flex"}
              fontSize="14px"
            >
              {title}
            </Text>
          </Flex>
        </Link>
        <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <MenuItem subMenu={subMenu}></MenuItem>
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList>
      </Menu>
    </Flex>
  );
}
