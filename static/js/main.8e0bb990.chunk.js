(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],[,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),c=i(1),r=i.n(c),o=i(4),s=i.n(o),a=(i(11),i(2));i(12),i(13),i(14);var l=function(e){var t=e.id,i=e.title,c=e.children;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"project-introduction",children:Object(n.jsx)("div",{children:i})}),Object(n.jsx)("div",{id:t,className:"content-container-with-description",children:c})]})},d=i(5),j=i.n(d),m=i.p+"static/media/comment-fish-race.1df8e3ad.mp3",u=i.p+"static/media/comment-circle-game.a0d531f0.mp3",f=i.p+"static/media/comment-montepoeli.5873dec8.mp3",h=i.p+"static/media/comment-get-low.21e20328.mp3",b=i.p+"static/media/comment-sleeping-seals.00aaf745.mp3",g=i.p+"static/media/comment-julia.e0a88f24.mp3",p=(i(15),function(e){var t=e.project,i=Object(c.useState)(),r=Object(a.a)(i,2),o=r[0],s=r[1],l=Object(c.useState)(!1),d=Object(a.a)(l,2),p=d[0],v=d[1],O=Object(c.useState)(!0),x=Object(a.a)(O,2),y=x[0],w=x[1];Object(c.useEffect)((function(){s(j.a.create({container:"#waveform-".concat(t),barHeight:5,progressColor:"palegreen"}))}),[t]),Object(c.useEffect)((function(){null===o||void 0===o||o.on("finish",(function(){v(!1),o.seekTo(0)})),null===o||void 0===o||o.on("ready",(function(){w(!1)}))}),[o]),Object(c.useEffect)((function(){var e;"fish-race"===t&&(e=m),"circle-game"===t&&(e=u),"montepoeli"===t&&(e=f),"sleeping-tumblr-seals"===t&&(e=b),"get-low"===t&&(e=h),"julia"===t&&(e=g),null===o||void 0===o||o.load(e)}),[o,t]);return Object(n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"45px auto",alignItems:"center"},children:[Object(n.jsx)("a",{onClick:function(){v(!p),o.playPause()},children:Object(n.jsx)("button",{disabled:y,style:{borderColor:"transparent transparent transparent ".concat(y?"lightgray":"palegreen")},className:"play-pause-button ".concat(p?"pause":"")})}),Object(n.jsx)("div",{id:"waveform-"+t,style:{width:"100%",backgroundColor:y?"lightgray":"unset"}})]})});var v=function(){return Object(n.jsxs)(l,{id:"circle-game-container",title:"Circle game",children:[Object(n.jsx)("iframe",{id:"circle-game-iframe",title:"circle-game",className:"iframe-size",src:"https://rogierderuijter.github.io/circle/",loading:"lazy",frameBorder:"0"}),Object(n.jsx)(p,{project:"circle-game"})]})};i(16);var O=function(){return Object(n.jsxs)(l,{id:"fish-race-container",title:"Fish race",children:[Object(n.jsx)("iframe",{id:"fish-race-iframe",title:"fish-race",className:"iframe-size",src:"https://itisafishrace.xyz",loading:"lazy",frameBorder:"0"}),Object(n.jsx)(p,{project:"fish-race"})]})};i(17);var x=function(){return Object(n.jsxs)(l,{id:"sleeping-seals-container",title:"Sad Sleeping Seals",children:[Object(n.jsx)("iframe",{id:"sleeping-tumblr-seals-iframe",title:"sleeping-tumblr-seals",className:"iframe-size",src:"https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes",frameBorder:"0"}),Object(n.jsx)(p,{project:"sleeping-tumblr-seals"})]})};i(18);var y,w=function(){return Object(n.jsxs)(l,{id:"get-low-container",title:"Get low",children:[Object(n.jsx)("iframe",{id:"get-low-iframe",title:"get-low",className:"iframe-size",src:"https://rogierderuijter.github.io/get-low/",loading:"lazy",frameBorder:"0"}),Object(n.jsx)(p,{project:"get-low"})]})},k=i.p+"static/media/montepoeli_video_462\u200a\xd7\u200a1000.0a7b6f95.mp4";i(19);function I(e){e.forEach((function(e){e.intersectionRatio>=.8&&document.getElementById("montepoeli-video").play();if(0===e.intersectionRatio){var t=document.getElementById("montepoeli-video");(function(e){return!!(e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>2)})(t)&&(t.pause(),t.currentTime=0,clearInterval(y))}}))}var E=function(){return Object(c.useEffect)((function(){var e=document.getElementById("montepoeli-video");e.load(),e.onended=function(){clearInterval(y),document.getElementById("montepoeli-video").currentTime=0};var t=document.getElementById("progress");e.addEventListener("play",(function(){y=setInterval((function(){e.currentTime&&(t.value=e.currentTime/e.duration*100)}),500)}))}),[]),Object(c.useEffect)((function(){var e=function(){var e=document.querySelector("#montepoeli-video");new IntersectionObserver(I,{root:null,rootMargin:"0px",threshold:[0,.2,.4,.6,.8,1]}).observe(e)};return window.addEventListener("load",e,!1),function(){window.removeEventListener("load",e)}}),[]),Object(n.jsxs)(l,{id:"montepoeli-content-container",title:"Montepoeli",children:[Object(n.jsx)("div",{id:"montepoeli-content",children:Object(n.jsxs)("figure",{id:"montepoli-figure",children:[Object(n.jsx)("video",{playsInline:!0,muted:!0,id:"montepoeli-video",children:Object(n.jsx)("source",{src:k,type:"video/mp4"})}),Object(n.jsx)("figcaption",{children:Object(n.jsx)("progress",{id:"progress",max:"100",value:"0",children:"Progress"})})]})}),Object(n.jsx)("div",{id:"description",children:Object(n.jsx)(p,{project:"montepoeli"})})]})};i(20),i(21);var N=function(e){return Object(n.jsx)("div",{id:e.id,className:"content-container",style:{minHeight:e.withFullScreenHeight?"100vh":""},children:e.children})};var B=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{style:{width:"100%",height:"50vh"}}),Object(n.jsx)(N,{withFullScreenHeight:!0,children:Object(n.jsx)("div",{className:"acknowledgements-container",children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"acknowledgements-content",children:[Object(n.jsx)("div",{children:"I am forever grateful for everyone I have worked with. Thank you so much."}),Object(n.jsxs)("div",{style:{marginTop:"16px"},children:["Special thanks:",Object(n.jsxs)("ul",{className:"special-thanks",children:[Object(n.jsx)("li",{children:"Lourens, your love for development radiates. It touched my soul in many ways I can't describe. Thank you for giving me a love for updates."}),Object(n.jsx)("li",{children:"Menno, for scaring me into making beautiful things."}),Object(n.jsx)("li",{children:"Niels, for showing me what a review looks like."}),Object(n.jsx)("li",{children:"Isabelle, for getting lost in conversations with me."})]})]}),Object(n.jsx)("div",{style:{marginTop:"16px"},children:"And above all, thanks mom for the love, support, dedication, and drive to give us whatever we needed."}),Object(n.jsx)("div",{style:{marginTop:"16px"},children:"You have made me into what I am."})]})})})})]})},S=(i(22),function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"project-introduction",children:Object(n.jsx)("div",{children:"Julia"})}),Object(n.jsxs)(N,{id:"julia-container",children:[Object(n.jsx)("iframe",{id:"julia-iframe",title:"julia",className:"iframe-size",src:"https://rogierderuijter.github.io/julia/",frameBorder:"0"}),Object(n.jsx)(p,{project:"julia"})]})]})});i(23);var T=function(){return Object(n.jsx)("div",{id:"info-wrapper",children:Object(n.jsxs)("div",{id:"info-container",children:[Object(n.jsxs)("a",{className:"info-element",href:"https://github.com/RogierdeRuijter",target:"_blank",style:{marginRight:"32px"},children:[Object(n.jsx)("img",{src:"https://img.icons8.com/ios/150/000000/github--v1.png"}),"Projects"]}),Object(n.jsxs)("a",{className:"info-element",href:"mailto:rogierderuijter@hotmail.com",label:"rogierderuijter.com",style:{marginRight:"32px",fontWeight:"500"},children:[Object(n.jsx)("img",{src:"https://img.icons8.com/ios/150/000000/apple-mail.png"}),"Contact me"]}),Object(n.jsxs)("a",{className:"info-element",href:"https://medium.com/@vsfhtvjshn",target:"_blank",children:[Object(n.jsx)("img",{src:"https://img.icons8.com/ios/150/000000/medium-logo.png"}),"Blog"]})]})})},C=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),i=t[0],r=t[1];return Object(c.useEffect)((function(){var e=function(e){document.getElementById("contact-info")&&!document.getElementById("contact-info").contains(e.target)&&i&&r(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[i]),Object(n.jsx)("div",{id:"content-container",children:Object(n.jsxs)("div",{id:"project-content",children:[Object(n.jsx)("div",{id:"info-icon",onClick:function(){return r(!i)},children:"\u2139\ufe0f"}),i&&Object(n.jsxs)("div",{id:"contact-info",children:["\ud83d\udce7 ",Object(n.jsx)("div",{children:"rogierderuijter@hotmail.com"})]}),Object(n.jsx)(O,{}),Object(n.jsx)(v,{}),Object(n.jsx)(E,{}),Object(n.jsx)(w,{}),Object(n.jsx)(x,{}),Object(n.jsx)(S,{}),Object(n.jsx)(B,{}),Object(n.jsx)(T,{})]})})},F=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,25)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),r(e),o(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),F()}],[[24,1,2]]]);
//# sourceMappingURL=main.8e0bb990.chunk.js.map