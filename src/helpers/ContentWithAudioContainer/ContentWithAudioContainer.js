import "./ContentWithAudioContainer.css";

function ContentWithAudioContainer({ id, title, children }) {
  return (
    <>
      <div className="project-title">{title}</div>
      <div id={id} className="content-container-with-description">
        {children}
      </div>
    </>
  );
}

export default ContentWithAudioContainer;
