(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-17107044":"14384691","chunk-728a34a7":"fe69a344","chunk-8d7acd04":"bf108ce8","chunk-39e559ba":"1b71b60b"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-17107044":1,"chunk-728a34a7":1,"chunk-8d7acd04":1,"chunk-39e559ba":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-17107044":"061d9d79","chunk-728a34a7":"f72874f3","chunk-8d7acd04":"07a7d8cb","chunk-39e559ba":"e99dd44d"}[e]+".css",i=s.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/food-app/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0367":function(e,t,r){},"07a4":function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r("2b0e"),a=r("2f62"),i=(r("96cf"),r("1da1")),o=r("3317"),c=r("dc59"),s={menuItems:[]},u={getMenuItems:function(e){return e.menuItems}},l={},d={setMenuRef:Object(o["a"])((function(e){return e.bindFirestoreRef("menuItems",c["a"])})),addMenuItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.prev=1,e.next=4,c["a"].add(r);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),alert("Error creating new pizza, ".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));function t(t,r){return e.apply(this,arguments)}return t}(),removeMenuItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.prev=1,e.next=4,c["a"].doc(r);case 4:n=e.sent,n.delete(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),alert("Error removing menu item, ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},p={state:s,mutations:l,getters:u,actions:d},f={orders:[]},m={},h={getOrders:function(e){return e.orders},numberOfOrders:function(e){return e.orders.length}},v={setOrdersRef:Object(o["a"])((function(e){return e.bindFirestoreRef("orders",c["b"].orderBy("createdAt"))})),addNewOrder:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["b"].add(r);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),alert("Sorry, there was a problem placing your order, please try again...");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));function t(t,r){return e.apply(this,arguments)}return t}(),removeOrder:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.prev=1,e.next=4,c["b"].doc(r);case 4:n=e.sent,n.delete(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),alert("Sorry, there was a problem removing the order, ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},b={state:f,mutations:m,getters:h,actions:v},g={currentUser:null},x={userStatus:function(e,t){e.currentUser=null===t?null:t.email}},y={currentUser:function(e){return e.currentUser}},O={signIn:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,c["c"].signInWithEmailAndPassword(r.email,r.password);case 4:a=e.sent,n("userStatus",a.user),e.next=13;break;case 8:e.prev=8,e.t0=e["catch"](1),i=e.t0.code,o=e.t0.message,"auth/wrong-password"===i?alert("Wrong password."):alert(o);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}(),signOut:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,c["c"].signOut();case 4:r("userStatus",null),alert("logged out."),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),alert("error signing out, ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},k={state:g,mutations:x,getters:y,actions:O};n["a"].use(a["a"]);var w=new a["a"].Store({mutations:o["b"],modules:{menu:p,orders:b,users:k}})},"38c8":function(e,t,r){},"44e1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"router",(function(){return de}));r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"default-font",attrs:{id:"app"}},[r("app-header"),r("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"default-font"},[r("v-app-bar",{attrs:{app:"",color:"white",height:"55px","scroll-off-screen":""}},[r("v-toolbar-title",[e._v(" FOOD PLANET ")]),r("v-spacer"),r("router-link",{attrs:{to:{name:"homeLink"},tag:"li"}},[r("v-btn",{attrs:{text:""}},[e._v("HOME")])],1),r("router-link",{attrs:{to:{name:"menuLink"},tag:"li"}},[r("v-btn",{attrs:{text:""}},[e._v("MENU")])],1),r("router-link",{attrs:{to:{name:"contactLink"},tag:"li"}},[r("v-btn",{attrs:{text:""}},[e._v("CONTACT")])],1),r("router-link",{attrs:{to:{name:"aboutLink"},tag:"li"}},[r("v-btn",{attrs:{text:""}},[e._v("ABOUT")])],1)],1)],1)},c=[],s={name:"appHeader"},u=s,l=(r("c616"),r("2877")),d=r("6544"),p=r.n(d),f=r("40dc"),m=r("8336"),h=r("2fa4"),v=r("2a7f"),b=Object(l["a"])(u,o,c,!1,null,"91eaf80e",null),g=b.exports;p()(b,{VAppBar:f["a"],VBtn:m["a"],VSpacer:h["a"],VToolbarTitle:v["a"]});var x=r("dc59"),y={name:"app",components:{appHeader:g},created:function(){this.$store.dispatch("setMenuRef",x["a"]),this.$store.dispatch("setOrdersRef",x["b"])},data:function(){return{}}},O=y,k=(r("034f"),Object(l["a"])(O,a,i,!1,null,null,null)),w=k.exports,E=r("8c4f"),T=r("07a4"),_=r("0ee8"),S=r.n(_),C=(r("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"default-font",attrs:{fluid:""}},[n("v-carousel",{attrs:{"hide-delimiter-background":"","show-arrows":!1},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.slides,(function(t){return n("v-carousel-item",{key:t.title},[n("v-img",{attrs:{src:r("91e7")}},[n("v-container",{attrs:{"fill-height":"",fluid:"","pa-0":"","ma-0":""}},[n("v-layout",{attrs:{"fill-height":"","align-end":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",{staticClass:"pa-2",attrs:{color:"red"}},[n("span",{staticClass:"headline white--text",domProps:{textContent:e._s(t.title)}})])],1)],1)],1)],1)],1)})),1),n("div",{staticClass:"info_block_wrapper "},e._l(e.cards,(function(e,t){return n("div",{key:t,staticStyle:{"margin-top":"50px"}},[n("ordering-guide",{attrs:{card:e}})],1)})),0)],1)}),L=[],R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto",staticStyle:{margin:"10px"},attrs:{width:"300",height:"400",elevation:"5"}},[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.card.url}}),r("v-card-title",[e._v(e._s(e.card.title))]),r("v-card-subtitle",{staticStyle:{"margin-top":"-20px"}},[e._v(e._s(e.card.subTitle))]),r("v-card-text",[e._v(e._s(e.card.text))])],1)},V=[],j={name:"orderingGuide",props:["card"]},A=j,I=r("b0af"),D=r("99d9"),N=r("adda"),F=Object(l["a"])(A,R,V,!1,null,null,null),P=F.exports;p()(F,{VCard:I["a"],VCardSubtitle:D["b"],VCardText:D["c"],VCardTitle:D["d"],VImg:N["a"]});var M={data:function(){return{model:0,colors:["primary","secondary","yellow darken-2","red","orange"],slides:[{title:"TITLE 1",url:"../assets/images/pizza1.jpg"},{title:"TITLE 2",url:"../assets/images/pizza2.jpg"},{title:"TITLE 3",url:"../assets/images/pizza3.jpg"}],cards:[{title:"HOW TO ORDER",subTitle:"FOLLOW OUR ORDER GUIDE",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus.",url:"https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"},{title:"FAST DELIVERY",subTitle:"WE HAVE THE FASTEST POSSIBLE DELIVERY",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus .",url:"https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"},{title:"QUALITY FOOD",subTitle:"WE PROVIDE HYGIENE AND GOOD QUALITY FOOD",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus .",url:"https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"},{title:"TRY TODAY",subTitle:"GOT HUNGRY? ORDER TODAY",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis officia rerum explicabo quia natus non temporibus debitis quod aliquid necessitatibus .",url:"https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"}]}},name:"home",methods:{goToMenu:function(){this.$router.push({name:"menuLink"})}},components:{orderingGuide:P}},U=M,q=r("5e66"),B=r("3e35"),z=r("a523"),H=r("0e8f"),G=r("a722"),Y=Object(l["a"])(U,C,L,!1,null,null,null),$=Y.exports;p()(Y,{VCard:I["a"],VCarousel:q["a"],VCarouselItem:B["a"],VContainer:z["a"],VFlex:H["a"],VImg:N["a"],VLayout:G["a"]});var W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height",staticStyle:{"margin-top":"50px"},attrs:{fluid:""}},[r("v-row",{staticStyle:{"align-content":"center","justify-content":"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"#892cdc",dark:"",flat:""}},[r("v-toolbar-title",[e._v("CONTACT US")])],1),r("v-card-text",[r("v-card-title",[e._v("FOOD PLANET")]),r("h3",{staticStyle:{"margin-left":"12px"}},[e._v("CALL US")]),r("v-card-subtitle",{staticStyle:{"margin-top":"-18px"}},[e._v("EMAIL ID : foodplanet@gmail.com")]),r("v-card-subtitle",{staticStyle:{"margin-top":"-20px"}},[e._v("PHONE NO: 7894567525")]),r("h3",{staticStyle:{"margin-left":"10px"}},[e._v("DROP A MESSAGE")]),r("v-form",[r("v-text-field",{staticStyle:{"margin-left":"10px"},attrs:{label:"Name"}}),r("v-text-field",{staticStyle:{"margin-left":"10px"},attrs:{label:"Phone No",type:"number"}}),r("v-text-field",{staticStyle:{"margin-left":"10px"},attrs:{label:"Email",type:"email"}})],1)],1),r("v-card-actions",[r("v-btn",{attrs:{block:"",color:"#892cdc"}},[e._v("SEND")])],1)],1)],1)],1)],1)},K=[],Q={data:function(){return{dialog:!1}},name:"contact"},J=Q,X=(r("610c"),r("62ad")),Z=r("4bd4"),ee=r("0fd9"),te=r("8654"),re=r("71d9"),ne=Object(l["a"])(J,W,K,!1,null,null,null),ae=ne.exports;p()(ne,{VBtn:m["a"],VCard:I["a"],VCardActions:D["a"],VCardSubtitle:D["b"],VCardText:D["c"],VCardTitle:D["d"],VCol:X["a"],VContainer:z["a"],VForm:Z["a"],VRow:ee["a"],VTextField:te["a"],VToolbar:re["a"],VToolbarTitle:v["a"]});var ie=function(){return r.e("chunk-8d7acd04").then(r.bind(null,"fb62"))},oe=function(){return r.e("chunk-728a34a7").then(r.bind(null,"84ba"))},ce=function(){return r.e("chunk-17107044").then(r.bind(null,"f529"))},se=[{path:"/",name:"homeLink",components:{default:$,"ordering-guide":P}},{path:"/menu",name:"menuLink",component:ie},{path:"/contact",name:"contactLink",component:ae},{path:"/admin",name:"adminLink",component:ce,beforeEnter:function(e,t,r){alert("This area is for authorised users only, please login to continue"),r()}},{path:"/about",name:"aboutLink",component:oe,children:[{path:"history",name:"historyLink",component:History},{path:"ordering-guide",name:"orderingGuideLink",component:P}]},{path:"*",redirect:"/"}],ue=r("f309");n["a"].use(ue["a"]);var le=new ue["a"]({});r("38c8");n["a"].config.productionTip=!1,n["a"].use(E["a"]);var de=new E["a"]({routes:se,mode:"history",scrollBehavior:function(e,t,r){if(e.hash)return{selector:e.hash}}});n["a"].filter("currency",(function(e){return S.a.formatMoney(e)})),new n["a"]({router:de,store:T["a"],vuetify:le,render:function(e){return e(w)}}).$mount("#app")},"610c":function(e,t,r){"use strict";r("0367")},"85ec":function(e,t,r){},"91e7":function(e,t,r){e.exports=r.p+"img/pizza1.b6fe37b4.jpg"},c616:function(e,t,r){"use strict";r("44e1")},dc59:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s}));var n=r("260b"),a=(r("e71f"),r("ea7b"),{apiKey:"AIzaSyBuKyBRkEoAQ0usKeHFVWEhu8lMmgUFmN0",authDomain:"fodd-app.firebaseapp.com",databaseURL:"https://fodd-app.firebaseio.com",projectId:"fodd-app",storageBucket:"fodd-app.appspot.com",messagingSenderId:"755715556376",appId:"1:755715556376:web:7ce469a93a7e2828ee2f6d",measurementId:"G-9V5T0BG9CR"});n["a"].initializeApp(a);var i=n["a"].firestore(),o=n["a"].auth(),c=i.collection("menu"),s=i.collection("orders")}});
//# sourceMappingURL=app.4e2cb67a.js.map