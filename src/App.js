import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/nav";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
     <Nav />
      <Hero />
      <Pricing />
      <Footer />
      <Switch></Switch>
    </>
  );
};

export default App;
