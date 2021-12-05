---
title: 3.14 DISCONNECT –断开连接
---

DISCONNECT报文是客户端发给服务端的最后一个控制报文。表示客户端正常断开连接。

### 3.14.1 固定报头

##### 图例 3.35 – DISCONNECT报文固定报头

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
     <td colspan="4" align="center">MQTT控制报文类型 (14)</td>
     <td colspan="4" align="center">保留位</td>
   </tr>
   <tr>
       <td></td>
       <td align="center">1</td>
       <td align="center">1</td>
       <td align="center">1</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
     </tr>
   <tr>
     <td>byte 2</td>
     <td colspan="8" align="center">剩余长度 (0)</td>
   </tr>
   <tr>
       <td></td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
       <td align="center">0</td>
     </tr>
 </table>

服务端**必须**验证所有的保留位都被设置为0，如果它们不为0**必须**断开连接 \[MQTT-3.14.1-1\]。

### 3.14.2 可变报头

DISCONNECT报文没有可变报头。

### 3.14.3 有效载荷

DISCONNECT报文没有有效载荷。

### 3.14.4 响应

客户端发送DISCONNECT报文之后：

-   **必须**关闭网络连接 \[MQTT-3.14.4-1\]。
-   **不能**通过那个网络连接再发送任何控制报文 \[MQTT-3.14.4-2\]。

服务端在收到DISCONNECT报文时：

-   **必须**丢弃任何与当前连接关联的未发布的遗嘱消息，具体描述见 3.1.2.5节 \[MQTT-3.14.4-3\]。
-   **应该**关闭网络连接，如果客户端 还没有这么做。
