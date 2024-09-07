# A good use case for a web component: Popover API with fallback

I believe that I have found a great use case for a web component: a
[Popover API](https://developer.chrome.com/blog/introducing-popover-api/)
with a fallback for browsers that do not support the Popover API.

> A popover is another word for a popup. A popover is an overlay that
> is shown on top of the other elements on the screen. I will use the
> word popover because this is the word that the HTML specification
> uses for this feature.

## Demo of web component

<iframe src="webcomponent-popover.html" ></iframe>

## Why this is a good use case

I believe this use case has the essential element for creating a
successful web component. _Our goal is to encapsulate a piece of
functionality that is independent of the content._

With functionality I refer to behavior on the website. For example,
showing and hiding a popover or adding a fade in animation on an image
when it appears on the screen.

By content, I refer to a section of HTML and CSS that displays, for
example, a form for a newsletter.

Because working with the Popover API and its fallback requires a
combination of HTML, CSS, and JavaScript, it is a perfect candidate
for a custom element with a Shadow DOM.

## The code

Below, you’ll find the code for using the web component and the
JavaScript that demonstrates its construction. Subsequently, we’ll
delve deeper into the intricacies of HTML, CSS, and JavaScript of the
web component.

### How to use it

```html
<my-anchored-popover>
  <form slot="anchor">
    <h1>My form</h1>
    <input type="text" placeholder="Enter your name" />
    <button type="submit">Submit</button>
  </form>
  <p slot="popover">
    An error occurred while processing your request
  </p>
</my-anchored-popover>
```

### How it is build

```javascript
class MyAnchoredPopover extends HTMLElement {
  anchorElement;
  popoverElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <div anchor>
        <slot name="anchor"></slot>
        <div popover="auto">
          <slot name="popover"></slot>
        </div>
      </div>
      <style>
        [popover] {
          position: absolute;
          margin: 0;
          top: calc(var(--bottom) + 1rem);
          left: var(--left);
        }

        [popover]::backdrop {
          background: linear-gradient(
            rgba(0,0,0,0.1), 
            rgba(0,0,0,0.25)
          );
        }

        @supports not selector([popover]:popover-open) {
          [popover] {
            display: none;
          }

          [anchor] {
            position: relative;
          }

          .popover-fallback {
            display: block;
            z-index: 1;
            border: 3px solid black;
            margin-top: 1rem;
            background: #fff;
          }
        }
      </style>
    `;
  }

  connectedCallback() {
    this.anchorElement = this.shadowRoot.querySelector("[anchor]");
    this.popoverElement = this.shadowRoot.querySelector("[popover]");
  }

  showPopover() {
    if (HTMLElement.prototype.hasOwnProperty("popover")) {
      this.popoverElement.showPopover();

      const rect = this.anchorElement?.getBoundingClientRect();

      if (!rect) return;

      this.popoverElement.style.setProperty(
        "--bottom",
        `${rect.bottom + document.documentElement.scrollTop}px`
      );
      this.popoverElement.style.setProperty(
        "--left",
        `${rect.left}px`
      );
    } else {
      this.popoverElement.classList.add("popover-fallback");
    }
  }
}

customElements.define("my-anchored-popover", MyAnchoredPopover);
```

### The HTML

There are 2 slots in this custom element. A slot called `anchor` and a
slot called `popover`. The slot for the anchor should contain the
element that you want the popover to be positioned underneath. The
popover slot should be the content that you want to show in the
popover.

```html
<div anchor>
  <slot name="anchor"></slot>
  <div popover="auto">
    <slot name="popover"></slot>
  </div>
</div>
```

The elements that are placed inside the slot are positioned in the
Light DOM. And only the HTML elements that you see above will be
placed in the Shadow DOM.

### The CSS

I won't go into detail about how to style the popover API, you can
find that
[here](https://developer.chrome.com/blog/introducing-popover-api/).
But I will tell you how the positioning of the popover works and how
the fallback works.

#### The positioning

```css
[popover] {
  top: calc(var(--bottom) + 1rem);
  left: var(--left);
}
```

The positioning of the popover is achieved using the -—bottom and
-—left custom properties. These custom properties are set in
JavaScript and represent the pixel values of the anchor element. We align the 
bottom of the anchor with the top of the popover, this way it appears underneath
the anchor element.

Most likely, you would want to use relative positioning for this issue, but
unfortunately, we cannot do so because the popover resides in the
[top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer).

Because of this it lacks any connection to the elements it was close
to before. Imagine the top layer as a separate DOM entity, independent
of the main DOM. Since there is no longer a connection, these elements
cannot be used for relative positioning. Therefore, we must calculate
the position of the popover in this manner.

##### CSS anchoring

There will be a more elegant solution for this in the future, known as
[`CSS anchoring`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning).
However, until the specification is stable, WebKit has not indicated
its support for the current version, I will not implement CSS
anchoring as a progressive enhancement.

#### The fallback

The fallback is done with relative/absolute positioning. The anchor is
relative, and the popover element is positioned absolute. This is a
lot easier than all the magic we had to perform above, but this misses
all the features from the Popover API.

```css
@supports not selector([popover]:popover-open) {
  [popover] {
    display: none;
  }

  [anchor] {
    position: relative;
  }

  .popover-fallback {
    position: absolute;
    display: block;
    z-index: 1;
    border: 3px solid black;
    margin-top: 1rem;
    background: #fff;
  }
}
```

### The JavaScript

When the Popover API is supported we use the popover API to show the
elements that are in the popover slot. To get the element positioned
under the chosen anchor element, we use the `getBoundingClientRect`
method to get the pixel values needed to position the element at the
desired popover position. To eventually show the popover we call the
`showPopover` method on the popover element.

For the fallback, we add the `popover-fallback` class to the popover
element.

```javascript
showPopover() {
  if (HTMLElement.prototype.hasOwnProperty("popover")) {
    const rect = this.anchorElement?.getBoundingClientRect();
    if (!rect) return;

    this.popoverElement.style.setProperty(
      "--bottom",
      `${(rect.bottom ?? 0) + document.documentElement.scrollTop}px`,
    );
    this.popoverElement.style.setProperty("--left", `${rect?.left}px`);

    this.popoverElement.showPopover();
  }
  else {
    this.popoverElement.classList.add("popover-fallback");
  }
}
```

## Conclusion

Using a web component in conjunction with the popover API appears to
be an ideal application for a web component. The very nature of the
problem makes it a suitable candidate. Our goal is to display a
popover on the screen, and to achieve this, we require a combination
of HTML, CSS, and JavaScript to provide the necessary functionality.
In addition to that the functionality is independent of the appearance
of the popover or its anchor.

I hope to find more browser APIs that require a fallback and write web
components from them.
