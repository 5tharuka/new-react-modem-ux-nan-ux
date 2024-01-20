import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imge";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3___blog-hadding">
        <h1 className="gradient__text">
          A lot happening.We are blogging about it.
        </h1>
      </div>
      <div className="gpt3___blog-container">
        <div className="gpt3__clog-container_groupA">
          <Article
            imgUrl={blog01}
            date="sep 26 2023"
            title="Open Ai it the future.Let us exlore how it is?"
          />
        </div>
        <div
          className="gpt3__clog-container_groupB"
          title="Open Ai it the future.Let us exlore how it is?"
        >
          <Article
            imgUrl={blog02}
            date="sep 7 2023"
            title="Open Ai it the future.Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="sep 16 2023"
            title="Open Ai it the future.Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="sep 6 2023"
            title="Open Ai it the future.Let us exlore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="sep 16 2023"
            title="Open Ai it the future.Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
