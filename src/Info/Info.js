import "./Info.css";

function Info() {
  return (
    <div id="info-wrapper">
      <div id="info-container">
        <a
          className="info-element"
          href="https://github.com/RogierdeRuijter"
          target="_blank"
          style={{ marginRight: "32px" }}
        >
          <img src="https://img.icons8.com/ios/150/000000/github--v1.png" />
          Projects
        </a>
        <a
          className="info-element"
          href="mailto:rogierderuijter@hotmail.com"
          label="rogierderuijter.com"
          onClick={() => {
            gtag("event", "generate_lead");
          }}
          style={{ marginRight: "32px", fontWeight: "500" }}
        >
          <img src="https://img.icons8.com/ios/150/000000/apple-mail.png" />
          Contact me
        </a>
        <a
          className="info-element"
          href="https://medium.com/@vsfhtvjshn"
          target="_blank"
        >
          <img src="https://img.icons8.com/ios/150/000000/medium-logo.png" />
          Blog
        </a>
      </div>
    </div>
  );
}

export default Info;
