import{_ as s,c as l,b as e,d as a,e as o,a as t,o as p,r}from"./app.8e21f956.js";const F=JSON.parse('{"title":"AbilityStateControlType","description":"","frontmatter":{},"headers":[{"level":2,"title":"样例一","slug":"样例一","link":"#样例一","children":[]},{"level":2,"title":"Enumeration Members","slug":"enumeration-members","link":"#enumeration-members","children":[{"level":3,"title":"CanJump","slug":"canjump","link":"#canjump","children":[]},{"level":3,"title":"CanMove","slug":"canmove","link":"#canmove","children":[]},{"level":3,"title":"CanTurn","slug":"canturn","link":"#canturn","children":[]},{"level":3,"title":"None","slug":"none","link":"#none","children":[]}]},{"level":2,"title":"样例二","slug":"样例二","link":"#样例二","children":[]}],"relativePath":"test/enums.md"}'),c={name:"test/enums.md"},i={id:"abilitystatecontroltype",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#abilitystatecontroltype","aria-hidden":"true"},"#",-1),h=t(`<p><a href="./../modules/Gameplay.html">Gameplay</a>.<a href="./../modules/Gameplay.Gameplay.html">Gameplay</a>.AbilityStateControlType</p><h2 id="样例一" tabindex="-1">样例一 <a class="header-anchor" href="#样例一" aria-hidden="true">#</a></h2><p>技能状态控制枚举</p><h2 id="enumeration-members" tabindex="-1">Enumeration Members <a class="header-anchor" href="#enumeration-members" aria-hidden="true">#</a></h2><h3 id="canjump" tabindex="-1">CanJump <a class="header-anchor" href="#canjump" aria-hidden="true">#</a></h3><p>• <strong>CanJump</strong> = <code>2</code></p><p>可跳跃</p><hr><h3 id="canmove" tabindex="-1">CanMove <a class="header-anchor" href="#canmove" aria-hidden="true">#</a></h3><p>• <strong>CanMove</strong> = <code>1</code></p><p>可移动</p><hr><h3 id="canturn" tabindex="-1">CanTurn <a class="header-anchor" href="#canturn" aria-hidden="true">#</a></h3><p>• <strong>CanTurn</strong> = <code>4</code></p><p>可转向</p><hr><h3 id="none" tabindex="-1">None <a class="header-anchor" href="#none" aria-hidden="true">#</a></h3><p>• <strong>None</strong> = <code>0</code></p><p>默认值</p><h2 id="样例二" tabindex="-1">样例二 <a class="header-anchor" href="#样例二" aria-hidden="true">#</a></h2><p>技能状态控制枚举</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AbilityStateControlType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/** 默认值 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        None </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/** 可移动 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        CanMove </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/** 可跳跃 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        CanJump </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/** 可转向 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        CanTurn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"></span></code></pre></div>`,22);function C(y,m,u,A,D,_){const n=r("Badge");return p(),l("div",null,[e("h1",i,[a("AbilityStateControlType "),o(n,{type:"tip",text:"Enumeration"}),a(),d]),h])}const g=s(c,[["render",C]]);export{F as __pageData,g as default};
