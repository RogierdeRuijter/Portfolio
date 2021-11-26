import "./Welcome.css";

function Welcome({ children }) {
  return (
    <div id="welcome-container">
      <div style={{ fontSize: "4vw" }}>
        {children}
      </div>
      <div id="scroll-down-element">
        <span id="scroll-down-element-line"></span>
        <span id="scroll-down-element-text">Scroll</span>
      </div>
    </div>
  );
}

export default Welcome;
