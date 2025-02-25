import{_ as t,c as r,a,o}from"./app-ledjaurY.js";const n={};function s(i,e){return o(),r("div",null,e[0]||(e[0]=[a('<blockquote><p>🌈 项目地址： <a href="https://gitee.com/redemptionad/smartagriculture" target="_blank" rel="noopener noreferrer">智慧农业(SmartAgriculture)</a></p></blockquote><h2 id="项目概述-🛠" tabindex="-1"><a class="header-anchor" href="#项目概述-🛠"><span>项目概述 🛠</span></a></h2><p>本项目旨在开发一套基于物联网的智能农业管理系统，通过应用物联网传感器监测农作物大棚内的温度、湿度等环境参数， 实时获知农作物生长环境的变化和状态。并凭借监测数据，利用农业自动化设备实现对农作物生长环境的精确控制和调节， 为其创造适宜的生长条件。这一系统旨在合理利用农业资源，以优化水、肥、能源等资源的利用效率，为农业决策提供科学依据。</p><h2 id="项目流程-🌾" tabindex="-1"><a class="header-anchor" href="#项目流程-🌾"><span>项目流程 🌾</span></a></h2><ol><li>🖥️ 设备端作为客户端连接到 <strong>MQTT Broker</strong>，发布消息到一个特定的主题中</li><li>📡 服务端通过订阅 <strong>MQTT Broker</strong> 中存在的特定的主题，接收到客户端发布的消息，做到实时响应</li><li>💾 收到的消息在经过解析、处理后，存储到数据库中，最后回显给 <strong>微信小程序</strong> 或 <strong>Web 大屏</strong></li></ol><h2 id="mqtt-🛰️" tabindex="-1"><a class="header-anchor" href="#mqtt-🛰️"><span>MQTT 🛰️</span></a></h2><blockquote><p><a href="https://www.emqx.com/zh/blog/the-easiest-guide-to-getting-started-with-mqtt" target="_blank" rel="noopener noreferrer">🌐 了解更多</a></p></blockquote><div class="hint-container note"><p class="hint-container-title">注</p><p>MQTT（Message Queuing Telemetry Transport）是一种轻量级、基于发布-订阅模式的消息传输协议， 适用于资源受限的设备和低带宽、高延迟或不稳定的网络环境。 它在物联网应用中广受欢迎，能够实现传感器、执行器和其它设备之间的高效通信。</p></div><h2 id="mqtt-broker-🚀" tabindex="-1"><a class="header-anchor" href="#mqtt-broker-🚀"><span>MQTT Broker 🚀</span></a></h2><blockquote><p><a href="https://www.emqx.com/zh/blog/the-ultimate-guide-to-mqtt-broker-comparison" target="_blank" rel="noopener noreferrer">🌐 了解更多</a></p></blockquote><div class="hint-container note"><p class="hint-container-title">注</p><p>MQTT 是一种适用于物联网的轻量级协议，<strong>MQTT Broker</strong> 是其核心组件。 它帮助 <strong>MQTT</strong> 客户端进行通信，作为中央枢纽，能够高效管理设备与应用之间的信息流。</p></div><h3 id="发布-订阅模式-📬" tabindex="-1"><a class="header-anchor" href="#发布-订阅模式-📬"><span>发布-订阅模式 📬</span></a></h3><div class="hint-container note"><p class="hint-container-title">注</p><p>发布-订阅模式与客户端-服务器模式的不同之处在于，它将发送消息的客户端（发布者）和接收消息的客户端（订阅者）进行了解耦。 发布者和订阅者无需建立直接连接，而是通过 <strong>MQTT Broker</strong> 来负责消息的路由和分发。 📡 下图展示了 <strong>MQTT</strong> 发布/订阅过程。🌡️ 例如，温度传感器作为客户端连接到 <strong>MQTT Broker</strong>， 并通过发布操作将温度数据发布到一个特定主题（例如 Temperature）。 <strong>MQTT Broker</strong> 接收到该消息后会负责将其转发给订阅了相应主题（Temperature）的订阅者客户端。</p></div><h2 id="emqx-🌐" tabindex="-1"><a class="header-anchor" href="#emqx-🌐"><span>EMQX 🌐</span></a></h2><blockquote><p><a href="https://www.emqx.com/zh" target="_blank" rel="noopener noreferrer">🌐 了解更多</a></p></blockquote><div class="hint-container note"><p class="hint-container-title">注</p><p><strong>EMQX</strong> 是目前物联网应用中最具扩展性的 <strong>MQTT Broker</strong>。 它能够以亚毫秒级的延迟在一秒钟内处理百万级的 <strong>MQTT</strong> 消息， 并支持在一个集群内连接高达 1 亿个客户端进行消息传输。EMQX 是分布式物联网网络的理想选择， 支持在 <strong>Microsoft Azure</strong>、<strong>Amazon Web Services</strong> 和 <strong>Google Cloud</strong> 等云上运行。</p></div>',16)]))}const l=t(n,[["render",s],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/article/pjf9ey1w/","title":"🌱SmartAgriculture","lang":"zh-CN","frontmatter":{"title":"🌱SmartAgriculture","tags":["SpringBoot","MQTT","EMQX"],"createTime":"2024/11/05 20:24:33","permalink":"/article/pjf9ey1w/"},"headers":[],"readingTime":{"minutes":2.49,"words":747},"git":{"updatedTime":1737466414000,"contributors":[{"name":"paiad","username":"paiad","email":"2369538173@qq.com","commits":3,"avatar":"https://avatars.githubusercontent.com/paiad?v=4","url":"https://github.com/paiad"}]},"filePathRelative":"learning/project/SmartAgriculture.md","categoryList":[{"id":"25a9ac","sort":10005,"name":"learning"},{"id":"01d76d","sort":10006,"name":"project"}]}');export{l as comp,p as data};
