(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{197:function(t,s,e){"use strict";e.r(s);var a={props:["target"]},r=e(3),n=Object(r.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("p",[t._v("边学边记录，有错请指出。（Keep Updating...）")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),e("p",[t._v("进入交互模式:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),e("p",[t._v("用默认账户登录到默认数据库:")]),t._v(" "),t._m(8),e("p",[t._v("修改默认账户的密码:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),e("p",[t._v("重启数据库:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),e("p",[t._v("下一步是创建一个数据库，并让指定用户据有读写权限:")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://postgresguide.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostgreSQL Guide"),e("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("基础")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("postgresql-contrib")]),this._v(" 不是必需的，它提供一些额外的功能。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n$ "),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" postgresql postgresql-contrib\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("安装完成后，它会自动在你的系统上新建一个叫 "),s("code",[this._v("postgres")]),this._v(" 的用户，之后你需要切换过去来使用 "),s("code",[this._v("PostgreSQL")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" -i -u postgres\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ psql\n"),s("span",{attrs:{class:"token comment"}},[this._v("# 想退出则输入 `\\q`")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" -u postgres psql template1\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[this._v("$ postgres"),s("span",{attrs:{class:"token operator"}},[this._v("=")]),s("span",{attrs:{class:"token comment"}},[this._v("# ALTER USER postgres with encrypted password 'xxxxxxx';")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后修改 "),s("code",[this._v("pg_hba.conf")]),this._v(" 让其用 "),s("code",[this._v("md5")]),this._v(" 方式加密:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("# 9.1 是版本号")]),this._v("\n$ "),s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" vim /etc/postgresql/9.1/main/pg_hba.conf\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样修改: local      all     postgres     "),s("s",[this._v("peer")]),this._v(" md5")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" /etc/init.d/postgresql restart\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"新建用户和数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建用户和数据库","aria-hidden":"true"}},[this._v("#")]),this._v(" 新建用户和数据库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在默认的 Linux 账户 "),s("code",[this._v("postgres")]),this._v(" 下，你可以创建创建一个新的用户:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[this._v("$ postgres"),s("span",{attrs:{class:"token operator"}},[this._v("=")]),s("span",{attrs:{class:"token comment"}},[this._v("# CREATE USER egoist WITH PASSWORD 'your_password';")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[this._v("$ postgres"),s("span",{attrs:{class:"token operator"}},[this._v("=")]),s("span",{attrs:{class:"token comment"}},[this._v("# CREATE DATABASE database_a;")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("之后给予数据库 "),s("code",[this._v("database_a")]),this._v(" 的权限到用户 "),s("code",[this._v("egoist")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[this._v("$ postgres"),s("span",{attrs:{class:"token operator"}},[this._v("=")]),s("span",{attrs:{class:"token comment"}},[this._v("# GRANT ALL PRIVILEGES ON DATABASE database_a to egoist;")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"数据库相关查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库相关查询","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库相关查询")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"列出所有数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出所有数据库","aria-hidden":"true"}},[this._v("#")]),this._v(" 列出所有数据库")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 当前用户")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("# \\l 或者 \\list")]),t._v("\n$ user"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token comment"}},[t._v("# \\list")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 非 psql 交互模式下")]),t._v("\n$ psql -U username -l\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"推荐阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("span",[this._v("推荐阅读")])])}],!1,null,null,null);s.default=n.exports}}]);