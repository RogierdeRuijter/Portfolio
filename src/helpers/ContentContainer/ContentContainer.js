import "./ContentContainer.css";

function ContentContainer(props) {
  return (
    <div id={props.id} className="content-container">
      {props.children}
    </div>
  );
}

export default ContentContainer;
