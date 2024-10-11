import SyntaxHighlighting from "../SyntaxHighlighting";
import post from "!!raw-loader!./one-detail-can-i-use.md";
import "./post.css";

export default function Post() {
  const dateString = "2024-10-12";
  const postNumber = 2;

  const date = new Date(dateString).toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="post odd-background">
      <time id={dateString}>{date}</time>
      <SyntaxHighlighting title={postNumber}>{post}</SyntaxHighlighting>
    </div>
  );
}
