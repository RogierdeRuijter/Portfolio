import "./Info.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";

function Info() {
  return (
    <ContentContainer withFullScreenHeight={true}>
      <div className="info-container">
        <div>
          <div className="info-content">
            <div>
              I am forever grateful for everyone I have worked with, thank you
              so much.
            </div>
            <div style={{ marginTop: "10px" }}>
              Special thanks:
              <ul className="special-thanks">
                <li>
                  Lourens, your love for development radiates. It touched my
                  soul in many ways I can't describe. Thank you for giving me a
                  love for updates.
                </li>
                <li>Menno, for scaring me into making beautiful things.</li>
                <li>Niels, for showing me what a review looks like.</li>
                <li>Isabelle, for getting lost in conversations with me.</li>
              </ul>
            </div>
            <div style={{ marginTop: "20px" }}>
              And above all, thanks mom for the love, support, dedication, and
              drive to give us whatever we needed.
            </div>
            <div style={{ marginTop: "15px" }}>
              You have made me into what I am.
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

export default Info;
