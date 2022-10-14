import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.147b70e9.js";const h='{"title":"Time","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/time.md","lastUpdated":1665727281751}',p={},e=t(`<h1 id="time"><a class="header-anchor" href="#time" aria-hidden="true">#</a> Time</h1><p>\u76F8\u5BF9\u65F6\u95F4\u7EC4\u4EF6</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Time</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Time <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Time&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Time <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> now <span class="token operator">-</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span>
        now<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>string,Date,number</code></td><td>-</td><td>-</td><td>\u65F6\u95F4\u503C</td></tr><tr><td>step</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>\u5237\u65B0\u65F6\u95F4</td></tr><tr><td>mode</td><td><code>string</code></td><td><code>relative</code></td><td>-</td><td>\u6A21\u5F0F\uFF0Cdate:\u65E5\u671F\uFF0Cdatetime:\u65F6\u95F4\u6233\uFF0Crelative:\u76F8\u5BF9\u65F6\u95F4</td></tr></tbody></table>`,6),o=[e];function c(u,l,i,k,r,d){return a(),s("div",null,o)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
