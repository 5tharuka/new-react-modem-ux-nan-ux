import "./feature.css";

const Feature = (props) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__features__title">
        <div />
        <h1>{props.title}</h1>
      </div>
      <div className="gpt3__features-container__features__text">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Feature;
