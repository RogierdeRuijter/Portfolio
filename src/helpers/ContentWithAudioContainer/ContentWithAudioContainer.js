import "./ContentWithAudioContainer.css";

function ContentWithAudioContainer({ id, title, children }) {
  return (
    <>
      <div className="project-introduction">
        <div>{title}</div>
      </div>
      <div id={id} className="content-container-with-description">
        {children}
      </div>
    </>
  );
}

export default ContentWithAudioContainer;
