/* Item that is there to display that the user can scroll down */
function DropItem() {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(50% - 20px)",
        height: "40px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span className="scroll-down-element-line"></span>
    </div>
  );
}

export default DropItem;
