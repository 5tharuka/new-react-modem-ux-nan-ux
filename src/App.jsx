// import Css
import "./App.css";
// import components
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGTP3,
} from "./containers";

import { NavBar, Brands, Cti } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brands />
      <WhatGTP3 />
      <Features />
      <Possibility />
      <Cti />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
