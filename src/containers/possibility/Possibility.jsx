import "./possibility.css";
import passibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__posssibility section__padding" id="Possibility">
      <div className="gpt3__posssibility-img">
        <img src={passibility} alt="passibility" />
      </div>
      <div className="gpt3__posssibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The Posssibility are beyond Your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Labore, tenetur necessitatibus, corrupti
          numquam eaque architecto vel cumque distinctio iusto, blanditiis quam
        </p>
        <h4>Request Eariy Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
