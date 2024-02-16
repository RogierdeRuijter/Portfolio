import "./ProjectTitle.css";

function ProjectTitle({ title, popoverTargetId }) {
  const handleClick = () => {
    const heading = document.getElementById(`project-title-${title}`);
    const popover = document.getElementById(popoverTargetId);

    const headingBounding = heading.getBoundingClientRect();

    const startHeight = 160;

    setTimeout(() => {
      const popoverBounding = popover.getBoundingClientRect();
      const height = popoverBounding.height;
      const endHeight = startHeight - height - 8;

      popover.animate(
        [
          { transform: "translateY(0)" },
          { opacity: 0, offset: 0 },
          { opacity: 0.2, offset: 0.8 },
          { opacity: 1, offset: 1 },
          {
            transform: `translateY(${endHeight}px)`,
          },
        ],
        {
          duration: 250,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    }, 0);

    popover.style.setProperty(
      "--top",
      `${
        (headingBounding?.top ?? 0) +
        document.documentElement.scrollTop -
        startHeight
      }px`
    );
  };

  return (
    <header className="project-header">
      <h2 className="project-title" id={`project-title-${title}`}>
        {title}
      </h2>
      <button
        id={`info-button-${title}`}
        className="project-title-info"
        popovertarget={popoverTargetId}
        popovertargetaction="toggle"
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22">
          <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
        </svg>
      </button>
    </header>
  );
}

export default ProjectTitle;
