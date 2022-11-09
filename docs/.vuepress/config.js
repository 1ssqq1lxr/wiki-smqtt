module.exports = {
    title: "SMQTTX文档",
    description: 'SMQTTX是一款开源的MQTT消息代理Broker',
    dest: 'public',
    base: '/',
    sidebar: 'auto',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
    ],
    theme: 'reco',
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: 'https://www.smqtt.cc/',
                icon: 'reco-home'
            },
            {
                text: '支持',
                icon: 'reco-three',
                link: '/support/'
            },
            {
                text: '文档',
                icon: 'reco-document',
                items: [
                    {text: 'SMQTTX文档', link: '/smqttx/'},
                    {text: 'SMQTT文档(不再更新)', link: '/smqtt/'},
                    {text: 'MQTT协议3.1.1中文版', link: '/mqtt/'}
                ]
            },
            {
                text: '合作公司',
                icon: 'reco-blog',
                link: '/customer/'
            },
            {
                text: 'GitHub',
                icon: 'reco-github',
                link: 'https://github.com/quickmsg/smqtt'
            },
            {
                text: '码云',
                icon: 'reco-mayun',
                link: 'https://gitee.com/quickmsg/mqtt-cluster'
            }
            //  {
            //	text: '时间轴',
            //	link: '/timeline/',
            //	icon: 'reco-date'
            //  }
        ],
        sidebar: {
            '/smqtt/': [
                {
                    title: 'SMQTT文档',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: '快速开始',
                    collapsable: false,
                    children: [
                        'quickstart/1.jar',
                        'quickstart/2.docker',
                        'quickstart/3.main',
                        'quickstart/4.spring'
                    ]
                },
                {
                    title: 'MQTT文档',
                    collapsable: false,
                    children: [
                        'mqtt/1.config',
                        'mqtt/2.auth',
                        'mqtt/3.ssl'
                    ]
                },
                {
                    title: 'HTTP文档',
                    collapsable: false,
                    children: [
                        'http/1.config',
                        'http/2.admin',
                        'http/3.default',
                        'http/4.extend'
                    ]
                },
                {
                    title: '集群文档',
                    collapsable: false,
                    children: [
                        'cluster/1.config'
                    ]
                },
                {
                    title: 'WEBSOCKET文档',
                    collapsable: false,
                    children: [
                        'websocket/1.config'
                    ]
                },
                {
                    title: '规则引擎文档',
                    collapsable: false,
                    children: [
                        'rule/0.rule',
                        'rule/1.rule',
                        'rule/2.config',
                        'rule/3.predicate',
                        'rule/4.kafka',
                        'rule/5.http',
                        'rule/5.rocket_mq',
                        'rule/6.log',
                        'rule/7.mysql',
                        'rule/8.rabbitmq',
                        'rule/9.mqtt',
                        'rule/10.topic'
                    ]
                },
                {
                    title: '数据源文档',
                    collapsable: false,
                    children: [
                        'source/1.kafka',
                        'source/2.http',
                        'source/2.rocket_mq',
                        'source/3.mysql',
                        'source/4.rabbitmq',
                        'source/5.mqtt'
                    ]
                },
                {
                    title: '系统监控',
                    collapsable: false,
                    children: [
                        'monitor/1.monitor',
                        'monitor/2.GrafanaPrometheus',
                        'monitor/3.GrafanaInfluxDB'
                    ]
                },
				{
                    title: 'ACL权限',
                    collapsable: false,
                    children: [
                        'acl/1.acl',
                        'acl/2.acl_config'
                    ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                        'other/1.interceptor',
                        'other/1.store',
                        'other/1.system'
                    ]
                },
                {
                    title: '压测报告',
                    collapsable: false,
                    children: [
                        'test/test'
                    ]
                },
            ],
            '/smqttx/': [
                {
                    title: 'SMQTTX文档',
                    collapsable: true,
                    children: [
                        ''
                    ]
                },
                {
                    title: '快速开始',
                    collapsable: true,
                    children: [
                        'quickstart/1.config',
                        'quickstart/2.spring',
                        'quickstart/3.nospring'
                    ]
                }
            ],
            '/mqtt/': [
                {
                    title: 'MQTT文档',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: '第1章 概述',
                    collapsable: false,
                    path: '01-Introduction'
                },
                {
                    title: '第2章 MQTT控制报文格式',
                    collapsable: false,
                    path: '02-ControlPacketFormat'
                },
                {
                    title: '第3章 MQTT控制报文',
                    collapsable: false,
                    children: [
                        '03-ControlPackets',
                        '0301-CONNECT',
                        '0302-CONNACK',
                        '0303-PUBLISH',
                        '0304-PUBACK',
                        '0305-PUBREC',
                        '0306-PUBREL',
                        '0307-PUBCOMP',
                        '0308-SUBSCRIBE',
                        '0309-SUBACK',
                        '0310-UNSUBSCRIBE',
                        '0311-UNSUBACK',
                        '0312-PINGREQ',
                        '0313-PINGRESP',
                        '0314-DISCONNECT'
                    ]
                },
                {
                    title: '第4章 操作行为',
                    collapsable: false,
                    path: '04-OperationalBehavior'
                },
                {
                    title: '第5章 安全',
                    collapsable: false,
                    path: '05-Security'
                },
                {
                    title: '第6章 使用WS作为网络层',
                    collapsable: false,
                    path: '06-WebSocket'
                },
                {
                    title: '第7章 一致性',
                    collapsable: false,
                    path: '07-Conformance'
                },
                {
                    title: '附录B 规范声明',
                    collapsable: false,
                    path: '08-AppendixB'
                }
            ]
        },

        friendLink: [
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: '1156743527@qq.com',
                link: 'https://www.recoluan.com'
            },
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ],
        logo: '/logo.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        // sidebar: 'auto',
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: 'quickmsg',
        // 作者头像
        authorAvatar: '/avatar.png',
        // 备案号
        record: '浙ICP备2021029871号-1',
        recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
        //cyberSecurityRecord: '公安部备案文案',
        //cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间
        startYear: '2020'
        /**
         * 密钥 (if your blog is private)
         */

        // keyPage: {
        //   keys: ['your password'],
        //   color: '#42b983',
        //   lineColor: '#42b983'
        // },

        /**
         * valine 设置 (if you need valine comment )
         */

        // valineConfig: {
        //   appId: '...',// your appId
        //   appKey: '...', // your appKey
        // }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
            width: '200px', // 默认 260px
            title: '消息提示',
            body: [
                {
                    type: 'title',
                    content: '欢迎加入微信交流群',
                    style: 'text-aligin: center;'
                },
                {
                    type: 'text',
                    content: '扫码添加微信或者直接搜索微信：Lemon877164954，拉入微信交流群'
                },
                {
                    type: 'image',
                    src: '/wx.png'
                }
            ],
            footer: [
                {
                    type: 'button',
                    text: '打赏',
                    link: '/donate'
                }
            ]
        }]
    ]
}  
