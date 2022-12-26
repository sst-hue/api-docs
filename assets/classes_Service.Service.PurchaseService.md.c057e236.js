import{_ as e,c as r,o as t,a}from"./app.8e21f956.js";const v=JSON.parse('{"title":"Class: PurchaseService","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Accessors","slug":"accessors","link":"#accessors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Accessors","slug":"accessors-1","link":"#accessors-1","children":[{"level":3,"title":"onArkBalanceUpdated","slug":"onarkbalanceupdated","link":"#onarkbalanceupdated","children":[]},{"level":3,"title":"onOrderDelivered","slug":"onorderdelivered","link":"#onorderdelivered","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"getArkBalance","slug":"getarkbalance","link":"#getarkbalance","children":[]},{"level":3,"title":"placeOrder","slug":"placeorder","link":"#placeorder","children":[]},{"level":3,"title":"getInstance","slug":"getinstance","link":"#getinstance","children":[]}]}],"relativePath":"classes/Service.Service.PurchaseService.md"}'),c={name:"classes/Service.Service.PurchaseService.md"},d=a('<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/Service.html">Service</a> / <a href="./../modules/Service.Service.html">Service</a> / PurchaseService</p><h1 id="class-purchaseservice" tabindex="-1">Class: PurchaseService <a class="header-anchor" href="#class-purchaseservice" aria-hidden="true">#</a></h1><p><a href="./../modules/Service.html">Service</a>.<a href="./../modules/Service.Service.html">Service</a>.PurchaseService</p><p><strong><code>Author</code></strong></p><p>huipeng.jia</p><p><strong><code>Instance</code></strong></p><p><strong><code>Description</code></strong></p><p>应用内购服务</p><p><strong><code>Precautions</code></strong></p><p>单例类，请使用 instance 获取对象</p><p><strong><code>Network Status</code></strong></p><p>usage: 客户端</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Service.Service.PurchaseService.html#constructor">constructor</a></li></ul><h3 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-hidden="true">#</a></h3><ul><li><a href="./Service.Service.PurchaseService.html#onarkbalanceupdated">onArkBalanceUpdated</a></li><li><a href="./Service.Service.PurchaseService.html#onorderdelivered">onOrderDelivered</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Service.Service.PurchaseService.html#getarkbalance">getArkBalance</a></li><li><a href="./Service.Service.PurchaseService.html#placeorder">placeOrder</a></li><li><a href="./Service.Service.PurchaseService.html#getinstance">getInstance</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new PurchaseService</strong>()</p><h2 id="accessors-1" tabindex="-1">Accessors <a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a></h2><h3 id="onarkbalanceupdated" tabindex="-1">onArkBalanceUpdated <a class="header-anchor" href="#onarkbalanceupdated" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>onArkBalanceUpdated</strong>(): <a href="./Type.Type.MulticastDelegate.html"><code>MulticastDelegate</code></a>&lt;<a href="./../modules/Service.Service.html#onarkbalanceupdated"><code>OnArkBalanceUpdated</code></a>&gt;</p><p><strong><code>Description</code></strong></p><p>获取 Ark 币余额更新的委托</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>只在支持 IAP 的 233/Playza/口袋方舟内使用时生效</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./Type.Type.MulticastDelegate.html"><code>MulticastDelegate</code></a>&lt;<a href="./../modules/Service.Service.html#onarkbalanceupdated"><code>OnArkBalanceUpdated</code></a>&gt;</p><p>Ark 币余额更新的委托</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Service/index.d.ts:414</p><hr><h3 id="onorderdelivered" tabindex="-1">onOrderDelivered <a class="header-anchor" href="#onorderdelivered" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>onOrderDelivered</strong>(): <a href="./Type.Type.MulticastDelegate.html"><code>MulticastDelegate</code></a>&lt;<a href="./../modules/Service.Service.html#onorderdelivered"><code>OnOrderDelivered</code></a>&gt;</p><p><strong><code>Description</code></strong></p><p>获取订单发货的委托</p><p><strong><code>Effect</code></strong></p><p>只在服务端调用生效</p><p><strong><code>Precautions</code></strong></p><ol><li>只在支持 IAP 的 233/Playza/口袋方舟内使用时生效</li><li>仅在服务端有效。暂未考虑单机模式，使用需谨慎</li></ol><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./Type.Type.MulticastDelegate.html"><code>MulticastDelegate</code></a>&lt;<a href="./../modules/Service.Service.html#onorderdelivered"><code>OnOrderDelivered</code></a>&gt;</p><p>订单发货的委托</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Service/index.d.ts:436</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="getarkbalance" tabindex="-1">getArkBalance <a class="header-anchor" href="#getarkbalance" aria-hidden="true">#</a></h3><p>▸ <strong>getArkBalance</strong>(): <code>void</code></p><p><strong><code>Description</code></strong></p><p>获取 Ark 币余额</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>只在支持 IAP 的 233/Playza/口袋方舟内使用时生效</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Service/index.d.ts:407</p><hr><h3 id="placeorder" tabindex="-1">placeOrder <a class="header-anchor" href="#placeorder" aria-hidden="true">#</a></h3><p>▸ <strong>placeOrder</strong>(<code>commodityId</code>, <code>amount</code>, <code>placeOrderResult</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>下单指定数量的指定商品</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><p><strong><code>Precautions</code></strong></p><p>只在支持 IAP 的 233/Playza/口袋方舟内使用时生效</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>commodityId</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 商品 Id</td></tr><tr><td style="text-align:left;"><code>amount</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage: 数量</td></tr><tr><td style="text-align:left;"><code>placeOrderResult</code></td><td style="text-align:left;">(<code>status</code>: <code>number</code>, <code>msg</code>: <code>string</code>) =&gt; <code>void</code></td><td style="text-align:left;">usage: 订单状态回调，status = 200 时表示订单支付成功。msg 描述订单状态或者错误信息</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Service/index.d.ts:423</p><hr><h3 id="getinstance" tabindex="-1">getInstance <a class="header-anchor" href="#getinstance" aria-hidden="true">#</a></h3><p>▸ <code>Static</code> <strong>getInstance</strong>(): <a href="./Service.Service.PurchaseService.html"><code>PurchaseService</code></a></p><p><strong><code>Description</code></strong></p><p>获取应用内购管理器全局实例</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><a href="./Service.Service.PurchaseService.html"><code>PurchaseService</code></a></p><p>应用内购管理器全局实例</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>Service/index.d.ts:401</p>',90),n=[d];function s(o,i,l,h,p,u){return t(),r("div",null,n)}const f=e(c,[["render",s]]);export{v as __pageData,f as default};
