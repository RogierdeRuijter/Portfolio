# Our Journey with Web Components

**TL;DR**: Web components currently don't offer enough features to build a
full-fledged UI library.

## Previous Approach

My journey with web components has been an interesting one. When I started my
current job at VPRO, they were already using web components.

> Throughout this post, when I refer to web components, I mean custom elements
> with a shadow DOM attached to them.

At the time, we were working on a legacy system that was difficult to modify.
The idea was to create a full-fledged UI library built with web components.
Since web components are independent of the rest of the page, we could use them
without worrying about other CSS or JavaScript on the page. This approach
allowed us to use these components within the legacy system and, once we
transitioned away from it, easily move the UI library to a new frontend
framework. The idea is still solid and, in my opinion, represents the true
promise of web components.

This led us to try fitting both simple and complex UI patterns into a custom
element with a shadow DOM. Let’s take a look at a complex UI pattern, such as a
card. To pass data into the web component, we were using attributes on the
custom element like this:

\`\`\`html
<my-card
  title="My Title"
  description="This is a description"
  image="https://placekitten.com/200/300"
  icon="arrowRight"
>
</my-card>
\`\`\`

Within the custom element, we would map these attributes at runtime to the
corresponding HTML elements within the Shadow DOM. The render function of the
(Lit-powered) custom element would look something like this:

\`\`\`javascript
  render() {
    return html\`
      <div>
        ${this.title ? html\`<h2>${this.headline}</h2>\` : html\`\`}
        ${this.description ? html\`<p>${this.summary}</p>\` : html\`\`}
        ${this.image ? html\`<my-image src=${this.image}></my-image>\` : html\`\`}
        ${this.icon ? html\`<my-icon icon=${this.icon}></my-icon>\` : html\`\`}
      </div>
    \`;
  }
\`\`\`

This approach looks very similar to how frameworks like React and Astro render
their components in the browser. However, it didn’t feel right that JavaScript
needed to be enabled for the UI to function. Therefore, we tried exploring other
options.

## A Possible Solution

So, we tried passing the HTML elements in a slot to the Shadow DOM, like this:

\`\`\`html
<my-card>
  <h2>My Title</h2>
  <p>This is a description</p>
  <my-image
    src="https://placekitten.com/200/300"
    alt="A cute kitten"
  ></my-image>
  <my-icon name="arrowRight"></my-icon>
</my-card>
\`\`\`

This way, we could have a complete HTML file coming from the server. The idea
was that we could style the elements passed in the slot from within the Shadow
DOM, like so:

\`\`\`css
::slotted(h2) {
  font-size: 1.4rem;
}

::slotted(p) {
  font-size: 1.1rem;
}
\`\`\`

This approach kind of works, but there’s one big caveat: the light DOM styling
will always override the Shadow DOM styling. So, if there is a global selector
styling the \`h2\` element somewhere, the Shadow DOM styling will be overridden.
This occurred many times in our legacy system, and not having control over the
styling of the components was a dealbreaker for us.

## A Way Forward

About a year ago, we decided to rebuild the frontend applications to replace the
legacy system. This gave us an opportunity to choose a new tech stack. We
decided to go with Astro as our frontend meta framework and web components for
our UI library. This also gave us the opportunity to reevaluate our approach to
web components.

After listening to podcasts and reading articles about web components, something
dawned on me. When "web component advocates" discuss web components, they
consistently, though not always explicitly, recommend using them primarily for
leaf components—such as buttons, anchors, and inputs. This was very different
from what we had been doing, which was trying to fit everything into a web
component.

To give web components the best chance of succeeding, we committed to using them
only for leaf components and avoiding them for more complex UI patterns.

## Current Approach

Therefore, our current approach is to use web components only for _some_ leaf
components. These are leaf components that we want to brand and possibly reuse
in other projects that do not use Astro. This currently includes the following
elements in our web component library: \`my-button\`, \`my-input\`, and \`my-icon\`.

I will go into more detail on what works and what doesn't work for these
components.

### About Web Components in Astro

When you build web components using Lit and render them in Astro,
[declarative shadow DOM](https://web.dev/articles/declarative-shadow-dom) is
used, which is really awesome. It makes it possible to render a shadow DOM
without any JavaScript. This solves our initial problem but introduces some new
ones. Mainly, the HTML file size increases because of the CSS outputted into the
HTML. Due to gzip compression and smart CSS parsers, this is supposedly not a
big issue. But the file size increases rapidly, especially if you have a shadow
DOM that contains around 150 lines of CSS.

### Button

The button has many UI variants, such as primary, secondary, tertiary, and
outline buttons. This results in 150 lines of CSS being output into the DOM for
every button. This happens because Shadow DOM is not for scoping CSS but for
_isolating_ it, a point I will return to later. This means that if there are 5
buttons on a page, 750 lines of CSS will be output into the DOM. This gets out
of hand quickly and results in HTML files between 200kb and 1mb.

### Input

The input works quite well within a Shadow DOM. There is a lot of JavaScript
that dynamically shows and hides elements and validates the form elements. The
isolation of DOM elements works well here. Additionally, interacting with forms
has been greatly improved with the
[Element Internals API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals).

### Icon

The icon also works pretty well, but there is some question here about how much
effect an additional shadow DOM has. SVGs already have their own shadow DOM.
Wrapping them in another shadow DOM seems unnecessary.

### Conclusion

All of the above led us to the following conclusion: Web components give us more
headaches than they solve. Yes, the \`input\` works nicely, but maintaining a Lit
codebase for one use case seems a bit overkill. Maybe when we have a use case
for multiple frameworks, we will come back to them.

The idea of building a UI library with custom elements feels very logical and
appealing, but we don't feel that the current web standards are there yet.

I believe there are two main reasons for this. One has to do with isolation vs.
scoping, and the other with the custom elements spec itself.

The isolation vs. scoping point has also been made by Keith J. Grant in
[this blog post](https://keithjgrant.com/posts/2023/08/scope-vs-shadow-dom/#shadow-dom-does-not-provide-what),
where he argues that Shadow DOM offers isolation from the DOM, but not scoping.
In essence, it lives next to the cascade. He argues that
[\`@scope\`](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope) offers a
solution where the cascade is embraced and we have the ability to scope CSS to a
specific element.

The second argument is that Webkit is
[not going to implement](https://github.com/WebKit/standards-positions/issues/97)
the Customized Built-in Elements part of the custom element spec. Because of
this, we have an even more limited toolbox to work with.

I love web components, and their promise is awesome. I hope to experiment with
\`@scope\` soon and see if it’s the missing piece of the puzzle, enabling us to
build a fully platform-agnostic UI library. It seems far away, but who knows!
