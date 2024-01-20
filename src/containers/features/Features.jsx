import { Feature } from "../../components";
import "./features.css";
const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias incidunt dicta alias quae reiciendis cum, saepe accusamus dignissimos minima harum neque deserunt commodi officia.",
  },
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias incidunt dicta alias quae reiciendis cum, saepe accusamus dignissimos minima harum neque deserunt commodi officia.",
  },
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias incidunt dicta alias quae reiciendis cum, saepe accusamus dignissimos minima harum neque deserunt commodi officia.",
  },
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias incidunt dicta alias quae reiciendis cum, saepe accusamus dignissimos minima harum neque deserunt commodi officia.",
  },
];

const Features = () => {
  return (
    <div className="gpt3___features section__padding" id="features">
      <div className="gpt3___features__heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen .{" "}
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className=" gpt3__features-p">
        {featuresData.map((item, index) => {
          return (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
