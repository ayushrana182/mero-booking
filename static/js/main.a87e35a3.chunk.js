(this.webpackJsonpmerobooking=this.webpackJsonpmerobooking||[]).push([[0],{125:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(33),i=t.n(c),r=(t(125),t(13)),o=t(183),l=t(205),d=t(200),j=t(180),m=t(14),b=t(190),h=t(196),u=t(198),p=t(176),x=t(199),O=t(144),g=t(101),f=t.n(g),y=t(100),C=t.n(y),v=t(102),k=t.n(v),w=t(201),S=t(204),F=t(202),L=t(203),B=t(179),R=s.a.createContext({}),T=t(2),A=function(){var e=s.a.useContext(R),a=e.user,t=e.setUser,n=s.a.useState(!1),c=Object(r.a)(n,2),i=c[0],o=c[1],l=function(){o(!0)},j=function(){o(!1)},g=function(e){var n=Object(m.a)(a);n.splice(e,1),t(n),o(!1)};return Object(T.jsx)("div",{style:{marginTop:20,marginBottom:20},children:a.map((function(e){return Object(T.jsx)("div",{children:Object(T.jsx)(b.a,{container:!0,style:{display:"flex",justifyContent:"center"},children:Object(T.jsx)(b.a,{item:!0,xs:12,sm:6,lg:4,children:Object(T.jsxs)(h.a,{raised:!0,sx:{mt:1,mb:1},children:[Object(T.jsxs)(u.a,{children:[Object(T.jsx)(O.a,{variant:"h4",gutterBottom:!0,children:e.message}),Object(T.jsx)(O.a,{variant:"caption",display:"block",color:"text.secondary",children:Object(T.jsxs)(p.a,{direction:"row",spacing:2,children:[Object(T.jsx)(C.a,{sx:{mb:2}})," ",Object(T.jsxs)(O.a,{children:[" ",e.name," "]})," ",Object(T.jsx)(f.a,{}),Object(T.jsxs)(O.a,{children:[e.address," "]})]})}),Object(T.jsx)(O.a,{variant:"caption",display:"block",color:"text.secondary",children:Object(T.jsxs)(p.a,{direction:"row",spacing:2,children:[Object(T.jsx)(k.a,{})," ",Object(T.jsxs)(O.a,{children:[e.time," "]})]})})]}),Object(T.jsxs)(x.a,{sx:{display:"flex",justifyContent:"space-around"},children:[Object(T.jsx)(d.a,{variant:"outlined",color:"primary",onClick:l,children:"Cancel"}),Object(T.jsx)(d.a,{variant:"contained",color:"secondary",children:"Reschedule"}),Object(T.jsxs)(w.a,{open:i,onClose:j,children:[Object(T.jsx)(B.a,{id:"alert-dialog-title",children:"Cancel Apppointment?"}),Object(T.jsx)(F.a,{children:Object(T.jsx)(L.a,{id:"alert-dialog-description",children:"By Clicking on Confirm you will cancel the appointment."})}),Object(T.jsxs)(S.a,{children:[Object(T.jsx)(d.a,{onClick:g,variant:"contained",color:"warning",children:"Confirm"}),Object(T.jsx)(d.a,{onClick:j,variant:"outlined",autoFocus:!0,children:"Cancel"})]})]})]})]})})})},e.id)}))})},N=t(15),q=function(){var e=Object(N.f)();return Object(T.jsx)("div",{children:Object(T.jsxs)(j.a,{sx:{backgroundColor:"#F3F3F3",marginTop:"5px"},children:[Object(T.jsxs)(l.a,{style:{display:"flex",justifyContent:"space-around"},children:[Object(T.jsx)("h3",{children:"Scheduled Appointments"}),Object(T.jsx)(d.a,{variant:"contained",style:{borderRadius:20,width:"20%",height:"90%",marginTop:20,backgroundColor:"#E2641D"},size:"small",onClick:function(){return e("/new-appointment")},children:"Book an Appointment"})]}),Object(T.jsx)(A,{})]})})},M=t(194),P=t(195),z=t(206),J=function(){return Object(T.jsx)("div",{children:Object(T.jsx)(M.a,{position:"static",children:Object(T.jsxs)(P.a,{style:{backgroundColor:"white",display:"flex",justifyContent:"space-around"},children:[Object(T.jsx)(z.a,{component:"img",style:{maxWidth:120},image:"/static/images/Merobooking.png",alt:"green iguana"}),Object(T.jsx)(d.a,{variant:"outlined",style:{borderRadius:20},children:"Get Help?"})]})})})},D=t(61),E=t(49),I=t(184),W=t(182),G=t(192),K=t(207),U=t(187),H=t(188),V=t(87),$=t.n(V),Q=(t(132),t(103)),X=["9:00 am-9:30 am","9:30 am-10:00 am","10:00 am-10:30 am","10:30 am-11:00 am","11:00 am-11:30 am","11:30 am-12:00 am","12:00 pm-12:30 pm","12:30 pm-1:00 pm","1:00 pm-1:30 pm","1:30 pm-2:00 pm","2:00 pm-2:30 pm","2:30 pm-3:00 pm","3:00 pm-3:30 pm","3:30 pm-4:00 pm","4:00 pm-4:30 pm","4:30 pm-5 pm"],Y=["Baneshwor","Chabahil","Thamel","Pul Chowk","Hal Chowk","Indra Chowk "],Z=function(){var e=s.a.useContext(R),a=e.user,t=e.setUser,n=s.a.useState({timeOptions:X}),c=Object(r.a)(n,2),i=c[0],o=c[1],j=s.a.useState(!0),b=Object(r.a)(j,2),u=b[0],x=b[1],O=s.a.useState({locationOptions:Y}),g=Object(r.a)(O,2),f=g[0],y=g[1],C=Object(Q.a)({mode:"onChange",reValidateMode:"onChange",defaultValues:{name:"John",phone:"000-000-0000",email:"email@email.com",address:"123 Main St",message:"Drop your message here...",time:""}}),v=C.register,k=C.formState.errors,w=C.handleSubmit;return Object(T.jsx)("div",{children:Object(T.jsx)(l.a,{style:{display:"flex",justifyContent:"center"},children:Object(T.jsx)(h.a,{sx:{width:800,p:2},children:Object(T.jsx)("form",{onSubmit:w((function(e){t([].concat(Object(m.a)(a),[e])),console.log(e)})),children:Object(T.jsxs)(p.a,{spacing:2,children:[Object(T.jsx)(I.a,Object(E.a)({name:"name",label:"Name",type:"text",fullWidth:!0,size:"small",error:!!k.name},v("name",{required:!0}))),Object(T.jsx)(W.a,{component:"legend",children:"Gender"}),Object(T.jsxs)(G.a,{row:!0,"aria-label":"gender",name:"row-radio-buttons-group",children:[Object(T.jsx)(K.a,{value:"female",control:Object(T.jsx)(U.a,{}),label:"Female"}),Object(T.jsx)(K.a,{value:"male",control:Object(T.jsx)(U.a,{}),label:"Male"}),Object(T.jsx)(K.a,{value:"other",control:Object(T.jsx)(U.a,{}),label:"Other"})]}),Object(T.jsx)(I.a,Object(E.a)({name:"email",label:"Email Address",fullWidth:!0,size:"small",error:!!k.email},v("email",{required:!0}))),Object(T.jsx)(I.a,Object(E.a)({name:"phone",label:"Phone Number",fullWidth:!0,size:"small",error:!!k.phone},v("phone",{pattern:/^\d\d\d-\d\d\d-\d\d\d\d$/}))),Object(T.jsx)(I.a,Object(E.a)({name:"address",label:"Address",fullWidth:!0,size:"small",error:!!k.address},v("address",{required:!0}))),Object(T.jsx)($.a,{options:X,onChange:function(e){o(e)},value:i.value,placeholder:"Select a time slot"}),Object(T.jsx)($.a,{placeholder:"Select a Location",options:Y,onChange:function(e){y(e)},value:f.value}),Object(T.jsx)(I.a,Object(E.a)({label:"Message",placeholder:"Enter your message",multiline:!0,error:!!k.message},v("message",{required:!0}))),Object(T.jsx)(K.a,{control:Object(T.jsx)(H.a,{checked:u,onChange:function(e){x(e.target.checked)}}),label:"Please agree to our terms and conditions before confirming."}),!u||Object(T.jsx)(d.a,{variant:"contained",type:"submit",disabled:!!k.phone,children:"Book Appointment"})]})})})})})},_=function(){var e=Object(N.f)();return Object(T.jsx)("div",{children:Object(T.jsxs)(j.a,{sx:{backgroundColor:"#F3F3F3",marginTop:"5px"},children:[Object(T.jsxs)(l.a,{style:{display:"flex",justifyContent:"space-around"},children:[Object(T.jsx)("h3",{children:"New Appointment"}),Object(T.jsx)(d.a,{variant:"contained",style:{borderRadius:20,width:"20%",height:"90%",marginTop:20,backgroundColor:"#E2641D"},size:"small",onClick:function(){return e("/")},children:"Go Back"})]}),Object(T.jsx)(Z,{})]})})},ee=t(193),ae=t(48),te=t(40),ne=t(41),se=t(88),ce=Object(se.a)({palette:{primary:{main:ae.a[700],contrastText:"#fff"},secondary:{main:te.a[700]},warning:{main:ne.a[500]}}}),ie=[{id:1,name:"John Newman",gender:"male",email:"john@email.com",phone:"9234234234",address:"Kathmandu",message:"Lorem Ipsum Lorem",time:"9:00 am-9:30 am"},{id:2,name:"Jane Doe",gender:"female",email:"jane@email.com",phone:"9234234234",address:"Kathmandu",message:"Lorem Ipsum Lorem",time:"9:00 am-9:30 am"},{id:3,name:"Jimmy Sparks",gender:"male",email:"jimmy@email.com",phone:"9234234234",address:"Pokhara",message:"Loan Request of Nrs 5,000",time:"9:00 am-9:30 am"},{id:4,name:"Mc'Lovin",gender:"male",email:"john@email.com",phone:"9234234234",address:"Kathmandu",message:"Loan Request of NRS 10,0000",time:"9:00 am-9:30 am"},{id:5,name:"Cheesecake",gender:"male",email:"john@email.com",phone:"9234234234",address:"Kathmandu",message:"Loan Request of NRS 10,0000",time:"10:00 am-10:30 am"}];var re=function(){var e=s.a.useState(ie),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(R.Provider,{value:{user:t,setUser:n},children:Object(T.jsx)(ee.a,{theme:ce,children:Object(T.jsxs)(D.a,{children:[Object(T.jsx)(J,{}),Object(T.jsx)(o.a,{sx:{flexGrow:1},children:Object(T.jsxs)(N.c,{children:[Object(T.jsx)(N.a,{exact:!0,path:"/",element:Object(T.jsx)(q,{})}),Object(T.jsx)(N.a,{exact:!0,path:"/new-appointment",element:Object(T.jsx)(_,{})})]})})]})})})})},oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,208)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(re,{})}),document.getElementById("root")),oe()}},[[135,1,2]]]);
//# sourceMappingURL=main.a87e35a3.chunk.js.map