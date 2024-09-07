import FirstPost from "./posts/1-FirstPost";
import SecondPost from "./posts/2-UseCaseWebcomponent";

export default function AllBlogPosts() {
  return (
    <>
      <SecondPost />
      <hr />
      <FirstPost />
    </>
  );
}
