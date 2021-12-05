---
title: 3.5 PUBREC – 发布收到（QoS 2，第一步）
---

PUBREC报文是对QoS等级2的PUBLISH报文的响应。它是QoS 2等级协议交换的第二个报文。

### 3.5.1 固定报头

##### 图例 3.14 – PUBREC报文固定报头

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
     <td colspan="4" align="center">MQTT控制报文类型 (5)</td>
     <td colspan="4" align="center">保留位</td>
   </tr>
    <tr>
       <td></td>
       <td align="center">0</td>
       <td align="center">1</td>
       <td align="center">0</td>
       <td align="center">1</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
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

**剩余长度字段**

表示可变报头的长度。对PUBREC报文它的值等于2。

### 3.5.2 可变报头

可变报头包含等待确认的PUBLISH报文的报文标识符。

##### 图例 3.15 – PUBREC报文可变报头

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

### 3.5.3 有效载荷

PUBREC报文没有有效载荷。

### 3.5.4 动作

完整的描述见 4.3.3节。
