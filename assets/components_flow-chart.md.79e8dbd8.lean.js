import{_ as a,f as n,e as t,N as s}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"FlowChart","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/flow-chart.md","lastUpdated":1665727281751}',p={},o=s(`__VP_STATIC_START__<h1 id="flowchart"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> FlowChart</h1><p>\u6D41\u7A0B\u56FE\u7EC4\u4EF6\uFF0C\u57FA\u4E8E <code>didi/LogicFlow</code> \u7684\u7B80\u5355\u5C01\u88C5\u3002\u8BE6\u7EC6\u914D\u7F6E\u8BF7\u53C2\u8003\u6587\u6863 <a href="http://logic-flow.org/guide/start.html" target="_blank" rel="noopener noreferrer">FlowChart</a></p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlowChart</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> FlowChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/FlowChart&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> PageWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Page&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">import</span> demoData <span class="token keyword">from</span> <span class="token string">&#39;./dataTurbo.json&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> FlowChart<span class="token punctuation">,</span> PageWrapper <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> demoData <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>flowOptions</td><td><code>object</code></td><td>-</td><td>-</td><td>FlowCharts \u914D\u7F6E\u9879</td></tr><tr><td>data</td><td><code>object</code></td><td>-</td><td>-</td><td>\u6D41\u7A0B\u6570\u636E</td></tr><tr><td>toolbar</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>\u662F\u5426\u663E\u793A\u5DE5\u5177\u680F</td></tr><tr><td>patternItems</td><td><code>[]</code></td><td>-</td><td>-</td><td>\u5DE6\u4FA7\u62D6\u62FD\u5217\u8868\u6570\u636E</td></tr></tbody></table>__VP_STATIC_END__`,6),e=[o];function c(l,r,u,d,i,k){return t(),n("div",null,e)}var _=a(p,[["render",c]]);export{g as __pageData,_ as default};
