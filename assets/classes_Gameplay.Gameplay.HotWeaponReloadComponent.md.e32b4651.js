import{_ as e,c as a,o as t,a as n}from"./app.8e21f956.js";const f=JSON.parse('{"title":"Class: HotWeaponReloadComponent","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Accessors","slug":"accessors","link":"#accessors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"onEndReloadClient","slug":"onendreloadclient","link":"#onendreloadclient","children":[]},{"level":3,"title":"onEndReloadServer","slug":"onendreloadserver","link":"#onendreloadserver","children":[]},{"level":3,"title":"onStartReloadClient","slug":"onstartreloadclient","link":"#onstartreloadclient","children":[]},{"level":3,"title":"onStartReloadServer","slug":"onstartreloadserver","link":"#onstartreloadserver","children":[]}]},{"level":2,"title":"Accessors","slug":"accessors-1","link":"#accessors-1","children":[{"level":3,"title":"animationGuid","slug":"animationguid","link":"#animationguid","children":[]},{"level":3,"title":"reloadDuration","slug":"reloadduration","link":"#reloadduration","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"hadAnimationGuid","slug":"hadanimationguid","link":"#hadanimationguid","children":[]}]}],"relativePath":"classes/Gameplay.Gameplay.HotWeaponReloadComponent.md"}'),r={name:"classes/Gameplay.Gameplay.HotWeaponReloadComponent.md"},o=n('<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/Gameplay.html">Gameplay</a> / <a href="./../modules/Gameplay.Gameplay.html">Gameplay</a> / HotWeaponReloadComponent</p><h1 id="class-hotweaponreloadcomponent" tabindex="-1">Class: HotWeaponReloadComponent <a class="header-anchor" href="#class-hotweaponreloadcomponent" aria-hidden="true">#</a></h1><p><a href="./../modules/Gameplay.html">Gameplay</a>.<a href="./../modules/Gameplay.Gameplay.html">Gameplay</a>.HotWeaponReloadComponent</p><p><strong><code>Description</code></strong></p><p>热武器换弹组件</p><p><strong><code>Network Status</code></strong></p><p>usage: 双端</p><p><strong><code>Author</code></strong></p><p>jun.zhang</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.HotWeaponReloadComponent.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.HotWeaponReloadComponent.html#onendreloadclient">onEndReloadClient</a></li><li><a href="./Gameplay.Gameplay.HotWeaponReloadComponent.html#onendreloadserver">onEndReloadServer</a></li><li><a href="./Gameplay.Gameplay.HotWeaponReloadComponent.html#onstartreloadclient">onStartReloadClient</a></li><li><a href="./Gameplay.Gameplay.HotWeaponReloadComponent.html#onstartreloadserver">onStartReloadServer</a></li></ul><h3 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.HotWeaponReloadComponent.html#animationguid">animationGuid</a></li><li><a href="./Gameplay.Gameplay.HotWeaponReloadComponent.html#reloadduration">reloadDuration</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.HotWeaponReloadComponent.html#hadanimationguid">hadAnimationGuid</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new HotWeaponReloadComponent</strong>()</p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="onendreloadclient" tabindex="-1">onEndReloadClient <a class="header-anchor" href="#onendreloadclient" aria-hidden="true">#</a></h3><p>• <strong>onEndReloadClient</strong>: <a href="./../interfaces/Type.Type.MulticastDelegateInterface.html"><code>MulticastDelegateInterface</code></a>&lt;() =&gt; <code>void</code>&gt;</p><p><strong><code>Description</code></strong></p><p>[客户端] 结束换弹时执行绑定函数</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:11889</p><hr><h3 id="onendreloadserver" tabindex="-1">onEndReloadServer <a class="header-anchor" href="#onendreloadserver" aria-hidden="true">#</a></h3><p>• <strong>onEndReloadServer</strong>: <a href="./../interfaces/Type.Type.MulticastDelegateInterface.html"><code>MulticastDelegateInterface</code></a>&lt;() =&gt; <code>void</code>&gt;</p><p><strong><code>Description</code></strong></p><p>[服务端] 结束换弹时执行绑定函数</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:11885</p><hr><h3 id="onstartreloadclient" tabindex="-1">onStartReloadClient <a class="header-anchor" href="#onstartreloadclient" aria-hidden="true">#</a></h3><p>• <strong>onStartReloadClient</strong>: <a href="./../interfaces/Type.Type.MulticastDelegateInterface.html"><code>MulticastDelegateInterface</code></a>&lt;() =&gt; <code>void</code>&gt;</p><p><strong><code>Description</code></strong></p><p>[客户端] 开始换弹时执行绑定函数</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:11881</p><hr><h3 id="onstartreloadserver" tabindex="-1">onStartReloadServer <a class="header-anchor" href="#onstartreloadserver" aria-hidden="true">#</a></h3><p>• <strong>onStartReloadServer</strong>: <a href="./../interfaces/Type.Type.MulticastDelegateInterface.html"><code>MulticastDelegateInterface</code></a>&lt;() =&gt; <code>void</code>&gt;</p><p><strong><code>Description</code></strong></p><p>[服务端] 开始换弹时执行绑定函数</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:11877</p><h2 id="accessors-1" tabindex="-1">Accessors <a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a></h2><h3 id="animationguid" tabindex="-1">animationGuid <a class="header-anchor" href="#animationguid" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>animationGuid</strong>(): <code>string</code></p><p><strong><code>Description</code></strong></p><p>获取绑定的动画 GUID</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>string</code></p><p>绑定的动画 GUID</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:11901</p><p>• <code>set</code> <strong>animationGuid</strong>(<code>guid</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置动画 GUID</p><p><strong><code>Effect</code></strong></p><p>客户端调用自动广播</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage: 需要设置的蒙太奇动画 guid</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:11895</p><hr><h3 id="reloadduration" tabindex="-1">reloadDuration <a class="header-anchor" href="#reloadduration" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>reloadDuration</strong>(): <code>number</code></p><p><strong><code>Description</code></strong></p><p>获取换弹时间</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>number</code></p><p>是换弹时间</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:11920</p><p>• <code>set</code> <strong>reloadDuration</strong>(<code>time</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置换弹时间</p><p><strong><code>Effect</code></strong></p><p>客户端调用自动广播</p><p><strong><code>Precautions</code></strong></p><p>装备热武器前仅服务器调用，装备后双端都可调用</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>time</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage: 新换弹时间</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:11914</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="hadanimationguid" tabindex="-1">hadAnimationGuid <a class="header-anchor" href="#hadanimationguid" aria-hidden="true">#</a></h3><p>▸ <strong>hadAnimationGuid</strong>(): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>是否有动画 GUID</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>是否有动画 GUID</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:11907</p>',109),d=[o];function i(l,s,c,h,p,u){return t(),a("div",null,d)}const g=e(r,[["render",i]]);export{f as __pageData,g as default};
