---
layout: page
category: Repositories
title: UDP Pinger
description: a Simple UDP Pinger using python
date: 2022-03-25 09:23:12 
last_modified_at: 2023-11-03 11:57:20 
url: https://github.com/ammahmoudi/UDP-Pinger
importance: 1
img: https://socialify.git.ci/ammahmoudi/UDP-Pinger/image?&forks=1&issues=1&language=1&name=1&owner=1&stargazers=1&theme=Light
og_image: https://socialify.git.ci/ammahmoudi/UDP-Pinger/image?&forks=1&issues=1&language=1&name=1&owner=1&stargazers=1&theme=Light
tags: [udp, udp-pinger]
categories: ["Repository", Python]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/UDP-Pinger" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---

This is a simple UDP pinger using Python. It demonstrates how to send and receive UDP packets over the Internet. UDP is a transport layer protocol that is fast and lightweight, but unreliable and connectionless. It is suitable for real-time applications that can tolerate some data loss, such as video streaming, voice communication, and online gaming.

## How it works

The project consists of two files: `Client.py` and `Server.py`. The client sends 10 ping messages to the server, each containing a sequence number and a timestamp. The server responds to each ping message with the same message. The client calculates the round-trip time (RTT) for each ping and prints it out. The client also keeps track of the number of packets lost and the minimum, maximum, and average RTTs.

The project also includes two runner files: `Client_runner.py` and `Server_runner.py`. These files are used to run the client and server on different machines. The client runner takes the server's IP address and port number as arguments, while the server runner takes the port number as an argument. The runner files use the `Utills.py` file, which contains some utility functions for parsing arguments and printing messages.

## How to run

To run the project, you need to have Python 3 installed on your machine. You also need to have two machines that can communicate over the Internet, one acting as the client and the other as the server. You can use any port number that is not reserved by the system.

To run the server, execute the following command on the server machine:

```
python Server_runner.py <port>
```

where `<port>` is the port number you want to use.

To run the client, execute the following command on the client machine:

```
python Client_runner.py <server_ip> <server_port>
```

where `<server_ip>` is the IP address of the server machine and `<server_port>` is the port number used by the server.

You should see the client sending ping messages to the server and receiving responses. You should also see the RTT and packet loss statistics printed on the client side.

## What is UDP

UDP stands for User Datagram Protocol. It is a communication protocol used across the Internet for especially time-sensitive transmissions such as video playback or DNS lookups. It speeds up communications by not formally establishing a connection before data is transferred. This allows data to be transferred very quickly, but it can also cause packets to become lost in transit or arrive out of order. UDP does not provide any error checking, flow control, or retransmission mechanisms. Therefore, applications that use UDP must be able to handle errors, loss, and duplication themselves. UDP is often used for real-time services that require low latency and high performance, such as online gaming, voice over IP, and live streaming..
