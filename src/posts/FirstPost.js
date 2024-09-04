import SyntaxHighlighting from "../SyntaxHighlighting";
import post from "!!raw-loader!./journey-with-webcomponents.md";
import "./post.css";

export default function FirstPost() {
  const date = new Date("2024-09-01").toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="post">
      <time id="2024-09-01">{date}</time>
      <SyntaxHighlighting title="1">{post}</SyntaxHighlighting>
    </div>
  );
}
