(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),a=n.n(c),r=n(4),o=n.n(r);n(11),n(12),n(13),n(14),n(15);var s=function(e){var t=e.title;return Object(i.jsx)("header",{children:Object(i.jsx)("h2",{className:"project-title",children:t})})},l=n(2),d=n(5),j=n.n(d),u=n.p+"static/media/comment-fish-race.1df8e3ad.mp3",m=n.p+"static/media/comment-circle-game.a0d531f0.mp3",f=n.p+"static/media/comment-montepoeli.5873dec8.mp3",b=n.p+"static/media/comment-get-low.a2f110fc.mp3",h=n.p+"static/media/comment-sleeping-seals.00aaf745.mp3",p=n.p+"static/media/comment-julia.e0a88f24.mp3",g=(n(16),function(e){var t=e.project,n=e.containerRef,a=Object(c.useState)(),r=Object(l.a)(a,2),o=r[0],s=r[1],d=Object(c.useState)(!1),g=Object(l.a)(d,2),v=g[0],O=g[1],x=Object(c.useState)(!0),y=Object(l.a)(x,2),k=y[0],w=y[1],I=Object(c.useState)(!1),z=Object(l.a)(I,2),E=z[0],N=z[1],C=Object(c.useState)(),S=Object(l.a)(C,2),B=S[0],_=S[1];Object(c.useEffect)((function(){n.current&&_(new IntersectionObserver((function(e){e.forEach((function(e){0===e.intersectionRatio&&(null===o||void 0===o?void 0:o.isPlaying())&&(null===o||void 0===o||o.pause(),O(!1))}))}),{root:null,rootMargin:"0px",threshold:0}))}),[t,o]),Object(c.useEffect)((function(){document.getElementById("waveform-".concat(t))&&s(j.a.create({container:"#waveform-".concat(t),barHeight:5,progressColor:"palegreen",height:64}))}),[t]),Object(c.useEffect)((function(){null===o||void 0===o||o.on("finish",(function(){O(!1),o.seekTo(0),B.unobserve(n.current),gtag("event","pause",{event_category:"audio-messages",event_label:t,event_value:100})})),null===o||void 0===o||o.on("ready",(function(){w(!1)})),null===o||void 0===o||o.on("error",(function(){N(!0)}))}),[o]),Object(c.useEffect)((function(){var e;"fish-race"===t&&(e=u),"circle-game"===t&&(e=m),"montepoeli"===t&&(e=f),"sleeping-tumblr-seals"===t&&(e=h),"get-low"===t&&(e=b),"julia"===t&&(e=p),null===o||void 0===o||o.load(e)}),[o,t]);return Object(i.jsx)(i.Fragment,{children:!E&&Object(i.jsxs)("div",{id:"waveform-container",children:[Object(i.jsx)("a",{onClick:function(){O(!v),o.playPause(),v?B.unobserve(n.current):B.observe(n.current),gtag("event",v?"pause":"play",{event_category:t,event_label:Math.round(Math.round(null===o||void 0===o?void 0:o.getCurrentTime())/Math.round(null===o||void 0===o?void 0:o.getDuration())*100)})},children:Object(i.jsx)("button",{disabled:k,style:{borderColor:"transparent transparent transparent ".concat(k?"lightgray":"palegreen")},className:"play-pause-button ".concat(v?"pause":"")})}),Object(i.jsx)("div",{id:"waveform-"+t,style:{width:"100%",backgroundColor:k?"lightgray":"unset"}})]})})});var v=function(e){var t=e.id,n=e.title,a=e.project,r=e.description,o=e.children,l=Object(c.useRef)(null);return Object(i.jsxs)("article",{ref:l,style:{position:"relative"},children:[Object(i.jsx)(s,{title:n}),Object(i.jsx)(g,{project:a,containerRef:l}),Object(i.jsxs)("div",{id:t,className:"content-container-with-description",children:[o,Object(i.jsx)("p",{id:"descrption-container",children:r})]})]})};var O=function(){return Object(i.jsx)(v,{id:"circle-game-container",description:"De circle game; het spel wat ik het liefst met Jan en alleman tot in den treuren speel. Ik heb dit spel gebouwd zodat jij online mee kunt genieten. Snel! Klik in de circle die de hand maakt anders verlies je een hartje \ud83d\udc94",title:"Circle game",project:"circle-game",children:Object(i.jsx)("iframe",{id:"circle-game-iframe",title:"circle-game",className:"iframe-size lazyload","data-src":"https://rogierderuijter.github.io/circle/",loading:"lazy",frameBorder:"0"})})};n(17);var x=function(){return Object(i.jsx)(v,{id:"fish-race-container",description:"Toen ik 7 was zag ik op Koninginnedag in het Vondelpark een man naast een bak water met 4 vissen staan. In de bak had hij een vissenrace gemaakt. Dit heeft zo\u2019n indruk op mij gemaakt dat ik het nooit meer vergeten ben.",title:"Fish race",project:"fish-race",flexibleContainer:!0,children:Object(i.jsx)("iframe",{id:"fish-race-iframe",title:"fish-race",className:"iframe-size lazyload","data-src":"https://itisafishrace.xyz",loading:"lazy",frameBorder:"0"})})};n(18);var y=function(){return Object(i.jsx)(v,{id:"sleeping-seals-container",title:"Sad Sleeping Seals",description:"Quotes met slapende zeehonden. Omdat het kan. Click voor meer!",project:"sleeping-tumblr-seals",children:Object(i.jsx)("iframe",{id:"sleeping-tumblr-seals-iframe",title:"sleeping-tumblr-seals",className:"iframe-size lazyload",loading:"lazy","data-src":"https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes",frameBorder:"0"})})};n(19);var k,w=function(){return Object(i.jsx)(v,{id:"get-low-container",title:"Get low",project:"get-low",description:"Elke keer als ik dit zie denk ik: \u201cHet maakt allemaal niks uit. Alles wat ik wil is gewoon mogelijk, zolang ik er maar voor ga.\u201d",flexibleContainer:!0,children:Object(i.jsx)("iframe",{id:"get-low-iframe",title:"get-low",className:"iframe-size lazyload","data-src":"https://rogierderuijter.github.io/get-low/",loading:"lazy",frameBorder:"0"})})},I=n.p+"static/media/montepoeli_video_462\u200a\xd7\u200a1000.0a7b6f95.mp4",z=n.p+"static/media/first_frame_montepoeli.29021887.jpeg";n(20);function E(e){e.forEach((function(e){e.intersectionRatio>=.8&&document.getElementById("montepoeli-video").play();if(0===e.intersectionRatio){var t=document.getElementById("montepoeli-video");(function(e){return!!(e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>2)})(t)&&(t.pause(),t.currentTime=0,clearInterval(k))}}))}var N=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=document.getElementById("montepoeli-video");e.load(),e.onended=function(){clearInterval(k),document.getElementById("montepoeli-video").currentTime=0};var t=document.getElementById("progress");e.addEventListener("play",(function(){k=setInterval((function(){e.currentTime&&(t.value=e.currentTime/e.duration*100)}),500)}))}),[]),Object(c.useEffect)((function(){var e=document.querySelector("#montepoeli-video");new IntersectionObserver(E,{root:null,rootMargin:"0px",threshold:[0,.2,.4,.6,.8,1]}).observe(e)}),[]),Object(i.jsx)(v,{id:"montepoeli-content-container",description:"Dit is de app die ik voor mijn schaakclub gemaakt heb. De schaakclub is ontstaan in het prachtige Montepulciano in Itali\xeb. In de app kunnen de gespeelde schaakwedstrijden en clubregels opgeslagen worden.",title:"Montepoeli",project:"montepoeli",children:Object(i.jsxs)("div",{id:"montepoeli-content",children:[n&&Object(i.jsx)("div",{style:{position:"absolute",color:"#fff"},children:"Loading..."}),Object(i.jsxs)("figure",{id:"montepoli-figure",children:[Object(i.jsx)("video",{playsInline:!0,muted:!0,id:"montepoeli-video",preload:"none",onCanPlay:function(){a(!1)},style:{backgroundImage:"url(".concat(z,")")},children:Object(i.jsx)("source",{src:I,type:"video/mp4"})}),Object(i.jsx)("figcaption",{children:Object(i.jsx)("progress",{id:"progress",max:"100",value:"0",children:"Progress"})})]})]})})};n(21);var C=function(){return Object(i.jsx)("div",{style:{position:"absolute",top:"calc(50% - 20px)",height:"40px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsx)("span",{className:"scroll-down-element-line"})})};var S=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"acknowledgements-spacer",children:Object(i.jsx)(C,{})}),Object(i.jsx)("div",{className:"acknowledgements-container",children:Object(i.jsxs)("section",{className:"acknowledgements-content",children:[Object(i.jsx)("p",{children:"I am forever grateful for everyone I have worked with. Thank you so much."}),Object(i.jsx)("h5",{style:{marginBlockStart:"1.5rem",marginBlockEnd:"1.5rem"},children:"Special thanks:"}),Object(i.jsxs)("ul",{style:{listStyleType:"circle"},children:[Object(i.jsx)("li",{children:"Lourens, your love for development radiates. It touched my soul in many ways I can't describe. Thank you for giving me love for updates."}),Object(i.jsx)("li",{children:"Menno, for scaring me into making beautiful things."}),Object(i.jsx)("li",{children:"Niels, for showing me what a review looks like."}),Object(i.jsx)("li",{children:"Isabelle, for getting lost in conversations with me."})]}),Object(i.jsx)("p",{children:"And above all, thanks mom for the love, support, dedication, and drive to give us whatever we needed."}),Object(i.jsx)("p",{children:"You have made me into what I am."})]})})]})};n(22),n(23);var B=function(e){return Object(i.jsx)("div",{id:e.id,className:"content-container",children:e.children})},_=function(){var e=Object(c.useRef)(null);return Object(i.jsxs)("div",{ref:e,style:{position:"relative"},children:[Object(i.jsx)(s,{title:"Julia"}),Object(i.jsxs)(B,{id:"julia-container",children:[Object(i.jsx)(g,{project:"julia",containerRef:e}),Object(i.jsx)("iframe",{id:"julia-iframe",title:"julia",className:"iframe-size default-height lazyload",loading:"lazy","data-src":"https://rogierderuijter.github.io/julia/",frameBorder:"0"}),Object(i.jsx)("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto"},children:Object(i.jsx)("p",{children:"Foto's die mij altijd doen denken aan jou. Julia is je tweede naam."})})]})]})},T=(n(24),n.p+"static/media/github.50efb19f.svg"),R=n.p+"static/media/envelope.03442720.svg",L=n.p+"static/media/medium-m.94196f86.svg";var M=function(){return Object(i.jsx)("footer",{id:"info-wrapper",children:Object(i.jsxs)("div",{id:"info-container",children:[Object(i.jsxs)("a",{className:"info-element",href:"https://github.com/RogierdeRuijter",onClick:function(){gtag("event","click",{event_category:"external-links",event_label:"projects"})},target:"_blank",style:{marginRight:"calc(15% - 8px)"},children:[Object(i.jsx)("img",{src:T}),"Projects"]}),Object(i.jsxs)("a",{className:"info-element",href:"mailto:rogierderuijter@hotmail.com",label:"rogierderuijter.com",onClick:function(){gtag("event","generate_lead")},style:{marginRight:"calc(15% - 8px)",fontWeight:"500"},children:[Object(i.jsx)("img",{src:R}),"Contact me"]}),Object(i.jsxs)("a",{className:"info-element",href:"https://medium.com/@vsfhtvjshn",onClick:function(){gtag("event","click",{event_category:"external-links",event_label:"blog"})},target:"_blank",children:[Object(i.jsx)("img",{src:L}),"Blog"]})]})})},F=function(){return Object(c.useLayoutEffect)((function(){function e(e){[document.getElementById("julia-iframe")].forEach((function(t){t.contentWindow===e.source&&(t.classList.remove("default-height"),t.height=Number(e.data.height))}))}return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e)}}),[]),Object(c.useEffect)((function(){if("loading"in HTMLIFrameElement.prototype){document.querySelectorAll('iframe[loading="lazy"]').forEach((function(e){e.src=e.dataset.src}))}else{var e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js",document.body.appendChild(e)}}),[]),Object(i.jsx)("div",{id:"content-container",children:Object(i.jsxs)("section",{id:"project-content",children:[Object(i.jsx)("div",{className:"project-spacer without-spacing-scroll-down",children:Object(i.jsx)(C,{})}),Object(i.jsx)(x,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(C,{})}),Object(i.jsx)(O,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(C,{})}),Object(i.jsx)(N,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(C,{})}),Object(i.jsx)(w,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(C,{})}),Object(i.jsx)(y,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(C,{})}),Object(i.jsx)(_,{}),Object(i.jsx)(S,{}),Object(i.jsx)(M,{})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root")),P()}],[[25,1,2]]]);
//# sourceMappingURL=main.3703272e.chunk.js.map