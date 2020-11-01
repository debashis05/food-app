(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39e559ba"],{"2d29":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticStyle:{"margin-top":"70px"}},[n("div",{staticClass:"current_user_wrapper"},[n("span",[e._v("Logged in as:")]),e._v(" "+e._s(e.currentUser)+" "),n("button",{staticClass:"btn_red",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.signOut(t)}}},[e._v("Sign out")])]),n("NewPizza"),n("div",{staticClass:"menu_wrapper"},[n("h3",[e._v("Menu:")]),n("table",[e._m(0),e._l(e.getMenuItems,(function(t){return n("tbody",{key:t.id},[n("tr",[n("td",[e._v(e._s(t.name))]),n("td",[n("button",{staticClass:"btn_red",attrs:{type:"button"},on:{click:function(n){return e.removeMenuItem(t.id)}}},[e._v("×")])])])])}))],2)]),n("div",{staticClass:"orders_wrapper"},[n("h3",[e._v("Current orders ("+e._s(e.numberOfOrders)+"):")]),n("table",[e._m(1),e._l(e.getOrders,(function(t,i){return n("tbody",{key:t.id},[n("tr",{staticClass:"order_number"},[n("th",{attrs:{colspan:"4"}},[n("strong",[e._v("Order Number: "+e._s(i+1))]),n("button",{staticClass:"btn_red",attrs:{type:"button"},on:{click:function(n){return e.removeOrder(t.id)}}},[e._v("x")])])]),e._l(t.pizzas,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.size)+' "')]),n("td",[e._v(e._s(t.quantity))]),n("td",[e._v(e._s(e._f("currency")(t.price)))])])}))],2)}))],2)])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Item")]),n("th",[e._v("Remove from menu")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Item")]),n("th",[e._v("Size")]),n("th",[e._v("Quantity")]),n("th",[e._v("Price")])])])}],r=n("5530"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",[n("h3",[e._v("Add new pizza:")]),n("div",{staticClass:"form_group"},[n("label",[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPizza.name,expression:"newPizza.name"}],attrs:{type:"text",id:"name"},domProps:{value:e.newPizza.name},on:{input:function(t){t.target.composing||e.$set(e.newPizza,"name",t.target.value)}}})]),n("div",{staticClass:"form_group"},[n("label",[e._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newPizza.description,expression:"newPizza.description"}],attrs:{type:"text",rows:"5"},domProps:{value:e.newPizza.description},on:{input:function(t){t.target.composing||e.$set(e.newPizza,"description",t.target.value)}}})]),e._m(0),n("div",{staticClass:"form_group"},[n("label",[e._v('Size (")')]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPizza.options[0].size,expression:"newPizza.options[0].size"}],attrs:{type:"text"},domProps:{value:e.newPizza.options[0].size},on:{input:function(t){t.target.composing||e.$set(e.newPizza.options[0],"size",t.target.value)}}})]),n("div",{staticClass:"form_group"},[n("label",[e._v("Price")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPizza.options[0].price,expression:"newPizza.options[0].price"}],attrs:{type:"text"},domProps:{value:e.newPizza.options[0].price},on:{input:function(t){t.target.composing||e.$set(e.newPizza.options[0],"price",t.target.value)}}})]),e._m(1),n("div",{staticClass:"form_group"},[n("label",[e._v('Size (")')]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPizza.options[1].size,expression:"newPizza.options[1].size"}],attrs:{type:"text"},domProps:{value:e.newPizza.options[1].size},on:{input:function(t){t.target.composing||e.$set(e.newPizza.options[1],"size",t.target.value)}}})]),n("div",{staticClass:"form_group"},[n("label",[e._v("Price")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newPizza.options[1].price,expression:"newPizza.options[1].price"}],attrs:{type:"text"},domProps:{value:e.newPizza.options[1].price},on:{input:function(t){t.target.composing||e.$set(e.newPizza.options[1],"price",t.target.value)}}})]),n("button",{staticClass:"btn_green",attrs:{type:"button"},on:{click:e.add}},[e._v("Add")])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Option 1:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Option 2:")])])}],u=n("07a4"),c={name:"addNewPizza",data:function(){return{newPizza:{name:"Eg. Margherita",description:"Eg. A delicious tomato based pizza topped with mozarella, ham and pineapple.",options:[{size:9,price:6.95},{size:12,price:12.95}]}}},methods:{add:function(){u["a"].dispatch("addMenuItem",this.newPizza)}}},p=c,d=(n("8854"),n("2877")),l=Object(d["a"])(p,s,o,!1,null,null,null),m=l.exports,v=n("2f62"),z={name:"adminContent",components:{NewPizza:m},computed:Object(r["a"])({},Object(v["b"])(["getOrders","getMenuItems","numberOfOrders","currentUser"])),methods:{removeMenuItem:function(e){u["a"].dispatch("removeMenuItem",e)},removeOrder:function(e){u["a"].dispatch("removeOrder",e)},signOut:function(){u["a"].dispatch("signOut")}},beforeRouteLeave:function(e,t,n){1==confirm("You will be logged out when leaving admin?")?(u["a"].dispatch("signOut"),n()):n(!1)}},_=z,f=(n("b110"),Object(d["a"])(_,i,a,!1,null,null,null));t["default"]=f.exports},"59e9":function(e,t,n){},8854:function(e,t,n){"use strict";n("59e9")},b110:function(e,t,n){"use strict";n("f1c5")},f1c5:function(e,t,n){}}]);
//# sourceMappingURL=chunk-39e559ba.1b71b60b.js.map