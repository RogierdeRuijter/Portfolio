import "./ContentWithDescriptionContainer.css";

// TODO: rename this component to something more matching
function ContentWithDescriptionContainer({
  id,
  noFixedHeightContent,
  children,
}) {
  return (
    <div
      id={id}
      className="content-container-with-description"
      style={{
        height: noFixedHeightContent ? "" : "100vh",
        gridTemplateRows: noFixedHeightContent ? "auto 20%" : "80% 20%",
      }}
    >
      {children}
    </div>
  );
}

export default ContentWithDescriptionContainer;
