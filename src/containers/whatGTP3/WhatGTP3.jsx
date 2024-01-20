import { Feature } from "../../components";
import "./whatGTP3.css";

const WhatGTP3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin " id="WGPT3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
      <div className="gpt3__whatgpt3-hading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__features-container">
        <div>
          <Feature
            title="Chatbots"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias incidunt dicta alias quae reiciendis cum, saepe accusamus dignissimos minima harum neque deserunt commodi officia."
          />
        </div>
        <div>
          <Feature
            title="Chatbots"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias incidunt dicta alias quae reiciendis cum, saepe accusamus dignissimos minima harum neque deserunt commodi officia."
          />
        </div>
        <div>
          <Feature
            title="Education"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias incidunt dicta alias quae reiciendis cum, saepe accusamus dignissimos minima harum neque deserunt commodi officia"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGTP3;
