import{_ as e,c as t,o as s,a}from"./app.8e21f956.js";const v=JSON.parse('{"title":"Class: MessageChannelService","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"registerAction","slug":"registeraction","link":"#registeraction","children":[]},{"level":3,"title":"send","slug":"send","link":"#send","children":[]},{"level":3,"title":"sendTo","slug":"sendto","link":"#sendto","children":[]},{"level":3,"title":"getInstance","slug":"getinstance","link":"#getinstance","children":[]}]}],"relativePath":"classes/Service.Service.MessageChannelService.md"}'),n={name:"classes/Service.Service.MessageChannelService.md"},o=a(`<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/Service.html">Service</a> / <a href="./../modules/Service.Service.html">Service</a> / MessageChannelService</p><h1 id="class-messagechannelservice" tabindex="-1">Class: MessageChannelService <a class="header-anchor" href="#class-messagechannelservice" aria-hidden="true">#</a></h1><p><a href="./../modules/Service.html">Service</a>.<a href="./../modules/Service.Service.html">Service</a>.MessageChannelService</p><p><strong><code>Author</code></strong></p><p>zifei.wu</p><p><strong><code>Instance</code></strong></p><p><strong><code>Description</code></strong></p><p>支持各端的通信，233、MW 引擎、Web 和游戏项目可以互相直接进行业务上的消息传递，无需修改引擎代码</p><p><strong><code>Network Status</code></strong></p><p>usage: 客户端</p><p><strong><code>Precautions</code></strong></p><p>单例类，请使用 getInstance 获取对象。TS 端想要收到某消息并执行回调函数需要提前 调用 registerAction 进行绑定。消息需要是 Json 格式的字符串并包含“action”字段 否则无法被通道转发。在 PIE 下无法连接到 233、Web 端。 如果游戏在后台收到消息，通道会将消息缓存并在游戏回到前台后一并发送。</p><p><strong><code>Example</code></strong></p><p>使用示例:通道的注册、发送的使用示例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 注册action:ts.test.myaction，对包含action的消息，调用OnCall回调</span></span>
<span class="line"><span style="color:#A6ACCD;">Service.MessageChannelService.getInstance().registerAction(&quot;ts.test.myaction&quot;, this, OnCall);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 发送message:&quot;{\\&quot;action\\&quot;:\\&quot;ts.test.myaction\\&quot;,\\&quot;data\\&quot;:{}}&quot;到通道上，所有注册了该消息中action的端才可以收到该消息</span></span>
<span class="line"><span style="color:#A6ACCD;">Service.MessageChannelService.getInstance().send(&quot;{\\&quot;action\\&quot;:\\&quot;ts.test.myaction\\&quot;,\\&quot;data\\&quot;:{}}&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 指定一个目标端toWhom发送消息message，对方无需提前注册就可以收到该消息</span></span>
<span class="line"><span style="color:#A6ACCD;">Service.MessageChannelService.getInstance().sendTo(toWhom, message);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Service.Service.MessageChannelService.html#constructor">constructor</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Service.Service.MessageChannelService.html#registeraction">registerAction</a></li><li><a href="./Service.Service.MessageChannelService.html#send">send</a></li><li><a href="./Service.Service.MessageChannelService.html#sendto">sendTo</a></li><li><a href="./Service.Service.MessageChannelService.html#getinstance">getInstance</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new MessageChannelService</strong>()</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="registeraction" tabindex="-1">registerAction <a class="header-anchor" href="#registeraction" aria-hidden="true">#</a></h3><p>▸ <strong>registerAction</strong>(<code>action</code>, <code>caller</code>, <code>onCall</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>注册需要收到消息的 action 以及对应要调用的回调函数</p><p><strong><code>Effect</code></strong></p><p>通道会识别包含该 action 的消息并调用对应的回调函数</p><p><strong><code>Precautions</code></strong></p><p>未被注册的消息不会被 TS 层接收，哪怕对方指定目标是 TS 也不会调用回调函数（未注册） 注册 action 需要在收到消息之前，请保证注册时机足够早</p><p><strong><code>Example</code></strong></p><p>使用示例:通道注册 action</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 注册action:ts.test.myaction，对包含action的消息，调用OnCall回调</span></span>
<span class="line"><span style="color:#A6ACCD;">Service.MessageChannelService.getInstance().registerAction(&quot;ts.test.myaction&quot;, this, OnCall);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>action</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:需要被注册的 action，通道收到该 action 的消息会调用对应回调</td></tr><tr><td style="text-align:left;"><code>caller</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">usage:调用者，一般传 this</td></tr><tr><td style="text-align:left;"><code>onCall</code></td><td style="text-align:left;">(<code>data</code>: <code>string</code>) =&gt; <code>void</code></td><td style="text-align:left;">usage:通道收到消息后应该执行的对应的回调函数</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Service/index.d.ts:325</p><hr><h3 id="send" tabindex="-1">send <a class="header-anchor" href="#send" aria-hidden="true">#</a></h3><p>▸ <strong>send</strong>(<code>message</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>发送消息到通道上</p><p><strong><code>Effect</code></strong></p><p>将消息发送到通道，所有注册了该消息 action 的端才能收到该消息</p><p><strong><code>Precautions</code></strong></p><p>如果通道上没有端注册了该消息的 action 则这条消息不会发送给任何对象 如果通道上有多个端注册了该消息的 action 则所有注册者都能收到该消息 发送消息的时机要晚于对方注册的时机 消息需要是 Json 格式的字符串，包含&quot;action&quot;字段</p><p><strong><code>Example</code></strong></p><p>使用示例:通道广播消息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 发送message:&quot;{\\&quot;action\\&quot;:\\&quot;ts.test.myaction\\&quot;,\\&quot;data\\&quot;:{}}&quot;到通道上，所有注册了该消息中action的端才可以收到该消息</span></span>
<span class="line"><span style="color:#A6ACCD;">Service.MessageChannelService.getInstance().send(&quot;{\\&quot;action\\&quot;:\\&quot;ts.test.myaction\\&quot;,\\&quot;data\\&quot;:{}}&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:需要发送的消息</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Service/index.d.ts:345</p><hr><h3 id="sendto" tabindex="-1">sendTo <a class="header-anchor" href="#sendto" aria-hidden="true">#</a></h3><p>▸ <strong>sendTo</strong>(<code>toWhom</code>, <code>message</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>发送消息给指定对象</p><p><strong><code>Effect</code></strong></p><p>将消息发送给指定对象，对方无需提前注册</p><p><strong><code>Precautions</code></strong></p><p>如果通道上有多个端注册了该消息，仍只会发给指定的对象 消息需要是 Json 格式的字符串，包含&quot;action&quot;字段</p><p><strong><code>Example</code></strong></p><p>使用示例:通道私发消息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 指定一个目标端toWhom:Client发送消息message:&quot;{\\&quot;action\\&quot;:\\&quot;ts.test.myaction\\&quot;,\\&quot;data\\&quot;:{}}&quot;，对方无需提前注册就可以收到该消息</span></span>
<span class="line"><span style="color:#A6ACCD;">Service.MessageChannelService.getInstance().sendTo(Service.MessageChannelReceiver.Client, &quot;{\\&quot;action\\&quot;:\\&quot;ts.test.myaction\\&quot;,\\&quot;data\\&quot;:{}}&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>toWhom</code></td><td style="text-align:left;"><a href="./../enums/Service.Service.MessageChannelReceiver.html"><code>MessageChannelReceiver</code></a></td><td style="text-align:left;">usage:指定的对象，使用枚举值 MessageChannelReceiver</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:需要发送的消息</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Service/index.d.ts:360</p><hr><h3 id="getinstance" tabindex="-1">getInstance <a class="header-anchor" href="#getinstance" aria-hidden="true">#</a></h3><p>▸ <code>Static</code> <strong>getInstance</strong>(): <a href="./Service.Service.MessageChannelService.html"><code>MessageChannelService</code></a></p><p><strong><code>Description</code></strong></p><p>获取 API 实例进行调用</p><p><strong><code>Effect</code></strong></p><p>获取 API 实例进行调用</p><p><strong><code>Precautions</code></strong></p><p>无</p><p><strong><code>Example</code></strong></p><p>使用示例:通道发送消息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 通过实例调用函数发送消息</span></span>
<span class="line"><span style="color:#A6ACCD;">Service.MessageChannelService.getInstance().send(message);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><a href="./Service.Service.MessageChannelService.html"><code>MessageChannelService</code></a></p><p>返回 API 实例用以调用相关功能函数</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Service/index.d.ts:309</p>`,94),c=[o];function r(i,d,l,p,h,g){return s(),t("div",null,c)}const f=e(n,[["render",r]]);export{v as __pageData,f as default};
