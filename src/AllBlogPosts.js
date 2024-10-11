import FirstPost from "./posts/1-FirstPost";
import SecondPost from "./posts/2-UseCaseWebcomponent";
import ThirdPost from "./posts/3-one-detail-can-i-use";
import "./AllBlogPosts.css";

export default function AllBlogPosts() {
  return (
    <div className="blog-container">
      <ThirdPost />
      <hr />
      <SecondPost />
      <hr />
      <FirstPost />
    </div>
  );
}
