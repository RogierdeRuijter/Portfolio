# I found a fantastic use case for a web component: The Popover API

I believe I’ve discovered a fantastic use case for a web component. Displaying a
popover positioned below an anchor element. To do this, we utilize the
[Popover API](https://developer.chrome.com/blog/introducing-popover-api/) and a
fallback mechanism for browsers that lack support for the Popover API.

> A popover is another word for a popup. A popover is an overlay that is shown
> on top of the other elements on the screen. I will use the word popover
> because this is the word that the HTML specification uses for this feature.

## Demo of web component

<iframe src="webcomponent-popover.html" ></iframe>

## Why this is a good use case

I believe this use case has the essential element for creating a successful web
component. _Our goal is to encapsulate a piece of functionality that is
independent of the content._

Let’s go into more detail about what I mean by this. With _functionality_, I
refer to behavior on the website. For example, showing and hiding a popover or a
fade-in animation on an image when it appears on the screen. By _content_, I
refer to a piece of HTML and CSS that displays, for example, a button or a form
for a newsletter.

Because working with the Popover API and its fallback requires a combination of
HTML, CSS, and JavaScript, it is a perfect candidate for a custom element with a
Shadow DOM.

## The code

Below, you’ll find the code showing the API of the web component and the
JavaScript that constructs it. After that, we’ll delve deeper into the HTML,
CSS, and JavaScript of it.

### How to use it

The web component API has an anchor slot and a popover slot. The anchor is used
by the popover to position itself underneath it. In this example, we use a form
as an anchor and a fictional error message as the popover.

```html
<my-anchored-popover>
  <form slot="anchor">
    <h1>My form</h1>
    <input type="text" placeholder="Enter your name" />
    <button type="submit">Submit</button>
  </form>
  <p slot="popover">An error occurred while processing your request</p>
</my-anchored-popover>
```

### How it is built

I opted to use an anchor element because I believe it’s a good practice to
display situation information, such as an error message, close to the element
that triggered the situation.

This web component could be extended with a lot of configurations. For instance,
you can add an option that allows you to also position the popover at the top of
the element. While I didn’t include this feature in my design, it’s certainly
something you can incorporate if you desire.

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
      this.popoverElement.style.setProperty("--left", `${rect.left}px`);
    } else {
      this.popoverElement.classList.add("popover-fallback");
    }
  }
}

customElements.define("my-anchored-popover", MyAnchoredPopover);
```

### The HTML

There are 2 slots in this custom element. A slot called `anchor` and a slot
called `popover`. The slot for the anchor should contain the element that you
want the popover to be positioned underneath. The popover slot should be the
content that you want to show in the popover.

```html
<div anchor>
  <slot name="anchor"></slot>
  <div popover="auto">
    <slot name="popover"></slot>
  </div>
</div>
```

The elements that are placed inside the slot are positioned in the Light DOM.
And only the HTML elements that you see above will be placed in the Shadow DOM.

### The CSS

I won't go into detail about how to style the popover API, you can find that
[here](https://developer.chrome.com/blog/introducing-popover-api/). But I will
tell you how the positioning of the popover works and how the fallback works.

#### The positioning

```css
[popover] {
  top: calc(var(--bottom) + 1rem);
  left: var(--left);
}
```

The positioning of the popover is achieved using 2 custom properties, —bottom
and —left. These custom properties are set in JavaScript and represent the pixel
values of the anchor element on the viewport. We align the bottom of the anchor
with the top of the popover; this way, it appears underneath the anchor element.

Most likely, you would want to use relative positioning for this issue, but
unfortunately, we cannot do so because the popover resides in the
[top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer). The
top layer is independent of the document layer; therefore, it lacks any
connection to the elements it was close to before. This is good because the
z-index issues that once plagued us are no longer a problem, but it also means
that positioning becomes more challenging.

##### CSS anchoring

There is good news for the positioning issue related to the top layer; there
will be a more elegant solution for this in the future, known as
[`CSS anchoring`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning).
However, until the specification is stable, WebKit has not indicated
[its support](https://github.com/WebKit/standards-positions/issues/167#issuecomment-1708871010)
for the current version; I will not implement CSS anchoring as a progressive
enhancement.

#### The fallback

For the fallback, we can use relative/absolute positioning. The anchor is
relative, and the popover element is positioned absolutely. This is a lot easier
than all the magic we had to perform above, but this misses all the features
from the Popover API.

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

The JavaScript handles showing the popover and positioning the element relative
to the anchor. To get the popover positioned under the chosen anchor element, we
use the `getBoundingClientRect` method to get the pixel of the anchor. And set
the `--bottom` and `--left` custom properties. To eventually show the popover,
we call the `showPopover` method on the popover element.

For the fallback, we add the `popover-fallback` class to the popover element.

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

Using a web component to encapsulate the functionality of the Popover API that
is anchored to an element seems to be a great use case. The very nature of the
problem makes it a suitable candidate. To sum why this is a good use case:

- Our goal is to display an item on the screen that is anchored to an element.
- We require a combination of HTML, CSS, and JavaScript to achieve this.
- The functionality is independent of the appearance of the popover or its
  anchor.

I hope to find similar structures in our code base that would benefit from this
type of encapsulation.

## A working example

<details>
  <summary>Click here to see the working example</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Anchored popover</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
</head>

<body>
<main>
  <my-anchored-popover>
    <button slot="anchor">Click me</button>
    <div slot="popover">
      <p>This is a popover!</p>
    </div>
  </my-anchored-popover>
</main>
<style>
  body {
    margin: 0;
  }

  main {
    padding: 3rem;
    display: flex;
  }

  button {
    font-size: 1.25rem;
  }

  my-anchored-popover {
    margin: auto;
  }
</style>
<script>
  document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("my-anchored-popover").showPopover();
  });
</script>
</body>

<script>
class MyAnchoredPopover extends HTMLElement {
  anchorElement;
  popoverElement;
  hasPopoverApiSupport = HTMLElement.prototype.hasOwnProperty("popover");

  constructor() {
    super();
    this.attachShadow({mode: "open"});

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
          background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.25));
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
    if (this.hasPopoverApiSupport) {
      this.popoverElement.showPopover();

      const rect = this.anchorElement?.getBoundingClientRect();
      this.popoverElement.style.setProperty(
        "--bottom",
        `${(rect?.bottom ?? 0) + document.documentElement.scrollTop}px`,
      );
      this.popoverElement.style.setProperty("--left", `${rect?.left}px`);
    }
    else {
      this.popoverElement.classList.add("popover-fallback");
    }
  }

  hidePopover() {
    if (this.hasPopoverApiSupport) {
      this.popoverElement.hidePopover();
    }
    else {
      this.popoverElement.classList.remove("popover-fallback");
    }
  }
}

customElements.define('my-anchored-popover', MyAnchoredPopover);
</script>

</html>
</details>
```
