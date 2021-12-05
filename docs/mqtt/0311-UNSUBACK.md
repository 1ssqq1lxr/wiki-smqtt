---
title: 3.11 UNSUBACK – 取消订阅确认
---

服务端发送UNSUBACK报文给客户端用于确认收到UNSUBSCRIBE报文。

### 3.11.1 固定报头

##### 图例 3.31 – UNSUBACK报文固定报头

| **Bit** | **7**                 | **6**  | **5** | **4** | **3** | **2** | **1** | **0** |
|---------|-----------------------|--------|-------|-------|-------|-------|-------|-------|
| byte 1  | MQTT控制报文类型 (11) | 保留位 |
|         | 1                     | 0      | 1     | 1     | 0     | 0     | 0     | 0     |
| byte 2  | 剩余长度 (2)          |
|         | 0                     | 0      | 0     | 0     | 0     | 0     | 1     | 0     |

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
     <td colspan="4" align="center">MQTT控制报文类型 (11)</td>
     <td colspan="4" align="center">保留位</td>
   </tr>
   <tr>
       <td></td>
       <td align="center">1</td>
       <td align="center">0</td>
       <td align="center">1</td>
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

表示可变报头的长度，对UNSUBACK报文这个值等于2。

### 3.11.2 可变报头

可变报头包含等待确认的UNSUBSCRIBE报文的报文标识符。

##### 图例 3.32 – UNSUBACK报文可变报头

| **Bit** | **7**          | **6** | **5** | **4** | **3** | **2** | **1** | **0** |
|---------|----------------|-------|-------|-------|-------|-------|-------|-------|
| byte 1  | 报文标识符 MSB |
| byte 2  | 报文标识符 LSB |

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

### 3.11.3 有效载荷

UNSUBACK报文没有有效载荷。


