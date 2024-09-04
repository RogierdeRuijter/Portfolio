import SyntaxHighlighting from "../SyntaxHighlighting";
import post from "!!raw-loader!./journey-with-webcomponents.md";
import './post.css';

export default function FirstPost() {
  const date = new Date("2024-09-01").toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      class="post"
      style={{
        padding: "0 2rem",
        maxWidth: "60ch",
        margin: "auto",
        lineHeight: 1.6,
        fontSize: "1.15rem",
      }}
    >
      {date}
      <SyntaxHighlighting title="1">{post}</SyntaxHighlighting>
    </div>
  );
}
