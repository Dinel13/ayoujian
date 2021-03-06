import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/nav";
import Pricing from "./components/Pricing";
import Penjelas from "./components/Penjelas";
import Keunggulan from "./components/Keunggulan";
import Login from "./components/Login";
import NotFound from "./components/404.js";
import Register from "./components/Register";

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
        <Route path="/siswa/masuk" exact>
          <Login from="siswa"/>
        </Route>
        <Route path="/siswa/daftar" exact>
          <Register from="siswa"/>
        </Route>
        <Route path="/guru/masuk" exact>
          <Login from="guru"/>
        </Route>
        <Route path="/guru/daftar" exact>
          <Register from="guru" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
