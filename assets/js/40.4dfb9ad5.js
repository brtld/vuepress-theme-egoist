(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{171:function(t,e,i){"use strict";i.r(e);var s={props:["target"]},_=i(20),r=Object(_.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("p",[t._v("版本控制系统的一个好处就是你可以轻易地撤销之前错误的操作。")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),i("p",[t._v("这是 git 里最安全的撤消操作的办法，因为这不会影响你的提交历史。于是现在你可以提交新的 commit 去撤销之前错误的操作了。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),i("p",[t._v("请记住，这种方法作出的撤销是彻底的，这些内容不会被 commit 所以之后你并不能再用 git 恢复这些内容。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),i("p",[t._v("一些说明:")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),i("p",[t._v("然后...接下来怎么做才能撤销之前的撤销？这取决你到你要干什么:")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("本文乃原文常用部分译文: "),i("a",{attrs:{href:"https://github.com/blog/2019-how-to-undo-almost-anything-with-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to undo (almost) anything with Git"),i("OutboundLink")],1),t._v(" —— 作者: "),i("a",{attrs:{href:"https://github.com/jaw6",target:"_blank",rel:"noopener noreferrer"}},[t._v("jaw6"),i("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当你用 "),e("code",[this._v("git commit")]),this._v(" 提交了一个新的更改后 git 会将当时的文件内容暂时保存下来，之后你就可以用 git 随意回滚到任意一个版本。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这篇文章会介绍一些常见的可能用到撤销 "),e("code",[this._v("undo")]),this._v(" 操作的情况。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"撤销一个已发布的更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销一个已发布的更新","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("span",[this._v("撤销一个已发布的更新")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("情景")]),this._v(": 你已经用 "),e("code",[this._v("git push")]),this._v(" 将代码提交到了 GitHub，然后你意识到这其中的一个 commit 有错误，于是你想撤销那个 commit。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("操作")]),this._v(": "),e("code",[this._v("git revert <SHA>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("效果")]),this._v(": git 会新建一个新的 commit 来执行提供的 "),e("code",[this._v("<SHA>")]),this._v(" 对应 commit 的相反的更改，任何在该旧 commit 中删除的内容将会在新 commit 中添加进去，反之亦然。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"修改上次-commit-的提交信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改上次-commit-的提交信息","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("span",[this._v("修改上次 commit 的提交信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("情景")]),this._v(": 你在上次 commit 提交信息中打错了一个单词，比如你执行了 "),e("code",[this._v('git commit -m "fxied bug #42"')]),this._v(" 然后你意识到应该是 "),e("code",[this._v("fixed bug #42")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("操作")]),this._v(": "),e("code",[this._v("git commit --amend")]),this._v(" 或 "),e("code",[this._v('git commit --amend -m "Fixes bug #42"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("效果")]),this._v(": "),e("code",[this._v("git commit --amend")]),this._v(" 结合最新的文件修改情况和上一次提交信息更新并替换上一次提交。没有新的文件更改就直接覆盖上次提交。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"撤销本地修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销本地修改","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("span",[this._v("撤销本地修改")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("情景")]),this._v(": 你家的喵星人跑到你的键盘上装逼用双爪打字然后不知怎么还点了保存，然后编辑器还崩溃了，你还没有 commit 这只猫做的修改，你想撤销那个文件里被猫修改的内容。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("操作")]),this._v(": "),e("code",[this._v("git checkout -- <bad filename>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("效果")]),this._v(": "),e("code",[this._v("git checkout")]),this._v(" 会将该文件的内容恢复到上一次 git commit 的状态。你可以提供一个分支名称或者直接提供要回到的 SHA。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"重置本地修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置本地修改","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("span",[this._v("重置本地修改")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("情景")]),this._v(": 你在本地 commit 了一些内容（并没有 push），但是你搞错了，你想撤销最近这三个 commit，就像让它们从来不存在那样。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("操作")]),this._v(": "),e("code",[this._v("git reset <last good SHA>")]),this._v(" 或 "),e("code",[this._v("git reset --hard <last good SHA>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("效果")]),this._v(": "),e("code",[this._v("git reset")]),this._v(" 会让你的 git 历史会退到你指定的 SHA 的状态。这些 commit 不存在了但是你硬盘上的这些文件还是维持在被修改了的状态，这是最安全的做法。但是有时你也想同时撤销硬盘上的修改，这时加上 "),e("code",[this._v("--hard")]),this._v(" 就会很有用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"撤销本地修改之后重做"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销本地修改之后重做","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("span",[this._v("撤销本地修改之后重做")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("情景")]),this._v(": 你提交了一些 commit，然后执行 "),e("code",[this._v("git reset --hard")]),this._v(" 来撤消这些 commit 并清除本地硬盘上的修改。但是最后你意识到你想要回这些 commit！")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("操作")]),this._v(": "),e("code",[this._v("git reflog")]),this._v(" 和 "),e("code",[this._v("git reset")]),this._v(" 或 "),e("code",[this._v("git checkout")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("效果")]),this._v(": "),e("code",[this._v("git reflog")]),this._v(" 是个修复项目提交历史的好方法。你可以找回几乎所有内容 —— 所有你 commit 过的内容 —— 用 reflog 就行。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("你可能对 "),e("code",[this._v("git log")]),this._v(" 很熟悉，这个操作会列出你的 git 提交历史。"),e("code",[this._v("git reflog")]),this._v(" 很像它，但是列出的是 "),e("code",[this._v("HEAD")]),this._v(" 修改的时间。")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("code",[t._v("HEAD")]),t._v(" 修改。在切换分支时 "),i("code",[t._v("HEAD")]),t._v(" 会被修改，用 commit 保存修改然后用 reset 撤消修改。但是在你 "),i("code",[t._v("git checkout -- <bad filename>")]),t._v(" 时并不会被修改，就像上面说过的那样，这些修改不会被 commit，所以 "),i("code",[t._v("git reflog")]),t._v(" 也不能帮你找回这些内容。")]),t._v(" "),i("li",[i("code",[t._v("git reflog")]),t._v(" 不是永远有用的。git 会定期清理那些无法追溯的内容。不要期望能用 "),i("code",[t._v("git reflog")]),t._v(" 找回一个多月以前的内容。")]),t._v(" "),i("li",[t._v("你的 "),i("code",[t._v("git reflog")]),t._v(" 仅对你有用。你不能用 "),i("code",[t._v("git reflog")]),t._v(" 来找回其他人 commit 的修改。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/2077/6953866/f6b9f054-d891-11e4-8c53-838eff9f40ae.png",alt:"reflog"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("如果你想回到一个特定的时间，用 "),i("code",[t._v("git reset --hard <SHA>")]),t._v("。")]),t._v(" "),i("li",[t._v("如果你想在不修改提交历史的情况下找回那些文件并作为新文件保存，用 "),i("code",[t._v("git checkout <SHA> -- <filename>")]),t._v("。")]),t._v(" "),i("li",[t._v("如果你想使其中一个 commit 回到你的项目历史中，用 "),i("code",[t._v("git cherry-pick <SHA>")]),t._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"提交到了另一个分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交到了另一个分支","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("span",[this._v("提交到了另一个分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("情景")]),this._v(": 你提交了一些 commits，然后意识到你当前是在 master 分支上，而你其实是想提交到一个 "),e("code",[this._v("feature")]),this._v(" 分支上。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("操作")]),this._v(": "),e("code",[this._v("git branch feature")]),this._v(", "),e("code",[this._v("git reset --hard origin/master")]),this._v(", 和 "),e("code",[this._v("git checkout feature")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("strong",[t._v("效果")]),t._v(": 你可能常常使用 "),i("code",[t._v("git checkout -b <name>")]),t._v(" 操作来检出一个新分支，这是一个很方便的创建新分支的操作，但是你并不想同时切换到那个分支上。现在使用 "),i("code",[t._v("git branch feature")]),t._v(" 既可以创建一个 "),i("code",[t._v("feature")]),t._v(" 新分支并且不会切换到那个分支，同时该分支会指向你当前分支最新的一个 commit。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下一步，用 "),e("code",[this._v("git reset --hard")]),this._v(" 去恢复 "),e("code",[this._v("master")]),this._v(" 分支到 "),e("code",[this._v("origin/master")]),this._v(" 的状态。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("最后，"),e("code",[this._v("git checkout")]),this._v(" 到你的 "),e("code",[this._v("feature")]),this._v(" 分支，你能看到所有的更改。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"覆盖整个分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#覆盖整个分支","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("span",[this._v("覆盖整个分支")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("strong",[t._v("情景")]),t._v(": 你基于 "),i("code",[t._v("master")]),t._v(" 分支创建了 "),i("code",[t._v("feature")]),t._v(" 分支，但是 "),i("code",[t._v("master")]),t._v(" 分支远远落后 "),i("code",[t._v("origin/master")]),t._v(" 的更改。现在 "),i("code",[t._v("master")]),t._v(" 分支和 "),i("code",[t._v("origin/master")]),t._v(" 同步了，你想马上同步到 "),i("code",[t._v("feature")]),t._v(" 分支，还不是再次远远落后。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("操作")]),this._v(": "),e("code",[this._v("git checkout feature")]),this._v(" 和 "),e("code",[this._v("git rebase master")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("效果")]),this._v(": 你可能知道用 "),e("code",[this._v("git reset")]),this._v(" 然后重新 commit 来达到类似效果，不过那样会丢失 commit 历史。")])}],!1,null,null,null);e.default=r.exports}}]);