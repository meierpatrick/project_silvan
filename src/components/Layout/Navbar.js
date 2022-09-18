/** @format */

import React from "react";
import { useState } from "react";
import {
  Box,
  Link,
  Text,
  Button,
  useColorMode,
  Switch,
  Spacer,
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
  Image,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  HamburgerIcon,
  CloseIcon,
  SettingsIcon,
  WarningIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import VanillaConnectionComponent from "../../WalletConnect";
import BinanceAPI from "../BinanceAPI";
import { IoSettings } from "react-icons/io5";
import Sidebar from "../Sidebar";
import TokenImg from "../../images/cube_blu.svg";

const Navbar = ({ navSize }) => {
  const toast = useToast();

  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="header"
        flex-direction="column"
        boxSizing="border-box"
        flexShrink="0"
        position="fixed"
        zIndex="1100"
        top=" 0px"
        left="auto"
        right="0px"
        w={navSize == "small" ? "75px" : "100%"}
        className="heroBackground"
        borderBottom="1px solid rgba(0, 0, 0, 0.35)"
      >
        <Flex
          position="relative"
          alignItems="center"
          minHeight="68px"
          w="100%"
          padding="16px 24px 16px 24px"
          boxShadow="none"
        >
          <Flex alignItems="center" flex="1 0 auto">
            <Link href="/">
              <Heading size="md">Logo</Heading>
            </Link>
            <Flex
              p="10px"
              bg="#141622"
              w="fit-content"
              ml="15px"
              borderRadius="var(--chakra-radii-md)"
              alignItems="center"
              maxHeight="35px"
            >
              <Image
                boxSize="25px"
                mr="10px"
                src={TokenImg}
                alt="token symbol"
              />
              Total Balance
              <WarningIcon marginLeft="10px" />
            </Flex>
          </Flex>
          <Spacer />
          <Box>
            <Flex align="center">
              <IconButton
                aria-label="Open Menu"
                size="md"
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
                      bg="#0b72e7"
                      color="#fff"
                      size="md"
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
              <Button size="md" ml="15px" variant="outline" colorScheme="blue">
                <Link onClick={onOpen} bg="transparent" size="md">
                  <IoSettings colorScheme="blue" />
                </Link>
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
            </Flex>
          </Box>
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
              size="md"
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
