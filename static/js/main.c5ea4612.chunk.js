(this.webpackJsonpnf=this.webpackJsonpnf||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"title":"Ali Bidar","subtitle":"FullStack Developer | .net Programmer | SQL Server Database Designer","links":{"github":"https://github.com/bidar1985","linkedin":"https://www.linkedin.com/in/ali-bidar-fullstackdeveloper/","xing":"https://www.xing.com/profile/Ali_Bidar/cv","instagram":"https://www.instagram.com/aelee1985/","gmail":"mailto:bidar1985@gmail.com"},"section":[{"title":"About Me!","color":"2","cnt":"Throughout over 10 years of experience, I have worked in various Web Application Programming Projects. These projects exposed me to plethora algorithm techniques to find the best solutions for complicated problems of tremendous projects. "},{"title":"Experience","color":"3","cnt":"9+ years Experience of software developing experience with full understanding of Object-Orijented design & development in an Agile environments (like Scrum)","set":"skills"},{"title":"Skills","color":"4","cnt":"Results-oriented professional with a proven knowledge of application development, database and web design. Aiming to leverage my skills to successfully fill the Software Developer role at big company","set":"skills"}],"Skills":[{"icon":"icon/asp.png","title":"Asp.net Programming","cl":""},{"icon":"icon/Android.png","title":"Android Programming","cl":""},{"icon":"icon/ang.png","title":"Angular","cl":""},{"icon":"icon/css.png","title":"CSS3","cl":""},{"icon":"icon/es6.png","title":"ES6","cl":""},{"icon":"icon/java.png","title":"JACA","cl":""},{"icon":"icon/mvc.png","title":"MVC","cl":""},{"icon":"icon/react.jpg","title":"React","cl":""},{"icon":"icon/sql.jpg","title":"SQL Server","cl":""}],"experience":[{"icon":"icon/kashco.png","title":"GIS Base Web & Mobile app  at Kashco Company","cl":""},{"icon":"icon/khzceo.png","title":"Asp.net Programmer at khzceo.ir","cl":""},{"icon":"icon/rahaco.png","title":"Software Developer at R.A.HA.co","cl":""}]}')},25:function(e,t,n){e.exports=n(47)},30:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(13),l=n.n(c),o=(n(30),n(9),n(3)),r=n(4),s=n(6),m=n(5),p=n(7),u=n(1),h=n(23),d=n(8),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:this.props.cl},a.a.createElement("img",{src:this.props.icon,className:"itemimg"}),a.a.createElement("p",null,this.props.title))}}]),t}(i.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:this.props.cl},a.a.createElement(d.Element,{name:"test"+this.props.ln,className:"element"}),a.a.createElement("div",{className:this.props.cl},a.a.createElement("h1",{className:"title"},this.props.tit),a.a.createElement("div",{className:"pp"},this.props.cn),a.a.createElement((function(e){var t=e.tp;return"Skills"==t?a.a.createElement("div",null,Object.keys(u.Skills).map((function(e){return a.a.createElement(v,{cl:"items",title:u.Skills[e].title,icon:u.Skills[e].icon})}))):"Experience"==t?a.a.createElement("div",null,Object.keys(u.experience).map((function(e){return a.a.createElement(v,{cl:"items2",title:u.experience[e].title,icon:u.experience[e].icon})}))):"Projects"!=t&&"Experience"!=t?a.a.createElement("div",null):void 0}),{tp:this.props.tit})))}}]),t}(i.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"mnbar"},Object.keys(u.section).map((function(t){return a.a.createElement(d.Link,{className:"mnu",activeClass:"active",to:"test"+u.section[t].color,spy:!0,smooth:!0,offset:0,duration:2e3,onSetActive:e.handleSetActive},u.section[t].title)})))}}]),t}(i.Component),b=n(24),E=n.n(b),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={cl:"a",cln:1},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=["a","b"];return a.a.createElement("div",{className:"maindiv"},a.a.createElement("img",{src:"pantone.png",className:"pant",onClick:function(){var n=(e.state.cln+1)%t.length;console.log(n);var i=t[n];console.log(i),e.setState({cl:i,cln:n})}}),a.a.createElement(f,null),a.a.createElement("div",null,a.a.createElement(d.Link,{activeClass:"active",to:"test1",spy:!0,smooth:!0,offset:0,duration:2e3,onSetActive:this.handleSetActive},a.a.createElement("img",{src:"down.png",className:"downicon"}))),a.a.createElement("div",{className:this.state.cl+"1"},a.a.createElement(E.a,{followMouse:"False"}),a.a.createElement("h1",{className:"title"},u.title),a.a.createElement("h2",{className:"subtitle"},u.subtitle),a.a.createElement("div",null,Object.keys(u.links).map((function(e){return a.a.createElement(h.SocialIcon,{url:u.links[e],className:"icon"})})))),a.a.createElement(d.Element,{name:"test1",className:"element"}),Object.keys(u.section).map((function(t){return a.a.createElement(g,{cl:e.state.cl+u.section[t].color,tit:u.section[t].title,cn:u.section[t].cnt,lin:"",ln:u.section[t].color})})))}}]),t}(i.Component);var j=function(){return a.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.c5ea4612.chunk.js.map