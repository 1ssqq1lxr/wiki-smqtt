(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{434:function(_,v,t){"use strict";t.r(v);var d=t(2),r=Object(d.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-1-术语-terminology"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-术语-terminology"}},[_._v("#")]),_._v(" 1.1 术语 Terminology")]),_._v(" "),v("p",[_._v("本规范中用到的关键字 "),v("strong",[_._v("必须")]),_._v(" MUST，"),v("strong",[_._v("不能")]),_._v(" MUST NOT，"),v("strong",[_._v("要求")]),_._v(" REQUIRED，"),v("strong",[_._v("将会")]),_._v(" SHALL，"),v("strong",[_._v("不会")]),_._v(" SHALL NOT，"),v("strong",[_._v("应该")]),_._v(" SHOULD，"),v("strong",[_._v("不应该")]),_._v(" SHOULD NOT，"),v("strong",[_._v("推荐")]),_._v(" RECOMMENDED，"),v("strong",[_._v("可以")]),_._v(" MAY，"),v("strong",[_._v("可选")]),_._v(" OPTIONAL 都是按照 IETF RFC 2119 "),v("a",{attrs:{href:"#anchor-RFC2119"}},[_._v("[RFC2119]")]),_._v(" 中的描述解释。")]),_._v(" "),v("p",[v("strong",[_._v("网络连接 Network Connection")])]),_._v(" "),v("p",[_._v("MQTT使用的底层传输协议基础设施。")]),_._v(" "),v("ul",[v("li",[_._v("客户端使用它连接服务端。")]),_._v(" "),v("li",[_._v("它提供有序的、可靠的、双向字节流传输。")])]),_._v(" "),v("p",[_._v("例子见4.2节。")]),_._v(" "),v("p",[v("strong",[_._v("应用消息 Application Message")]),_._v("\nMQTT协议通过网络传输应用数据。应用消息通过MQTT传输时，它们有关联的服务质量（QoS）和主题（Topic）。")]),_._v(" "),v("p",[v("strong",[_._v("客户端 Client")]),v("br"),_._v("\n使用MQTT的程序或设备。客户端总是通过网络连接到服务端。它可以")]),_._v(" "),v("ul",[v("li",[_._v("发布应用消息给其它相关的客户端。")]),_._v(" "),v("li",[_._v("订阅以请求接受相关的应用消息。")]),_._v(" "),v("li",[_._v("取消订阅以移除接受应用消息的请求。")]),_._v(" "),v("li",[_._v("从服务端断开连接。")])]),_._v(" "),v("p",[v("strong",[_._v("服务端 Server")]),v("br"),_._v("\n一个程序或设备，作为发送消息的客户端和请求订阅的客户端之间的中介。服务端")]),_._v(" "),v("ul",[v("li",[_._v("接受来自客户端的网络连接。")]),_._v(" "),v("li",[_._v("接受客户端发布的应用消息。")]),_._v(" "),v("li",[_._v("处理客户端的订阅和取消订阅请求。")]),_._v(" "),v("li",[_._v("转发应用消息给符合条件的已订阅客户端。")])]),_._v(" "),v("p",[v("strong",[_._v("订阅 Subscription")]),v("br"),_._v("\n订阅包含一个主题过滤器（Topic Filter）和一个最大的服务质量（QoS）等级。订阅与单个会话（Session）关联。会话可以包含多于一个的订阅。会话的每个订阅都有一个不同的主题过滤器。")]),_._v(" "),v("p",[v("strong",[_._v("主题名 Topic Name")]),v("br"),_._v("\n附加在应用消息上的一个标签，服务端已知且与订阅匹配。服务端发送应用消息的一个副本给每一个匹配的客户端订阅。")]),_._v(" "),v("p",[v("strong",[_._v("主题过滤器 Topic Filter")]),v("br"),_._v("\n订阅中包含的一个表达式，用于表示相关的一个或多个主题。主题过滤器可以使用通配符。")]),_._v(" "),v("p",[v("strong",[_._v("会话 Session")]),v("br"),_._v("\n客户端和服务端之间的状态交互。一些会话持续时长与网络连接一样，另一些可以在客户端和服务端的多个连续网络连接间扩展。")]),_._v(" "),v("p",[v("strong",[_._v("控制报文 MQTT Control Packet")]),v("br"),_._v("\n通过网络连接发送的信息数据包。MQTT规范定义了十四种不同类型的控制报文，其中一个（PUBLISH报文）用于传输应用消息。")]),_._v(" "),v("h2",{attrs:{id:"_1-2-数据表示-data-representations"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数据表示-data-representations"}},[_._v("#")]),_._v(" 1.2 数据表示 Data representations")]),_._v(" "),v("h3",{attrs:{id:"_1-2-1-二进制位-bits"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-二进制位-bits"}},[_._v("#")]),_._v(" 1.2.1 二进制位 Bits")]),_._v(" "),v("p",[_._v("字节中的位从0到7。第7位是最高有效位，第0位是最低有效位。")]),_._v(" "),v("h3",{attrs:{id:"_1-2-2-整数数值-integer-data-values"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-整数数值-integer-data-values"}},[_._v("#")]),_._v(" 1.2.2 整数数值 Integer data values")]),_._v(" "),v("p",[_._v("整数数值是16位，使用大端序（big-endian，高位字节在低位字节前面）。这意味着一个16位的字在网络上表示为最高有效字节（MSB），后面跟着最低有效字节（LSB）。")]),_._v(" "),v("h3",{attrs:{id:"_1-2-3-utf-8编码字符串-utf-8-encoded-strings"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-utf-8编码字符串-utf-8-encoded-strings"}},[_._v("#")]),_._v(" 1.2.3 UTF-8编码字符串 UTF-8 encoded strings")]),_._v(" "),v("p",[_._v("后面会描述的控制报文中的文本字段编码为UTF-8格式的字符串。UTF-8 ["),v("a",{attrs:{href:"#RFC3629"}},[_._v("RFC3629")]),_._v("] 是一个高效的Unicode字符编码格式，为了支持基于文本的通信，它对ASCII字符的编码做了优化。")]),_._v(" "),v("p",[_._v("每一个字符串都有一个两字节的长度字段作为前缀，它给出这个字符串UTF-8编码的字节数，它们在"),v("a",{attrs:{href:"#_Figure_1.1_Structure"}},[_._v("图例 1.1 UTF-8编码字符串的结构")]),_._v(" 中描述。因此可以传送的UTF-8编码的字符串大小有一个限制，不能超过 65535字节。")]),_._v(" "),v("p",[_._v("除非另有说明，所有的UTF-8编码字符串的长度都必须在0到65535字节这个范围内。")]),_._v(" "),v("h5",{attrs:{id:"图例-1-1-utf-8编码字符串的结构-structure-of-utf-8-encoded-strings"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图例-1-1-utf-8编码字符串的结构-structure-of-utf-8-encoded-strings"}},[_._v("#")]),_._v(" 图例 1.1 UTF-8编码字符串的结构 Structure of UTF-8 encoded strings")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[_._v("二进制位")])]),_._v(" "),v("th",[_._v("7-0")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("byte 1")]),_._v(" "),v("td",[_._v("字符串长度的最高有效字节（MSB）")])]),_._v(" "),v("tr",[v("td",[_._v("byte 2")]),_._v(" "),v("td",[_._v("字符串长度的最低有效字节（LSB）")])]),_._v(" "),v("tr",[v("td",[_._v("byte 3 ….")]),_._v(" "),v("td",[_._v("如果长度大于0，这里是UTF-8编码的字符数据。")])])])]),_._v(" "),v("p",[_._v("UTF-8编码字符串中的字符数据"),v("strong",[_._v("必须")]),_._v("是按照Unicode规范 ["),v("a",{attrs:{href:"#Unicode"}},[_._v("Unicode")]),_._v("] 定义的和在RFC3629 ["),v("a",{attrs:{href:"#RFC3629"}},[_._v("RFC3629")]),_._v("] 中重申的有效的UTF-8格式。特别需要指出的是，这些数据"),v("strong",[_._v("不能")]),_._v("包含字符码在U+D800和U+DFFF之间的数据。如果服务端或客户端收到了一个包含无效UTF-8字符的控制报文，它"),v("strong",[_._v("必须")]),_._v("关闭网络连接  [MQTT-1.5.3-1]。")]),_._v(" "),v("p",[_._v("UTF-8编码的字符串"),v("strong",[_._v("不能")]),_._v("包含空字符U+0000。如果客户端或服务端收到了一个包含U+0000的控制报文，它"),v("strong",[_._v("必须")]),_._v("关闭网络连接 [MQTT-1.5.3-2]。")]),_._v(" "),v("p",[_._v("数据中"),v("strong",[_._v("不应该")]),_._v("包含下面这些Unicode代码点的编码。如果一个接收者（服务端或客户端）收到了包含下列任意字符的控制报文，它"),v("strong",[_._v("可以")]),_._v("关闭网络连接：")]),_._v(" "),v("ul",[v("li",[_._v("U+0001和U+001F之间的控制字符")]),_._v(" "),v("li",[_._v("U+007F和U+009F之间的控制字符")]),_._v(" "),v("li",[_._v("Unicode规范定义的非字符代码点（例如U+0FFFF）")]),_._v(" "),v("li",[_._v("Unicode规范定义的保留字符（例如U+0FFFF）")])]),_._v(" "),v("p",[_._v("UTF-8编码序列0XEF 0xBB 0xBF总是被解释为U+FEFF（零宽度非换行空白字符），无论它出现在字符串的什么位置，报文接收者都不能跳过或者剥离它  [MQTT-1.5.3-3]。")]),_._v(" "),v("h4",{attrs:{id:"非规范示例-non-normative-example"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非规范示例-non-normative-example"}},[_._v("#")]),_._v(" 非规范示例 Non normative example")]),_._v(" "),v("blockquote",[v("p",[_._v("例如，字符串 A𪛔 是一个拉丁字母A后面跟着一个代码点U+2A6D4(它表示一个中日韩统一表意文字扩展B中的字符)，这个字符串编码如下：")])]),_._v(" "),v("h5",{attrs:{id:"图例-1-2-utf-8编码字符串非规范示例-utf-8-encoded-string-non-normative-example"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图例-1-2-utf-8编码字符串非规范示例-utf-8-encoded-string-non-normative-example"}},[_._v("#")]),_._v(" 图例 1.2 UTF-8编码字符串非规范示例 UTF-8 encoded string non normative example")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[_._v("Bit")])]),_._v(" "),v("th",[v("strong",[_._v("7")])]),_._v(" "),v("th",[v("strong",[_._v("6")])]),_._v(" "),v("th",[v("strong",[_._v("5")])]),_._v(" "),v("th",[v("strong",[_._v("4")])]),_._v(" "),v("th",[v("strong",[_._v("3")])]),_._v(" "),v("th",[v("strong",[_._v("2")])]),_._v(" "),v("th",[v("strong",[_._v("1")])]),_._v(" "),v("th",[v("strong",[_._v("0")])])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("byte 1")]),_._v(" "),v("td",[_._v("字符串长度 MSB (0x00)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")])]),_._v(" "),v("tr",[v("td",[_._v("byte 2")]),_._v(" "),v("td",[_._v("字符串长度 LSB (0x05)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("byte 3")]),_._v(" "),v("td",[_._v("‘A’ (0x41)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("byte 4")]),_._v(" "),v("td",[_._v("(0xF0)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")])]),_._v(" "),v("tr",[v("td",[_._v("byte 5")]),_._v(" "),v("td",[_._v("(0xAA)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")])]),_._v(" "),v("tr",[v("td",[_._v("byte 6")]),_._v(" "),v("td",[_._v("(0x9B)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("byte 7")]),_._v(" "),v("td",[_._v("(0x94)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")])])])]),_._v(" "),v("h3",{attrs:{id:"_1-3-编辑约定-editing-conventions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-编辑约定-editing-conventions"}},[_._v("#")]),_._v(" 1.3 编辑约定 Editing conventions")]),_._v(" "),v("p",[_._v("本规范用黄色高亮的文本标识一致性声明，每个一致性声明都分配了一个这种格式的引用：[MQTT-x.x.x-y]。")])])}),[],!1,null,null,null);v.default=r.exports}}]);