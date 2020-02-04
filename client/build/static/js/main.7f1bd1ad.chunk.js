(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,n){e.exports=n(238)},238:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return E})),n.d(a,"handleToken",(function(){return j})),n.d(a,"submitSurvey",(function(){return O})),n.d(a,"fetchSurveys",(function(){return k}));n(113);var r=n(0),c=n.n(r),u=n(53),l=n.n(u),i=n(7),s=n(9),o=n(10),m=n(12),p=n(11),f=n(13),b=n(24),v=n.n(b),d=n(42),h=n(31),y=n.n(h),E=function(){return function(){var e=Object(d.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(d.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("/api/stripe",e);case 2:a=t.sent,n({type:"fetch_user",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e,t){return function(){var n=Object(d.a)(v.a.mark((function n(a){var r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.post("/api/surveys",e);case 2:r=n.sent,t.push("/surveys"),a({type:"fetch_user",payload:r.data});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){return function(){var e=Object(d.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/surveys");case 2:n=e.sent,t({type:"fetch_surveys",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=n(23),w=n(28),S=n(107),x=n.n(S),N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return(c.a.createElement(x.a,{name:"Email App",description:"Please add credits to your account! $5 for 5 credits",amount:500,token:function(t){return e.props.handleToken(t)},stripeKey:"sk_test_s4SlTenFRSXUHJxt6buAH6Zd"},c.a.createElement("button",{className:"btn"},"Add Credits")))}}]),t}(r.Component),C=Object(i.b)(null,a)(N),_=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Log In with Google"));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(C,null)),c.a.createElement("li",{key:"2",style:{margin:"0px 10px"}},"Credits: ",this.props.auth.credits),c.a.createElement("li",{key:"3"},c.a.createElement("a",{href:"/api/logout"},"Log Out"))]}}},{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(g.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo"},"Email App"),c.a.createElement("ul",{className:"right"},this.renderContent())))}}]),t}(r.Component);var A=Object(i.b)((function(e){return{auth:e.auth}}))(_),F=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Email Survey App"),"Collect Feedback")}}]),t}(r.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSurveys()}},{key:"renderSurveys",value:function(){return this.props.surveys.reverse().map((function(e){return c.a.createElement("div",{className:"card darken-1",key:e._id},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},e.title),c.a.createElement("p",null,e.body),c.a.createElement("p",{className:"right"},"Sent On: ",new Date(e.dateSent).toLocaleDateString())),c.a.createElement("div",{className:"card-action"},c.a.createElement("p",null,"Yes: ",e.yes),c.a.createElement("p",null,"No: ",e.no)))}))}},{key:"render",value:function(){return this.props.surveys&&this.props.surveys.length?c.a.createElement("div",null,this.renderSurveys()):c.a.createElement("div",null)}}]),t}(r.Component);var T=Object(i.b)((function(e){return{surveys:e.surveys}}),{fetchSurveys:k})(R),B=function(){return c.a.createElement("div",null,c.a.createElement(T,null),c.a.createElement("div",{className:"fixed-action-btn"},c.a.createElement(g.b,{to:"/surveys/new",className:"btn-floating btn-large blue"},c.a.createElement("i",{className:"material-icons"},"add"))))},D=n(239),L=n(240),U=function(e){var t=e.input,n=e.label,a=e.meta,r=a.error,u=a.touched;return c.a.createElement("div",null,c.a.createElement("label",null,n),c.a.createElement("input",Object.assign({},t,{style:{marginBottom:"5px"}})),c.a.createElement("div",{className:"red-text",style:{marginBottom:"20px"}},u&&r))},J=n(39),M=n.n(J),Z=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,z=[{label:"Survey Title",name:"title",Error:"Survey Title cannot be blank, please submit a title."},{label:"Subject Line",name:"subject",Error:"Subject line cannot be blank, please submit a subject line."},{label:"Email Body",name:"body",Error:"Email body cannot be blank, please submit a value"},{label:"Recipient List",name:"recipients",Error:"No recipient selected, please submit a recipient."}],H=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"renderFields",value:function(){return M.a.map(z,(function(e){var t=e.label,n=e.name;return c.a.createElement(L.a,{key:n,component:U,type:"text",label:t,name:n})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.props.handleSubmit(this.props.onSurveySubmit)},this.renderFields(),c.a.createElement(g.b,{to:"/surveys",className:"red btn-flat left white-text"},"Cancel"),c.a.createElement("button",{type:"Submit",className:"teal btn-flat right white-text"},"Next",c.a.createElement("i",{className:"material-icons right"},"done"))))}}]),t}(r.Component);var I=Object(D.a)({validate:function(e){var t={};return t.recipients=function(e){var t=e.split(",").map((function(e){return e.trim()})).filter((function(e){return!Z.test(e)}));if(t.length)return"These emails are invalid: ".concat(t)}(e.recipients||""),M.a.each(z,(function(n){var a=n.name,r=n.Error;e[a]||(t[a]=r)})),t},form:"surveyForm",destroyOnUnmount:!1})(H);var P=Object(i.b)((function(e){return{formValues:e.form.surveyForm.values}}),a)(Object(w.e)((function(e){var t=e.onCancel,n=e.formValues,a=e.submitSurvey,r=e.history,u=M.a.map(z,(function(e){var t=e.name,a=e.label;return c.a.createElement("div",{key:t},c.a.createElement("label",null,a),c.a.createElement("div",null,n[t]))}));return c.a.createElement("div",null,c.a.createElement("h4",null,"Please confirm your entries"),u,c.a.createElement("button",{className:"yellow darken-3 btn-flat white-text",onClick:t},"Back"),c.a.createElement("button",{onClick:function(){return a(n,r)},className:"green btn-flat right white-text"},"Send Surveys",c.a.createElement("i",{className:"material-icons right"},"email")))}))),V=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={formReview:!1},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"renderContent",value:function(){var e=this;return!0===this.state.formReview?c.a.createElement(P,{onCancel:function(){return e.setState({formReview:!1})}}):c.a.createElement(I,{onSurveySubmit:function(){return e.setState({formReview:!0})}})}},{key:"render",value:function(){return c.a.createElement("div",null,this.renderContent())}}]),t}(r.Component),$=Object(D.a)({form:"surveyForm"})(V),G=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(g.a,null,c.a.createElement("div",null,c.a.createElement(A,null),c.a.createElement(w.a,{exact:!0,path:"/",component:F}),c.a.createElement(w.a,{exact:!0,path:"/surveys",component:B}),c.a.createElement(w.a,{path:"/surveys/new",component:$}))))}}]),t}(r.Component),K=Object(i.b)(null,a)(G),W=n(6),X=n(110),Y=n(111),q=n(241),Q=Object(W.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}},form:q.a,surveys:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_surveys":return t.payload;default:return e}}}),ee=Object(Y.composeWithDevTools)({}),te=[X.a],ne=Object(W.createStore)(Q,ee(W.applyMiddleware.apply(void 0,te)));window.axios=y.a;l.a.render(c.a.createElement((function(){return c.a.createElement(i.a,{store:ne},c.a.createElement(K,null))}),null),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.7f1bd1ad.chunk.js.map