import "./Acknowledgements.css";
import DropItem from "../helpers/DropItem/DropItem";

function Acknowledgements() {
  return (
    <>
      <div className="acknowledgements-spacer">
        <DropItem />
      </div>
      <div className="acknowledgements-container">
        <section className="acknowledgements-content">
          <p>
            I am forever grateful for everyone I have worked with. Thank you so
            much.
          </p>
          <h5 style={{ marginBlockStart: "1.5rem", marginBlockEnd: "1.5rem" }}>
            Special thanks:
          </h5>
          <ul style={{ listStyleType: "circle" }}>
            <li>
              Lourens, your love for development radiates. It touched my soul in
              many ways I can't describe. Thank you for giving me love for updates.
            </li>
            <li>Menno, for scaring me into making beautiful things.</li>
            <li>Niels, for showing me what a review looks like.</li>
            <li>Isabelle, for getting lost in conversations with me.</li>
          </ul>
          <p>
            And above all, thanks mom for the love, support, dedication, and
            drive to give us whatever we needed.
          </p>
          <p>You have made me into what I am.</p>
        </section>
      </div>
    </>
  );
}

export default Acknowledgements;
