(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(11),r=c.n(s),a=c(2),o=c(4),l=c.n(o),h=c(7),j=c(3),d=c(8),b=(c(17),c(0)),u=function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.record.name}),Object(b.jsx)("td",{children:e.record.position}),Object(b.jsx)("td",{children:e.record.level})]})};function p(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1];function s(){return(s=Object(h.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/".concat(t),{method:"DELETE"});case 2:n=c.filter((function(e){return e._id!==t})),i(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(l.a.mark((function e(){var t,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/record/");case 2:if((t=e.sent).ok){e.next=7;break}return c="An error occured: ".concat(t.statusText),window.alert(c),e.abrupt("return");case 7:return e.next=9,t.json();case 9:n=e.sent,i(n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c.length]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Welcome!"}),Object(b.jsx)("h4",{children:"Thank you for helping us with our study! Today we are going to play a game against an AI. "}),Object(b.jsx)("h5",{children:"You will be randomly assigned three types of logical statements to write and the AI will try to guess it correctly. If you fool the AI, you get a point. Otherwise, the AI gets a point. Best of 3 wins! "}),Object(b.jsx)("h5",{children:"Here are each of the categories:"}),Object(b.jsxs)("table",{class:"table",children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Category"}),Object(b.jsx)("th",{children:"Description"}),Object(b.jsx)("th",{children:"Example"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Capable of"}),Object(b.jsx)("td",{children:"Whether an object is capable of performing an action"}),Object(b.jsx)("td",{children:"A watch is capable of telling the past time"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Long-tail knowledge"}),Object(b.jsx)("td",{children:"The question contains factual long-tail information"}),Object(b.jsx)("td",{children:"Washington DC is located further south than Washington State"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Plausibility"}),Object(b.jsx)("td",{children:"Quantifiers or always-never relations"}),Object(b.jsx)("td",{children:"The peak of a mountain almost always reaches above the the tree line"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Comparison"}),Object(b.jsx)("td",{children:"Comparison between two objects"}),Object(b.jsx)("td",{children:"The end of a baseball bat is larger than the handle"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Physical"}),Object(b.jsx)("td",{children:"Physical commonsense"}),Object(b.jsx)("td",{children:"You build the walls on a house before putting on the roof"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Causality"}),Object(b.jsx)("td",{children:"Cause and effect relations"}),Object(b.jsx)("td",{children:"If you get into an accident because you have been drinking alcohol, you will be arrested"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Temporal"}),Object(b.jsx)("td",{children:"Temporal understanding"}),Object(b.jsx)("td",{children:"No one had ever reached the top of Mount Everest before 1977"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Negation"}),Object(b.jsx)("td",{children:"A negation phrase"}),Object(b.jsx)("td",{children:"A mock trial is something with no legal consequence"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Strategy"}),Object(b.jsx)("td",{children:"Reasoning steps are implicit and should be inferred using a strategy"}),Object(b.jsx)("td",{children:"Blood banks almost never take cash or checks as deposits"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Event chain"}),Object(b.jsx)("td",{children:"Relating to the order of events"}),Object(b.jsx)("td",{children:"Putting on shoes is done in this order normally: slips shoes onto feet, then tie shoelaces"})]})]}),Object(b.jsx)("h3",{children:" Current submissions:"}),Object(b.jsxs)("table",{className:"table table-striped",style:{marginTop:20},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Position"}),Object(b.jsx)("th",{children:"Level"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e){return Object(b.jsx)(u,{record:e,deleteRecord:function(){return function(e){return s.apply(this,arguments)}(e._id)}},e._id)}))})]}),Object(b.jsx)(d.b,{to:"/create",children:Object(b.jsx)("button",{className:"nav-link",to:"/create",children:"Start Game!"})})]})}var m=c(6);function O(){var e=Object(n.useState)({name:"",position:"",level:"",records:[]}),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(a.g)(),r=Object(a.f)();function o(e){return i((function(t){return Object(m.a)(Object(m.a)({},t),e)}))}function d(){return(d=Object(h.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:c.name,position:c.position,level:c.level},e.next=4,fetch("http://localhost:5001/update/".concat(s.id),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 4:r("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(l.a.mark((function e(){var t,c,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.id.toString(),e.next=3,fetch("http://localhost:5001/record/".concat(s.id.toString()));case 3:if((c=e.sent).ok){e.next=8;break}return n="An error has occured: ".concat(c.statusText),window.alert(n),e.abrupt("return");case 8:return e.next=10,c.json();case 10:if(a=e.sent){e.next=15;break}return window.alert("Record with id ".concat(t," not found")),r("/"),e.abrupt("return");case 15:i(a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s.id,r]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Update Record"}),Object(b.jsxs)("form",{onSubmit:function(e){return d.apply(this,arguments)},children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"name",value:c.name,onChange:function(e){return o({name:e.target.value})}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"position",children:"Position: "}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"position",value:c.position,onChange:function(e){return o({position:e.target.value})}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionIntern",value:"Intern",checked:"Intern"===c.level,onChange:function(e){return o({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionIntern",className:"form-check-label",children:"Intern"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionCapableOf",value:"CapableOf",checked:"CapableOf"===c.level,onChange:function(e){return o({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionCapableOf",className:"form-check-label",children:"Capable of"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionSenior",value:"Senior",checked:"Senior"===c.level,onChange:function(e){return o({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionSenior",className:"form-check-label",children:"Senior"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Update Record",className:"btn btn-primary"})})]})]})}function f(){var e=Object(n.useState)({skill:"",statement:"",position:""}),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(),r=Object(j.a)(s,2),o=r[0],d=r[1],u=Object(n.useState)({aicorrectness:""}),p=Object(j.a)(u,2),O=p[0],f=p[1],x=Object(n.useState)(),v=Object(j.a)(x,2),g=v[0],k=v[1],y=Object(n.useState)(!1),N=Object(j.a)(y,2),C=N[0],w=N[1];Object(a.f)();function S(e){return i((function(t){return Object(m.a)(Object(m.a)({},t),e)}))}function T(e){return f((function(t){return Object(m.a)(Object(m.a)({},t),e)}))}function A(){return(A=Object(h.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:5001/record/update/".concat(o),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(m.a)(Object(m.a)({},O),{},{airesponse:g}))}).then((function(e){return e.json()})).catch((function(e){window.alert(e)}));case 3:c=e.sent,console.log(c),f({aicorrectness:""});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(h.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=Object(m.a)({},c),e.next=4,fetch("http://localhost:5001/record/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).catch((function(e){window.alert(e)}));case 4:s=e.sent,console.log(s),i({name:"",position:"",level:""}),console.log(s.choices[0].text),k(s.choices[0].text),d(s._id);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Create New Submission"}),Object(b.jsxs)("form",{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"position",children:"Statement"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"position",value:c.position,onChange:function(e){return S({position:e.target.value})}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"position",children:"Type of statement: "}),Object(b.jsx)("h3",{children:" "}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionCapableOf",value:"CapableOf",checked:"CapableOf"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionCapableOf",className:"form-check-label",children:"Capable Of"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionLong-tailKnowledge",value:"Long-tailKnowledge",checked:"Long-tailKnowledge"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionLong-tailKnowledge",className:"form-check-label",children:"Long-tail Knowledge"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionPlausibility",value:"Plausibility",checked:"Plausibility"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionPlausibility",className:"form-check-label",children:"Plausibility"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionComparison",value:"Comparison",checked:"Comparison"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionComparison",className:"form-check-label",children:"Comparison"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionPhysical",value:"Physical",checked:"Physical"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionPhysical",className:"form-check-label",children:"Physical"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionCausality",value:"Causality",checked:"Causality"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionCausality",className:"form-check-label",children:"Causality"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionTemporal",value:"Temporal",checked:"Temporal"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionTemporal",className:"form-check-label",children:"Temporal"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionNegation",value:"Negation",checked:"Negation"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionNegation",className:"form-check-label",children:"Negation"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionStrategy",value:"Strategy",checked:"Strategy"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionStrategy",className:"form-check-label",children:"Strategy"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionEventChain",value:"EventChain",checked:"EventChain"===c.level,onChange:function(e){return S({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionEventChain",className:"form-check-label",children:"Event Chain"})]})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Ask the AI",className:"btn btn-primary"})})]}),Object(b.jsxs)("form",{onSubmit:function(e){return A.apply(this,arguments)},children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"position",children:"The AI's answer: "}),Object(b.jsx)("span",{children:g})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"position",children:"Rate the AI's response: "}),Object(b.jsx)("h3",{children:" "}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"correct",id:"correct",value:"correct",checked:"correct"===O.aicorrectness,onChange:function(e){return T({aicorrectness:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"correct",className:"form-check-label",children:"Correct!"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"incorrect",id:"incorrect",value:"incorrect",checked:"incorrect"===O.aicorrectness,onChange:function(e){return T({aicorrectness:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"incorrect",className:"form-check-label",children:"Long-tail Knowledge"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"notApplicable",id:"notApplicable",value:"notApplicable",checked:"notApplicable"===O.aicorrectness,onChange:function(e){return T({aicorrectness:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"notApplicable",className:"form-check-label",children:"N/A (AI did not say true or false)"})]})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Submit feedback",className:"btn btn-primary"})})]}),Object(b.jsx)("h3",{children:" Reference Table"})," ",Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return w(!C)},children:" Show Table"}),C&&Object(b.jsxs)("table",{class:"table",children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Category"}),Object(b.jsx)("th",{children:"Description"}),Object(b.jsx)("th",{children:"Example"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Capable of"}),Object(b.jsx)("td",{children:"Whether an object is capable of performing an action"}),Object(b.jsx)("td",{children:"A watch is capable of telling the past time"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Long-tail knowledge"}),Object(b.jsx)("td",{children:"The question contains factual long-tail information"}),Object(b.jsx)("td",{children:"Washington DC is located further south than Washington State"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Plausibility"}),Object(b.jsx)("td",{children:"Quantifiers or always-never relations"}),Object(b.jsx)("td",{children:"The peak of a mountain almost always reaches above the the tree line"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Comparison"}),Object(b.jsx)("td",{children:"Comparison between two objects"}),Object(b.jsx)("td",{children:"The end of a baseball bat is larger than the handle"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Physical"}),Object(b.jsx)("td",{children:"Physical commonsense"}),Object(b.jsx)("td",{children:"You build the walls on a house before putting on the roof"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Causality"}),Object(b.jsx)("td",{children:"Cause and effect relations"}),Object(b.jsx)("td",{children:"If you get into an accident because you have been drinking alcohol, you will be arrested"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Temporal"}),Object(b.jsx)("td",{children:"Temporal understanding"}),Object(b.jsx)("td",{children:"No one had ever reached the top of Mount Everest before 1977"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Negation"}),Object(b.jsx)("td",{children:"A negation phrase"}),Object(b.jsx)("td",{children:"A mock trial is something with no legal consequence"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Strategy"}),Object(b.jsx)("td",{children:"Reasoning steps are implicit and should be inferred using a strategy"}),Object(b.jsx)("td",{children:"Blood banks almost never take cash or checks as deposits"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Event chain"}),Object(b.jsx)("td",{children:"Relating to the order of events"}),Object(b.jsx)("td",{children:"Putting on shoes is done in this order normally: slips shoes onto feet, then tie shoelaces"})]})]})]})}var x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{style:{margin:20},children:Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{exact:!0,path:"/",element:Object(b.jsx)(p,{})}),Object(b.jsx)(a.a,{path:"/edit/:id",element:Object(b.jsx)(O,{})}),Object(b.jsx)(a.a,{path:"/create",element:Object(b.jsx)(f,{})})]})})})};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b0653ce5.chunk.js.map