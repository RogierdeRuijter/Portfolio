import SyntaxHighlighting from "../SyntaxHighlighting";
import post from "!!raw-loader!./i-found-a-usecase-for-a-webcomponent.md";
import "./post.css";

export default function Post() {
  const dateString = "2024-09-06";
  const postNumber = 2;

  const date = new Date(dateString).toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="post odd-background">
      <time id={dateString}>{date}</time>
      <SyntaxHighlighting title={postNumber}>
        {post}
      </SyntaxHighlighting>
    </div>
  );
}
