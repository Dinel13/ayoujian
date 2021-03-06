import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/nav";
import Pricing from "./components/Pricing";
import Penjelas from "./components/Penjelas";
import Keunggulan from "./components/Keunggulan";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Penjelas />
      <Keunggulan />
      <Pricing />
      <Footer />
      <Switch></Switch>
    </>
  );
};

export default App;
