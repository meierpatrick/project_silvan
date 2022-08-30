/** @format */

import React from "react";
import { useState } from "react";
import {
  Box,
  Link,
  Button,
  useColorMode,
  Switch,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Flex,
  IconButton,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  HamburgerIcon,
  CloseIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex p="10px" display="block">
      <Flex align="center" justifyContent="space-between">
        <h1>Logo</h1>
        <Flex align="center">
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link href="/home" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                w="100%"
                size="sm"
              >
                Home
              </Button>
            </Link>
            <Link href="/home" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                w="100%"
                size="sm"
              >
                About
              </Button>
            </Link>
            <Link href="/home" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                w="100%"
                size="sm"
              >
                Docs
              </Button>
            </Link>
          </Flex>
          <IconButton
            aria-label="Open Menu"
            size="sm"
            mr={2}
            icon={<HamburgerIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => changeDisplay("flex")}
          ></IconButton>
          <Button
            onClick={onOpen}
            colorScheme="gray"
            ml="15px"
            mr="15px"
            size="sm"
          >
            <SettingsIcon />
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Settings</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Switch color mode:</p>
                <Switch size="md" onChange={toggleColorMode} />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  size="sm"
                >
                  Change Network
                </MenuButton>
                <MenuList>
                  <MenuItem>Mainnet: Binance Smart Chain</MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Testnet: Binance Smart Chain
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          <Button colorScheme="gray" ml="15px" mr="15px" size="sm">
            Connect
          </Button>
        </Flex>
      </Flex>

      <Flex
        w="100vw"
        bgColor="#006cff"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="sm"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link href="/home" passHref>
            <Button as="a" variant="ghost" aria-label="Home" w="100%">
              Home
            </Button>
          </Link>
          <Link href="/home" passHref>
            <Button as="a" variant="ghost" aria-label="Home" w="100%">
              About
            </Button>
          </Link>
          <Link href="/home" passHref>
            <Button as="a" variant="ghost" aria-label="Home" w="100%">
              Docs
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
