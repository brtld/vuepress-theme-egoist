(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{181:function(t,s,a){"use strict";a.r(s);var n={props:["target"]},e=a(20),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("比如刚才，我想给自己做一个用于收取捐赠的网页（也许会有开源世界的同好喜欢我的项目也说不定呢），我在 “简单粗暴一个 html 搞定” 和 “Webpack + Vue 配合各种构建工具” 之间摇摆不定。")]),t._v(" "),a("p",[t._v("用过 Webpack 的都知道，也许配置和解决 bug 的时间会比写代码的时间更长，而且大部分情况配置文件都大同小异。那为什么不用"),a("strong",[t._v("一个配置适用多个项目")]),t._v("？于是有了 "),a("a",{attrs:{href:"https://github.com/egoist/tooling",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("tooling")]),a("OutboundLink")],1),t._v("，它其实就是用一个内置的 Webpack 配置来运行和编译指定的项目。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("也许我的表达并不直观，简而言之，tooling 让你开发的便利程度趋近直接用一个 html 搞定。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("并不需要配置、对开发友好、ES6、PostCSS + PreCSS、享受 Vue 单文件组件的优势、React 的 JS everywhere 的畅快，这些带给你的远不止便利。")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("如果你实在不知道这玩意能在哪些地方用，那么我告诉你吧。")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("看，"),a("a",{attrs:{href:"https://github.com/egoist/donate",target:"_blank",rel:"noopener noreferrer"}},[t._v("donate"),a("OutboundLink")],1),t._v(" 就是一个例子，如果没用 tooling 的话这个 repo 里会多一堆配置文件，而现在我只需要 focus 这个项目本身。")]),t._v(" "),a("hr"),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"起因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起因","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("起因")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("为什么我还需要用 jQuery？有时候我会有这样的疑惑。我觉得 jQuery 还存在于我某些小项目中的原因就是可以 “即插即用”。新建一个 "),s("code",[this._v("index.html")]),this._v("、复制一些代码、新建一个 "),s("code",[this._v("style")]),this._v(" "),s("code",[this._v("script")]),this._v(" 标签你就可以开始工作了，这种便利在某些时候非常好。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"tooling-带来了什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tooling-带来了什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("tooling 带来了什么？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("tooling 内置了 Vue 和 React 的依赖，这意味着你要开发这两种框架的网页几乎是 "),s("code",[this._v("no setup")]),this._v("，新建一个项目，不用 "),s("code",[this._v("npm init")]),this._v("，不用安装任何依赖，直接：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("index.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" app "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./app'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'body'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("app.vue")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n  $"),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyan"),a("span",{attrs:{class:"token selector"}},[t._v(";\n  body")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token selector"}},[t._v("h1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $color"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Wow"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后运行 "),s("code",[this._v("tooling watch -e index")]),this._v(" 就可以开着热加载模式进行开发了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use-case"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-case","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("Use Case")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("你的开源项目的 gh-pages 主页")]),this._v(" "),s("li",[this._v("你个人的一些小实验或者一个大项目的 prototype")]),this._v(" "),s("li",[this._v("你的各种需要网页来展示的小发明。")]),this._v(" "),s("li",[this._v("many more...")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("tooling")]),this._v(" 的 GitHub 主页: https://github.com/egoist/tooling")])}],!1,null,null,null);s.default=r.exports}}]);