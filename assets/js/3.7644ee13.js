(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{120:function(t,e,o){},129:function(t,e,o){"use strict";var n=o(120);o.n(n).a},143:function(t,e,o){"use strict";o.r(e);var n=/^\/([\w\-]+)$/,s={data:function(){return{isDemo:!1}},mounted:function(){this.isDemo=n.test(this.$route.path)},computed:{demoURL:function(){return this.isDemo&&"https://".concat(n.exec(this.$route.path)[1],".egoist.rocks")}}},a=(o(129),o(6)),i=Object(a.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notfound"},[o("h1",[t._v("Page Not Found :(")]),t._v(" "),t.isDemo?o("span",[t._v("maybe it's moved to "),o("a",{attrs:{href:t.demoURL,target:"_blank"}},[t._v(t._s(t.demoURL))])]):t._e(),t._v(" "),o("div",{staticClass:"backhome"},[o("router-link",{attrs:{to:"/"}},[t._v("← Back to HomePage")])],1)])},[],!1,null,"666bcc06",null);e.default=i.exports}}]);