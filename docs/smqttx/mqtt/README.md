---
sort: 1
---
# MQTT相关配置

```yaml
smqtt:
  tcp: # MQTT配置
    port: 1883 # mqtt端口号
    wiretap: false  # 二进制日志 前提是 smqtt.logLevel = DEBUG
    bossThreadSize: 8  # boss线程 默认=cpu核心数,推荐 1~2 即可
    workThreadSize: 16 # work线程 默认=cpu核心数*2
    businessThreadSize: 32 # 业务线程数 默认=cpu核心数*10
    businessQueueSize: 100000 #业务队列 默认=100000
    messageMaxSize: 4194304 # 接收消息的最大限制 默认4194304(4M)
    lowWaterMark: 4000000 # 不建议配置 默认 32768
    highWaterMark: 80000000 # 不建议配置 默认 65536
    # globalReadWriteSize: 10000000,100000000  全局读写大小限制
    # channelReadWriteSize: 10000000,100000000 单个channel读写大小限制
    options:
      SO_BACKLOG: 2000
    ssl: # ssl配置
      enable: false # 开关
      key: /user/server.key # 私钥
      crt: /user/server.crt # 公钥
      ca: /user/my.ca # 证书
```

{% include list.liquid %}

