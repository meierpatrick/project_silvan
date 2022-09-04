/** @format */

import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Spacer,
  Input,
  Checkbox,
  Divider,
  Link,
  Image,
  Stack,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaDiscord,
  FaRedditAlien,
} from "react-icons/fa";
import ImgFooter from "../images/provider-cryptocompare.webp";
import ImgFooterTwo from "../images/provider-coingecko.webp";
import ImgFooterThree from "../images/coinmarketcap-logo.png";
const Footer = () => {
  return (
    <Box>
      <Flex
        m="0 auto"
        mt="3rem"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        alignItems="center"
        p="2.5rem 2.5rem"
        maxWidth="67rem"
        margin="0 auto"
      >
        <Box textAlign="left">
          <Heading size="lg" pb="20px">
            Subscribe to our newsletter
          </Heading>
          <Text pb="20px">
            Subscribe to the Week in Review newsletter and get the latest trends
            directly to your inbox
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Flex>
            <Input size="lg" placeholder="Your email" />
            <Button size="lg" ml="20px">
              Subcribe
            </Button>
          </Flex>
          <Checkbox isDisabled defaultChecked pt="20px" size="sm">
            Unsubscribe at any time.
          </Checkbox>
        </Box>
      </Flex>
      <Flex
        maxWidth="67rem"
        margin="0 auto"
        align="right"
        justifyContent="right"
        pt="2.5rem"
        pb="2.5rem"
        alignItems="center"
      >
        <Button size="lg" ml="20px">
          <FaFacebookF />
        </Button>
        <Button size="lg" ml="20px">
          <FaTwitter />
        </Button>
        <Button size="lg" ml="20px">
          <FaDiscord />
        </Button>
        <Button size="lg" ml="20px">
          <FaRedditAlien />
        </Button>
      </Flex>
      <Divider maxWidth="67rem" margin="0 auto" />
      <Flex maxWidth="67rem" margin="0 auto" pt="2.5rem" pb="2.5rem" w="100%">
        <Stack w="20%">
          <Heading as="h3" size="xs" pb="10px">
            Products
          </Heading>
          <Link href="https://chakra-ui.com" isExternal>
            Rankings
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            NFTs
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token Explorer
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Portfolio
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token swap
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Airdrops
          </Link>
        </Stack>
        <Stack w="20%">
          <Heading as="h3" size="xs" pb="10px">
            Products
          </Heading>
          <Link href="https://chakra-ui.com" isExternal>
            Rankings
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            NFTs
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token Explorer
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Portfolio
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token swap
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Airdrops
          </Link>
        </Stack>
        <Stack w="20%">
          <Heading as="h3" size="xs" pb="10px">
            Products
          </Heading>
          <Link href="https://chakra-ui.com" isExternal>
            Rankings
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            NFTs
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token Explorer
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Portfolio
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token swap
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Airdrops
          </Link>
        </Stack>
        <Stack w="20%">
          <Heading as="h3" size="xs" pb="10px">
            Products
          </Heading>
          <Link href="https://chakra-ui.com" isExternal>
            Rankings
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            NFTs
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token Explorer
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Portfolio
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token swap
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Airdrops
          </Link>
        </Stack>
        <Stack>
          <Heading as="h3" size="xs" pb="10px">
            Products
          </Heading>
          <Link href="https://chakra-ui.com" isExternal>
            Rankings
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            NFTs
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token Explorer
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Portfolio
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Token swap
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Airdrops
          </Link>
        </Stack>
      </Flex>
      <Flex
        maxWidth="67rem"
        m="0 auto"
        pb="2.5rem"
        pt="2rem"
        alignItems="center"
      >
        <Text fontSize="sm">
          List of services that we’re using to calculate data:
        </Text>
        <Image src={ImgFooter} h="14px" ml="20px" />
        <Image src={ImgFooterTwo} h="29px" ml="20px" />
        <Image src={ImgFooterThree} h="18px" ml="20px" />
      </Flex>
      <Divider maxWidth="67rem" margin="0 auto" mb="2.5rem" />
    </Box>
  );
};

export default Footer;
