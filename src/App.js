/** @format */
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Vesting from "./sections/Vesting";
import VanillaConnectionComponent from "./WalletConnect";
import SwitchNetwork from "./components/SwitchNetwork";
import Contracts from "./sections/Contracts";
import BinanceAPI from "./components/BinanceAPI";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BinanceAPI />
      <Contracts />
      <SwitchNetwork />
      <VanillaConnectionComponent />
      <Vesting />
      <Footer />
    </>
  );
}
