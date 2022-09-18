/** @format */
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Hero from "./sections/Hero";

import Markets from "./pages/Markets";
import Info from "./sections/Info";
import CryptocurrenyPrices from "./components/PriceAPI.js";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Info />
      <CryptocurrenyPrices />
      <Footer />
    </>
  );
}
