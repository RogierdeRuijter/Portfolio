import "./ContentWithDescriptionContainer.css";

// TODO: rename this component to something more matching
// TODO: deconstruct the props
function ContentWithDescriptionContainer(props) {
  return (
    <div
      id={props.id}
      className="content-container-with-description"
      style={{
        height: props.noFixedHeightContent ? "" : "100vh",
        gridTemplateRows: props.noFixedHeightContent ? "auto 20%" : "80% 20%",
      }}
    >
      {props.children}
    </div>
  );
}

export default ContentWithDescriptionContainer;
