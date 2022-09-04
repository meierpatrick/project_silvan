/** @format */

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  Button,
  Drawer,
  DrawerOverlay,
  Spacer,
  Flex,
  DrawerContent,
  Box,
  DrawerCloseButton,
  useClipboard,
  Divider,
  Text,
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
import { WarningIcon, ArrowForwardIcon, CopyIcon } from "@chakra-ui/icons";

const WalletCardEthers = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [size, setSize] = React.useState("");
  const [provider, setProvider] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["sm"];

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
    }
  }, [defaultAccount]);

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await connectWalletHandler();
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  const [value, setValue] = React.useState(`${defaultAccount}`);
  const { hasCopied, onCopy } = useClipboard(defaultAccount);

  if (defaultAccount) {
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
              defaultAccountss={defaultAccount}
            >
              {defaultAccount}
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
              <Flex align="center" mt="20px">
                <Text
                  w="150px"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  color="tomato"
                  fontSize="2xl"
                >
                  {defaultAccount}
                </Text>
                <CopyIcon
                  cursor="pointer"
                  boxSize={5}
                  onClick={onCopy}
                  ml={2}
                  defaultAccount={defaultAccount}
                >
                  {hasCopied ? "Copied" : "Copy"}
                </CopyIcon>
                <Spacer />
                <Button
                  rightIcon={<ArrowForwardIcon boxSize={5} />}
                  onClick={onClose}
                  size="sm"
                >
                  Go back
                </Button>
              </Flex>
              <Text color="green.500" size="sm">
                <WarningIcon size="sz" /> Wallet verified
              </Text>
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
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  } else {
    return (
      <>
        <Button
          onClick={connectWalletHandler}
          size="sm"
          ml="15px"
          type="submit"
          leftIcon={
            <Avatar size="xs">
              <AvatarBadge boxSize="1.25em" bg="tomato" />
            </Avatar>
          }
        >
          {connButtonText}
        </Button>
      </>
    );
  }
};

export default WalletCardEthers;
