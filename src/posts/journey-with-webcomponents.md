# My journey with web components

**TL;DR**: Web components currently don't offer enough features to
build a full-fledged UI library with them. But there might be hope...

## Previous approach

My journey with web components has been an intriguing one. When I
joined VPRO, they were already utilizing web components.

> Throughout this post, when I refer to a web component, I mean a
> custom element with a shadow DOM attached to it.

At the time, we were working on a legacy web app that was challenging
to modify. The idea was that if we created a UI library with web
components, we would be able to still make progress on standardizing
the UI while not having to worry about other parts of the web app.
Besides, and this might be the main reason, that when we decided to
move away from the legacy app, we could reuse the UI library because
web components are framework agnostic.

This led us to attempt to accommodate both simple and complex UI
patterns within a web component. Especially the complex patterns led
to difficulties. Let’s examine a complex UI pattern, such as a card.
To pass data into the web component, we utilized attributes on the
custom element in the following manner:

```html
<my-card
  title="My Title"
  description="This is a description"
  image="https://placekitten.com/200/300"
  icon="arrowRight"
>
</my-card>
```

Within the custom element, we would map these attributes at runtime to
the corresponding HTML elements within the Shadow DOM. The render
function of the ([Lit](https://lit.dev/) powered) custom element would
look something like this:

```javascript
render() {
  return html`
    <div>
      ${this.title ? html`<h2>${this.headline}</h2>` : html``}
      ${this.description ? html`<p>${this.summary}</p>` : html``}
      ${this.image ? html`<my-image src=${this.image}></my-image>` : html``}
      ${this.icon ? html`<my-icon icon=${this.icon}></my-icon>` : html``}
    </div>
  `;
}
```

This approach resembles how frameworks like React and Angular render
their components in the browser. However, it felt strange to require
JavaScript for basic UI functionality. Additionally, the styles that
need to be included in the Shadow DOM are more extensive than
anticipated. For instance, in the provided example, we also need to
include text styles. That adds an additional 15 - 50 lines of CSS
depending on the amount of text styles.

While these issues are not deal-breakers, we have built around 30
components this way. There are peculiar workarounds that you have to
do to get it to do what you want.

## A Way Forward

About a year ago, we decided to rebuild the frontend applications to
replace the legacy web app. This gave us an opportunity to choose a
new tech stack. We decided to go with Astro as our frontend framework
and web components for our UI library. In this setting, we tried to
find solutions to our problems above.

### A Possible Solution

To circumvent the requirement for JavaScript to render the user
interface, we attempted to pass the HTML elements into a slot within
the Shadow DOM, as illustrated below:

```html
<my-card>
  <h2>My Title</h2>
  <p>This is a description</p>
  <my-image
    src="https://placekitten.com/200/300"
    alt="A cute kitten"
  ></my-image>
  <my-icon name="arrowRight"></my-icon>
</my-card>
```

This way, we could have a complete HTML file coming from the server.
The idea was that we could style the elements passed in the slot from
within the Shadow DOM, like so:

```css
::slotted(h2) {
  font-size: 1.4rem;
}

::slotted(p) {
  font-size: 1.1rem;
}
```

This approach is somewhat effective, but there’s a significant
limitation: the light DOM styling will always override the Shadow DOM
styling. Therefore, if there’s a global selector styling the `h2`
element, the Shadow DOM styling will be overridden. This issue
repeatedly arose in our legacy web app, and the lack of control over
the styling of components was a deal breaker for us.

We had to find an alternative approach.

### Listening to experts

After listening to podcasts and reading articles about web components,
I realized something. When “web component advocates” discuss web
components, they consistently, although not always explicitly,
recommend using them primarily for leaf components—such as buttons,
anchors, and inputs. This was quite different from our approach, which
was to try and fit everything into a web component.

To give web components the best chance of succeeding, we committed to
using them only for leaf components and avoiding them for more complex
UI patterns. The complex UI patterns would be built with Astro
components.

## Current Approach

Our current approach involves using web components exclusively for
_certain_ leaf components. These are leaf components that we intend to
brand and potentially reuse in other projects that don’t utilize
Astro. For instance, our web component library currently includes the
following elements: `button`, `input`, and `icon`.

### Note: about web components in Astro

When you build web components using Lit and render them in Astro,
[declarative shadow DOM](https://web.dev/articles/declarative-shadow-dom)
is employed, which is fantastic. This feature enables the rendering of
a shadow DOM without the need for JavaScript. This addresses our
initial issue but introduces new challenges. Primarily, the HTML file
size increases due to the output of CSS into the HTML. However, due to
gzip compression and smartness from the CSS parser, this is supposedly
not a significant concern. Nevertheless, the file size grows rapidly,
especially if the shadow DOM contains approximately 150 lines of CSS.

### Button

The button offers various UI variants, including primary, secondary,
tertiary, and an outline button. Consequently, 150 lines of CSS are
generated for each button. This occurs because Shadow DOM is not
intended for scoping CSS but rather for _isolating_ it, a concept I’ll
revisit later. This means that if there are five buttons on a page,
750 lines of CSS will be output into the DOM. This results in small
pages being between 200kb and 1mb.

### Element

The input element functions quite effectively within a Shadow DOM.
There’s a significant amount of JavaScript that dynamically displays
and conceals elements and validations on the form element. The
isolation of DOM elements is well-suited for this scenario. Moreover,
interacting with forms has been significantly enhanced with the
[Element Internals API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals).

### Icon

The icon also performs reasonably well, but there’s some uncertainty
regarding the necessity of the additional shadow DOM. SVGs already
possess their own shadow DOM. Wrapping them in another shadow DOM
appears unnecessary.

## Conclusion

From my time with web components, I draw the following conclusion:
Creating a UI library using web components gives us more problems than
it solves. While the `input` element functions effectively,
maintaining a Lit codebase for a single use case seems excessive.
Perhaps when we have the need to support multiple frameworks, we’ll
revisit this approach or we will build web components without Lit.

The concept of building a UI library with custom elements appears
logical and appealing. However, I believe that the current web
standards lack sufficient support for this approach.

I propose two primary reasons for this. The first relates to the
distinction between isolation and scoping. The second relates to the
implementation of the custom elements specification.

The scoping versus isolation debate has also been discussed by Keith
J. Grant in
[this blog post](https://keithjgrant.com/posts/2023/08/scope-vs-shadow-dom/#shadow-dom-does-not-provide-what),
where he argues that Shadow DOM offers isolation from the DOM, but not
scoping. Scoping, in essence, resides alongside the cascade. He
contends that
[`@scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope)
provides a solution that embraces the cascade while allowing us to
scope CSS to a specific element.

The second argument is that WebKit is unlikely to implement the
Customized built-in elements feature of the custom element
specification. Consequently, we have an even more limited set of tools
to work with.

I am a big fan of web components, and their potential is truly
remarkable. I eagerly anticipate experimenting with `@scope` soon to
determine if it is the missing piece of the puzzle, enabling us to
construct a fully platform-agnostic UI library.

It would be surprising, but who knows!
