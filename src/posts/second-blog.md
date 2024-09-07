TODO: write this about web components in Astro const markdown = `

<time>${date}</time>

# How to use Web components in Astro and how we got there

**TLDR**: Use web components only for scope javascript

## Previous approach

My journey with web components has been an interesting one. When I
started my current job at VPRO, they were already using web
components. To be more specific, they were using custom elements in
combination with Shadow DOM.

> Throughout this post, I will name which parts of the webcomponent
> spec I am referring to, as I believe this is a better way to discuss
> this topic. Therefore, a webcomponent now refers to a custom element
> with a shadow DOM attached to it. At the time, we were working on a
> legacy system that was difficult to modify. The idea was to create a
> full-fledged UI library built with custom elements and Shadow DOM.
> This approach allowed us to use these components within the legacy
> system and, once we transitioned away from it, to easily move the UI
> library to a new frontend framework. In my opinion, this is the true
> promise of using web components. This resulted into us trying to fit
> simple and complex UI patterns into a custom element with shadow
> DOM. For example if we look at the UI pattern of a card. We were
> passing attribtes to the custom element like this: \`\`\`html
> <my-card title="My Title" description="This is a description"
> image="https://placekitten.com/200/300" icon="arrowRight"
>
> </my-card>
> \`\`\`
> Within the custom element, we would map these attributes at runtime to the corresponding 
> HTML elements within the Shadow DOM. The render function of the (Lit powered) 
> custom element would look something like this:
> \`\`\`javascript
>   render() {

    return html\`
      <div>
        \${this.title ? html\`<h2>\${this.headline}</h2>\` : html\`\`}
        \${this.description ? html\`<p>\${this.summary}</p>\` : html\`\`}
        \${this.image ? html\`<my-image src=\${this.image}></my-image>\` : html\`\`}
        \${this.icon ? html\`<my-icon icon=\${this.icon}></my-icon>\` : html\`\`}
      </div>
    \`;

} \`\`\` This approach looks very similar to how frameworks like React
and Astro render their components in the browser. However, it didn’t
feel right that JavaScript needed to be enabled for the UI to
function. Therefore we looked tried to explore other options.

## A Possible Solution

So, we tried passing the HTML elements in a slot to the Shadow DOM,
like this: \`\`\`html <my-card>

  <h2>My Title</h2>
  <p>This is a description</p>
  <my-image src="https://placekitten.com/200/300" alt="A cute kitten"></my-image>
  <my-icon name="arrowRight"></my-icon>
</my-card>
\`\`\`
This way, we could have a complete HTML file coming from the server. 
The idea was that we could style the elements passed in the slot from within the 
Shadow DOM, like so:
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
  This occured many times in our legacy system, and not having control over the 
styling of the components was a dealbreaker for us.
## A Way Forward
About a year ago we decided to rebuild the frontend applications to replace
the legacy system. This gave us an opportunity to choose a new tech stack.
We decided to go with Astro as our frontend meta framework and web components 
for our UI library. This also gave us the opportunity to reevaluate our approach
to web components.
After listening to podcasts and reading articles about web components, something dawned on me. 
When "web component advocates" discuss web components, they consistently, 
though not always explicitly, recommend using them primarily for leaf 
components—such as buttons, anchors, and inputs. This was very different from
what we have been doing is to try and fit everything into a web component.
To give web components the best chance of succeeding we commited to using
them only for leaf components and avoid them for more complex UI patterns.
## Current Approach
Therefore, our current approach is to use web components only for *some* leaf 
components. These are leaf components that we want to brand and possibly reuse 
in other projects that do not use Astro. 
This currently includes the following elements in our web component library: 
\`my-button\`, \`my-input\`, and \`my-icon\`.
I will go into more detail on what works and what doesn't work for these 
components.
### About web components in Astro
When you build webcomponents using Lit and render them in Astro 
[declartive shadow DOM](https://web.dev/articles/declarative-shadow-dom)
is used, which is really awesome. And makes it possible to render a shadow DOM
without any JavaScript. This solves our initial problem but introduces some new
onces. Mainly that the HTML file size increases because of the CSS outputted
into the HTML. Due to gzip compression and a smart CSS parses this is suposedly
not a big issue. But the file size increase rapidly espcially if you have 
a shadow DOM that contains around 150 lines of CSS.
### Button
The button has many UI variants, such as a primary, secondary, tertiary, and 
a outline button. This results in 150 lines of CSS being output into the DOM 
for every button. This happens because Shadow DOM is not for scoping CSS but 
for *isolating* it, a point I will return to later. This means that if there 
are 5 buttons on a page, 750 lines of CSS will be output into the DOM. This gets
out of quickly and results in HTML files between 200kb and 1mb.
### Input
The input works quite well within a Shadow DOM. There is a lot of JavaScript that 
dynamically show and hides elements and validations on the form element.
The isolation of DOM elements works well here. Besides that interacting with forms has been 
greatly improved with the [ElementInternals API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals).
### Icon
The icon also works pretty well, but it there is some question here about how
much effect an additional shadow DOM has. SVGs already have their 
own shadow DOM. Wrapping them in another shadow DOM seems unnecessary.
### Conclusion
All of to let us to come to the following conclusion. Web components give us 
more headache then they solve. Yes the \`input\` works nicely but to maintain 
a library with Lit in there for 1 use cases seems a bit overkill.
We believe that web components don’t currently solve a problem for us. Maybe when 
we have a use case for multiple frameworks we will come
back.
 Therefore, 
we are considering rewriting our existing leaf components as Astro components. 
This feels like the end of web components in our current project. But then Astro...
## Astro 🩵 Custom Elements
We are building our frontend applications with [Astro](https://astro.build/). Astro 
has served us well so far, but there was one thing missing from Astro components. I’ll use a newsletter subscription form as an example:
\`\`\`html
---
---
<form>
  <input type="email">
  <button type="submit">Submit</button>
</form>
<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  document.querySelector('form')
    .addEventListener('submit', () => {
      // Call the endpoint for the email subscription
    });
</script>
\`\`\`
Coming from a background in frameworks like Angular and React, I expected the CSS written in the \`<style>\` tag and the JavaScript written in the \`<script>\` tag to be scoped to the component. However, this is not the case in Astro. The CSS *is* scoped to the component, but the JavaScript is not. This means that, using the example above, if there are multiple form elements on a page, the event listener would be added to all form elements on the page.
We had multiple workarounds for this issue, but none of them felt right. One day, my colleague pointed to [this section in the docs](https://docs.astro.build/en/guides/client-side-scripts/#web-components-with-custom-elements)—a gem hidden in plain sight!
By using a custom element, we could scope the JavaScript to a specific part of the DOM. This is exactly what we were looking for. Using the example above, we can now scope our JavaScript like so:
\`\`\`html
---
---
<my-newsletter-subscription>
  <form>
    <input type="email">
    <button type="submit">Submit</button>
  </form>
</my-newsletter-subscription>
<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center.
  }
</style>
<script>
  class MyNewsletterSubscription extends HTMLElement {
    constructor() {
      super();
      this.querySelector("form")
        .addEventListener('submit', () => {
          // Call the endpoint for the email subscription
        });
    }
  }
</script>
\`\`\`
The key here is the use of \`this\`, which ensures that we are now scoped to everything within the custom element. We can be confident that we’re only targeting the specific form element we’re interested in.
## Conclusion
As a result, we are currently dropping Shadow DOM but will continue using custom elements to scope our JavaScript. This journey has led me to believe that with Shadow DOM alone, you cannot create a fully-fledged UI library. This is primarily due to how styles are isolated from the page. Sometimes, this isolation might be beneficial—though I haven’t found the use case yet—but most of the time, it’s too constraining.
This point is also made by Keith J. Grant in [this blog post](https://keithjgrant.com/posts/2023/08/scope-vs-shadow-dom/#shadow-dom-does-not-provide-what), where he argues that [\`@scope\`](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope) could offer real CSS scoping while still embracing the cascade. I hope to experiment with this soon and see if it’s the missing piece of the puzzle, enabling us to build a fully reusable UI library that can be used across multiple frameworks.
---
  `;
