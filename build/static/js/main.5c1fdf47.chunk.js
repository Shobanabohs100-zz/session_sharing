(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(6),s=(n(13),n(2)),c=n(3),a=n(4),r=n(7),u=function(){function e(){Object(s.a)(this,e),this.cookies=void 0,this.cookies=new r.a,this.cookies.addChangeListener((function(e){alert(JSON.stringify(e,null,2))}))}return Object(c.a)(e,[{key:"get",value:function(e,t){return this.cookies.get(e,t)}},{key:"set",value:function(e,t,n){this.cookies.set(e,t,Object(a.a)({path:"/"},n))}},{key:"remove",value:function(e,t){this.cookies.remove(e,Object(a.a)({path:"/"},t)),this.getAll()}},{key:"getAll",value:function(){alert(JSON.stringify(this.cookies.getAll()))}}]),e}(),l=new(function(){function e(){Object(s.a)(this,e),this.storage=void 0,this.storage=new u}return Object(c.a)(e,[{key:"isLoggedIn",value:function(){return!!this.storage.get("testCookie")}},{key:"storeLoginToken",value:function(e){this.storage.set("testCookie",e,{domain:".neoufitness.com"})}},{key:"removeLoginToken",value:function(){this.storage.remove("testCookie",{domain:".neoufitness.com"})}}]),e}());function k(){l.storeLoginToken("Shobana")}function g(){alert(l.isLoggedIn())}function h(){l.removeLoginToken()}function f(){return o.createElement("div",{className:"App"},o.createElement("h1",null,"Hello CodeSandbox"),o.createElement("h2",null,"Start editing to see some magic happen!"),o.createElement("button",{onClick:k},"Store"),o.createElement("button",{onClick:g},"Get"),o.createElement("button",{onClick:h},"Remove"))}var m=document.getElementById("root");Object(i.render)(o.createElement(f,null),m)},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5c1fdf47.chunk.js.map