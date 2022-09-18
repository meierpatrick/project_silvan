/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import Coin from "./Coin";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "./swipering.css";

function TokenPrices() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Flex className="sliding" gap={6} pt="5rem" bg="#0b72e7" color="#fff">
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </Flex>
  );
}

export default TokenPrices;
