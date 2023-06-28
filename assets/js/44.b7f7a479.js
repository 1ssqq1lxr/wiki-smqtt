(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{465:function(s,t,e){"use strict";e.r(t);var n=e(2),a=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"注解使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注解使用"}},[s._v("#")]),s._v(" 注解使用")]),s._v(" "),t("p",[s._v('使用@Router(value = "/smqtt/publish", type = HttpType.POST) 定义URL跟请求方式')]),s._v(" "),t("h2",{attrs:{id:"自定义实现接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义实现接口"}},[s._v("#")]),s._v(" 自定义实现接口")]),s._v(" "),t("ul",[t("li",[s._v("实现io.github.quickmsg.common.http.HttpActor")]),s._v(" "),t("li",[s._v("实现io.github.quickmsg.core.http.AbstractHttpActor（内置操作发送mqtt消息接口）")])]),s._v(" "),t("h3",{attrs:{id:"下面给出实现demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下面给出实现demo"}},[s._v("#")]),s._v(" 下面给出实现demo：")]),s._v(" "),t("p",[s._v("定义一个url为/smqtt/demo的post请求，并且设置Response Header，同时允许跨域。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('@Router(value = "/smqtt/demo", type = HttpType.POST)\n@Slf4j\n@Header(key = "Content-Type", value = "application/json")\n@AllowCors\npublic class DemoActor extends AbstractHttpActor {\n\n    @Override\n    public Publisher<Void> doRequest(HttpServerRequest request, HttpServerResponse response, Configuration configuration) {\n        return request\n                .receive()\n                .asString()\n                .map(this.toJson(HttpPublishMessage.class))\n                .doOnNext(message -> {\n                    //处理request\n                }).then(response.sendString(Mono.just("success")).then());\n    }\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"spi注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spi注入"}},[s._v("#")]),s._v(" SPI注入")]),s._v(" "),t("p",[t("code",[s._v("具体参考java SPI注入")])]),s._v(" "),t("p",[s._v("resources/META-INF/services 目录下新建\n名为io.github.quickmsg.common.http.HttpActor文件,\n将自定义实现类全限定名写入文件中即可完成注入。")])])}),[],!1,null,null,null);t.default=a.exports}}]);