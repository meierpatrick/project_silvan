/** @format */
import { Web3Provider } from "@ethersproject/providers";
import React, { useState, useEffect } from "react";
import WalletConnectProvider from "@walletconnect/ethereum-provider";
import WalletLink from "@coinbase/wallet-sdk";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CircularProgress,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Image,
  Button,
  Checkbox,
  Divider,
  Text,
  Drawer,
  DrawerOverlay,
  Spacer,
  DrawerContent,
  Box,
  DrawerCloseButton,
  useClipboard,
  DrawerHeader,
  Badge,
  DrawerBody,
  Input,
  DrawerFooter,
  Heading,
  useDisclosure,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import MetaMask from "./images/metamask.png";
import WalletConnect from "./images/walletconnect.png";
import Coinbase from "./images/coinbase.png";
import {
  ExternalLinkIcon,
  WarningIcon,
  ArrowForwardIcon,
  CopyIcon,
} from "@chakra-ui/icons";

const VanillaConnectionComponentTwo = () => {
  const [web3Library, setWeb3Library] = React.useState();
  const [web3Account, setWeb3Account] = React.useState();
  const [walletlinkProvider, setWalletlinkProvider] = React.useState();
  const [walletConnectProvider, setWalletConnectProvider] = React.useState();
  const [isLoading, setIsLoading] = useState(false);

  //vanilla
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [size, setSize] = React.useState("");
  const [provider, setProvider] = useState(null);
  const btnRef = React.useRef();
  //vanilla metamask

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["sm"];

  const [value, setValue] = React.useState(`${web3Account}`);
  const { hasCopied, onCopy } = useClipboard(web3Account);

  const connectMetamask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      console.log(account);
      setWeb3Account(account);
      const library = new Web3Provider(window.ethereum, "any");
      console.log("library");
      console.log(library);
      setWeb3Library(library);
    } catch (ex) {
      console.log(ex);
    }
  };

  //vanilla walletconnect
  const connectWaletConnect = async () => {
    try {
      const RPC_URLS = {
        1: "https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
        4: "https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
      };
      const provider = new WalletConnectProvider({
        rpc: {
          1: RPC_URLS[1],
          4: RPC_URLS[4],
        },
        qrcode: true,
        pollingInterval: 15000,
      });
      setWalletConnectProvider(provider);
      const accounts = await provider.enable();
      const account = accounts[0];

      const library = new Web3Provider(provider, "any");

      console.log("library");
      console.log(library);
      setWeb3Library(library);
      setWeb3Account(account);
    } catch (ex) {
      console.log(ex);
    }
  };

  //vanilla coinbase
  const connectCoinbase = async () => {
    try {
      // Initialize WalletLink
      const walletLink = new WalletLink({
        appName: "demo-app",
        darkMode: true,
      });
      setIsLoading(true);

      const provider = walletLink.makeWeb3Provider(
        "https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
        4
      );
      setWalletlinkProvider(provider);
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      const library = new Web3Provider(provider, "any");

      console.log("library");
      console.log(library);
      setWeb3Library(library);
      setWeb3Account(account);
    } catch (ex) {
      console.log(ex);
      setIsLoading(false);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <div className="flex flex-col space-y-7 items-start pt-10 w-1/2 border-2 border-yellow-300">
        <Button
          onClick={onOpen}
          size="sm"
          ml="15px"
          type="submit"
          leftIcon={
            <Avatar size="xs">
              <AvatarBadge boxSize="1.25em" bg="tomato" />
            </Avatar>
          }
        >
          Connect Wallet
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Box m="0px auto" w="70%" textAlign="center" pt="1.5rem" pb="1rem">
              <ModalHeader fontSize="2xl">Connect your wallet</ModalHeader>
              <Text>
                Hello user! Connect your Binance Smart Chain wallet to start the
                application
              </Text>
            </Box>
            <ModalCloseButton />
            <ModalBody>
              {/*     {web3Account ? <p>{web3Account}</p> : <p>Not Connected</p>}
            <div className="flex space-x-3">
              <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Write to Contract
              </button>
            </div> */}
              <Divider m="10px 0px" />
              <Button onClick={connectMetamask} w="100%" p="30px">
                <Flex align="center" w="100%">
                  <Image src={MetaMask} boxSize="40px" alt="Dan Abramov" />
                  <Box as="span" flex="1" textAlign="left" pl="30px">
                    {" "}
                    MetaMask
                  </Box>
                  <ExternalLinkIcon w={5} h={5} />
                </Flex>
              </Button>

              <Divider m="10px 0px" />
              <Button onClick={connectWaletConnect} w="100%" p="30px">
                <Flex align="center" w="100%">
                  <Image src={WalletConnect} boxSize="40px" alt="Dan Abramov" />
                  <Box as="span" flex="1" textAlign="left" pl="30px">
                    {" "}
                    Walletconnect
                  </Box>
                  {/* <button
                className=" bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                onClick={disconnectCoinbase}
              >
                Disconnect
              </button> */}
                  <ExternalLinkIcon w={5} h={5} />
                </Flex>
              </Button>
              <Divider m="10px 0px" />
              <Button onClick={connectCoinbase} w="100%" p="30px">
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                  <Flex align="center" w="100%">
                    <Image src={Coinbase} boxSize="40px" alt="Dan Abramov" />
                    <Box as="span" flex="1" textAlign="left" pl="30px">
                      {" "}
                      Coinbase
                    </Box>
                    {/* <button
                className=" bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                onClick={disconnectCoinbase}
              >
                Disconnect
              </button> */}
                    <ExternalLinkIcon w={5} h={5} />
                  </Flex>
                )}
              </Button>
              <Divider m="10px 0px" />
            </ModalBody>

            <ModalFooter>
              <Box m="0px auto" w="70%" textAlign="center">
                <ModalHeader fontSize="md" pt="0" pb="0">
                  New to Binance Smart Chain?
                </ModalHeader>
                <Text pb="20px" fontSize="sm" color="b">
                  Learn more about wallets
                </Text>
              </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }

export default VanillaConnectionComponentTwo;
