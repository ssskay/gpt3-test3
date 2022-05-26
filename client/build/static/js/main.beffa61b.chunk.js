(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(12),s=n.n(a),i=n(2),o=(n(11),n(6)),l=n(0);function j(){return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(l.jsx)(o.c,{className:"navbar-brand",to:"/",children:Object(l.jsx)("img",{style:{width:"25%"},src:"https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.c,{className:"nav-link",to:"/create",children:"Create Record"})})})})]})})}var d=n(5),h=n.n(d),b=n(7),u=n(4),p=function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.record.name}),Object(l.jsx)("td",{children:e.record.position}),Object(l.jsx)("td",{children:e.record.level}),Object(l.jsxs)("td",{children:[Object(l.jsx)(o.b,{className:"btn btn-link",to:"/edit/".concat(e.record._id),children:"Edit"})," |",Object(l.jsx)("button",{className:"btn btn-link",onClick:function(){e.deleteRecord(e.record._id)},children:"Delete"})]})]})};function O(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];function a(){return(a=Object(b.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/".concat(t),{method:"DELETE"});case 2:c=n.filter((function(e){return e._id!==t})),r(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/record/");case 2:if((t=e.sent).ok){e.next=7;break}return n="An error occured: ".concat(t.statusText),window.alert(n),e.abrupt("return");case 7:return e.next=9,t.json();case 9:c=e.sent,r(c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n.length]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Welcome!"}),Object(l.jsx)("h4",{children:"Thank you for helping us with our study! Today we are going to play a game against an AI. "}),Object(l.jsx)("h5",{children:"You will be randomly assigned three types of logical statements to write and the AI will try to guess it correctly. If you fool the AI, you get a point. Otherwise, the AI gets a point. Best of 3 wins! "}),Object(l.jsx)("h5",{children:"Here are each of the categories:"}),Object(l.jsxs)("table",{class:"table",children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Category"}),Object(l.jsx)("th",{children:"Description"}),Object(l.jsx)("th",{children:"Example"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Capable of"}),Object(l.jsx)("td",{children:"Whether an object is capable of performing an action"}),Object(l.jsx)("td",{children:"A watch is capable of telling the past time"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Long-tail knowledge"}),Object(l.jsx)("td",{children:"The question contains factual long-tail information"}),Object(l.jsx)("td",{children:"Washington DC is located further south than Washington State"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Plausibility"}),Object(l.jsx)("td",{children:"Quantifiers or always-never relations"}),Object(l.jsx)("td",{children:"The peak of a mountain almost always reaches above the the tree line"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Comparison"}),Object(l.jsx)("td",{children:"Comparison between two objects"}),Object(l.jsx)("td",{children:"The end of a baseball bat is larger than the handle"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Physical"}),Object(l.jsx)("td",{children:"Physical commonsense"}),Object(l.jsx)("td",{children:"You build the walls on a house before putting on the roof"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Causality"}),Object(l.jsx)("td",{children:"Cause and effect relations"}),Object(l.jsx)("td",{children:"If you get into an accident because you have been drinking alcohol, you will be arrested"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Temporal"}),Object(l.jsx)("td",{children:"Temporal understanding"}),Object(l.jsx)("td",{children:"No one had ever reached the top of Mount Everest before 1977"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Negation"}),Object(l.jsx)("td",{children:"A negation phrase"}),Object(l.jsx)("td",{children:"A mock trial is something with no legal consequence"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Strategy"}),Object(l.jsx)("td",{children:"Reasoning steps are implicit and should be inferred using a strategy"}),Object(l.jsx)("td",{children:"Blood banks almost never take cash or checks as deposits"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Event chain"}),Object(l.jsx)("td",{children:"Relating to the order of events"}),Object(l.jsx)("td",{children:"Putting on shoes is done in this order normally: slips shoes onto feet, then tie shoelaces"})]})]}),Object(l.jsx)("h5",{children:"Please write a statement that is "}),Object(l.jsxs)("table",{className:"table table-striped",style:{marginTop:20},children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Position"}),Object(l.jsx)("th",{children:"Level"}),Object(l.jsx)("th",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsx)(p,{record:e,deleteRecord:function(){return function(e){return a.apply(this,arguments)}(e._id)}},e._id)}))})]}),Object(l.jsx)(o.b,{to:"/create",children:Object(l.jsx)("button",{className:"nav-link",to:"/create",children:"Start Game!"})})]})}var m=n(8);function x(){var e=Object(c.useState)({name:"",position:"",level:"",records:[]}),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(i.g)(),s=Object(i.f)();function o(e){return r((function(t){return Object(m.a)(Object(m.a)({},t),e)}))}function j(){return(j=Object(b.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={name:n.name,position:n.position,level:n.level},e.next=4,fetch("http://localhost:5001/update/".concat(a.id),{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});case 4:s("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t,n,c,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.id.toString(),e.next=3,fetch("http://localhost:5001/record/".concat(a.id.toString()));case 3:if((n=e.sent).ok){e.next=8;break}return c="An error has occured: ".concat(n.statusText),window.alert(c),e.abrupt("return");case 8:return e.next=10,n.json();case 10:if(i=e.sent){e.next=15;break}return window.alert("Record with id ".concat(t," not found")),s("/"),e.abrupt("return");case 15:r(i);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a.id,s]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Update Record"}),Object(l.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"name",value:n.name,onChange:function(e){return o({name:e.target.value})}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"position",children:"Position: "}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"position",value:n.position,onChange:function(e){return o({position:e.target.value})}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("div",{className:"form-check form-check-inline",children:[Object(l.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionIntern",value:"Intern",checked:"Intern"===n.level,onChange:function(e){return o({level:e.target.value})}}),Object(l.jsx)("label",{htmlFor:"positionIntern",className:"form-check-label",children:"Intern"})]}),Object(l.jsxs)("div",{className:"form-check form-check-inline",children:[Object(l.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionCapableOf",value:"CapableOf",checked:"CapableOf"===n.level,onChange:function(e){return o({level:e.target.value})}}),Object(l.jsx)("label",{htmlFor:"positionCapableOf",className:"form-check-label",children:"Capable of"})]}),Object(l.jsxs)("div",{className:"form-check form-check-inline",children:[Object(l.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionSenior",value:"Senior",checked:"Senior"===n.level,onChange:function(e){return o({level:e.target.value})}}),Object(l.jsx)("label",{htmlFor:"positionSenior",className:"form-check-label",children:"Senior"})]})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"submit",value:"Update Record",className:"btn btn-primary"})})]})]})}function f(){var e=Object(c.useState)({skill:"",statement:"",position:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(i.f)();function s(e){return r((function(t){return Object(m.a)(Object(m.a)({},t),e)}))}function o(){return(o=Object(b.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=Object(m.a)({},n),e.next=4,fetch("http://localhost:5001/record/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch((function(e){window.alert(e)}));case 4:r({name:"",position:"",level:""}),a("/");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Create New Record"}),Object(l.jsxs)("form",{onSubmit:function(e){return o.apply(this,arguments)},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"name",value:n.name,onChange:function(e){return s({name:e.target.value})}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"position",children:"Statement"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"position",value:n.position,onChange:function(e){return s({position:e.target.value})}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("div",{className:"form-check form-check-inline",children:[Object(l.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionIntern",value:"Intern",checked:"Intern"===n.level,onChange:function(e){return s({level:e.target.value})}}),Object(l.jsx)("label",{htmlFor:"positionIntern",className:"form-check-label",children:"Intern"})]}),Object(l.jsxs)("div",{className:"form-check form-check-inline",children:[Object(l.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionCapableOf",value:"CapableOf",checked:"CapableOf"===n.level,onChange:function(e){return s({level:e.target.value})}}),Object(l.jsx)("label",{htmlFor:"positionCapableOf",className:"form-check-label",children:"Capable of"})]}),Object(l.jsxs)("div",{className:"form-check form-check-inline",children:[Object(l.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionSenior",value:"Senior",checked:"Senior"===n.level,onChange:function(e){return s({level:e.target.value})}}),Object(l.jsx)("label",{htmlFor:"positionSenior",className:"form-check-label",children:"Senior"})]})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"submit",value:"Create person",className:"btn btn-primary"})})]})]})}var v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{style:{margin:20},children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",element:Object(l.jsx)(O,{})}),Object(l.jsx)(i.a,{path:"/edit/:id",element:Object(l.jsx)(x,{})}),Object(l.jsx)(i.a,{path:"/create",element:Object(l.jsx)(f,{})})]})})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(v,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.beffa61b.chunk.js.map