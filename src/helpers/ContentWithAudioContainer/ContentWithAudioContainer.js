import "./ContentWithAudioContainer.css";

function ContentWithAudioContainer({ id, title, children }) {
  return (
    <>
      <div className="project-introduction">
        <div id="container">
          <div id="title">{title}</div>
          <div>
            Toen ik 7 was zag ik dit spel op konningendag. 4 vissen die tegen
            elkaar racen. Ik ben het nooit meer vergeten. Nu kan ik het elke dag
            spelen.
          </div>
        </div>
      </div>
      <div id={id} className="content-container-with-description">
        {children}
      </div>
    </>
  );
}

export default ContentWithAudioContainer;
