(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,o){e.exports=o(69)},51:function(e,t,o){},69:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(19),r=o.n(l),i=o(22),c=o(6),s=o(7),d=o(9),u=o(8),p=o(10),m=o(14),g=o(11);var f={background:"#3A4747",color:"#fff",textAlign:"center",padding:"15px"},h={color:"#fff",textAlign:"left",textDecorator:"none"},b=function(){return n.a.createElement("header",{style:f},n.a.createElement("h1",null,"MyTodos"),n.a.createElement(m.b,{style:h,to:"/mytodos/"},"Home")," | ","  ",n.a.createElement(m.b,{style:h,to:"/mytodos/about"},"About"))},E=o(15),S=(o(18),function(e){function t(e){var o;return Object(c.a)(this,t),(o=Object(d.a)(this,Object(u.a)(t).call(this,e))).getStyle=function(){return{background:o.props.todo.isEditMode?"#FFFFE0":"#fff",padding:"16px 20px",borderBottom:"1px  solid",textDecoration:o.props.todo.complete?"line-through":"none"}},o.handleChange=function(e){o.setState(Object(E.a)({},e.target.name,e.target.value)),console.log(e.target.value)},o.onCancel=function(e){console.log("onCancel"+o.props.todo.title),e.preventDefault(),o.setState({title:o.props.todo.title}),o.props.changeCancelMode(o.props.todo.id)},o.onSubmit=function(e){e.preventDefault();var t={title:o.state.title,id:o.state.id};o.props.updateTodoTitle(t)},o.state={title:e.todo.title,id:e.todo.id},o}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todo.isEditMode?n.a.createElement("div",{style:this.getStyle()},n.a.createElement("form",null,n.a.createElement("p",null,n.a.createElement("input",{type:"text",name:"title",style:v,value:this.state.title,onChange:function(t){return e.handleChange(t)}}),"\xa0\xa0",n.a.createElement("button",{onClick:function(t){return e.onSubmit(t)},className:"save"},"Save Change"),"\xa0\xa0",n.a.createElement("button",{onClick:function(t){return e.onCancel(t)},className:"cancel"},"Cancel")))):n.a.createElement("div",{style:this.getStyle(),className:"changeColor"},n.a.createElement("p",{className:"changeColor"},n.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,this.props.todo.id),checked:this.props.todo.complete})," \xa0\xa0",this.props.todo.title,n.a.createElement("button",{onClick:this.props.delTodo.bind(this,this.props.todo.id),className:"delete"},"Delete"),n.a.createElement("button",{onClick:this.props.changeEditMode.bind(this,this.props.todo.id),className:"edit"},"Edit")))}}]),t}(a.Component)),v={width:"80%",padding:"5px 5px",display:"inline-block",fontSize:"14px",borderColor:"#5c8a8a"},y=S,C=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return n.a.createElement(y,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo,changeEditMode:e.props.changeEditMode,updateTodoTitle:e.props.updateTodoTitle,changeCancelMode:e.props.changeCancelMode})})}}]),t}(a.Component),O=o(16),T=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={title:""},o.onChange=function(e){return o.setState(Object(E.a)({},e.target.name,e.target.value.trim()))},o.onSubmit=function(e){""===e.target.title.value.trim()&&Object(O.confirmAlert)({message:"Todos text box can not be empty",buttons:[{label:"Close Me"}]}),e.target.title.value="",e.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{id:"textForm",onSubmit:this.onSubmit,style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",autoFocus:!0,style:{flex:"10",padding:"15px",fontSize:"15px"},placeholder:"Enter to Add Todos ...",value:this.state.value,onChange:this.onChange}),n.a.createElement("input",{type:"submit",value:"Add Todo",className:"btn",style:{flex:"1"}})))}}]),t}(a.Component),k=o(38),j=o.n(k);var x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"This is TodoList App v 1.0.3"),n.a.createElement("span",null,"Changes relelated to list of todos background color"))},M=(o(51),o(39)),N=o.n(M);var A={background:"#3A4747",color:"#fff",textAlign:"center",padding:"15px",marginTop:"35%"},J=function(){return n.a.createElement("header",{style:A},n.a.createElement("p",null,"Created by: abhi020290@gmail.com"),n.a.createElement("p",null,"Thank you"))},I=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[]},o.clearConfirm=function(){Object(O.confirmAlert)({title:"Confirm to submit",message:"Are you sure to delete all the todos in list ?",buttons:[{label:"Yes",onClick:function(){localStorage.clear(),o.setState({todos:[]})}},{label:"No",onClick:function(){}}]})},o.markComplete=function(e){var t=localStorage.getItem(e),a=JSON.parse(t);a.complete=!a.complete,localStorage.setItem(e,JSON.stringify(a)),o.setState({todos:o.state.todos.map(function(t){return t.id===e&&(t.complete=!t.complete),t})})},o.editTitle=function(e){var t=localStorage.getItem(e),a=JSON.parse(t);a.complete=!a.complete,localStorage.setItem(e,JSON.stringify(a)),o.setState({todos:o.state.todos.map(function(t){return t.id===e&&(t.complete=!t.complete),t})})},o.changeEditMode=function(e){console.log("Change edit mode");var t=localStorage.getItem(e),a=JSON.parse(t);a.isEditMode=!a.isEditMode,console.log(a.title),o.setState({todos:o.state.todos.map(function(t){return t.id===e&&(console.log(t.title),t.isEditMode=!t.isEditMode,t.title=a.title),t})})},o.changeCancelMode=function(e){console.log("changeCancelMode");var t=localStorage.getItem(e);JSON.parse(t).isEditMode=!1,o.setState({todos:o.state.todos.map(function(t){return t.id===e&&(t.isEditMode=!1),t})})},o.delTodo=function(e){console.log(e),localStorage.removeItem(e),o.setState({todos:Object(i.a)(o.state.todos.filter(function(t){return t.id!==e}))})},o.addTodo=function(e){if(e){var t={id:j.a.v4(),title:e,complete:!1,isEditMode:!1};console.log(JSON.stringify(t)),localStorage.setItem(t.id,JSON.stringify(t)),o.setState({todos:[].concat(Object(i.a)(o.state.todos),[t])})}},o.updateTodoTitle=function(e){var t=e.id,a=localStorage.getItem(t),n=JSON.parse(a);n.title=e.title,localStorage.setItem(t,JSON.stringify(n)),o.setState({todos:o.state.todos.map(function(o){return o.id===t&&(o.isEditMode=!1,o.title=e.title),o})})},o.onSubmit=function(){if(localStorage.length>0)for(var e=0;e<localStorage.length;e++){var t=localStorage.key(e);o.delTodo(t)}},o}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){N.a.get("https://jsonplaceholder.typicode.com/todos/?_limit=1").then(function(e){});var e=[];if(localStorage.length>0)for(var t=0;t<localStorage.length;t++){var o=localStorage.key(t),a=localStorage.getItem(o),n=JSON.parse(a);e.push(n)}this.setState({todos:e})}},{key:"render",value:function(){var e=this;return n.a.createElement(m.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(b,null),n.a.createElement(g.a,{exact:!0,path:"/mytodos/",render:function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(T,{addTodo:e.addTodo}),n.a.createElement(C,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo,changeEditMode:e.changeEditMode,updateTodoTitle:e.updateTodoTitle,changeCancelMode:e.changeCancelMode}),n.a.createElement("input",{type:"submit",onClick:e.clearConfirm,value:"Clear All",className:"btnclear",style:{flex:"1"}}))}}),n.a.createElement(g.a,{path:"/mytodos/about",component:x}),n.a.createElement(J,null))))}}]),t}(a.Component);r.a.render(n.a.createElement(I,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6b535b49.chunk.js.map