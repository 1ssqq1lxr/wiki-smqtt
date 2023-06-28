(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{471:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[s._v("Bootstrap.builder()\n.authConfig(AuthConfig)\n.build()\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"匿名登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匿名登录"}},[s._v("#")]),s._v(" 匿名登录")]),s._v(" "),t("blockquote",[t("p",[s._v("不需要配置任何认证，则可开启匿名登录")])]),s._v(" "),t("h2",{attrs:{id:"固定密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#固定密码"}},[s._v("#")]),s._v(" 固定密码")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[s._v('        AuthConfig authConfig = new AuthConfig();\n        AuthConfig.FixedAuthConfig fixedAuthConfig = new AuthConfig.FixedAuthConfig();\n        fixedAuthConfig.setUsername("SMQTT");\n        fixedAuthConfig.setPassword("SMQTT");\n        authConfig.setFixed(fixedAuthConfig);\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"http认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http认证"}},[s._v("#")]),s._v(" Http认证")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[s._v('        AuthConfig authConfig = new AuthConfig();\n        AuthConfig.HttpAuthConfig httpAuthConfig = new AuthConfig.HttpAuthConfig();\n        httpAuthConfig.setHost("www.baidu.com");\n        httpAuthConfig.setPort(443);\n        httpAuthConfig.setPath("/test");\n        authConfig.setHttp(httpAuthConfig);\n\n'),t("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("        httpAuthConfig.setHeaders(); //设置请求携带的headers\n        httpAuthConfig.setParams();  // 设置额外的参数")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("blockquote",[t("p",[s._v('请求方式固定 POST body 格式为:  {"clientIdentifier":"","username":"","password":""}\n返回状态码 200 即可 如果检验失败返回400')])]),s._v(" "),t("h2",{attrs:{id:"sql认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql认证"}},[s._v("#")]),s._v(" Sql认证")]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[s._v('        AuthConfig.SqlAuthConfig sqlAuthConfig = new AuthConfig.SqlAuthConfig();\n        sqlAuthConfig.setAuthSql("SELECT COUNT(1) FROM DEVICE where username =? and password = ? and deviceId =?");\n        sqlAuthConfig.setDriver("com.mysql.jdbc.Driver");\n        sqlAuthConfig.setUrl("jdbc:mysql://127.0.0.1:3306/smqtt");\n        sqlAuthConfig.setUsername("smqtt");\n        sqlAuthConfig.setPassword("sss");\n        authConfig.setSql(sqlAuthConfig);\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("blockquote",[t("p",[s._v("默认引入mysql的驱动，如果使用其他数据自行引入驱动，修改对应的driver，查询第一个参数必须是username 第二个参数 password 第三个是 deviceId\n默认返回条数就可以，有结果集的时候即判断检验成功，允许登录")])])])}),[],!1,null,null,null);t.default=e.exports}}]);