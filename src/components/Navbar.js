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
  useToast,
  IconButton,
  useDisclosure,
  Modal,
  Heading,
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
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import VanillaConnectionComponent from "../WalletConnect";

const Navbar = () => {
  const toast = useToast();

  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        p="25px 40px"
        display="block"
        w="100%"
        zIndex="99"
        className="heroBackground"
      >
        <Flex align="center" justifyContent="space-between" margin="0 auto">
          <Heading size="md">Logo</Heading>
          <Flex align="center">
            <Flex display={["none", "none", "flex", "flex"]}>
              <Link href="/home" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Home"
                  w="100%"
                  size="sm"
                  rightIcon={<ExternalLinkIcon />}
                >
                  GitHub
                </Button>
              </Link>
              <Link href="/home" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Home"
                  w="100%"
                  size="sm"
                  rightIcon={<ExternalLinkIcon />}
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

            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    bg="#0b72e7"
                    fontSize={`"var(--chakra-fontSizes-3xl"`}
                    color="#fff"
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
            <VanillaConnectionComponent />
            <Link
              onClick={onOpen}
              colorScheme="gray"
              ml="15px"
              bg="transparent"
              size="sm"
            >
              <SettingsIcon w={5} h={5} color="#0b72e7" />
            </Link>
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
    </>
  );
};

export default Navbar;
