(this.webpackJsonpfacerecognitionapp=this.webpackJsonpfacerecognitionapp||[]).push([[0],{428:function(e,t,n){},430:function(e,t,n){"use strict";n.r(t);var a=n(11),s=n(49),i=n.n(s),c=(n(86),n(50)),r=n(22),o=n(23),l=n(25),h=n(24),d=n(2),u=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(d.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(d.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:" Sign Out "})}):Object(d.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(d.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:" Sign In "}),Object(d.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:" Register "})]})},b=n(80),m=n.n(b),p=n.p+"static/media/brain.918271c5.png",j=(n(88),function(){return Object(d.jsx)("div",{className:"ma4 mt0",children:Object(d.jsx)(m.a,{className:"Tilt br2 shadow-2",options:{max:35},style:{height:170,width:170},children:Object(d.jsx)("div",{className:"Tilt-inner pa3",children:Object(d.jsx)("img",{src:p,alt:"Logo"})})})})}),g=function(e){var t=e.name,n=e.entries;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is...")}),Object(d.jsx)("div",{className:"white f1",children:"".concat(n)})]})},f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(d.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent hover-dark-green pointer f6 dib",type:"submit",value:"Sign in"})}),Object(d.jsx)("div",{className:"lh-copy mt3",children:Object(d.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))})).catch((function(e){return console.log(e)}))},a.state={name:"",email:"",password:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent hover-dark-green pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(a.Component),x=(n(89),function(e){var t=e.onInputChange,n=e.onPictureSubmit;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"f3",children:"This Magic brain will detect faces in your pics. Give it a try"}),Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"center form pa4 br3 shadow-5",children:[Object(d.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(d.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),v=(n(90),function(e){var t=e.imageUrl,n=e.box;return Object(d.jsx)("div",{className:"center ma",children:Object(d.jsxs)("div",{className:"absolute mt2",children:[Object(d.jsx)("img",{id:"inputImage",src:t,alt:"",width:"500px",height:"auto"}),Object(d.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),w=n(81),N=n.n(w),C=(n(428),{particles:{color:{value:"#8C7AAE"},links:{color:"#FFF0F0",distance:150,enable:!0,opacity:.5,width:1},number:{value:80,density:{enable:!0,value_area:600}},opacity:{value:.5},shape:{polygon:{enable:!0,nb_sides:6},type:"circle"}}}),y={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onPictureSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://localhost:3000/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState({user:Object(c.a)(Object(c.a)({},e.state.user),{},{entries:t})})})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(y):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=y,e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,s=e.box;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(N.a,{className:"particles",params:C}),Object(d.jsx)(u,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(g,{name:this.state.user.name,entries:this.state.user.entries}),Object(d.jsx)(x,{onInputChange:this.onInputChange,onPictureSubmit:this.onPictureSubmit}),Object(d.jsx)(v,{box:s,imageUrl:n})]}):"signin"===a?Object(d.jsx)(f,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(d.jsx)(O,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,431)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};n(429);i.a.render(Object(d.jsx)(S,{}),document.getElementById("root")),k()},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[430,1,2]]]);
//# sourceMappingURL=main.3820f4bd.chunk.js.map