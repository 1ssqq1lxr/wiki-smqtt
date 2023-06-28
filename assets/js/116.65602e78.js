(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{537:function(s,e,t){"use strict";t.r(e);var a=t(2),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"证书生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#证书生成"}},[s._v("#")]),s._v(" 证书生成")]),s._v(" "),e("p",[s._v("使用OpenSSL创建生成CA证书、服务器、客户端证书及密钥")]),s._v(" "),e("ol",[e("li",[s._v("生成CA证书")]),s._v(" "),e("li",[s._v("生成服务器证书")]),s._v(" "),e("li",[s._v("生成客户端证书\n说明：")])]),s._v(" "),e("ul",[e("li",[s._v("对于SSL单向认证：服务器需要CA证书、server证书、server私钥，客户端需要CA证。")]),s._v(" "),e("li",[s._v("对于SSL双向认证：服务器需要CA证书、server证书、server私钥，客户端需要CA证书，client证书、client私钥。")])]),s._v(" "),e("h2",{attrs:{id:"生成ca证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成ca证书"}},[s._v("#")]),s._v(" 生成CA证书")]),s._v(" "),e("ol",[e("li",[s._v("创建CA证书私钥\n"),e("blockquote",[e("p",[s._v("openssl genrsa -out ca.key 2048")])])]),s._v(" "),e("li",[s._v("请求证书\n证数各参数含义如下：\n"),e("ul",[e("li",[s._v("C-----国家（Country Name）")]),s._v(" "),e("li",[s._v("ST----省份（State or Province Name）")]),s._v(" "),e("li",[s._v("L----城市（Locality Name）")]),s._v(" "),e("li",[s._v("O----公司（Organization Name）")]),s._v(" "),e("li",[s._v("OU----部门（Organizational Unit Name）")]),s._v(" "),e("li",[s._v("CN----产品名（Common Name）")]),s._v(" "),e("li",[s._v("emailAddress----邮箱（Email Address）")])]),s._v(" "),e("blockquote",[e("p",[s._v("openssl req -new -sha256 -key ca.key -out ca.csr -subj “/C=CN/ST=SD/L=JN/O=QDZY/OU=www.test.com/CN=CA/emailAddress=admin@test.com”")])])]),s._v(" "),e("li",[s._v("自签署证书\n"),e("blockquote",[e("p",[s._v("openssl x509 -req -days 36500 -sha256 -extensions v3_ca -signkey ca.key -in ca.csr -out ca.cer")])])])]),s._v(" "),e("h2",{attrs:{id:"二-生成服务器证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-生成服务器证书"}},[s._v("#")]),s._v(" （二）生成服务器证书")]),s._v(" "),e("ol",[e("li",[s._v("创建服务器私钥\n"),e("blockquote",[e("p",[s._v("openssl genrsa  -out server.key 2048")])])]),s._v(" "),e("li",[s._v("请求证书\n"),e("blockquote",[e("p",[s._v('openssl req -new -sha256 -key server.key -out server.csr -subj "/C=CN/ST=SD/L=JN/O=QDZY/OU=www.test.com/CN=SERVER/emailAddress=admin@test.com"')])])]),s._v(" "),e("li",[s._v("使用CA证书签署服务器证书\n"),e("blockquote",[e("p",[s._v("openssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in server.csr -out server.cer")])])])]),s._v(" "),e("h2",{attrs:{id:"三-生成客户端证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-生成客户端证书"}},[s._v("#")]),s._v(" （三）生成客户端证书")]),s._v(" "),e("ol",[e("li",[s._v("生成客户端私钥\n"),e("blockquote",[e("p",[s._v("openssl genrsa  -out client.key 2048")])])]),s._v(" "),e("li",[s._v("申请证书\n"),e("blockquote",[e("p",[s._v('openssl req -new -sha256 -key client.key  -out client.csr -subj "/C=CN/ST=SD/L=JN/O=QDZY/OU=www.test.com/CN=CLIENT/emailAddress=admin@test.com"')])])]),s._v(" "),e("li",[s._v("使用CA证书签署客户端证书\n"),e("blockquote",[e("p",[s._v("openssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in client.csr -out client.cer")])])])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("Netty需要支持PKCS8格式读取私钥")]),s._v(" "),e("blockquote",[e("p",[s._v("openssl pkcs8 -topk8 -nocrypt -in pkcs1_key_file -out pkcs8_key.pem")])])]),e("h1",{attrs:{id:"单向认证配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单向认证配置"}},[s._v("#")]),s._v(" 单向认证配置")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("smqtt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tcp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MQTT配置")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ssl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssl配置")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开关")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server.key "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 私钥")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("crt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server.cer "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("blockquote",[e("p",[s._v("客户端连接时候携带ca.csr 或者 信任客户端")])]),s._v(" "),e("h1",{attrs:{id:"双向向认证配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双向向认证配置"}},[s._v("#")]),s._v(" 双向向认证配置")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("smqtt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tcp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MQTT配置")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ssl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssl配置")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开关")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server.key "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 私钥")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("crt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server.cer "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ca")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  ca.csr "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 证书")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);