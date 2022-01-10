import "./ContentWithAudioContainer.css";

function ContentWithAudioContainer({ id, title, description, children }) {
  return (
    <>
      <div className="project-introduction">
        <div id="container">
          <div id="title">{title}</div>
          <div>{description}</div>
        </div>
      </div>
      <div id={id} className="content-container-with-description">
        {children}
      </div>
    </>
  );
}

export default ContentWithAudioContainer;
