(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{481:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"springboot启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot启动"}},[s._v("#")]),s._v(" springboot启动")]),s._v(" "),n("blockquote",[n("p",[s._v("示例代码：https://gitee.com/quickmsg/smqtt-springboot")])]),s._v(" "),n("ol",[n("li",[n("p",[s._v("引入依赖")]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("io.github.quickmsg"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("smqtt-spring-boot-starter"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("${Latest version >= 1.0.8}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("启动类Application上添加注解 "),n("code",[s._v("@EnableMqttServer")])])]),s._v(" "),n("li",[n("p",[s._v("配置application.yml文件")])])]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v("     smqtt:\n       logLevel: DEBUG # 系统日志\n       tcp: # tcp配置\n         connectModel: UNIQUE # UNIQUE 唯一 KICK 互踢\n         port: 1883 # mqtt端口号\n         wiretap: true  # 二进制日志 前提是 smqtt.logLevel = DEBUG\n         bossThreadSize: 4  # boss线程\n         workThreadSize: 8  # work线程\n         lowWaterMark: 4000000 # 不建议配置 默认 32768yong\n         highWaterMark: 80000000 # 不建议配置 默认 65536\n         ssl: # ssl配置\n           enable: false # 开关\n           key: /user/server.key # 指定ssl文件 默认系统生成\n           crt: /user/server.crt # 指定ssl文件 默认系统生成\n       http: # http相关配置 端口固定60000\n         enable: true # 开关\n         accessLog: true # http访问日志\n         ssl: # ssl配置\n           enable: false\n         admin: # 后台管理配置\n           enable: true  # 开关\n           username: smqtt # 访问用户名\n           password: smqtt # 访问密码\n       ws: # websocket配置\n         enable: true # 开关\n         port: 8999 # 端口\n         path: /mqtt # ws 的访问path mqtt.js请设置此选项\n       cluster: # 集群配置\n         enable: false # 集群开关\n         url: 127.0.0.1:7771,127.0.0.1:7772 # 启动节点\n         port: 7771  # 端口\n         node: node-1 # 集群节点名称 唯一\n         external:\n           host: localhost # 用于映射容器ip 请不要随意设置，如果不需要请移除此选项\n           port: 7777 # 用于映射容器端口 请不要随意设置，如果不需要请移除此选项\n     db: # 数据库相关设置 请参考 https://doc.smqtt.cc/%E5%85%B6%E4%BB%96/1.store.html 【如果没有引入相关依赖请移除此配置】\n       driverClassName: com.mysql.jdbc.Driver\n       url: jdbc:mysql://127.0.0.1:3306/smqtt?characterEncoding=utf-8&useSSL=false&useInformationSchema=true&serverTimezone=UTC\n       username: root\n       password: 123\n       initialSize: 10\n       maxActive: 300\n       maxWait: 60000\n       minIdle: 2\n     redis: # redis 请参考 https://doc.smqtt.cc/%E5%85%B6%E4%BB%96/1.store.html 【如果没有引入相关依赖请移除此配置】\n       mode: single\n       database: 0\n       password:\n       timeout: 3000\n       poolMinIdle: 8\n       poolConnTimeout: 3000\n       poolSize: 10\n       single:\n         address: 127.0.0.1:6379\n       cluster:\n         scanInterval: 1000\n         nodes: 127.0.0.1:7000,127.0.0.1:7001,127.0.0.1:7002,127.0.0.1:7003,127.0.0.1:7004,127.0.0.1:7005\n         readMode: SLAVE\n         retryAttempts: 3\n         slaveConnectionPoolSize: 64\n         masterConnectionPoolSize: 64\n         retryInterval: 1500\n       sentinel:\n         master: mymaster\n         nodes: 127.0.0.1:26379,127.0.0.1:26379,127.0.0.1:26379\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("启动springboot服务服务即可")]),s._v(" "),n("li",[s._v("自定义认证")])]),s._v(" "),n("blockquote",[n("p",[s._v("注入spring容器 PasswordAuthentication，即可完成设备认证自定义开发。")])]),s._v(" "),n("p",[s._v("加载认证类的优先级：\n容器PasswordAuthentication实例 > Spi注入 > yaml文件配置")])])}),[],!1,null,null,null);n.default=e.exports}}]);