/** @format */
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Vesting from "./sections/Vesting";
import VanillaConnectionComponent from "./WalletConnect";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VanillaConnectionComponent />
      <Vesting />
      <Footer />
    </>
  );
}
