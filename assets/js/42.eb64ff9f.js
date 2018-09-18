(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{202:function(t,s,a){"use strict";a.r(s);var n={props:["target"]},e=a(3),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("JavaScript 代码一向的特点就是难以维护，保持一个良好的代码、组织风格有助于提升效率、重构代码、添加新功能、单元测试等等。")]),t._v(" "),a("p",[t._v("我总结了一下写了 200 个 NPM package 之后的一些个人经验和习惯。")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"http://yeoman.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("yeoman"),a("OutboundLink")],1),t._v("。如果你喜欢在代码中使用分号和用 travis 来测试，推荐 "),a("a",{attrs:{href:"https://github.com/sindresorhus",target:"_blank",rel:"noopener noreferrer"}},[t._v("sindresorhus"),a("OutboundLink")],1),t._v(" 用的 "),a("a",{attrs:{href:"https://github.com/sindresorhus/generator-nm",target:"_blank",rel:"noopener noreferrer"}},[t._v("generator-nm"),a("OutboundLink")],1),t._v("。如果你不喜欢分号并且用 circle 来测试，推荐我用的 "),a("a",{attrs:{href:"https://github.com/egoist/generator-esnm",target:"_blank",rel:"noopener noreferrer"}},[t._v("generator-esnm"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("想要定制你的 README.md ? "),a("a",{attrs:{href:"https://github.com/IonicaBizau/blah",target:"_blank",rel:"noopener noreferrer"}},[t._v("blah"),a("OutboundLink")],1),t._v(" 可以为你定制生成 README.md 以及更多提升效率的功能。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("每一个具有单独意义的代码片段前都推荐写注释，就算再简单的代码你隔几天看也不可能一秒看出它在干什么，而有了注释就可以。对于复杂且意义重大的代码尽量写完整的 jsdoc 来说明。")]),t._v(" "),a("p",[t._v("另一个原因就是这样可以让你的代码显得更格式化，代码挤在一堆很傻且不美观。而且你也可以自动从你代码的 jsdoc 生成 api doc！")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("对于分号的问题不作讨论，加不加都行。")]),t._v(" "),a("p",[t._v("对于异步代码，尽量不要使用 callback 而是改成 Promise，并且把 HTTP 请求封装进单独的模块，这样更方便配合 "),a("a",{attrs:{href:"https://github.com/tj/co",target:"_blank",rel:"noopener noreferrer"}},[t._v("co"),a("OutboundLink")],1),t._v(" 来使用。")]),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("在 async/await 没被 v8 引擎实现之前用 co 都还是第一选择，除非某些情况你使用了 babel 那你可以考虑使用 async/await。不过即使现在用 co 在将来 async/await api 被实现的时候也能轻松地迁移过去。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("保持良好代码风格的方法之一就是 lint 你的代码，选择你习惯的代码风格，用编辑器实时 lint 或者添加一些 git hook 在 commit 的时候 lint 也可以。")]),t._v(" "),a("p",[t._v("我目前使用 "),a("a",{attrs:{href:"https://github.com/sindresorhus/xo",target:"_blank",rel:"noopener noreferrer"}},[t._v("xo"),a("OutboundLink")],1),t._v(" 来检测代码，它默认无需配置但你可以根据你的喜好调整，基于 ESLint 。如果你喜欢这个风格也可以直接在 ESlint 中使用它的"),a("a",{attrs:{href:"https://github.com/sindresorhus/eslint-config-xo",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置文件"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("写测试是很有趣的，当且仅当你用 "),a("a",{attrs:{href:"https://github.com/sindresorhus/ava",target:"_blank",rel:"noopener noreferrer"}},[t._v("AVA"),a("OutboundLink")],1),t._v(" 的时候。")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("我使用 AVA 的主要原因是:")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("尽量描述你干了什么事:")]),t._v(" "),t._m(16),a("p",[t._v("更好的做法是使用 "),a("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitizen"),a("OutboundLink")],1),t._v(" 来规范你的 commit message 格式。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"https://github.com/semantic-release/semantic-release",target:"_blank",rel:"noopener noreferrer"}},[t._v("semantic-release"),a("OutboundLink")],1),t._v(" 可以自动分析你的 commit message 然后根据这些推测你的代码改动来进行语义化的版本号升级并自动更新 changelog，"),a("a",{attrs:{href:"https://github.com/egoist/tooling/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("这些"),a("OutboundLink")],1),t._v(" 就是自动生成的。")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("200 more modules? Exciting! ✨")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"初始化一个项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个项目","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("初始化一个项目")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("不再使用 "),a("code",[t._v("npm init")]),t._v("。因为除了 "),a("code",[t._v("package.json")]),t._v(" 还有一些额外的配置文件，比如 "),a("code",[t._v("circle.yml")]),t._v("、"),a("code",[t._v(".editorconfig")]),t._v("、"),a("code",[t._v("LICENSE")]),t._v(" 、"),a("code",[t._v("README.md")]),t._v(" 等等。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("注释")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\t\n * Module dependencies\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'path'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/**\n * Reverse array but not change itself\n *\n * @param {Array} names\n * @return {Array}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rev")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" names"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("concat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("reverse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"编写可复用模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写可复用模块","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("编写可复用模块")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于一个项目中多次使用（>1）的代码，推荐放入单独的文件作为模块使用。"),s("br"),this._v("\n对于更为通用的代码尽量打包进一个单独的 npm module 来使用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码风格指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码风格指南","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("代码风格指南")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// fetchData.js")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 老式回调风格")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'superagent'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\trequest\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'xxx.json'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token function"}},[t._v("callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 调用它")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fetchData "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./fetchData'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("fetchData")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// fetchData.js")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 无阻塞同步代码风格")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fetch "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'node-fetch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" co"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("wrap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fetch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'xxx.json'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("json")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 调用它")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fetchData "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./fetchData'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" co"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("wrap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fetchData")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("还使用 co? 不是有 async/await 吗?")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("co is a stepping stone towards ES7 async/await -- TJ Holowaychuk")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslint","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("ESLint")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("测试")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://camo.githubusercontent.com/fc55513ee5cb412b2b0d1540032b602ed0142dbe/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f6176612f666531636561316361336432633835313863306363333965633862653539326265616239303535382f6d656469612f6c6f676f2e737667",alt:"ava"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("很快")]),this._v(" "),s("li",[this._v("语法简洁")]),this._v(" "),s("li",[this._v("内置 ES2015/2016")]),this._v(" "),s("li",[this._v("many more...")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"commit-风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commit-风格","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("Commit")]),this._v(" 风格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不使用没有意义的 Commit 信息，比如单纯只写个 "),s("code",[this._v("fix")]),this._v("、"),s("code",[this._v("update")]),this._v("、"),s("code",[this._v("change")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v('"fix tweak on ie9"')]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v('"release 0.0.1"')]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v('"refactor to use es2015"')]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v('"🔥"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png",alt:"commitizen"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"semantic-release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#semantic-release","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("Semantic-Release")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("发布 NPM 模块是很让人困扰的一步，你需要手动 bump version，需要执行 "),s("code",[this._v("npm test")]),this._v(" 来看是否有错，然后再手动执行 "),s("code",[this._v("npm publish")]),this._v("，这些步骤可以被规范且自动化。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2016"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2016","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("2016")])])}],!1,null,null,null);s.default=r.exports}}]);