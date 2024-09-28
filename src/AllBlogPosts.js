import FirstPost from "./posts/1-FirstPost";
import SecondPost from "./posts/2-UseCaseWebcomponent";
import "./AllBlogPosts.css";

export default function AllBlogPosts() {
  return (
    <div className="blog-container">
      <SecondPost />
      <hr />
      <FirstPost />
    </div>
  );
}
