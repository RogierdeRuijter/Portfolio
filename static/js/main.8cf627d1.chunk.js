(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),c=n.n(a),r=n(4),o=n.n(r);n(11),n(12),n(13),n(14),n(15);var s=function(e){var t=e.title;return Object(i.jsx)("h2",{className:"project-title",children:t})},l=n(2),d=n(5),j=n.n(d),u=n.p+"static/media/comment-fish-race.1df8e3ad.mp3",m=n.p+"static/media/comment-circle-game.a0d531f0.mp3",f=n.p+"static/media/comment-montepoeli.5873dec8.mp3",g=n.p+"static/media/comment-get-low.a2f110fc.mp3",h=n.p+"static/media/comment-sleeping-seals.00aaf745.mp3",p=n.p+"static/media/comment-julia.e0a88f24.mp3",b=(n(16),function(e){var t=e.project,n=e.containerRef,c=Object(a.useState)(),r=Object(l.a)(c,2),o=r[0],s=r[1],d=Object(a.useState)(!1),b=Object(l.a)(d,2),v=b[0],O=b[1],x=Object(a.useState)(!0),y=Object(l.a)(x,2),w=y[0],k=y[1],z=Object(a.useState)(!1),I=Object(l.a)(z,2),E=I[0],N=I[1],C=Object(a.useState)(),T=Object(l.a)(C,2),B=T[0],R=T[1];Object(a.useEffect)((function(){n.current&&R(new IntersectionObserver((function(e){e.forEach((function(e){0===e.intersectionRatio&&(null===o||void 0===o?void 0:o.isPlaying())&&(null===o||void 0===o||o.pause(),O(!1))}))}),{root:null,rootMargin:"0px",threshold:0}))}),[t,o]),Object(a.useEffect)((function(){document.getElementById("waveform-".concat(t))&&s(j.a.create({container:"#waveform-".concat(t),barHeight:5,progressColor:"palegreen",height:64}))}),[t]),Object(a.useEffect)((function(){null===o||void 0===o||o.on("finish",(function(){O(!1),o.seekTo(0),B.unobserve(n.current),gtag("event","pause",{event_category:"audio-messages",event_label:t,event_value:100})})),null===o||void 0===o||o.on("ready",(function(){k(!1)})),null===o||void 0===o||o.on("error",(function(){N(!0)}))}),[o]),Object(a.useEffect)((function(){var e;"fish-race"===t&&(e=u),"circle-game"===t&&(e=m),"montepoeli"===t&&(e=f),"sleeping-tumblr-seals"===t&&(e=h),"get-low"===t&&(e=g),"julia"===t&&(e=p),null===o||void 0===o||o.load(e)}),[o,t]);return Object(i.jsx)(i.Fragment,{children:!E&&Object(i.jsxs)("div",{style:{display:"grid",width:"90%",gridTemplateColumns:"45px auto",alignItems:"center",marginLeft:"auto",marginRight:"auto",marginBottom:"8px"},children:[Object(i.jsx)("a",{onClick:function(){O(!v),o.playPause(),v?B.unobserve(n.current):B.observe(n.current),gtag("event",v?"pause":"play",{event_category:t,event_label:Math.round(Math.round(null===o||void 0===o?void 0:o.getCurrentTime())/Math.round(null===o||void 0===o?void 0:o.getDuration())*100)})},children:Object(i.jsx)("button",{disabled:w,style:{borderColor:"transparent transparent transparent ".concat(w?"lightgray":"palegreen")},className:"play-pause-button ".concat(v?"pause":"")})}),Object(i.jsx)("div",{id:"waveform-"+t,style:{width:"100%",backgroundColor:w?"lightgray":"unset"}})]})})});var v=function(e){var t=e.id,n=e.title,c=e.project,r=e.description,o=e.children,l=Object(a.useRef)(null);return Object(i.jsxs)("div",{ref:l,style:{position:"relative"},children:[Object(i.jsx)(s,{title:n}),Object(i.jsx)(b,{project:c,containerRef:l}),Object(i.jsxs)("div",{id:t,className:"content-container-with-description",children:[o,Object(i.jsx)("p",{style:{width:"90%",marginLeft:"auto",marginRight:"auto"},children:r})]})]})};var O=function(){return Object(i.jsx)(v,{id:"circle-game-container",description:"De circle game; het spel wat ik tot in den treuren speel met jan en alleman. Om de mensen op het internet ook te laten genieten van dit spel heb ik het gebouwd. Snel! Click in de circel die de hand maakt anders verlies je een hartje \ud83d\udc94",title:"Circle game",project:"circle-game",children:Object(i.jsx)("iframe",{id:"circle-game-iframe",title:"circle-game",className:"iframe-size lazyload","data-src":"https://rogierderuijter.github.io/circle/",loading:"lazy",frameBorder:"0"})})};n(17);var x=function(){return Object(i.jsx)(v,{id:"fish-race-container",description:"Toen ik 7 was zag ik op Konningendag in het Vondelpark een man met een bak water waar 4 vissen in zwommen. Hij had een vissen race gemaakt. Als iedereen geld had ingezet op zijn favoriete vis gaf de man het start shot en gingen de vissen tegen elkaar racen door naar de overkant te zwemmen. Ik ben dit nooit meer vergeten.",title:"Fish race",project:"fish-race",flexibleContainer:!0,children:Object(i.jsx)("iframe",{id:"fish-race-iframe",title:"fish-race",className:"iframe-size lazyload","data-src":"https://itisafishrace.xyz",loading:"lazy",frameBorder:"0"})})};n(18);var y=function(){return Object(i.jsx)(v,{id:"sleeping-seals-container",title:"Sad Sleeping Seals",description:"Quotes met slapende zeehonden. Omdat het kan.",project:"sleeping-tumblr-seals",children:Object(i.jsx)("iframe",{id:"sleeping-tumblr-seals-iframe",title:"sleeping-tumblr-seals",className:"iframe-size lazyload",loading:"lazy","data-src":"https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes",frameBorder:"0"})})};n(19);var w,k=function(){return Object(i.jsx)(v,{id:"get-low-container",title:"Get low",project:"get-low",description:"Elke keer als ik dit zie denk ik: het maakt allemaal niks uit. Alles wat ik wil is gewoon mogelijk. Ik hoef er alleen maar voor te gaan.",flexibleContainer:!0,children:Object(i.jsx)("iframe",{id:"get-low-iframe",title:"get-low",className:"iframe-size lazyload","data-src":"https://rogierderuijter.github.io/get-low/",loading:"lazy",frameBorder:"0"})})},z=n.p+"static/media/montepoeli_video_462\u200a\xd7\u200a1000.0a7b6f95.mp4";n(20);function I(e){e.forEach((function(e){e.intersectionRatio>=.8&&document.getElementById("montepoeli-video").play();if(0===e.intersectionRatio){var t=document.getElementById("montepoeli-video");(function(e){return!!(e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>2)})(t)&&(t.pause(),t.currentTime=0,clearInterval(w))}}))}var E=function(){return Object(a.useEffect)((function(){var e=document.getElementById("montepoeli-video");e.load(),e.onended=function(){clearInterval(w),document.getElementById("montepoeli-video").currentTime=0};var t=document.getElementById("progress");e.addEventListener("play",(function(){w=setInterval((function(){e.currentTime&&(t.value=e.currentTime/e.duration*100)}),500)}))}),[]),Object(a.useEffect)((function(){var e=document.querySelector("#montepoeli-video");new IntersectionObserver(I,{root:null,rootMargin:"0px",threshold:[0,.2,.4,.6,.8,1]}).observe(e)}),[]),Object(i.jsx)(v,{id:"montepoeli-content-container",description:"De app die ik gemaakt heb voor de schaakclub waar ik in zit. Deze club is ontstaan in het prachtige Montepulciano, Itali\xeb.  We kunnen hier de gespeelde wedstrijden en de regels van de club opslaan.",title:"Montepoeli",project:"montepoeli",children:Object(i.jsx)("div",{id:"montepoeli-content",children:Object(i.jsxs)("figure",{id:"montepoli-figure",children:[Object(i.jsx)("video",{playsInline:!0,muted:!0,id:"montepoeli-video",preload:"metadata",children:Object(i.jsx)("source",{src:z,type:"video/mp4"})}),Object(i.jsx)("figcaption",{children:Object(i.jsx)("progress",{id:"progress",max:"100",value:"0",children:"Progress"})})]})})})};n(21);var N=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"acknowledgements-spacer"}),Object(i.jsx)("div",{className:"acknowledgements-container",children:Object(i.jsxs)("div",{className:"acknowledgements-content",children:[Object(i.jsx)("div",{children:"I am forever grateful for everyone I have worked with. Thank you so much."}),Object(i.jsxs)("div",{style:{marginTop:"16px"},children:["Special thanks:",Object(i.jsxs)("ul",{className:"special-thanks",children:[Object(i.jsx)("li",{children:"Lourens, your love for development radiates. It touched my soul in many ways I can't describe. Thank you for giving me a love for updates."}),Object(i.jsx)("li",{children:"Menno, for scaring me into making beautiful things."}),Object(i.jsx)("li",{children:"Niels, for showing me what a review looks like."}),Object(i.jsx)("li",{children:"Isabelle, for getting lost in conversations with me."})]})]}),Object(i.jsx)("div",{style:{marginTop:"16px"},children:"And above all, thanks mom for the love, support, dedication, and drive to give us whatever we needed."}),Object(i.jsx)("div",{style:{marginTop:"16px"},children:"You have made me into what I am."})]})})]})};n(22),n(23);var C=function(e){return Object(i.jsx)("div",{id:e.id,className:"content-container",children:e.children})},T=function(){var e=Object(a.useRef)(null);return Object(i.jsxs)("div",{ref:e,style:{position:"relative"},children:[Object(i.jsx)(s,{title:"Julia"}),Object(i.jsxs)(C,{id:"julia-container",children:[Object(i.jsx)(b,{project:"julia",containerRef:e}),Object(i.jsx)("iframe",{id:"julia-iframe",title:"julia",className:"iframe-size default-height lazyload","data-src":"https://rogierderuijter.github.io/julia/",frameBorder:"0"}),Object(i.jsx)("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto"},children:Object(i.jsx)("p",{children:"Foto's die mij altijd doen denken aan jou. Julia is je tweede naam."})})]})]})},B=(n(24),n.p+"static/media/github.50efb19f.svg"),R=n.p+"static/media/envelope.03442720.svg",S=n.p+"static/media/medium-m.94196f86.svg";var _=function(){return Object(i.jsx)("div",{id:"info-wrapper",children:Object(i.jsxs)("div",{id:"info-container",children:[Object(i.jsxs)("a",{className:"info-element",href:"https://github.com/RogierdeRuijter",onClick:function(){gtag("event","click",{event_category:"external-links",event_label:"projects"})},target:"_blank",style:{marginRight:"15%"},children:[Object(i.jsx)("img",{src:B}),"Projects"]}),Object(i.jsxs)("a",{className:"info-element",href:"mailto:rogierderuijter@hotmail.com",label:"rogierderuijter.com",onClick:function(){gtag("event","generate_lead")},style:{marginRight:"15%",fontWeight:"500"},children:[Object(i.jsx)("img",{src:R}),"Contact me"]}),Object(i.jsxs)("a",{className:"info-element",href:"https://medium.com/@vsfhtvjshn",onClick:function(){gtag("event","click",{event_category:"external-links",event_label:"blog"})},target:"_blank",children:[Object(i.jsx)("img",{src:S}),"Blog"]})]})})};var L=function(){return Object(i.jsx)("div",{style:{position:"absolute",top:"calc(50% - 20px)",height:"40px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsx)("span",{className:"scroll-down-element-line"})})},M=function(){return Object(a.useLayoutEffect)((function(){function e(e){[document.getElementById("julia-iframe")].forEach((function(t){t.contentWindow===e.source&&(t.classList.remove("default-height"),t.height=Number(e.data.height))}))}return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e)}}),[]),Object(a.useEffect)((function(){if("loading"in HTMLIFrameElement.prototype){document.querySelectorAll('iframe[loading="lazy"]').forEach((function(e){e.src=e.dataset.src}))}else{var e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js",document.body.appendChild(e)}}),[]),Object(i.jsx)("div",{id:"content-container",children:Object(i.jsxs)("div",{id:"project-content",children:[Object(i.jsx)("div",{className:"project-spacer without-spacing-scroll-down"}),Object(i.jsx)(x,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(L,{})}),Object(i.jsx)(O,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(L,{})}),Object(i.jsx)(E,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(L,{})}),Object(i.jsx)(k,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(L,{})}),Object(i.jsx)(y,{}),Object(i.jsx)("div",{className:"project-spacer",children:Object(i.jsx)(L,{})}),Object(i.jsx)(T,{}),Object(i.jsx)(N,{}),Object(i.jsx)(_,{})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root")),F()}],[[25,1,2]]]);
//# sourceMappingURL=main.8cf627d1.chunk.js.map