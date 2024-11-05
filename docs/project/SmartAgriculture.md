---
title: 🌱SmartAgriculture
tags:
  - SpringBoot
  - MQTT
  - EMQX
createTime: 2024/11/05 20:24:33
permalink: /article/d9fmeyiw/
---

# 🌱 **智慧农业系统**
> 🌈 项目地址： [智慧农业(SmartAgriculture)](https://gitee.com/redemptionad/smartagriculture)

## 项目概述 🛠

本项目旨在开发一套基于物联网的智能农业管理系统，通过应用物联网传感器监测农作物大棚内的温度、湿度等环境参数，
实时获知农作物生长环境的变化和状态。并凭借监测数据，利用农业自动化设备实现对农作物生长环境的精确控制和调节，
为其创造适宜的生长条件。这一系统旨在合理利用农业资源，以优化水、肥、能源等资源的利用效率，为农业决策提供科学依据。

## 项目流程 🌾

1. 🖥️ 设备端作为客户端连接到 **MQTT Broker**，发布消息到一个特定的主题中
2. 📡 服务端通过订阅 **MQTT Broker** 中存在的特定的主题，接收到客户端发布的消息，做到实时响应
3. 💾 收到的消息在经过解析、处理后，存储到数据库中，最后回显给 **微信小程序** 或 **Web 大屏**

## MQTT 🛰️

> [🌐 了解更多](https://www.emqx.com/zh/blog/the-easiest-guide-to-getting-started-with-mqtt)

>[!note]
> MQTT（Message Queuing Telemetry Transport）是一种轻量级、基于发布-订阅模式的消息传输协议，
> 适用于资源受限的设备和低带宽、高延迟或不稳定的网络环境。
> 它在物联网应用中广受欢迎，能够实现传感器、执行器和其它设备之间的高效通信。

## MQTT Broker 🚀

> [🌐 了解更多](https://www.emqx.com/zh/blog/the-ultimate-guide-to-mqtt-broker-comparison)

>[!note]
> MQTT 是一种适用于物联网的轻量级协议，**MQTT Broker** 是其核心组件。
> 它帮助 **MQTT** 客户端进行通信，作为中央枢纽，能够高效管理设备与应用之间的信息流。

### 发布-订阅模式 📬

>[!note]
> 发布-订阅模式与客户端-服务器模式的不同之处在于，它将发送消息的客户端（发布者）和接收消息的客户端（订阅者）进行了解耦。
> 发布者和订阅者无需建立直接连接，而是通过 **MQTT Broker** 来负责消息的路由和分发。
> 📡 下图展示了 **MQTT** 发布/订阅过程。🌡️ 例如，温度传感器作为客户端连接到 **MQTT Broker**，
> 并通过发布操作将温度数据发布到一个特定主题（例如 Temperature）。 
> **MQTT Broker** 接收到该消息后会负责将其转发给订阅了相应主题（Temperature）的订阅者客户端。

## EMQX 🌐

> [🌐 了解更多](https://www.emqx.com/zh)

>[!note]
> **EMQX** 是目前物联网应用中最具扩展性的 **MQTT Broker**。
> 它能够以亚毫秒级的延迟在一秒钟内处理百万级的 **MQTT** 消息，
> 并支持在一个集群内连接高达 1 亿个客户端进行消息传输。EMQX 是分布式物联网网络的理想选择，
> 支持在 **Microsoft Azure**、**Amazon Web Services** 和 **Google Cloud** 等云上运行。
