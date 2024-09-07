import "./Info.css";
import githubIcon from "../assets/github.svg";
import envelopeIcon from "../assets/envelope.svg";

function Info() {
  return (
    <footer id="info-wrapper">
      <div id="info-container">
        <a
          className="info-element"
          href="https://github.com/RogierdeRuijter"
          onClick={() => {
            gtag("event", "click", {
              event_category: "external-links",
              event_label: "projects",
            });
          }}
          target="_blank"
          style={{ marginRight: "calc(15% - 8px)" }}
        >
          <img src={githubIcon} />
          Projects
        </a>
        <a
          className="info-element"
          href="mailto:rogierderuijter@hotmail.com"
          label="rogierderuijter.com"
          onClick={() => {
            gtag("event", "generate_lead");
          }}
          style={{
            marginRight: "calc(15% - 8px)",
            fontWeight: "500",
          }}
        >
          <img src={envelopeIcon} />
          Contact me
        </a>
      </div>
    </footer>
  );
}

export default Info;
