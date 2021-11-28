import "./ContentWithDescriptionContainer.css";

function ContentWithAudioContainer({
  id,
  noFixedHeightContent,
  title,
  children,
}) {
  return (
    <>
      <div className="project-introduction">
        <div>{title}</div>
      </div>
      <div
        id={id}
        className="content-container-with-description"
        style={{
          minHeight: noFixedHeightContent ? "" : "100vh",
          gridTemplateRows: noFixedHeightContent ? "auto 20%" : "80% 20%",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default ContentWithAudioContainer;
