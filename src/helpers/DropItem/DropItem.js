import "./DropItem.css";

/*
 * Item that is there to display that the user can scroll down
 *
 * The consumer of this component should have position relative as a css style.
 * Since this component is positioned absolute.
 */
function DropItem() {
  return (
    <div className="full-page-wrapper">
      <div className="drop-item-container">
        <span className="scroll-down-element-line"></span>
      </div>
    </div>
  );
}

export default DropItem;
