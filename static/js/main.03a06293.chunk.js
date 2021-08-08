(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(26),a=n.n(c),s=(n(52),n(18)),o=n(19),u=n(21),i=n(20),l=(n(53),n(5)),b=n(12),j=n.n(b),d=n(2),h=Object(d.b)("phonebook/FetchContactRequest"),O=Object(d.b)("phonebook/FetchContactSuccess"),p=Object(d.b)("phonebook/FetchContactError"),f={addContactRequest:Object(d.b)("phonebook/AddContactRequest"),addContactSuccess:Object(d.b)("phonebook/AddContactSuccess"),addContactError:Object(d.b)("phonebook/AddContactError"),deleteContactRequest:Object(d.b)("phonebook/DeleteContactRequest"),deleteContactSuccess:Object(d.b)("phonebook/DeleteContactSuccess"),deleteContactError:Object(d.b)("phonebook/DeleteContactError"),fetchContactRequest:h,fetchContactSuccess:O,fetchContactError:p,changeFilter:Object(d.b)("phonebook/FilteredContact")},m={addContact:function(e){return function(t){t(f.addContactRequest()),j.a.post("/contacts",e).then((function(e){var n=e.data;return t(f.addContactSuccess(n))})).catch((function(e){return t(f.addContactError(e.message))}))}},deleteContact:function(e){return function(t){t(f.deleteContactRequest()),j.a.delete("/contacts/".concat(e)).then((function(){return t(f.deleteContactSuccess(e))})).catch((function(e){return t(f.deleteContactError(e.message))}))}},fetchContacts:function(){return function(e){e(f.fetchContactRequest()),j.a.get("/contacts").then((function(t){var n=t.data;return e(f.fetchContactSuccess(n))})).catch((function(t){return e(f.fetchContactError(t.message))}))}},filterContacts:function(e){return function(e){e(f.changeFilter())}}},g=n(27),C=function(e){return e.contacts},x=Object(g.a)([function(e){return e.filter},function(e){return e.contacts.items}],(function(e,t){var n=e.toLowerCase();if(t)return t.filter((function(e){return e.name.toLowerCase().includes(n)}))})),v=n(1),S=Object(l.b)((function(e){return{contacts:x(e)}}),(function(e){return{deleteContact:function(t){return e(m.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.deleteContact;return Object(v.jsx)("ul",{className:"nameList",children:t&&t.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(v.jsxs)("li",{className:"item",children:[Object(v.jsxs)("p",{className:"name",children:[r,": ",c]}),Object(v.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})})),k=n(44),y=n.n(k),A=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleInputName=function(t){e.setState({name:t.target.value})},e.handleInputContact=function(t){e.setState({number:t.target.value})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var e=this;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{className:"form",children:[Object(v.jsx)("label",{className:"nameLabel",children:"Name"}),Object(v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputName,className:"nameInput"}),Object(v.jsx)("label",{className:"numberLabel",children:"Number"}),Object(v.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputContact,className:"numberInput"}),Object(v.jsx)("button",{type:"button",onClick:function(){return e.props.addContact({name:e.state.name,id:y.a.generate(),number:e.state.number})},children:"Add contact"})]}),Object(v.jsx)("h2",{children:"Contacts: "}),Object(v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.props.handleFilter,className:"nameFilter"}),this.props.contacts&&Object(v.jsx)(S,{contacts:this.props.contacts})]})}}]),n}(r.Component),w=Object(l.b)((function(e){return{contacts:C(e)}}),(function(e){return{fetchContacts:function(){return e(m.fetchContacts())},addContact:function(t){return e(m.addContact(t))},filterContacts:function(t){return e(m.filteredContact(t))},handleFilter:function(t){return e(f.changeFilter(t.target.value))}}}))(A),E=n(6),R=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})})},N=n(3),q=n(16),U=n.n(q),L=n(24),I={registerRequest:Object(d.b)("auth/registerRequest"),registerSuccess:Object(d.b)("auth/registerSuccess"),registerError:Object(d.b)("auth/registerError"),loginRequest:Object(d.b)("auth/loginRequest"),loginSuccess:Object(d.b)("auth/loginSuccess"),loginError:Object(d.b)("auth/loginError"),logoutRequest:Object(d.b)("auth/logoutRequest"),logoutSuccess:Object(d.b)("auth/logoutSuccess"),logoutError:Object(d.b)("auth/logoutError"),getCurrentUserRequest:Object(d.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(d.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(d.b)("auth/getCurrentUserError")};j.a.defaults.baseURL="https://connections-api.herokuapp.com";var F,z,D,T,M,Z=function(e){j.a.defaults.headers.common.Authorization="Bearer ".concat(e)},B=function(){j.a.defaults.headers.common.Authorization=""},J={register:function(e){return function(){var t=Object(L.a)(U.a.mark((function t(n){var r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(I.registerRequest()),t.prev=1,t.next=4,j.a.post("users/signup",e);case 4:r=t.sent,Z(r.data.token),n(I.registerSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(I.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(L.a)(U.a.mark((function t(n){var r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(I.loginRequest()),t.prev=1,t.next=4,j.a.post("/users/login",e);case 4:r=t.sent,Z(r.data.token),n(I.loginSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(I.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(L.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I.logoutRequest()),e.prev=1,e.next=4,j.a.post("/users/logout");case 4:B(),t(I.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(I.loginError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(L.a)(U.a.mark((function e(t,n){var r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n().authReducer.token){e.next=3;break}return e.abrupt("return");case 3:return Z(r),t(I.getCurrentUserRequest()),e.prev=5,e.next=8,j.a.get("/users/current");case 8:c=e.sent,t(I.getCurrentUserSuccess(c.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(I.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},G=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",password:""},e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(N.a)({},r,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,r=e.password;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(v.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(v.jsxs)("label",{children:["\u0418\u043c\u044f",Object(v.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(v.jsxs)("label",{children:["\u041f\u043e\u0447\u0442\u0430",Object(v.jsx)("input",{type:"email",name:"email",value:n,onChange:this.handleChange})]}),Object(v.jsxs)("label",{children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(v.jsx)("input",{type:"password",name:"password",value:r,onChange:this.handleChange})]}),Object(v.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}}]),n}(r.Component),$={onRegister:J.register},W=Object(l.b)(null,$)(G),H=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(N.a)({},r,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d"}),Object(v.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(v.jsxs)("label",{children:["\u041f\u043e\u0447\u0442\u0430",Object(v.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(v.jsxs)("label",{children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(v.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(v.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),n}(r.Component),K={onLogin:J.logIn},P=Object(l.b)(null,K)(H),Q=n(14),V={getIsAuthenticated:function(e){return e.authReducer.isAuthenticated},getUserName:function(e){return e.authReducer.user.name}},X=Object(l.b)((function(e){return{isAuthenticated:V.getIsAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return Object(v.jsxs)("div",{children:[Object(v.jsx)(Q.b,{className:"navLink",to:"/",exact:!0,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),t&&Object(v.jsx)(Q.b,{className:"navLink",to:"/contacts",exact:!0,children:"\u041a\u043d\u0438\u0433\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"})]})})),Y=n.p+"static/media/defaultAvatar.0c07a2e4.png",_={onLogout:J.logOut},ee=Object(l.b)((function(e){return{name:V.getUserName(e),avatar:Y}}),_)((function(e){var t=e.avatar,n=e.name,r=e.onLogout;return Object(v.jsxs)("div",{className:"userMenuContainer",children:[Object(v.jsx)("img",{className:"userMenuAvatar",src:t,alt:"",width:"32",height:"32"}),Object(v.jsxs)("span",{className:"userMenuName",children:["Welcome, ",n]}),Object(v.jsx)("button",{className:"btnLogout",type:"button",onClick:r,children:"Logout"})]})})),te=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(Q.b,{className:"navLink",to:"/register",exact:!0,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(v.jsx)(Q.b,{className:"navLink",to:"/login",exact:!0,children:"\u0412\u0445\u043e\u0434"})]})},ne=Object(l.b)((function(e){return{isAunthenticated:V.getIsAuthenticated(e)}}))((function(e){var t=e.isAunthenticated;return Object(v.jsxs)("div",{className:"navContainer",children:[Object(v.jsx)(X,{}),t?Object(v.jsx)(ee,{}):Object(v.jsx)(te,{})]})})),re=n(15),ce=n(28),ae=["component","isAuthenticated","redirectTo"],se=Object(l.b)((function(e){return{isAuthenticated:V.getIsAuthenticated(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,r=e.redirectTo,c=Object(ce.a)(e,ae);return Object(v.jsx)(E.b,Object(re.a)(Object(re.a)({},c),{},{render:function(e){return n?Object(v.jsx)(t,Object(re.a)({},e)):Object(v.jsx)(E.a,{to:r})}}))})),oe=["component","isAuthenticated","redirectTo"],ue=Object(l.b)((function(e){return{isAuthenticated:V.getIsAuthenticated(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,r=e.redirectTo,c=Object(ce.a)(e,oe);return Object(v.jsx)(E.b,Object(re.a)(Object(re.a)({},c),{},{render:function(e){return n&&c.restricted?Object(v.jsx)(E.a,{to:r}):Object(v.jsx)(t,Object(re.a)({},e))}}))})),ie=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(ne,{}),Object(v.jsxs)(E.d,{children:[Object(v.jsx)(E.b,{exact:!0,path:"/",component:R}),Object(v.jsx)(ue,{path:"/register",restricted:!0,component:W,redirectTo:"/contacts"}),Object(v.jsx)(ue,{path:"/login",restricted:!0,component:P,redirectTo:"/contacts"}),Object(v.jsx)(se,{path:"/contacts",component:w,redirectTo:"login"})]})]})}}]),n}(r.Component),le={onGetCurrentUser:J.getCurrentUser},be=Object(l.b)(null,le)(ie),je=n(29),de=n(45),he=n.n(de),Oe=n(17),pe=n(7),fe={name:null,email:null},me=Object(d.c)(fe,(F={},Object(N.a)(F,I.registerSuccess,(function(e,t){return t.payload.user})),Object(N.a)(F,I.loginSuccess,(function(e,t){return t.payload.user})),Object(N.a)(F,I.logoutSuccess,(function(){return fe})),Object(N.a)(F,I.getCurrentUserSuccess,(function(e,t){return t.payload})),F)),ge=Object(d.c)(null,(z={},Object(N.a)(z,I.registerSuccess,(function(e,t){return t.payload.token})),Object(N.a)(z,I.loginSuccess,(function(e,t){return t.payload.token})),Object(N.a)(z,I.logoutSuccess,(function(){return null})),z)),Ce=function(e,t){return t.payload},xe=Object(d.c)(null,(D={},Object(N.a)(D,I.registerError,Ce),Object(N.a)(D,I.loginError,Ce),Object(N.a)(D,I.logoutError,Ce),Object(N.a)(D,I.getCurrentUserError,Ce),D)),ve=Object(d.c)(!1,(T={},Object(N.a)(T,I.registerSuccess,(function(){return!0})),Object(N.a)(T,I.loginSuccess,(function(){return!0})),Object(N.a)(T,I.getCurrentUserSuccess,(function(){return!0})),Object(N.a)(T,I.logoutSuccess,(function(){return!1})),Object(N.a)(T,I.registerError,(function(){return!1})),Object(N.a)(T,I.loginError,(function(){return!1})),Object(N.a)(T,I.getCurrentUserError,(function(){return!1})),T)),Se=Object(pe.b)({user:me,token:ge,error:xe,isAuthenticated:ve}),ke=n(46),ye=n.n(ke),Ae=Object(d.c)([],(M={},Object(N.a)(M,f.fetchContactSuccess,(function(e,t){return{items:t.payload}})),Object(N.a)(M,f.addContactSuccess,(function(e,t){var n=e.items,r=t.payload;return{items:[].concat(Object(je.a)(n),[r])}})),Object(N.a)(M,f.deleteContactSuccess,(function(e,t){var n=e.items,r=t.payload;return{items:Object(je.a)(n.filter((function(e){return e.id!==r})))}})),M)),we=Object(d.c)("",Object(N.a)({},f.changeFilter,(function(e,t){return t.payload}))),Ee=[].concat(Object(je.a)(Object(d.d)({serializableCheck:{ignoredActions:[Oe.a,Oe.f,Oe.b,Oe.c,Oe.d,Oe.e]}})),[he.a]),Re={key:"auth",storage:ye.a,whitelist:["token"]},Ne=Object(d.a)({reducer:{authReducer:Object(Oe.g)(Re,Se),contacts:Ae,filter:we},middleware:Ee,devTools:!1}),qe={store:Ne,persistor:Object(Oe.h)(Ne)},Ue=n(47);a.a.render(Object(v.jsx)(l.a,{store:qe.store,children:Object(v.jsx)(Ue.a,{loading:null,persistor:qe.persistor,children:Object(v.jsx)(Q.a,{children:Object(v.jsx)(be,{})})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.03a06293.chunk.js.map