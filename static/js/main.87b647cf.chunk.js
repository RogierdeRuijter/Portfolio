(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),r=n.n(c),a=n(4),o=n.n(a);n(11),n(12),n(13),n(14),n(15);var s=function(e){var t=e.title;return Object(i.jsx)("h2",{className:"project-title",children:t})},l=n(2),d=n(5),u=n.n(d),j=n.p+"static/media/comment-fish-race.1df8e3ad.mp3",m=n.p+"static/media/comment-circle-game.a0d531f0.mp3",f=n.p+"static/media/comment-montepoeli.5873dec8.mp3",g=n.p+"static/media/comment-get-low.21e20328.mp3",b=n.p+"static/media/comment-sleeping-seals.00aaf745.mp3",p=n.p+"static/media/comment-julia.e0a88f24.mp3",h=(n(16),function(e){var t=e.project,n=e.containerRef,r=Object(c.useState)(),a=Object(l.a)(r,2),o=a[0],s=a[1],d=Object(c.useState)(!1),h=Object(l.a)(d,2),v=h[0],O=h[1],x=Object(c.useState)(!0),y=Object(l.a)(x,2),w=y[0],k=y[1],E=Object(c.useState)(!1),N=Object(l.a)(E,2),I=N[0],z=N[1],T=Object(c.useState)(),B=Object(l.a)(T,2),C=B[0],S=B[1];Object(c.useEffect)((function(){n.current&&S(new IntersectionObserver((function(e){e.forEach((function(e){0===e.intersectionRatio&&(null===o||void 0===o?void 0:o.isPlaying())&&(null===o||void 0===o||o.pause(),O(!1))}))}),{root:null,rootMargin:"0px",threshold:0}))}),[t,o]),Object(c.useEffect)((function(){document.getElementById("waveform-".concat(t))&&s(u.a.create({container:"#waveform-".concat(t),barHeight:5,progressColor:"palegreen",height:64}))}),[t]),Object(c.useEffect)((function(){null===o||void 0===o||o.on("finish",(function(){O(!1),o.seekTo(0),C.unobserve(n.current),gtag("event","pause",{event_category:"audio-messages",event_label:t,event_value:100})})),null===o||void 0===o||o.on("ready",(function(){k(!1)})),null===o||void 0===o||o.on("error",(function(){z(!0)}))}),[o]),Object(c.useEffect)((function(){var e;"fish-race"===t&&(e=j),"circle-game"===t&&(e=m),"montepoeli"===t&&(e=f),"sleeping-tumblr-seals"===t&&(e=b),"get-low"===t&&(e=g),"julia"===t&&(e=p),null===o||void 0===o||o.load(e)}),[o,t]);return Object(i.jsx)(i.Fragment,{children:!I&&Object(i.jsxs)("div",{style:{display:"grid",width:"90%",gridTemplateColumns:"45px auto",alignItems:"center",marginLeft:"auto",marginRight:"auto",marginBottom:"8px"},children:[Object(i.jsx)("a",{onClick:function(){O(!v),o.playPause(),v?C.unobserve(n.current):C.observe(n.current),gtag("event",v?"pause":"play",{event_category:t,event_label:Math.round(Math.round(null===o||void 0===o?void 0:o.getCurrentTime())/Math.round(null===o||void 0===o?void 0:o.getDuration())*100)})},children:Object(i.jsx)("button",{disabled:w,style:{borderColor:"transparent transparent transparent ".concat(w?"lightgray":"palegreen")},className:"play-pause-button ".concat(v?"pause":"")})}),Object(i.jsx)("div",{id:"waveform-"+t,style:{width:"100%",backgroundColor:w?"lightgray":"unset"}})]})})});var v=function(e){var t=e.id,n=e.title,r=e.project,a=e.children,o=Object(c.useRef)(null);return Object(i.jsxs)("div",{ref:o,children:[Object(i.jsx)(s,{title:n}),Object(i.jsx)(h,{project:r,containerRef:o}),Object(i.jsx)("div",{id:t,className:"content-container-with-description",children:a})]})};var O=function(){return Object(i.jsx)(v,{id:"circle-game-container",title:"Circle game",project:"circle-game",children:Object(i.jsx)("iframe",{id:"circle-game-iframe",title:"circle-game",className:"iframe-size lazyload","data-src":"https://rogierderuijter.github.io/circle/",loading:"lazy",frameBorder:"0"})})};n(17);var x=function(){return Object(i.jsx)(v,{id:"fish-race-container",title:"Fish race",project:"fish-race",children:Object(i.jsx)("iframe",{id:"fish-race-iframe",title:"fish-race",className:"iframe-size lazyload","data-src":"https://itisafishrace.xyz",loading:"lazy",frameBorder:"0"})})};n(18);var y=function(){return Object(i.jsx)(v,{id:"sleeping-seals-container",title:"Sad Sleeping Seals",project:"sleeping-tumblr-seals",children:Object(i.jsx)("iframe",{id:"sleeping-tumblr-seals-iframe",title:"sleeping-tumblr-seals",className:"iframe-size lazyload",loading:"lazy","data-src":"https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes",frameBorder:"0"})})};n(19);var w,k=function(){return Object(i.jsx)(v,{id:"get-low-container",title:"Get low",project:"get-low",children:Object(i.jsx)("iframe",{id:"get-low-iframe",title:"get-low",className:"iframe-size lazyload","data-src":"https://rogierderuijter.github.io/get-low/",loading:"lazy",frameBorder:"0"})})},E=n.p+"static/media/montepoeli_video_462\u200a\xd7\u200a1000.0a7b6f95.mp4";n(20);function N(e){e.forEach((function(e){e.intersectionRatio>=.8&&document.getElementById("montepoeli-video").play();if(0===e.intersectionRatio){var t=document.getElementById("montepoeli-video");(function(e){return!!(e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>2)})(t)&&(t.pause(),t.currentTime=0,clearInterval(w))}}))}var I=function(){return Object(c.useEffect)((function(){var e=document.getElementById("montepoeli-video");e.load(),e.onended=function(){clearInterval(w),document.getElementById("montepoeli-video").currentTime=0};var t=document.getElementById("progress");e.addEventListener("play",(function(){w=setInterval((function(){e.currentTime&&(t.value=e.currentTime/e.duration*100)}),500)}))}),[]),Object(c.useEffect)((function(){var e=document.querySelector("#montepoeli-video");new IntersectionObserver(N,{root:null,rootMargin:"0px",threshold:[0,.2,.4,.6,.8,1]}).observe(e)}),[]),Object(i.jsx)(v,{id:"montepoeli-content-container",title:"Montepoeli",project:"montepoeli",children:Object(i.jsx)("div",{id:"montepoeli-content",children:Object(i.jsxs)("figure",{id:"montepoli-figure",children:[Object(i.jsx)("video",{playsInline:!0,muted:!0,id:"montepoeli-video",preload:"metadata",children:Object(i.jsx)("source",{src:E,type:"video/mp4"})}),Object(i.jsx)("figcaption",{children:Object(i.jsx)("progress",{id:"progress",max:"100",value:"0",children:"Progress"})})]})})})};n(21);var z=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"acknowledgements-spacer"}),Object(i.jsx)("div",{className:"acknowledgements-container",children:Object(i.jsxs)("div",{className:"acknowledgements-content",children:[Object(i.jsx)("div",{children:"I am forever grateful for everyone I have worked with. Thank you so much."}),Object(i.jsxs)("div",{style:{marginTop:"16px"},children:["Special thanks:",Object(i.jsxs)("ul",{className:"special-thanks",children:[Object(i.jsx)("li",{children:"Lourens, your love for development radiates. It touched my soul in many ways I can't describe. Thank you for giving me a love for updates."}),Object(i.jsx)("li",{children:"Menno, for scaring me into making beautiful things."}),Object(i.jsx)("li",{children:"Niels, for showing me what a review looks like."}),Object(i.jsx)("li",{children:"Isabelle, for getting lost in conversations with me."})]})]}),Object(i.jsx)("div",{style:{marginTop:"16px"},children:"And above all, thanks mom for the love, support, dedication, and drive to give us whatever we needed."}),Object(i.jsx)("div",{style:{marginTop:"16px"},children:"You have made me into what I am."})]})})]})};n(22),n(23);var T=function(e){return Object(i.jsx)("div",{id:e.id,className:"content-container",children:e.children})},B=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=setTimeout((function(){r("https://rogierderuijter.github.io/julia/")}),1500);return function(){return clearTimeout(e)}}),[]),Object(c.useLayoutEffect)((function(){function e(e){var t=document.getElementById("julia-iframe");if(t.contentWindow===e.source)return t.height=Number(e.data.height),1}return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e)}}),[]),Object(i.jsxs)("div",{ref:a,children:[Object(i.jsx)(s,{title:"Julia"}),Object(i.jsxs)(T,{id:"julia-container",children:[Object(i.jsx)(h,{project:"julia",containerRef:a}),Object(i.jsx)("iframe",{id:"julia-iframe",title:"julia",className:"iframe-size",src:n,frameBorder:"0"})]})]})};n(24);var C=function(){return Object(i.jsx)("div",{id:"info-wrapper",children:Object(i.jsxs)("div",{id:"info-container",children:[Object(i.jsxs)("a",{className:"info-element",href:"https://github.com/RogierdeRuijter",onClick:function(){gtag("event","click",{event_category:"external-links",event_label:"projects"})},target:"_blank",style:{marginRight:"32px"},children:[Object(i.jsx)("img",{src:"https://img.icons8.com/ios/150/000000/github--v1.png"}),"Projects"]}),Object(i.jsxs)("a",{className:"info-element",href:"mailto:rogierderuijter@hotmail.com",label:"rogierderuijter.com",onClick:function(){gtag("event","generate_lead")},style:{marginRight:"32px",fontWeight:"500"},children:[Object(i.jsx)("img",{src:"https://img.icons8.com/ios/150/000000/apple-mail.png"}),"Contact me"]}),Object(i.jsxs)("a",{className:"info-element",href:"https://medium.com/@vsfhtvjshn",onClick:function(){gtag("event","click",{event_category:"external-links",event_label:"blog"})},target:"_blank",children:[Object(i.jsx)("img",{src:"https://img.icons8.com/ios/150/000000/medium-logo.png"}),"Blog"]})]})})},S=function(){return Object(c.useEffect)((function(){if("loading"in HTMLIFrameElement.prototype){document.querySelectorAll('iframe[loading="lazy"]').forEach((function(e){e.src=e.dataset.src}))}else{var e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js",document.body.appendChild(e)}}),[]),Object(i.jsx)("div",{id:"content-container",children:Object(i.jsxs)("div",{id:"project-content",children:[Object(i.jsx)("div",{className:"project-spacer"}),Object(i.jsx)(x,{}),Object(i.jsx)("div",{className:"project-spacer"}),Object(i.jsx)(O,{}),Object(i.jsx)("div",{className:"project-spacer"}),Object(i.jsx)(I,{}),Object(i.jsx)("div",{className:"project-spacer"}),Object(i.jsx)(k,{}),Object(i.jsx)("div",{className:"project-spacer"}),Object(i.jsx)(y,{}),Object(i.jsx)("div",{className:"project-spacer"}),Object(i.jsx)(B,{}),Object(i.jsx)(z,{}),Object(i.jsx)(C,{})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),_()}],[[25,1,2]]]);
//# sourceMappingURL=main.87b647cf.chunk.js.map