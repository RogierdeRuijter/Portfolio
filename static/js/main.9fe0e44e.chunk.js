(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{27:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},63:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i(1),s=i.n(n),r=i(18),a=i.n(r),o=(i(27),i(4)),l=(i(28),i(2)),d=i(8),j=(i(29),i(30),function(){return Object(c.jsx)("div",{id:"loader"})});var m=function(e){var t=Object(n.useState)(!0),i=Object(o.a)(t,2),s=i[0],r=i[1];return Object(n.useEffect)((function(){!0===e.removeLoader&&setTimeout((function(){r(!1)}),1e3)}),[e.removeLoader]),Object(c.jsx)(c.Fragment,{children:s&&e.children})};i(31);var b=function(e){var t=e.id,i=e.noFixedHeightContent,n=e.children;return Object(c.jsx)("div",{id:t,className:"content-container-with-description",style:{height:i?"":"100vh",gridTemplateRows:i?"auto 20%":"80% 20%"},children:n})},h=i(19),u=i.n(h),f=i.p+"static/media/comment-fish-race.1df8e3ad.mp3",O=i.p+"static/media/comment-circle-game.a0d531f0.mp3",p=i.p+"static/media/comment-montepoeli.5873dec8.mp3",g=i.p+"static/media/comment-get-low.21e20328.mp3",x=i.p+"static/media/comment-sleeping-seals.00aaf745.mp3",v=i.p+"static/media/comment-julia.e0a88f24.mp3",w=(i(32),function(e){var t=e.project,i=Object(n.useState)(),s=Object(o.a)(i,2),r=s[0],a=s[1],l=Object(n.useState)(!1),d=Object(o.a)(l,2),j=d[0],m=d[1];Object(n.useEffect)((function(){a(u.a.create({container:"#waveform-".concat(t),barHeight:5,progressColor:"palegreen"}))}),[t]),Object(n.useEffect)((function(){null===r||void 0===r||r.on("finish",(function(){m(!1),r.seekTo(0)}))}),[r]),Object(n.useEffect)((function(){var e;"fish-race"===t&&(e=f),"circle-game"===t&&(e=O),"montepoeli"===t&&(e=p),"sleeping-tumblr-seals"===t&&(e=x),"get-low"===t&&(e=g),"julia"===t&&(e=v),null===r||void 0===r||r.load(e)}),[r,t]);return Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(c.jsx)("a",{style:{width:"5%",cursor:"pointer"},onClick:function(){m(!j),r.playPause()},children:Object(c.jsx)("button",{className:"play-pause-button ".concat(j?"pause":"")})}),Object(c.jsx)("div",{id:"waveform-"+t,style:{width:"93%",marginLeft:"2%"}})]})});var y=function(e){var t=e.showCircleGame;return Object(c.jsxs)(b,{id:"circle-game-container",loading:!t,children:[Object(c.jsx)("div",{className:"iframe-size",children:Object(c.jsx)(m,{removeLoader:t,children:Object(c.jsx)(j,{})})}),t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("iframe",{id:"circle-game-iframe",title:"circle-game",className:"iframe-size",src:"https://circle-ga.me",loading:"lazy",frameBorder:"0",style:{borderRadius:"10px"}}),Object(c.jsx)(w,{project:"circle-game"})]})]})};i(33);var S=function(e){var t=e.showFishRace;return Object(c.jsx)(b,{id:"fish-race-container",children:t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("iframe",{id:"fish-race-iframe",title:"fish-race",className:"iframe-size",src:"https://itisafishrace.xyz",loading:"lazy",frameBorder:"0"}),Object(c.jsx)(w,{project:"fish-race"})]})})};i(34);var N=function(e){var t=e.showSleepingTumblrSeals;return Object(c.jsx)(b,{id:"sleeping-seals-container",children:t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("iframe",{id:"sleeping-tumblr-seals-iframe",title:"sleeping-tumblr-seals",className:"iframe-size",src:"https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes",frameBorder:"0"}),Object(c.jsx)(w,{project:"sleeping-tumblr-seals"})]})})};i(35);var F=function(e){var t=e.showGetLow;return Object(c.jsxs)(b,{id:"get-low-container",loading:!t,children:[Object(c.jsx)("div",{className:"iframe-size",children:Object(c.jsx)(m,{removeLoader:t,children:Object(c.jsx)(j,{})})}),t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("iframe",{id:"get-low-iframe",title:"get-low",className:"iframe-size",src:"https://rogierderuijter.github.io/get-low/",loading:"lazy",frameBorder:"0",style:{borderRadius:"10px"}}),Object(c.jsx)(w,{project:"get-low"})]})]})},L=i.p+"static/media/montepoeli_home.34b3358a.png",T=i.p+"static/media/montepoeli_add_game.26af8d20.png",k=i.p+"static/media/montepoeli_add_game_filled.3103bcac.png";i(36);var R=function(){return Object(c.jsxs)(b,{id:"montepoeli-content-container",noFixedHeightContent:!0,children:[Object(c.jsxs)("div",{id:"montepoeli-content",children:[Object(c.jsx)("img",{className:"iphone rounded-corners spacer",src:L,alt:"Home screen"}),Object(c.jsx)("img",{className:"iphone rounded-corners spacer",src:T,alt:"Add game"}),Object(c.jsx)("img",{className:"iphone rounded-corners",src:k,alt:"Filled in game"})]}),Object(c.jsx)("div",{id:"description",children:Object(c.jsx)(w,{project:"montepoeli"})})]})};i(37),i(38);var B=function(e){return Object(c.jsx)("div",{id:e.id,className:"content-container",style:{height:e.withFullScreenHeight?"100vh":"",borderBottom:e.noBottomBorder?"":"1px solid black"},children:e.children})};var C=function(){return Object(c.jsx)(B,{withFullScreenHeight:!0,noBottomBorder:!0,children:Object(c.jsx)("div",{className:"info-container",children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"info-content",children:[Object(c.jsx)("div",{children:"I am forever grateful for everyone I have worked with, thank you so much."}),Object(c.jsxs)("div",{style:{marginTop:"10px"},children:["Special thanks:",Object(c.jsxs)("ul",{className:"special-thanks",children:[Object(c.jsx)("li",{children:"Lourens, your love for development radiates. It touched my soul in many ways I can't describe. Thank you for giving me a love for updates."}),Object(c.jsx)("li",{children:"Menno, for scaring me into making beautiful things."}),Object(c.jsx)("li",{children:"Harry, for having a beautiful passion for doing the right thing."}),Object(c.jsx)("li",{children:"Isabelle, for getting lost in conversations with me."})]})]}),Object(c.jsx)("div",{style:{marginTop:"20px"},children:"And above all, thanks mom for the love, support, dedication, and drive to give us whatever we needed."}),Object(c.jsx)("div",{style:{marginTop:"15px"},children:"You have made me into what I am."})]})})})})},I=(i(39),function(e){var t=e.showJulia;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(B,{id:"julia-container",children:t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("iframe",{id:"julia-iframe",title:"julia",className:"iframe-size",src:"https://rogierderuijter.github.io/julia/",frameBorder:"0"}),Object(c.jsx)(w,{project:"julia"})]})})})});i(40);var z=function(e){var t=e.welcomeTextRef,i=e.children;return Object(c.jsxs)("div",{id:"welcome-container",children:[Object(c.jsx)("div",{ref:t,style:{fontSize:"4vw"},children:i}),Object(c.jsxs)("div",{id:"scroll-down-element",children:[Object(c.jsx)("span",{id:"scroll-down-element-line"}),Object(c.jsx)("span",{id:"scroll-down-element-text",children:"Scroll"})]})]})},E=i(20),G=i.n(E),H=i.p+"static/media/Film.29aba490.mp4",_=["/welcome","/fish-race","/circle-game","/montepoeli","/get-low","/sleeping-tumblr-seals","/julia","/info"],J={welcome:_[0],fishRace:_[1],circleGame:_[2],montepoeli:_[3],getLow:_[4],sleepingTumblrSeals:_[5],julia:_[6],info:_[7]},P=function(){return _.findIndex((function(e){return e===J.julia}))},M=function(e){return _.findIndex((function(t){return t===e}))>=P},A=function(){document.getElementById("project-links").classList.add("fade-in-animation")},q=function(){var e=Object(l.e)(),t=Object(l.d)(),i=Object(n.useState)(0),s=Object(o.a)(i,2),r=s[0],a=s[1],j=Object(n.useState)(!1),m=Object(o.a)(j,2),b=m[0],h=m[1],u=Object(n.useState)(!1),f=Object(o.a)(u,2),O=f[0],p=f[1],g=Object(n.useState)(!1),x=Object(o.a)(g,2),v=x[0],w=x[1],L=Object(n.useState)(!1),T=Object(o.a)(L,2),k=T[0],B=T[1],E=Object(n.useState)(!1),P=Object(o.a)(E,2),q=P[0],D=P[1],U=Object(n.useState)(""),Y=Object(o.a)(U,2),K=Y[0],Q=Y[1],V=Object(n.createRef)(),W=Object(n.useState)(!1),X=Object(o.a)(W,2),Z=X[0],$=X[1];Object(n.useLayoutEffect)((function(){var e=window.innerHeight;e&&a(.7*e*-1)}),[]);var ee=Object(n.useCallback)((function(){var e=V.current;e&&(function(e){var t=e.getBoundingClientRect(),i=t.top,c=t.bottom;return i>=0&&c<=window.innerHeight}(e)||($(!0),A(),window.removeEventListener("scroll",ee)))}),[V]);return Object(n.useEffect)((function(){V&&V.current&&window.addEventListener("scroll",ee)}),[V,ee]),Object(n.useLayoutEffect)((function(){"/"===e.pathname||e.pathname===J.welcome?t.push(J.welcome):(A(),$(!0))}),[e,t]),Object(n.useEffect)((function(){K&&K.id&&(K.id===J.welcome&&$(!1),K.id===J.fishRace&&h(!0),K.id===J.circleGame&&p(!0),K.id===J.getLow&&w(!0),K.id===J.sleepingTumblrSeals&&B(!0),(K.id===J.montepoeli||M(K.id))&&D(!0))}),[K]),Object(c.jsxs)("div",{id:"content-container",children:[Object(c.jsx)("div",{id:"menu-container",children:Object(c.jsx)("div",{id:"menu",children:Object(c.jsx)("div",{id:"project-links",children:Object(c.jsxs)(G.a,{className:"menu",items:_,currentClassName:"active",onUpdate:Q,offset:r,children:[Object(c.jsx)(d.b,{to:J.welcome,id:"title",children:"Rogier de Ruijter"}),Object(c.jsx)(d.b,{to:J.fishRace,children:"Fish race"}),Object(c.jsx)(d.b,{to:J.circleGame,children:"Circle game"}),Object(c.jsx)(d.b,{to:J.montepoeli,children:"Montepoeli"}),Object(c.jsx)(d.b,{to:J.getLow,children:"Get low"}),Object(c.jsx)(d.b,{to:J.sleepingTumblrSeals,children:"Sleeping Tumblr Seals"}),Object(c.jsx)(d.b,{to:J.julia,children:"Julia"}),Object(c.jsx)(d.b,{to:J.info,children:"Info"})]})})})}),Object(c.jsxs)("div",{id:"project-content",children:[Object(c.jsx)("div",{id:J.welcome,children:Object(c.jsx)(z,{welcomeTextRef:V,children:Object(c.jsx)("div",{id:"video-of-me",className:Z?"video-project-links":"",children:Object(c.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(c.jsx)("source",{src:H,type:"video/mp4"})})})})}),Object(c.jsxs)("div",{className:"empty-spacing",id:J.fishRace,children:[Object(c.jsx)(S,{showFishRace:b}),Object(c.jsx)("div",{style:{width:"100%",height:"100vh"}})]}),Object(c.jsxs)("div",{className:"empty-spacing",id:J.circleGame,children:[Object(c.jsx)(y,{showCircleGame:O}),Object(c.jsx)("div",{style:{width:"100%",height:"100vh"}})]}),Object(c.jsxs)("div",{className:"empty-spacing",id:J.montepoeli,children:[Object(c.jsx)(R,{}),Object(c.jsx)("div",{style:{width:"100%",height:"100vh"}})]}),Object(c.jsxs)("div",{className:"empty-spacing",id:J.getLow,children:[Object(c.jsx)(F,{showGetLow:v}),Object(c.jsx)("div",{style:{width:"100%",height:"100vh"}})]}),Object(c.jsxs)("div",{className:"empty-spacing",id:J.sleepingTumblrSeals,children:[Object(c.jsx)(N,{showSleepingTumblrSeals:k}),Object(c.jsx)("div",{style:{width:"100%",height:"100vh"}})]}),Object(c.jsxs)("div",{className:"empty-spacing",id:J.julia,children:[Object(c.jsx)(I,{showJulia:q}),Object(c.jsx)("div",{style:{width:"100%",height:"100vh"}})]}),Object(c.jsx)("div",{className:"empty-spacing",id:J.info,children:Object(c.jsx)(C,{})})]})]})},D=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,64)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),c(e),n(e),s(e),r(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d.a,{children:Object(c.jsx)(q,{})})}),document.getElementById("root")),D()}},[[63,1,2]]]);
//# sourceMappingURL=main.9fe0e44e.chunk.js.map