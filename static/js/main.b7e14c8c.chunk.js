(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(6),r=a.n(o),s=(a(17),a(10)),m=(a(18),a(8)),l=function(e){switch(e.name){case"circle":return n.a.createElement(m.b,{className:"icons"});case"cross":return n.a.createElement(m.c,{className:"icons"});default:return n.a.createElement(m.a,{className:"icons"})}},i=a(9),p=(a(19),a(28)),u=a(29),y=a(30),d=a(33),w=a(31),f=a(32),E=(a(20),a(21),new Array(9).fill("empty"));var b=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(c.useState)(""),m=Object(s.a)(r,2),b=m[0],h=m[1],v=function(e){return b?Object(i.b)(b,{type:"success"}):"empty"!==E[e]?Object(i.b)("Already Filled",{type:"error"}):(E[e]=a?"cross":"circle",o(!a),void(E[0]===E[1]&&E[0]===E[2]&&"empty"!==E[0]?h("".concat(E[0]," won")):E[3]===E[4]&&E[3]===E[5]&&"empty"!==E[3]?h("".concat(E[3]," won")):E[6]===E[7]&&E[6]===E[8]&&"empty"!==E[6]?h("".concat(E[6]," won")):E[0]===E[3]&&E[0]===E[6]&&"empty"!==E[0]?h("".concat(E[0]," won")):E[1]===E[4]&&E[1]===E[7]&&"empty"!==E[1]?h("".concat(E[1]," won")):E[2]===E[5]&&E[2]===E[8]&&"empty"!==E[2]?h("".concat(E[2]," won")):E[0]===E[4]&&E[0]===E[8]&&"empty"!==E[0]?h("".concat(E[0]," won")):E[2]===E[4]&&E[2]===E[6]&&"empty"!==E[2]?h("".concat(E[2]," won")):"empty"!==E[0]&&"empty"!==E[1]&&"empty"!==E[2]&&"empty"!==E[3]&&"empty"!==E[4]&&"empty"!==E[5]&&"empty"!==E[6]&&"empty"!==E[7]&&"empty"!==E[8]&&h("It's a draw")))};return n.a.createElement(p.a,{className:"p-5"},n.a.createElement(i.a,{position:"bottom-center"}),n.a.createElement(u.a,null,n.a.createElement(y.a,{md:6,className:"offset-md-3"},b?n.a.createElement("div",{className:"mb-2 mt-2"},n.a.createElement("h1",{className:"text-uppercase text-center text-success"},b),n.a.createElement(d.a,{color:"success",block:!0,onClick:function(){o(!1),h(""),E.fill("empty",0,9)}},"Reload The Game")):n.a.createElement("h1",{className:"text-uppercase text-primary text-warning text-center"},a?"cross":"circle"," turn"),n.a.createElement("div",{className:"grid"},E.map((function(e,t){return n.a.createElement(w.a,{color:"warning",onClick:function(){return v(t)}},n.a.createElement(f.a,{className:"box"},n.a.createElement(l,{name:e})))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.b7e14c8c.chunk.js.map