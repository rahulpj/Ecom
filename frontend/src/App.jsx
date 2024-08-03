import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/components/pages/HomePage";
import HomeSectionCarousel from "./customer/components/HomeSectionCarousel/HomeSectionCarousel";
import Footer from "./customer/components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <HomePage />
      {/* <HomeSectionCarousel/>     */}
      <Footer />
    </>
  );
}

export default App;
