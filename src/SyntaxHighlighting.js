import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import rehypeSlug from 'rehype-slug';

function SyntaxHighlighting({ title, children }) {
  return (
    <div
    >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          a: ({ node, ...props }) => (
            <a target="_blank" rel="noopener noreferrer" {...props} />
          ),
          h1: ({ node, ...props }) => (
            <h1 id={props.id || props.children[0].replace(/\s+/g, '-').toLowerCase()} {...props} />
          ),
          h2: ({ node, ...props }) => {
            if (title) {
              props.id = `${title}~${props.id}`;
            } else {
              console.warn('No title found for id generation')
            }

            return (<h2 id={props.id} {...props} />)
          },
          h3: ({ node, ...props }) => {
            props.id = undefined;

            return (<h3 id={props.id} {...props} />)
          },
          iframe: ({ node, ...props }) => {
            props.loading = "lazy";

            return (<iframe {...props} style={{ width: "100%", height: "15rem" }} />);
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

export default SyntaxHighlighting;
