import{_ as e,c as t,o as a,a as d}from"./app.8e21f956.js";const g=JSON.parse('{"title":"Class: TabGroup<T>","description":"","frontmatter":{},"headers":[{"level":2,"title":"Type parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Accessors","slug":"accessors","link":"#accessors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Accessors","slug":"accessors-1","link":"#accessors-1","children":[{"level":3,"title":"currentIndex","slug":"currentindex","link":"#currentindex","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"init","slug":"init","link":"#init","children":[]},{"level":3,"title":"select","slug":"select","link":"#select","children":[]},{"level":3,"title":"setSelectableChecker","slug":"setselectablechecker","link":"#setselectablechecker","children":[]}]}],"relativePath":"classes/UI.UI.TabGroup.md"}'),r={name:"classes/UI.UI.TabGroup.md"},s=d('<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/UI.html">UI</a> / <a href="./../modules/UI.UI.html">UI</a> / TabGroup</p><h1 id="class-tabgroup-t" tabindex="-1">Class: TabGroup&lt;T&gt; <a class="header-anchor" href="#class-tabgroup-t" aria-hidden="true">#</a></h1><p><a href="./../modules/UI.html">UI</a>.<a href="./../modules/UI.UI.html">UI</a>.TabGroup</p><p><strong><code>Author</code></strong></p><p>wei.yang</p><p><strong><code>Description</code></strong></p><p>选项卡组</p><p><strong><code>Network Status</code></strong></p><p>usage:客户端</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>Object</code></td></tr></tbody></table><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./UI.UI.TabGroup.html#constructor">constructor</a></li></ul><h3 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-hidden="true">#</a></h3><ul><li><a href="./UI.UI.TabGroup.html#currentindex">currentIndex</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./UI.UI.TabGroup.html#init">init</a></li><li><a href="./UI.UI.TabGroup.html#select">select</a></li><li><a href="./UI.UI.TabGroup.html#setselectablechecker">setSelectableChecker</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new TabGroup</strong>&lt;<code>T</code>&gt;(<code>tabArr</code>)</p><p>构造</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>Object</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tabArr</code></td><td style="text-align:left;"><code>T</code>[]</td><td style="text-align:left;">usage:标签的按钮数组</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>UI/index.d.ts:2245</p><h2 id="accessors-1" tabindex="-1">Accessors <a class="header-anchor" href="#accessors-1" aria-hidden="true">#</a></h2><h3 id="currentindex" tabindex="-1">currentIndex <a class="header-anchor" href="#currentindex" aria-hidden="true">#</a></h3><p>• <code>get</code> <strong>currentIndex</strong>(): <code>number</code></p><p><strong><code>Description</code></strong></p><p>当前选择的标签索引</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>number</code></p><p>当前标签</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>UI/index.d.ts:2283</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="init" tabindex="-1">init <a class="header-anchor" href="#init" aria-hidden="true">#</a></h3><p>▸ <strong>init</strong>(<code>tabStyleHandle</code>, <code>selectCallBack</code>, <code>thisArg</code>, <code>defaultIndex?</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>初始化</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tabStyleHandle</code></td><td style="text-align:left;">(<code>btn</code>: <code>T</code>, <code>isSelect</code>: <code>boolean</code>) =&gt; <code>void</code></td><td style="text-align:left;">usage:设置标签的样式方法（方法参数：按钮）</td></tr><tr><td style="text-align:left;"><code>selectCallBack</code></td><td style="text-align:left;">(<code>index</code>: <code>number</code>) =&gt; <code>void</code></td><td style="text-align:left;">usage:选择标签的回调方法</td></tr><tr><td style="text-align:left;"><code>thisArg</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">usage:域</td></tr><tr><td style="text-align:left;"><code>defaultIndex?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage:默认选择的标签索引 default:0</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>UI/index.d.ts:2254</p><hr><h3 id="select" tabindex="-1">select <a class="header-anchor" href="#select" aria-hidden="true">#</a></h3><p>▸ <strong>select</strong>(<code>index</code>, <code>ignoreSame?</code>): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>设置当前的标签</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage:标签索引</td></tr><tr><td style="text-align:left;"><code>ignoreSame?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:是否忽略相同索引 default:true</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>是否成功</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>UI/index.d.ts:2277</p><hr><h3 id="setselectablechecker" tabindex="-1">setSelectableChecker <a class="header-anchor" href="#setselectablechecker" aria-hidden="true">#</a></h3><p>▸ <strong>setSelectableChecker</strong>(<code>selectChecker</code>, <code>thisArg</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置该标签是否可以切换的检测方法</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>selectChecker</code></td><td style="text-align:left;">(<code>index</code>: <code>number</code>) =&gt; <code>boolean</code></td><td style="text-align:left;">usage:判断方法</td></tr><tr><td style="text-align:left;"><code>thisArg</code></td><td style="text-align:left;"><code>any</code></td><td style="text-align:left;">usage:域</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>UI/index.d.ts:2266</p>',80),l=[s];function n(c,o,i,h,p,u){return a(),t("div",null,l)}const b=e(r,[["render",n]]);export{g as __pageData,b as default};
