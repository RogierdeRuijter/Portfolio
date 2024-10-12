  export function metaTagExists(property) {
    return document.querySelector(`meta[property='${property}']`) !== null;
  }

  export function appendMetaTag(property, content) {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
  }


