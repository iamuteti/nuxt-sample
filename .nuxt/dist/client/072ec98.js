(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{272:function(e,t,n){"use strict";n.r(t);var r=n(12),c=(n(58),n(19),n(42),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.query,e.store,t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/users/1").then((function(e){return e.json()}));case 4:return n=t.sent,console.log("Details: ",n),t.abrupt("return",{carDetails:n});case 9:t.prev=9,t.t0=t.catch(1),console.log("Error: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},head:function(){return{title:this.carDetails.name,meta:[{hid:"og-title",property:"og:title",content:this.carDetails.name}]}}}),o=n(43),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("Head",[t("Title",[e._v("TEST ROASTING")])],1),e._v(" "),e._m(0)],1)}),[function(){var e=this._self._c;return e("div",[e("h1",[this._v("TEST TRACKING URL PAGE")])])}],!1,null,null,null);t.default=component.exports}}]);