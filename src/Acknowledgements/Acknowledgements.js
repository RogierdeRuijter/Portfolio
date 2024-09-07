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
            I am forever grateful for everyone I have worked with.
            Thank you so much. Special thanks:
          </p>
          <ul>
            <li>
              <strong>Lourens</strong>, your love for development
              radiates. It touched my soul in many ways I can't
              describe. Thank you for giving me love for updates.
            </li>
            <li>
              <strong>Menno</strong>, for scaring me into making
              beautiful things.
            </li>
            <li>
              <strong>Niels</strong>, for showing me what a review
              looks like.
            </li>
            <li>
              <strong>Isabelle</strong>, for getting lost in
              conversations with me.
            </li>
          </ul>
          <p>
            And above all, thanks <strong>mom</strong> for the love,
            support, dedication, and drive to give us whatever we
            needed. You have made me into what I am.
          </p>
        </section>
      </div>
    </>
  );
}

export default Acknowledgements;
