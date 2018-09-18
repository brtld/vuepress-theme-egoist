(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{184:function(t,s,e){"use strict";e.r(s);var a={props:["target"]},n=e(3),r=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("p",[t._v("打包 JS 库没有打包 Web App 那样复杂，但还是可以变得更简单。")]),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("一个 JS 库一般需要一个 CommonJS 版本，它不会打包 node_modules 里的模块。以及一个 UMD 版本的，用于在浏览器中直接使用，它会打包 node_modules 里的模块。")]),t._v(" "),e("p",[t._v("使用 "),e("a",{attrs:{href:"https://github.com/universe-denpa/bili",target:"_blank",rel:"noopener noreferrer"}},[t._v("bili"),e("OutboundLink")],1),t._v(" 一切都会变得简单，简单到只需要一条命令:")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("打包的一个目的就是使用 Babel 之类的转换器编译 ES next 到 ES5，bili 默认使用 "),e("a",{attrs:{href:"https://buble.surge.sh/guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("buble"),e("OutboundLink")],1),t._v(" 来转换 JavaScript 代码，相比 Babel 它更轻量。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),e("p",[t._v("bili 是基于 "),e("a",{attrs:{href:"https://github.com/rollup/rollup",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rollup"),e("OutboundLink")],1),t._v(" 的，所以相关 Rollup 插件都可以用来编译 JS 代码。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),e("p",[t._v("值得一提的是，buble 不支持 "),e("code",[t._v("async/await")]),t._v(" 并且不能将 "),e("code",[t._v("generator")]),t._v(" 转换成 ES5 代码，所以我们保留了 generator 代码并且用 "),e("a",{attrs:{href:"https://github.com/leebyron/async-to-gen",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-to-gen"),e("OutboundLink")],1),t._v(" 将 "),e("code",[t._v("async/await")]),t._v(" 转换到 "),e("code",[t._v("generator")]),t._v("，如果用到了这两个请考虑浏览器兼容性，或者换成 babel 来编译。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("bili 还内置了一些常用的 Rollup 插件，更多使用方法请参考 bili 的 "),e("a",{attrs:{href:"https://github.com/universe-denpa/bili/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Wiki"),e("OutboundLink")],1),t._v(" 页面。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"常见用例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见用例","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("常见用例")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("bili --format cjs --format umd --module-name MyModule\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("这条命令的意思是打包 "),e("code",[t._v("./src/index.js")]),t._v(" 到 "),e("code",[t._v("./dist")]),t._v(" 目录，并且转换成 "),e("code",[t._v("CommonJS")]),t._v(" 和 "),e("code",[t._v("UMD")]),t._v(" 格式的文件，其中 "),e("code",[t._v("UMD")]),t._v(" 格式中模块名设定为 "),e("code",[t._v("MyModule")]),t._v("，这样在浏览器中就可以通过全局变量 "),e("code",[t._v("MyModule")]),t._v(" 引用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你同时需要一个压缩后的 UMD 格式文件，直接加上 "),s("code",[this._v("--compress")]),this._v(" 参数就能额外得到一个 "),s("code",[this._v(".min.js")]),this._v(" 和它的 "),s("code",[this._v("sourcemap")]),this._v(" 文件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"es2015"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es2015","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("ES2015")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你当然也可以在 bili 中使用 babel 来编译代码，这需要用到 bili 的配置文件 "),s("code",[this._v("bili.config.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  jsCompiler"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("require")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'rollup-plugin-babel'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    presets"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v("'preset'")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"buble"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buble","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("Buble")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("正如之前说了，默认我们使用 "),s("code",[this._v("buble")]),this._v("，你可以在配置文件中更改 buble 的配置参数:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  buble"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    objectAssign"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'objectAssign'")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"watch-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("Watch mode")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在开发的时候编译代码没有 "),s("code",[this._v("watch")]),this._v(" 模式会非常痛苦，想开启 bili 的 watch 模式可以直接加上 "),s("code",[this._v("--watch")]),this._v(" 参数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"更多资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多资料","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("更多资料")])])}],!1,null,null,null);s.default=r.exports}}]);