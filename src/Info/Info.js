import "./Info.css";
import githubIcon from "../assets/github.svg";
import envelopeIcon from "../assets/envelope-open.svg";
import mediumIcon from "../assets/medium-m.svg";

function Info() {
  return (
    <div id="info-wrapper">
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
          style={{ marginRight: "64px" }}
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
          style={{ marginRight: "64px", fontWeight: "500" }}
        >
          <img src={envelopeIcon} />
          Contact me
        </a>
        <a
          className="info-element"
          href="https://medium.com/@vsfhtvjshn"
          onClick={() => {
            gtag("event", "click", {
              event_category: "external-links",
              event_label: "blog",
            });
          }}
          target="_blank"
        >
          <img src={mediumIcon} />
          Blog
        </a>
      </div>
    </div>
  );
}

export default Info;
