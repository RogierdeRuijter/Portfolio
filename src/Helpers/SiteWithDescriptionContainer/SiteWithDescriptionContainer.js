import './SiteWithDescriptionContainer.css';

function SiteWithDescriptionContainer(props) {
  return (
    <div 
      id={props.id} 
      className="site-with-description-container" 
      style={{ height: props.noFixedHeight ? '' : '100vh' }}
        >
      { props.children }
    </div>
  );
}

export default SiteWithDescriptionContainer;