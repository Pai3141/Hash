import{_ as h,c as m,a as n,b as e,e as r,d as s,w as a,r as p,o as u}from"./app-ledjaurY.js";const c={};function k(b,i){const o=p("Icon"),d=p("CodeTabs");return u(),m("div",null,[i[8]||(i[8]=n('<p>在Windows中部署属大语言模型: <a href="https://blog.csdn.net/qq_29371275/article/details/145368168" target="_blank" rel="noopener noreferrer">Ollama + open-webui + deepseek-r1</a></p><ul><li>Ollama：是一款开源的聊天机器人框架，主要目标是简化大型语言模型（LLMs）的部署和运行流程，支持多种语言模型，如 Llama 2、Code Llama、Mistral 和 Gemma 等，可让用户在本地机器或私有服务器上轻松运行这些模型，无需依赖云服务，具有简化部署、跨平台支持、自定义和扩展性等特点。</li><li>Open WebUI：是一个可扩展、功能丰富、用户友好的自托管 WebUI。旨在与大型语言模型进行交互，特别是那些由 Ollama 或与 OpenAI API 兼容的服务所支持的模型。它为用户提供了一个直观的界面来与语言模型进行交互，支持全 markdown 和 latex，能增强 LLM 体验的互动功能，还支持本地和远程的检索增强生成（RAG）集成等。</li><li><mark>Ollama</mark> 负责模型的部署和运行，<mark>Open WebUI</mark> 负责提供交互界面和其他辅助功能</li></ul><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps"><span>Steps</span></a></h3><div class="vp-steps"><ol><li>下载并安装Ollama</li><li>pip/conda下载Open WebUI</li><li>在终端执行命令open-webui serve</li><li>访问<a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">localhost:8080</a></li></ol></div><h3 id="ollama" tabindex="-1"><a class="header-anchor" href="#ollama"><span>Ollama</span></a></h3><blockquote><p>Github: <a href="https://github.com/ollama/ollama" target="_blank" rel="noopener noreferrer">Ollama</a></p><p>Download: <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer">OllamaSetup.exe</a></p></blockquote><h3 id="open-webui" tabindex="-1"><a class="header-anchor" href="#open-webui"><span>Open WebUI</span></a></h3><blockquote><p>Github: <a href="https://github.com/open-webui/open-webui" target="_blank" rel="noopener noreferrer">Open WebUI</a></p></blockquote>',8)),e("p",null,[i[0]||(i[0]=s("进入")),r(o,{name:"logos:pycharm"}),i[1]||(i[1]=s("Pycharm，在Command Prompt或者PowerShell中输入以下命令："))]),r(d,{id:"69",data:[{id:"official"},{id:"alibaba"},{id:"tsinghua"}]},{title0:a(({value:t,isActive:l})=>i[2]||(i[2]=[e("span",null,"official",-1)])),title1:a(({value:t,isActive:l})=>i[3]||(i[3]=[e("span",null,"alibaba",-1)])),title2:a(({value:t,isActive:l})=>i[4]||(i[4]=[e("span",null,"tsinghua",-1)])),tab0:a(({value:t,isActive:l})=>i[5]||(i[5]=[e("div",{class:"language-sh line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 创建虚拟环境，执行以下命令")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pip"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," open-webui")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab1:a(({value:t,isActive:l})=>i[6]||(i[6]=[e("div",{class:"language-sh line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pip"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -i"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://mirrors.aliyun.com/pypi/simple/"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," open-webui")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab2:a(({value:t,isActive:l})=>i[7]||(i[7]=[e("div",{class:"language-sh line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pip"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -i"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," open-webui")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),_:1}),i[9]||(i[9]=n('<hr><h3 id="edit-configurations" tabindex="-1"><a class="header-anchor" href="#edit-configurations"><span>Edit Configurations</span></a></h3><p>Pycharm的Edit Configurations配置：</p><div class="vp-steps"><ol><li><p>步骤1</p><p>Execute: Script text</p></li><li><p>步骤2</p><p>Script text: open-webui serve</p></li><li><p>步骤3</p><p>Working directory: E:/PYCHARM/Ollama</p></li><li><p>步骤4</p><p>Interpreter path: powershell.exe</p></li><li><p>步骤5</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Execute in the terminal: 勾选</label></li></ul></li></ol></div><p><img src="https://raw.githubusercontent.com/Pai3141/PictureBed/main/img/Ollama-1.png" alt="Edit Configurations"></p>',5))])}const v=h(c,[["render",k],["__file","index.html.vue"]]),F=JSON.parse('{"path":"/article/pjrtphxj/","title":"🐋本地部署大模型","lang":"zh-CN","frontmatter":{"title":"🐋本地部署大模型","createTime":"2025/01/31 00:17:58","permalink":"/article/pjrtphxj/","tags":["Ollama","Open WebUI","DeepSeek"]},"headers":[],"readingTime":{"minutes":1.53,"words":459},"git":{"updatedTime":1739614522000,"contributors":[{"name":"paiad","username":"paiad","email":"2369538173@qq.com","commits":3,"avatar":"https://avatars.githubusercontent.com/paiad?v=4","url":"https://github.com/paiad"}]},"filePathRelative":"learning/multi/Ollama.md","categoryList":[{"id":"25a9ac","sort":10005,"name":"learning"},{"id":"e7f12e","sort":10007,"name":"multi"}]}');export{v as comp,F as data};
