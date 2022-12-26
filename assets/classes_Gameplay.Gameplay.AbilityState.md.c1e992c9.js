import{_ as e,c as t,o as a,a as r}from"./app.8e21f956.js";const m=JSON.parse('{"title":"Class: AbilityState","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Accessors","slug":"accessors","link":"#accessors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Accessors","slug":"accessors-1","link":"#accessors-1","children":[{"level":3,"title":"animation","slug":"animation","link":"#animation","children":[]},{"level":3,"title":"duration","slug":"duration","link":"#duration","children":[]},{"level":3,"title":"executeTime","slug":"executetime","link":"#executetime","children":[]},{"level":3,"title":"loop","slug":"loop","link":"#loop","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"addControlAbility","slug":"addcontrolability","link":"#addcontrolability","children":[]},{"level":3,"title":"cancelControlAbility","slug":"cancelcontrolability","link":"#cancelcontrolability","children":[]},{"level":3,"title":"enableJump","slug":"enablejump","link":"#enablejump","children":[]},{"level":3,"title":"enableMove","slug":"enablemove","link":"#enablemove","children":[]},{"level":3,"title":"enableTurn","slug":"enableturn","link":"#enableturn","children":[]}]}],"relativePath":"classes/Gameplay.Gameplay.AbilityState.md"}'),d={name:"classes/Gameplay.Gameplay.AbilityState.md"},n=r('<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/Gameplay.html">Gameplay</a> / <a href="./../modules/Gameplay.Gameplay.html">Gameplay</a> / AbilityState</p><h1 id="class-abilitystate" tabindex="-1">Class: AbilityState <a class="header-anchor" href="#class-abilitystate" aria-hidden="true">#</a></h1><p><a href="./../modules/Gameplay.html">Gameplay</a>.<a href="./../modules/Gameplay.Gameplay.html">Gameplay</a>.AbilityState</p><p><strong><code>Author</code></strong></p><p>baoqiang.han</p><p><strong><code>Description</code></strong></p><p>技能状态</p><p><strong><code>Network Status</code></strong></p><p>usage:双端</p><p><strong><code>Precautions</code></strong></p><p>服务端运行，多数情况客户端运行会自动同步至服务端</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.AbilityState.html#constructor">constructor</a></li></ul><h3 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.AbilityState.html#animation">animation</a></li><li><a href="./Gameplay.Gameplay.AbilityState.html#duration">duration</a></li><li><a href="./Gameplay.Gameplay.AbilityState.html#executetime">executeTime</a></li><li><a href="./Gameplay.Gameplay.AbilityState.html#loop">loop</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.AbilityState.html#addcontrolability">addControlAbility</a></li><li><a href="./Gameplay.Gameplay.AbilityState.html#cancelcontrolability">cancelControlAbility</a></li><li><a href="./Gameplay.Gameplay.AbilityState.html#enablejump">enableJump</a></li><li><a href="./Gameplay.Gameplay.AbilityState.html#enablemove">enableMove</a></li><li><a href="./Gameplay.Gameplay.AbilityState.html#enableturn">enableTurn</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new AbilityState</strong>()</p><h2 id="accessors-1" tabindex="-1">Accessors <a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a></h2><h3 id="animation" tabindex="-1">animation <a class="header-anchor" href="#animation" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>animation</strong>(): <code>string</code></p><p><strong><code>Description</code></strong></p><p>获取动画资源</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>string</code></p><p>资源 GUID</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8330</p><p>• <code>set</code> <strong>animation</strong>(<code>AnimGuid</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置动画资源</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>AnimGuid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:资源 GUID</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8336</p><hr><h3 id="duration" tabindex="-1">duration <a class="header-anchor" href="#duration" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>duration</strong>(): <code>number</code></p><p><strong><code>Description</code></strong></p><p>获取释放状态当前执行时间</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>number</code></p><p>获取释放状态当前执行时间</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8298</p><hr><h3 id="executetime" tabindex="-1">executeTime <a class="header-anchor" href="#executetime" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>executeTime</strong>(): <code>number</code></p><p><strong><code>Description</code></strong></p><p>获取释放状态可执行总时长时间</p><p><strong><code>Precautions</code></strong></p><p>状态执行的时间，小于 0 为无限（根据 Cell 耗时最长的来确定），否则按配置时间进行结束</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>number</code></p><p>获取释放状态可执行总时长时间</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8305</p><p>• <code>set</code> <strong>executeTime</strong>(<code>Time</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置释放状态可执行总时长时间</p><p><strong><code>Precautions</code></strong></p><p>状态执行的时间，小于 0 为无限（根据 Cell 耗时最长的来确定），否则按配置时间进行结束</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Time</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage:设置释放状态可执行总时长时间</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8312</p><hr><h3 id="loop" tabindex="-1">loop <a class="header-anchor" href="#loop" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>loop</strong>(): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>获取释放状态是否可循环 isLoop</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>true 或 false</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8318</p><p>• <code>set</code> <strong>loop</strong>(<code>LoopState</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置释放状态是否循环</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>LoopState</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:true 或 false</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8324</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="addcontrolability" tabindex="-1">addControlAbility <a class="header-anchor" href="#addcontrolability" aria-hidden="true">#</a></h3><p>▸ <strong>addControlAbility</strong>(<code>ControlType</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>添加释放状态的控制性</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ControlType</code></td><td style="text-align:left;"><a href="./../enums/Gameplay.Gameplay.AbilityStateControlType.html"><code>AbilityStateControlType</code></a></td><td style="text-align:left;">usage:技能状态控制枚举</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8342</p><hr><h3 id="cancelcontrolability" tabindex="-1">cancelControlAbility <a class="header-anchor" href="#cancelcontrolability" aria-hidden="true">#</a></h3><p>▸ <strong>cancelControlAbility</strong>(<code>ControlType</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>取消释放状态的控制性</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ControlType</code></td><td style="text-align:left;"><a href="./../enums/Gameplay.Gameplay.AbilityStateControlType.html"><code>AbilityStateControlType</code></a></td><td style="text-align:left;">usage:技能状态控制枚举</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8348</p><hr><h3 id="enablejump" tabindex="-1">enableJump <a class="header-anchor" href="#enablejump" aria-hidden="true">#</a></h3><p>▸ <strong>enableJump</strong>(): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>获取对象是否可跳跃</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>true 或 false</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8366</p><hr><h3 id="enablemove" tabindex="-1">enableMove <a class="header-anchor" href="#enablemove" aria-hidden="true">#</a></h3><p>▸ <strong>enableMove</strong>(): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>获取对象是否可移动</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>true 或 false</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8354</p><hr><h3 id="enableturn" tabindex="-1">enableTurn <a class="header-anchor" href="#enableturn" aria-hidden="true">#</a></h3><p>▸ <strong>enableTurn</strong>(): <a href="./../enums/Gameplay.Gameplay.MoveControlMode.html"><code>MoveControlMode</code></a></p><p><strong><code>Description</code></strong></p><p>获取对象是否可转向</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-hidden="true">#</a></h4><p><a href="./../enums/Gameplay.Gameplay.MoveControlMode.html"><code>MoveControlMode</code></a></p><p>true 或 false</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:8360</p>',168),i=[n];function o(l,s,c,h,p,u){return a(),t("div",null,i)}const b=e(d,[["render",o]]);export{m as __pageData,b as default};
