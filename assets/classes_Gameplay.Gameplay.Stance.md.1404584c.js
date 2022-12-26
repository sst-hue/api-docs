import{_ as e,c as a,o as t,a as r}from"./app.8e21f956.js";const y=JSON.parse('{"title":"Class: Stance","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"play","slug":"play","link":"#play","children":[]},{"level":3,"title":"playInternal","slug":"playinternal","link":"#playinternal","children":[]},{"level":3,"title":"stop","slug":"stop","link":"#stop","children":[]},{"level":3,"title":"stopInternal","slug":"stopinternal","link":"#stopinternal","children":[]}]}],"relativePath":"classes/Gameplay.Gameplay.Stance.md"}'),n={name:"classes/Gameplay.Gameplay.Stance.md"},o=r('<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/Gameplay.html">Gameplay</a> / <a href="./../modules/Gameplay.Gameplay.html">Gameplay</a> / Stance</p><h1 id="class-stance" tabindex="-1">Class: Stance <a class="header-anchor" href="#class-stance" aria-hidden="true">#</a></h1><p><a href="./../modules/Gameplay.html">Gameplay</a>.<a href="./../modules/Gameplay.Gameplay.html">Gameplay</a>.Stance</p><p><strong><code>Author</code></strong></p><p>yuchen.ren</p><p><strong><code>Description</code></strong></p><p>姿态</p><p><strong><code>Network Status</code></strong></p><p>usage:双端</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><strong><code>Stance</code></strong></p><p>↳ <a href="./Gameplay.Gameplay.SubStance.html"><code>SubStance</code></a></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.Stance.html#constructor">constructor</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Gameplay.Gameplay.Stance.html#play">play</a></li><li><a href="./Gameplay.Gameplay.Stance.html#playinternal">playInternal</a></li><li><a href="./Gameplay.Gameplay.Stance.html#stop">stop</a></li><li><a href="./Gameplay.Gameplay.Stance.html#stopinternal">stopInternal</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new Stance</strong>(<code>character</code>, <code>sync</code>)</p><p><strong><code>Description</code></strong></p><p>构造函数</p><p><strong><code>Effect</code></strong></p><p>双端函数</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>character</code></td><td style="text-align:left;"><a href="./Gameplay.Gameplay.CharacterBase.html"><code>CharacterBase</code></a></td><td style="text-align:left;">usage:角色</td></tr><tr><td style="text-align:left;"><code>sync</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">usage:是否自动同步</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:1617</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="play" tabindex="-1">play <a class="header-anchor" href="#play" aria-hidden="true">#</a></h3><p>▸ <strong>play</strong>(): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>播放这个姿态对象, 并返回执行结果</p><p><strong><code>Effect</code></strong></p><p>可选同步</p><p><strong><code>Precautions</code></strong></p><p>这个操作是否会自动同步多端, 取决于调用 Character.loadStance()时传入的 sync 参数. 返回的执行结果, 在不自动同步时多数情况下可靠; 在自动同步时完全不可靠, 总是会返回 true, 因为无法判断其他端的执行情况</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>是否执行成功</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:1626</p><hr><h3 id="playinternal" tabindex="-1">playInternal <a class="header-anchor" href="#playinternal" aria-hidden="true">#</a></h3><p>▸ <code>Protected</code> <strong>playInternal</strong>(): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>播放姿态的内部实现</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>是否执行成功</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:1632</p><hr><h3 id="stop" tabindex="-1">stop <a class="header-anchor" href="#stop" aria-hidden="true">#</a></h3><p>▸ <strong>stop</strong>(): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>停止这个姿态对象, 并返回执行结果</p><p><strong><code>Effect</code></strong></p><p>可选同步</p><p><strong><code>Precautions</code></strong></p><p>这个操作是否会自动同步多端, 取决于调用 Character.loadStance()时传入的 sync 参数. 返回的执行结果, 在不自动同步时多数情况下可靠; 在自动同步时完全不可靠, 总是会返回 true, 因为无法判断其他端的执行情况</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>是否执行成功</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:1641</p><hr><h3 id="stopinternal" tabindex="-1">stopInternal <a class="header-anchor" href="#stopinternal" aria-hidden="true">#</a></h3><p>▸ <strong>stopInternal</strong>(): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>停止姿态的内部实现</p><p><strong><code>Effect</code></strong></p><p>调用端生效</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>是否执行成功</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>Gameplay/index.d.ts:1647</p>',79),d=[o];function l(s,c,i,h,p,u){return t(),a("div",null,d)}const m=e(n,[["render",l]]);export{y as __pageData,m as default};
