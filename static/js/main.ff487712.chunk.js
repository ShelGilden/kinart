(this.webpackJsonpkinart=this.webpackJsonpkinart||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),c=a(6),i=a(5),l=a(0),o=a.n(l),s=a(14),u=a.n(s),m=(a(26),a(19)),d=a.n(m);a(27);var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"ProductContent"},this.props.content)}}]),a}(o.a.Component),p=["Jiggling, like flying through the cafeteria...","Hoot, Hoot and Hollar","Nodding, talking, and saying nothing","This is the man in his demo...","Simply carrying on the meaningless conversation","Shimming and Shaking..."],b=["images/BirdAtBrandeis.gif","images/Owl.gif","images/Head002Silver.gif","images/ShelDemo001.gif","images/Head003Silver.gif","images/Head001Silver.gif"],E=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).triggerFirstEnter=function(){r.state.productNumber>p.length-2?r.setState({productNumber:0}):r.setState({productNumber:r.state.productNumber+1})},r.state={productNumber:0},r}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"ProductPicture"},o.a.createElement("img",{className:"Picture",src:b[this.state.productNumber]}),o.a.createElement("button",{className:"ProductButton",onClick:this.triggerFirstEnter},"More"),o.a.createElement(g,{content:p[this.state.productNumber]}))}}]),a}(o.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"ProductPage"},o.a.createElement(E,null))}}]),a}(o.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"AboutPage"},"You can say what you like, but I am telling you right now? Sheldon is the man! Awesome! I mean - you should see his mobile art - it's... it's really something!")}}]),a}(o.a.Component),j=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"PictureContent"},this.props.content)}}]),a}(o.a.Component),O=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"PictureFace"},o.a.createElement("img",{className:"Picture",src:"images/ShelFace.jpg"}),o.a.createElement(j,{content:"Sheldon Gilden, the man behind mobile kinetic art. This is the art the jiggles, and wiggles, moves, bounces and vibrates with every movement in the room. Subtle, yet captivating. Technologically powerful, yet power free. Plugs into your mind, not the wall."}))}}]),a}(o.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"IntroPage"},o.a.createElement(O,null))}}]),a}(o.a.Component),k=a(12),N=a(1),S=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k.a,null,o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",{className:"menu"},o.a.createElement(k.b,{to:"/about"},"About")),o.a.createElement("li",{className:"menu"},o.a.createElement(k.b,{to:"/product"},"Product"))),o.a.createElement(N.c,null,o.a.createElement(N.a,{path:"/about"},o.a.createElement(f,null)),o.a.createElement(N.a,{path:"/product"},o.a.createElement(v,null)),o.a.createElement(N.a,{exact:!0,path:"/"},o.a.createElement(y,null)),o.a.createElement(N.a,{exact:!0,path:"/kinart"},o.a.createElement(y,null))))))}}]),a}(o.a.Component);u.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var w=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).triggerFirstEnter=function(){r.setState({isFirstState:!1,isSecondState:!0})},r.state={isFirstState:!0,isSecondState:!1},r}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.isFirstState&&o.a.createElement("div",{className:"HomePage"},"This is all about Sheldon... and his",o.a.createElement("br",null),o.a.createElement("i",null,"Highly Kinetic Mobile Art"),o.a.createElement("br",null),o.a.createElement("button",{className:"StartButton",onClick:this.triggerFirstEnter},"Click to Enter")),this.state.isSecondState&&o.a.createElement(S,null))}}]),a}(o.a.Component);u.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ff487712.chunk.js.map