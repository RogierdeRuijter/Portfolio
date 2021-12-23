import "./Acknowledgements.css";

function Acknowledgements() {
  return (
    <>
      <div className="acknowledgements-spacer"></div>
      <div className="acknowledgements-container">
        <div className="acknowledgements-content">
          <div>
            I am forever grateful for everyone I have worked with. Thank you so
            much.
          </div>
          <div style={{ marginTop: "16px" }}>
            Special thanks:
            <ul className="special-thanks">
              <li>
                Lourens, your love for development radiates. It touched my soul
                in many ways I can't describe. Thank you for giving me a love
                for updates.
              </li>
              <li>Menno, for scaring me into making beautiful things.</li>
              <li>Niels, for showing me what a review looks like.</li>
              <li>Isabelle, for getting lost in conversations with me.</li>
            </ul>
          </div>
          <div style={{ marginTop: "16px" }}>
            And above all, thanks mom for the love, support, dedication, and
            drive to give us whatever we needed.
          </div>
          <div style={{ marginTop: "16px" }}>
            You have made me into what I am.
          </div>
        </div>
      </div>
    </>
  );
}

export default Acknowledgements;