import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/nav";
import Pricing from "./components/Pricing";
import Penjelas from "./components/Penjelas";
import Keunggulan from "./components/Keunggulan";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <Hero />
          <Penjelas />
          <Keunggulan />
          <Pricing />
        </Route>
        <Route path="/siswa/daftar" exact>
          <Login />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
