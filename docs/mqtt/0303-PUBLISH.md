---
title: 3.3 PUBLISH – 发布消息
---

PUBLISH控制报文是指从客户端向服务端或者服务端向客户端传输一个应用消息。

### 3.3.1 固定报头

[图例 3.10 – PUBLISH报文固定报头](#_图例_3.10_–)描述了固定报头的格式

##### 图例 3.10 – PUBLISH报文固定报头

<table style="text-align:center">
   <tr>
     <td align="center"><strong>Bit</strong></td>
     <td align="center"><strong>7</strong></td>
     <td align="center"><strong>6</strong></td>
     <td align="center"><strong>5</strong></td>
     <td align="center"><strong>4</strong></td>
     <td align="center"><strong>3</strong></td>
     <td align="center"><strong>2</strong></td>
     <td align="center"><strong>1</strong></td>
     <td align="center"><strong>0</strong></td>
   </tr>
   <tr>
     <td>byte 1</td>
     <td colspan="4" align="center"> MQTT控制报文类型 (3)</td>
     <td align="center">DUP</td>
     <td align="center">QoS-H</td>
     <td align="center">QoS-</td>
     <td align="center">RETAIN</td>
   </tr>
    <tr>
       <td></td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">1</td>
       <td align="center">1</td>
       <td align="center">X</td>
       <td align="center">X</td>
       <td align="center">X</td>
       <td align="center">X</td>
     </tr>
   <tr>
     <td>byte 2...</td>
     <td colspan="8" align="center">剩余长度</td>
   </tr>
 </table>

#### 重发标志 DUP

**位置：**第1个字节，第3位

如果DUP标志被设置为0，表示这是客户端或服务端第一次请求发送这个PUBLISH报文。如果DUP标志被设置为1，表示这可能是一个早前报文请求的重发。

客户端或服务端请求重发一个PUBLISH报文时，**必须**将DUP标志设置为1 \[MQTT-3.3.1.-1\].。对于QoS 0的消息，DUP标志**必须**设置为0 \[MQTT-3.3.1-2\]。

服务端发送PUBLISH报文给订阅者时，收到（入站）的PUBLISH报文的DUP标志的值不会被传播。发送（出站）的PUBLISH报文与收到（入站）的PUBLISH报文中的DUP标志是独立设置的，它的值**必须**单独的根据发送（出站）的PUBLISH报文是否是一个重发来确定 \[MQTT-3.3.1-3\]。

> **非规范评注**
>
> 接收者收到一个DUP标志为1的控制报文时，不能假设它看到了一个这个报文之前的一个副本。
>
> **非规范评注**
>
> 需要特别指出的是，DUP标志关注的是控制报文本身，与它包含的应用消息无关。当使用QoS 1时，客户端可能会收到一个DUP标志为0的PUBLISH报文，这个报文包含一个它之前收到过的应用消息的副本，但是用的是不同的报文标识符。 2.3.1节提供了有关报文标识符的更多信息。

#### 服务质量等级 QoS

**位置：**第1个字节，第2-1位。

这个字段表示应用消息分发的服务质量等级保证。服务质量等级在 [表格 3.2 -服务质量定义](#_表格_3.2_-服务质量定义) 中列出。

##### 表格 3.2 -服务质量定义

| **QoS值** | **Bit 2** | **Bit 1** | **描述**     |
|-----------|-----------|-----------|--------------|
| 0         | 0         | 0         | 最多分发一次 |
| 1         | 0         | 1         | 至少分发一次 |
| 2         | 1         | 0         | 只分发一次   |
| -         | 1         | 1         | 保留位       |

PUBLISH报文**不能**将QoS所有的位设置为1。如果服务端或客户端收到QoS所有位都为1的PUBLISH报文，它**必须**关闭网络连接  \[MQTT-3.3.1-4\]。

#### 保留标志 RETAIN

**位置：**第1个字节，第0位。

如果客户端发给服务端的PUBLISH报文的保留（RETAIN）标志被设置为1，服务端**必须**存储这个应用消息和它的服务质量等级（QoS），以便它可以被分发给未来的主题名匹配的订阅者 \[MQTT-3.3.1-5\]。一个新的订阅建立时，对每个匹配的主题名，如果存在最近保留的消息，它**必须**被发送给这个订阅者 \[MQTT-3.3.1-6\]。如果服务端收到一条保留（RETAIN）标志为1的QoS 0消息，它**必须**丢弃之前为那个主题保留的任何消息。它**应该**将这个新的QoS 0消息当作那个主题的新保留消息，但是任何时候都**可以**选择丢弃它 — 如果这种情况发生了，那个主题将没有保留消息 \[MQTT-3.3.1-7\]。有关存储状态的更多信息见 4.1节。

服务端发送PUBLISH报文给客户端时，如果消息是作为客户端一个新订阅的结果发送，它**必须**将报文的保留标志设为1 \[MQTT-3.3.1-8\]。当一个PUBLISH报文发送给客户端是因为匹配一个已建立的订阅时，服务端**必须**将保留标志设为0，不管它收到的这个消息中保留标志的值是多少 \[MQTT-3.3.1-9\]。

保留标志为1且有效载荷为零字节的PUBLISH报文会被服务端当作正常消息处理，它会被发送给订阅主题匹配的客户端。此外，同一个主题下任何现存的保留消息必须被移除，因此这个主题之后的任何订阅者都不会收到一个保留消息 \[MQTT-3.3.1-10\]。*当作正常* 意思是现存的客户端收到的消息中保留标志未被设置。服务端**不能**存储零字节的保留消息 \[MQTT-3.3.1-11\]。

如果客户端发给服务端的PUBLISH报文的保留标志位0，服务端**不能**存储这个消息也**不能**移除或替换任何现存的保留消息 \[MQTT-3.3.1-12\]。

> **非规范评注**
>
> 对于发布者不定期发送状态消息这个场景，保留消息很有用。新的订阅者将会收到最近的状态。

**剩余长度字段**

等于可变报头的长度加上有效载荷的长度。

### 3.3.2 可变报头

可变报头按顺序包含主题名和报文标识符。

#### 主题名 Topic Name

主题名（Topic Name）用于识别有效载荷数据应该被发布到哪一个信息通道。

主题名**必须**是PUBLISH报文可变报头的第一个字段。它**必须**是 1.5.3节定义的UTF-8编码的字符串 \[MQTT-3.3.2-1\]。

PUBLISH报文中的主题名**不能**包含通配符 \[MQTT-3.3.2-2\]。

服务端发送给订阅客户端的PUBLISH报文的主题名**必须**匹配该订阅的主题过滤器（根据 4.7节定义的匹配过程）\[MQTT-3.3.2-3\]。

#### 报文标识符 Packet Identifier

只有当QoS等级是1或2时，报文标识符（Packet Identifier）字段才能出现在PUBLISH报文中。2.3.1节提供了有关报文标识符的更多信息。

#### 可变报头非规范示例

[图例 3.11 – PUBLISH报文可变报头非规范示例](#_Figure_3.11_-) 举例说明了 [表格 3.3 - PUBLISH报文非规范示例](#_表格_3.3_-) 中简要描述的PUBLISH报文的可变报头。

##### <span id="_Table_3.2_-" class="anchor"><span id="_表格_3.3_-" class="anchor"><span id="_Toc425971861" class="anchor"></span></span></span>表格 3.3 - PUBLISH报文非规范示例

| **Field**  | **Value** |
|------------|-----------|
| 主题名     | a/b       |
| 报文标识符 | 10        |

##### 图例 3.11 – PUBLISH报文可变报头非规范示例

|                   | **描述**            | **7** | **6** | **5** | **4** | **3** | **2** | **1** | **0** |
|-------------------|---------------------|-------|-------|-------|-------|-------|-------|-------|-------|
| Topic Name 主题名 |
| byte 1            | Length MSB (0)      | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| byte 2            | Length LSB (3)      | 0     | 0     | 0     | 0     | 0     | 0     | 1     | 1     |
| byte 3            | ‘a’ (0x61)          | 0     | 1     | 1     | 0     | 0     | 0     | 0     | 1     |
| byte 4            | ‘/’ (0x2F)          | 0     | 0     | 1     | 0     | 1     | 1     | 1     | 1     |
| byte 5            | ‘b’ (0x62)          | 0     | 1     | 1     | 0     | 0     | 0     | 1     | 0     |
| 报文标识符        |
| byte 6            | 报文标识符 MSB (0)  | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| byte 7            | 报文标识符 LSB (10) | 0     | 0     | 0     | 0     | 1     | 0     | 1     | 0     |

示例中的主题名为 “a/b”，长度等于3，报文标识符为 “10”

### 3.3.3 有效载荷

有效载荷包含将被发布的应用消息。数据的内容和格式是应用特定的。有效载荷的长度这样计算：用固定报头中的剩余长度字段的值减去可变报头的长度。包含零长度有效载荷的PUBLISH报文是合法的。

### 3.3.4 响应

PUBLISH报文的接收者**必须**按照根据PUBLISH报文中的QoS等级发送响应，见下面表格的描述 \[MQTT-3.3.4-1\]。

##### 表格 3.4 – PUBLISH报文的预期响应

| **服务质量等级** | **预期响应** |
|------------------|--------------|
| QoS 0            | 无响应       |
| QoS 1            | PUBACK报文   |
| QoS 2            | PUBREC报文   |

### 3.3.5 动作 Actions

客户端使用PUBLISH报文发送应用消息给服务端，目的是分发到其它订阅匹配的客户端。

服务端使用PUBLISH报文发送应用消息给每一个订阅匹配的客户端。

客户端使用带通配符的主题过滤器请求订阅时，客户端的订阅可能会重复，因此发布的消息可能会匹配多个过滤器。对于这种情况，服务端**必须**将消息分发给所有订阅匹配的QoS等级最高的客户端 \[MQTT-3.3.5-1\]。服务端之后可以按照订阅的QoS等级，分发消息的副本给每一个匹配的订阅者。

收到一个PUBLISH报文时，接收者的动作取决于4.3节描述的QoS等级。

如果服务端实现不授权某个客户端发布PUBLISH报文，它没有办法通知那个客户端。它**必须**按照正常的QoS规则发送一个正面的确认，或者关闭网络连接 \[MQTT-3.3.5-2\]。
