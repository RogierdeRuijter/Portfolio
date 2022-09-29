import "./IFrame.css";

function ContentWithAudioContainer({ id, title, src }) {
  return (
    <iframe
      id={id}
      title={title}
      className="iframe-size lazyload"
      data-src={src}
      loading="lazy"
      frameBorder="0"
    ></iframe>
  );
}

export default ContentWithAudioContainer;
