(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(44)},29:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),i=(n(29),n(3)),o=n(4),u=n(7),s=n(5),p=n(8),m=n(6),d=(n(35),0),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=n.getTask.value,a={completed:!1,key:d++,text:t};n.props.dispatch({type:"ADD_TASK",data:a}),n.getTask.value=""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.props.inputElement.current.focus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"todoListMain"},r.a.createElement("div",{className:"header"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"Task",ref:function(t){return e.getTask=t}}),r.a.createElement("button",{type:"submit"}," Add Task "))))}}]),t}(a.Component),h=Object(m.b)()(f),E=n(20),b=n(21),O=n(15);n(37);E.a.library.add(O.a,O.b);var k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).filterItems=function(e,t){switch(t){case"SHOW_COMPLETED":return e.filter(function(e){return e.completed});case"SHOW_PENDING":return e.filter(function(e){return!e.completed});default:return e}},n.createTasks=function(e){return r.a.createElement("li",{className:e.completed?"complete":"pending",key:e.key,onClick:function(){n.props.dispatch({type:"TOGGLE_COMPLETED",key:e.key})}},e.text,"\xa0\xa0",r.a.createElement(b.a,{icon:e.completed?"check":"times"}))},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.entries,t=(e=this.filterItems(e,this.props.filter)).map(this.createTasks);return r.a.createElement("ul",{className:"theList"},t)}}]),t}(a.Component),v=Object(m.b)(function(e){return{entries:e}})(k),y=n(9),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"To Do List"),r.a.createElement(h,null),r.a.createElement(y.b,null,r.a.createElement(v,{filter:"SHOW_ALL",path:"/"}),r.a.createElement(v,{filter:"SHOW_PENDING",path:"pending"}),r.a.createElement(v,{filter:"SHOW_COMPLETED",path:"completed"})),r.a.createElement("nav",null,r.a.createElement(y.a,{to:"/"},"All Tasks")," |"," ",r.a.createElement(y.a,{to:"pending"},"Pending Tasks")," |"," ",r.a.createElement(y.a,{to:"completed"},"Completed Tasks")))}}]),t}(a.Component),T=n(11),D=n(23),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return e.concat([t.data]);case"TOGGLE_COMPLETED":return e.map(function(e){return e.key===t.key?Object(D.a)({},e,{completed:!e.completed}):e});default:return e}},L=Object(T.b)(g);l.a.render(r.a.createElement(m.a,{store:L},r.a.createElement(j,null)),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.f1eae6f6.chunk.js.map