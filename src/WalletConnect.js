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
  Grid,
  GridItem,
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

const VanillaConnectionComponent = () => {
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

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      localStorage.setItem("isTheWalletConnected", true);
      if (window.ethereum) {
        try {
          await connectMetamask();
          await connectCoinbase();
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

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
  const disconnectCoinbase = () => {
    walletlinkProvider.close();
    setWalletlinkProvider(null);
  };
  const disconnectWalletconnect = () => {
    walletConnectProvider.disconnect();
    setWalletConnectProvider(null);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenReportModal,
    onOpen: onOpenReportModal,
    onClose: onCloseReportModal,
  } = useDisclosure();

  if (web3Account) {
    return (
      <div className="walletCard">
        {sizes.map((size) => (
          <Button
            ref={btnRef}
            size="sm"
            ml="15px"
            leftIcon={<Avatar size="xs" name="Oshigaki Kisame"></Avatar>}
            rightIcon={<WarningIcon size="xs" color="green.500"></WarningIcon>}
            onClick={() => handleClick(size)}
            key={size}
          >
            <Text
              w="70px"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              defaultAccountss={web3Account}
            >
              {web3Account}
            </Text>
          </Button>
        ))}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={size}
        >
          <DrawerOverlay mt="73px" />
          <DrawerContent mt="73px">
            <DrawerBody>
              <Flex align="center" gap="1rem" pt="20px">
                <Avatar size="md">
                  <AvatarBadge boxSize="1em" bg="tomato" />
                </Avatar>
                <Flex align="center" flex=" 1 1 0">
                  <Flex flex-direction="column">
                    <Box
                      iconRight={
                        <Text color="green.500" size="sm">
                          <WarningIcon size="sz" /> Wallet verified
                        </Text>
                      }
                    >
                      <Text
                        w="150px"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        color="tomato"
                        fontSize="2xl"
                      >
                        {web3Account}
                      </Text>
                      <Text color="green.500" size="sm">
                        <WarningIcon size="sz" /> Wallet verified
                      </Text>
                    </Box>
                    <CopyIcon
                      cursor="pointer"
                      boxSize={5}
                      onClick={onCopy}
                      ml={2}
                      mt="8px"
                      defaultAccount={web3Account}
                    >
                      {hasCopied ? "Copied" : "Copy"}
                    </CopyIcon>
                  </Flex>

                  <Spacer />
                  <Button
                    rightIcon={<ArrowForwardIcon boxSize={5} />}
                    onClick={onClose}
                    size="sm"
                  >
                    Go back
                  </Button>
                </Flex>
              </Flex>

              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                padding="20px"
                mt="20px"
              >
                <Heading as="h3" fontSize="18px">
                  Balances:
                </Heading>
                {userBalance}
              </Box>
              <Divider pt="20px" />
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                padding="20px"
                mt="20px"
              >
                <Flex>
                  <Heading as="h3" fontSize="18px">
                    Get Whitelisted
                  </Heading>
                  <Spacer />
                  <WarningIcon size="sz" />
                </Flex>
                <Text mt="20px">
                  Connect your wallet to access web3 features on DappRadar.
                </Text>
                <Button mt="15px" w="100%">
                  Verify
                </Button>
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                padding="20px"
                mt="20px"
              >
                <Flex>
                  <Heading as="h3" fontSize="18px">
                    Add your email
                  </Heading>
                  <Spacer />
                  <WarningIcon size="sz" />
                </Flex>
                <Text mt="20px">
                  Connect your wallet to access web3 features on DappRadar.
                </Text>
                <Button mt="15px" w="100%">
                  Verify
                </Button>
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                padding="20px"
                mt="20px"
              >
                <Flex>
                  <Heading as="h3" fontSize="18px">
                    Add your email
                  </Heading>
                  <Spacer />
                  <WarningIcon size="sz" />
                </Flex>
                <Text mt="20px">
                  Connect your wallet to access web3 features on DappRadar.
                </Text>
                <Button mt="15px" w="100%">
                  Verify
                </Button>
              </Box>
            </DrawerBody>
            <DrawerFooter>
              <Button w="100%" variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={disconnectCoinbase}>Disconnect</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col space-y-7 items-start pt-10 w-1/2 border-2 border-yellow-300">
        <Button
          onClick={onOpenReportModal}
          size="sm"
          ml="15px"
          type="submit"
          bg="#d5e4f9"
          leftIcon={
            <Avatar size="xs">
              <AvatarBadge boxSize="1.25em" bg="tomato" />
            </Avatar>
          }
        >
          Connect Wallet
        </Button>
        <Modal
          isOpen={isOpenReportModal}
          onClose={onCloseReportModal}
          defaultIsClose="false"
        >
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
};
export default VanillaConnectionComponent;
