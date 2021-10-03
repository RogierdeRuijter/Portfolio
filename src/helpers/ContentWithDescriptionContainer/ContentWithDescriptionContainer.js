import "./ContentWithDescriptionContainer.css";

function ContentWithDepContainer({
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

export default ContentWithDepContainer;
