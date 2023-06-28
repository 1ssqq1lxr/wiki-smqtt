(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{509:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"集群配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群配置"}},[t._v("#")]),t._v(" 集群配置")]),t._v(" "),s("h2",{attrs:{id:"tcp自动发现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp自动发现"}},[t._v("#")]),t._v(" TCP自动发现")]),t._v(" "),s("blockquote",[s("p",[t._v("对于初始化启动集群可以填写集群的IP集合，动态接入的节点只需要填写任意集群节点IP，集群会相互之间发现并且注册。")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("smqtt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("localAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addresses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  /soft/dir\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("localAddress")]),t._v(" "),s("td",[t._v("本地IP，多网卡时候指定")])]),t._v(" "),s("tr",[s("td",[t._v("addresses")]),t._v(" "),s("td",[t._v("集群IP集合")])]),t._v(" "),s("tr",[s("td",[t._v("workDirectory")]),t._v(" "),s("td",[t._v("集群持久化目录，默认启动目录")])])])]),t._v(" "),s("h2",{attrs:{id:"udp组播"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp组播"}},[t._v("#")]),t._v(" UDP组播")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("smqtt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 集群配置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("localAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("multicastGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20.20.20.1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("multicastPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  /soft/dir\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("localAddress")]),t._v(" "),s("td",[t._v("本地IP，多网卡时候指定")])]),t._v(" "),s("tr",[s("td",[t._v("multicastGroup")]),t._v(" "),s("td",[t._v("组播地址")])]),t._v(" "),s("tr",[s("td",[t._v("multicastPort")]),t._v(" "),s("td",[t._v("组播端口")])]),t._v(" "),s("tr",[s("td",[t._v("workDirectory")]),t._v(" "),s("td",[t._v("集群持久化目录，默认启动目录")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);