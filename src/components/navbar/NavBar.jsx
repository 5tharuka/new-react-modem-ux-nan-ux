import "./navbar.css";
import { BsList } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/logo.svg";
import { useState } from "react";
const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>

      <p>
        <a href="#WGPT3">What GTP3?</a>
      </p>

      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studes</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggle ? (
          <GrClose
            style={{ background: "#fff", borderRadius: "20px" }}
            size={35}
            onClick={() => setToggle(false)}
          />
        ) : (
          <BsList color="#d4d4d4" size={35} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
