import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import About from "./components/About";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";

import Blogs from "../src/components/Bllogs";
function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
