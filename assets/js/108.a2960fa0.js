(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{529:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"功能说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能说明"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),s("p",[t._v("用户控制规则引擎输入的，使用脚本返回Boolean类型，")]),t._v(" "),s("ul",[s("li",[t._v("true 时候继续走下一个节点")]),t._v(" "),s("li",[t._v("false 规则终止")])]),t._v(" "),s("h2",{attrs:{id:"设计参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计参数"}},[t._v("#")]),t._v(" 设计参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("必传")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ruleType")]),t._v(" "),s("td",[t._v("规则节点类型")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("PREDICATE")])]),t._v(" "),s("tr",[s("td",[t._v("script")]),t._v(" "),s("td",[t._v("topic")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("无")])])])]),t._v(" "),s("h2",{attrs:{id:"yaml配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml配置"}},[t._v("#")]),t._v(" yaml配置")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('     smqtt:\n         rules: # 规则引擎相关配置\n           - ruleName: 过滤\n             chain: # 规则链\n               - ruleType: PREDICATE  # 条件过滤器\n                 script: topic.equals("test/test")&& qos == 1\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);