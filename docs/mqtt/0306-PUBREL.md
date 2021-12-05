---
title: 3.6 PUBREL – 发布释放（QoS 2，第二步）
---

PUBREL报文是对PUBREC报文的响应。它是QoS 2等级协议交换的第三个报文。

### 3.6.1 固定报头

##### 图例 3.16 – PUBREL报文固定报头

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
     <td colspan="4" align="center">MQTT控制报文类型 (6)</td>
     <td colspan="4" align="center">保留位</td>
   </tr>
   <tr>
       <td></td>
       <td align="center">1</td>
       <td align="center">1</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">1</td>
       <td align="center">0</td>
     </tr>
   <tr>
     <td>byte 2</td>
     <td colspan="8" align="center">剩余长度 (2)</td>
   </tr>
   <tr>
       <td></td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">1</td>
       <td align="center">0</td>
     </tr>
 </table>

PUBREL控制报文固定报头的第3,2,1,0位是保留位，**必须**被设置为0,0,1,0。服务端**必须**将其它的任何值都当做是不合法的并关闭网络连接 \[MQTT-3.6.1-1\]。

**剩余长度字段**

表示可变报头的长度。对PUBREL报文这个值等于2.

### 3.6.2 可变报头

可变报头包含与等待确认的PUBREC报文相同的报文标识符。

##### 图例 3.17 – PUBREL报文可变报头

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
     <td colspan="8" align="center">报文标识符 MSB</td>
   </tr>
   <tr>
     <td>byte 2</td>
     <td colspan="8" align="center">报文标识符 LSB</td>
   </tr>
 </table>

### 3.6.3 有效载荷

PUBREL报文没有有效载荷。

### 3.6.4 动作

完整的描述见 4.3.3节。
