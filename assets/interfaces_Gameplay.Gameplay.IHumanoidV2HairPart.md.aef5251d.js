import{_ as e,c as t,o as a,a as r}from"./app.8e21f956.js";const m=JSON.parse('{"title":"Interface: IHumanoidV2HairPart","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Implemented by","slug":"implemented-by","link":"#implemented-by","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"getColor","slug":"getcolor","link":"#getcolor","children":[]},{"level":3,"title":"getGradientColor","slug":"getgradientcolor","link":"#getgradientcolor","children":[]},{"level":3,"title":"getGradientIntensity","slug":"getgradientintensity","link":"#getgradientintensity","children":[]},{"level":3,"title":"getHighlightColor","slug":"gethighlightcolor","link":"#gethighlightcolor","children":[]},{"level":3,"title":"getHighlightMask","slug":"gethighlightmask","link":"#gethighlightmask","children":[]},{"level":3,"title":"getMesh","slug":"getmesh","link":"#getmesh","children":[]},{"level":3,"title":"setColor","slug":"setcolor","link":"#setcolor","children":[]},{"level":3,"title":"setGradientColor","slug":"setgradientcolor","link":"#setgradientcolor","children":[]},{"level":3,"title":"setGradientIntensity","slug":"setgradientintensity","link":"#setgradientintensity","children":[]},{"level":3,"title":"setHighlightColor","slug":"sethighlightcolor","link":"#sethighlightcolor","children":[]},{"level":3,"title":"setHighlightMask","slug":"sethighlightmask","link":"#sethighlightmask","children":[]},{"level":3,"title":"setMesh","slug":"setmesh","link":"#setmesh","children":[]}]}],"relativePath":"interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md"}'),d={name:"interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md"},i=r('<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/Gameplay.html">Gameplay</a> / <a href="./../modules/Gameplay.Gameplay.html">Gameplay</a> / IHumanoidV2HairPart</p><h1 id="interface-ihumanoidv2hairpart" tabindex="-1">Interface: IHumanoidV2HairPart <a class="header-anchor" href="#interface-ihumanoidv2hairpart" aria-hidden="true">#</a></h1><p><a href="./../modules/Gameplay.html">Gameplay</a>.<a href="./../modules/Gameplay.Gameplay.html">Gameplay</a>.IHumanoidV2HairPart</p><p><strong><code>Description</code></strong></p><p>人形对象 V2 部位</p><p><strong><code>Author</code></strong></p><p>guang.deng</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><a href="./Gameplay.Gameplay.IPart.html"><code>IPart</code></a></p><p>↳ <strong><code>IHumanoidV2HairPart</code></strong></p></li></ul><h2 id="implemented-by" tabindex="-1">Implemented by <a class="header-anchor" href="#implemented-by" aria-hidden="true">#</a></h2><ul><li><a href="./../classes/Gameplay.Gameplay.HumanoidV2BehindHairPart.html"><code>HumanoidV2BehindHairPart</code></a></li><li><a href="./../classes/Gameplay.Gameplay.HumanoidV2FrontHairPart.html"><code>HumanoidV2FrontHairPart</code></a></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#getcolor">getColor</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#getgradientcolor">getGradientColor</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#getgradientintensity">getGradientIntensity</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#gethighlightcolor">getHighlightColor</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#gethighlightmask">getHighlightMask</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#getmesh">getMesh</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#setcolor">setColor</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#setgradientcolor">setGradientColor</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#setgradientintensity">setGradientIntensity</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#sethighlightcolor">setHighlightColor</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#sethighlightmask">setHighlightMask</a></li><li><a href="./Gameplay.Gameplay.IHumanoidV2HairPart.html#setmesh">setMesh</a></li></ul><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="getcolor" tabindex="-1">getColor <a class="header-anchor" href="#getcolor" aria-hidden="true">#</a></h3><p>▸ <strong>getColor</strong>(): <a href="./../classes/Type.Type.LinearColor.html"><code>LinearColor</code></a></p><p><strong><code>Description</code></strong></p><p>获取头发颜色</p><p><strong><code>Effect</code></strong></p><p>客户端生效</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./../classes/Type.Type.LinearColor.html"><code>LinearColor</code></a></p><p>颜色</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3127</p><hr><h3 id="getgradientcolor" tabindex="-1">getGradientColor <a class="header-anchor" href="#getgradientcolor" aria-hidden="true">#</a></h3><p>▸ <strong>getGradientColor</strong>(): <a href="./../classes/Type.Type.LinearColor.html"><code>LinearColor</code></a></p><p><strong><code>Description</code></strong></p><p>获取头发渐变染色</p><p><strong><code>Effect</code></strong></p><p>客户端生效</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./../classes/Type.Type.LinearColor.html"><code>LinearColor</code></a></p><p>颜色</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3142</p><hr><h3 id="getgradientintensity" tabindex="-1">getGradientIntensity <a class="header-anchor" href="#getgradientintensity" aria-hidden="true">#</a></h3><p>▸ <strong>getGradientIntensity</strong>(): <code>number</code></p><p><strong><code>Description</code></strong></p><p>获取头发渐变区域</p><p><strong><code>Effect</code></strong></p><p>客户端生效</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>number</code></p><p>强度</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3157</p><hr><h3 id="gethighlightcolor" tabindex="-1">getHighlightColor <a class="header-anchor" href="#gethighlightcolor" aria-hidden="true">#</a></h3><p>▸ <strong>getHighlightColor</strong>(): <a href="./../classes/Type.Type.LinearColor.html"><code>LinearColor</code></a></p><p><strong><code>Description</code></strong></p><p>获取头发高光颜色</p><p><strong><code>Effect</code></strong></p><p>客户端生效</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><a href="./../classes/Type.Type.LinearColor.html"><code>LinearColor</code></a></p><p>颜色</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3187</p><hr><h3 id="gethighlightmask" tabindex="-1">getHighlightMask <a class="header-anchor" href="#gethighlightmask" aria-hidden="true">#</a></h3><p>▸ <strong>getHighlightMask</strong>(): <code>string</code></p><p><strong><code>Description</code></strong></p><p>获取头发高光形状</p><p><strong><code>Effect</code></strong></p><p>客户端生效</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>string</code></p><p>guid</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3172</p><hr><h3 id="getmesh" tabindex="-1">getMesh <a class="header-anchor" href="#getmesh" aria-hidden="true">#</a></h3><p>▸ <strong>getMesh</strong>(): <code>string</code></p><p><strong><code>Description</code></strong></p><p>获取部位模型</p><p><strong><code>Effect</code></strong></p><p>双端</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>string</code></p><p>模型 Guid</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a></h4><p><a href="./Gameplay.Gameplay.IPart.html">IPart</a>.<a href="./Gameplay.Gameplay.IPart.html#getmesh">getMesh</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2784</p><hr><h3 id="setcolor" tabindex="-1">setColor <a class="header-anchor" href="#setcolor" aria-hidden="true">#</a></h3><p>▸ <strong>setColor</strong>(<code>color</code>, <code>sync</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置头发颜色</p><p><strong><code>Effect</code></strong></p><p>sync = false:客户端; sync = true:双端</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><a href="./../classes/Type.Type.LinearColor.html"><code>LinearColor</code></a></td><td style="text-align:left;">usage:颜色</td></tr><tr><td style="text-align:left;"><code>sync</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:true 同步; false 不同步</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3121</p><hr><h3 id="setgradientcolor" tabindex="-1">setGradientColor <a class="header-anchor" href="#setgradientcolor" aria-hidden="true">#</a></h3><p>▸ <strong>setGradientColor</strong>(<code>color</code>, <code>sync</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置头发渐变染色</p><p><strong><code>Effect</code></strong></p><p>sync = false:客户端; sync = true:双端</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><a href="./../classes/Type.Type.LinearColor.html"><code>LinearColor</code></a></td><td style="text-align:left;">usage:颜色</td></tr><tr><td style="text-align:left;"><code>sync</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:true 同步; false 不同步</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3136</p><hr><h3 id="setgradientintensity" tabindex="-1">setGradientIntensity <a class="header-anchor" href="#setgradientintensity" aria-hidden="true">#</a></h3><p>▸ <strong>setGradientIntensity</strong>(<code>intensity</code>, <code>sync</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置头发渐变区域</p><p><strong><code>Effect</code></strong></p><p>sync = false:客户端; sync = true:双端</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>intensity</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">usage:强度</td></tr><tr><td style="text-align:left;"><code>sync</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:true 同步; false 不同步</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3151</p><hr><h3 id="sethighlightcolor" tabindex="-1">setHighlightColor <a class="header-anchor" href="#sethighlightcolor" aria-hidden="true">#</a></h3><p>▸ <strong>setHighlightColor</strong>(<code>color</code>, <code>sync</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置头发高光颜色</p><p><strong><code>Effect</code></strong></p><p>sync = false:客户端; sync = true:双端</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><a href="./../classes/Type.Type.LinearColor.html"><code>LinearColor</code></a></td><td style="text-align:left;">usage:颜色</td></tr><tr><td style="text-align:left;"><code>sync</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:true 同步; false 不同步</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3181</p><hr><h3 id="sethighlightmask" tabindex="-1">setHighlightMask <a class="header-anchor" href="#sethighlightmask" aria-hidden="true">#</a></h3><p>▸ <strong>setHighlightMask</strong>(<code>guid</code>, <code>sync</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置头发高光形状</p><p><strong><code>Effect</code></strong></p><p>sync = false:客户端; sync = true:双端</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:贴图 Guid</td></tr><tr><td style="text-align:left;"><code>sync</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:true 同步; false 不同步</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:3166</p><hr><h3 id="setmesh" tabindex="-1">setMesh <a class="header-anchor" href="#setmesh" aria-hidden="true">#</a></h3><p>▸ <strong>setMesh</strong>(<code>guid</code>, <code>sync</code>): <code>void</code></p><p><strong><code>Description</code></strong></p><p>设置部位模型</p><p><strong><code>Precautions</code></strong></p><p>如果模型 Guid 没有预加载，则 v2 本地设置时异步的</p><p><strong><code>Effect</code></strong></p><p>sync = false:客户端; sync = true:双端</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guid</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">usage:模型 Guid</td></tr><tr><td style="text-align:left;"><code>sync</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:true 同步; false 不同步</td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a></h4><p><a href="./Gameplay.Gameplay.IPart.html">IPart</a>.<a href="./Gameplay.Gameplay.IPart.html#setmesh">setMesh</a></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:2778</p>',170),n=[i];function l(o,h,s,c,p,g){return a(),t("div",null,n)}const y=e(d,[["render",l]]);export{m as __pageData,y as default};
