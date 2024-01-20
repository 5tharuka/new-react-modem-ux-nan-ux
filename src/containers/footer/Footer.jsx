import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-hading">
        <h1 className="gradient__text">
          Do you want to step in to the future before athers{" "}
        </h1>
        <div className="gpt3___footer-btn">
          <p>Request Early Acccess</p>
        </div>
      </div>
      {/*  */}
      <div className="gpt3___footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} />
          <p>terwoord k12 182 ok Aiknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-div">
          <h4>Get in touch</h4>
          <p>Crechterowoord k12 ok aiknjcb</p>
          <p>087-554155</p>
          <p>info@pyne.net</p>
        </div>
      </div>
      <div className="gpt3___footer-copyright">
        <p>&copy; 2023 GPT-3.All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
