import{_ as n,f as a,e as s,N as t}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"Cropper","description":"","frontmatter":{},"headers":[{"level":2,"title":"CropperImage","slug":"cropperimage"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":2,"title":"CropperAvatar","slug":"cropperavatar"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":3,"title":"Props","slug":"props-1"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"Methods","slug":"methods"}],"relativePath":"components/cropper.md","lastUpdated":1665727281751}',p={},o=t(`<h1 id="cropper"><a class="header-anchor" href="#cropper" aria-hidden="true">#</a> Cropper</h1><p>\u56FE\u7247\u88C1\u526A\u7EC4\u4EF6</p><h2 id="cropperimage"><a class="header-anchor" href="#cropperimage" aria-hidden="true">#</a> CropperImage</h2><p>\u56FE\u7247\u88C1\u526A\u7EC4\u4EF6</p><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CropperImage</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refCropper<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@cropend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCropend<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 40vw</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> CropperImage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Cropper&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> img <span class="token keyword">from</span> <span class="token string">&#39;/@/assets/images/header.jpg&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      CropperImage<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> cropperImg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">function</span> <span class="token function">handleCropend</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> imgBase64<span class="token punctuation">,</span> imgInfo <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        info<span class="token punctuation">.</span>value <span class="token operator">=</span> imgInfo<span class="token punctuation">;</span>
        cropperImg<span class="token punctuation">.</span>value <span class="token operator">=</span> imgBase64<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        img<span class="token punctuation">,</span>
        info<span class="token punctuation">,</span>
        cropperImg<span class="token punctuation">,</span>
        handleCropend<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>src</td><td><code>string</code></td><td>-</td><td>\u56FE\u7247\u6E90</td></tr><tr><td>alt</td><td><code>string</code></td><td>-</td><td>\u56FE\u7247 alt</td></tr><tr><td>circled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u5706\u5F62\u88C1\u526A\u6846</td></tr><tr><td>realTimePreview</td><td><code>boolean</code></td><td><code>true</code></td><td>\u5B9E\u65F6\u89E6\u53D1\u9884\u89C8</td></tr><tr><td>height</td><td><code>string</code></td><td><code>360px</code></td><td>\u9AD8\u5EA6</td></tr><tr><td>crossorigin</td><td><code>string</code></td><td>-</td><td>crossorigin</td></tr><tr><td>imageStyle</td><td><code>object</code></td><td>\`\`</td><td>\u56FE\u7247\u6837\u5F0F</td></tr><tr><td>options</td><td><code>object</code></td><td><code>DefaultOptions</code></td><td>corpperjs \u914D\u7F6E\u9879</td></tr></tbody></table><h4 id="defaultoptions"><a class="header-anchor" href="#defaultoptions" aria-hidden="true">#</a> DefaultOptions</h4><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  aspectRatio<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  zoomable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  zoomOnTouch<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  zoomOnWheel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  cropBoxMovable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  cropBoxResizable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  toggleDragModeOnDblclick<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  autoCrop<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  background<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  highlight<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  center<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  responsive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  restore<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  checkCrossOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  checkOrientation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  scalable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  modal<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  guides<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  movable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  rotatable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="cropperavatar"><a class="header-anchor" href="#cropperavatar" aria-hidden="true">#</a> CropperAvatar</h2><p>\u5934\u50CF\u88C1\u526A\u7EC4\u4EF6</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CropperAvatar</span> <span class="token attr-name">:uploadApi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadApi<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> CropperAvatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Cropper&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> uploadApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/api/sys/upload&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      CropperAvatar<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>width</td><td><code>string,number</code></td><td><code>200px</code></td><td>\u56FE\u7247\u6E90</td><td></td></tr><tr><td>uploadApi</td><td><code>({ file: Blob, name: string }) =&gt; Promise&lt;void&gt;</code></td><td>-</td><td>\u56FE\u7247\u4E0A\u4F20\u63A5\u53E3</td><td></td></tr><tr><td>value</td><td><code>String</code></td><td>-</td><td>\u5F53\u524D\u5934\u50CF\u5730\u5740(v-model)</td><td>2.5.3</td></tr><tr><td>showBtn</td><td><code>Boolean</code></td><td>true</td><td>\u662F\u5426\u663E\u793A\u6309\u94AE</td><td>2.5.3</td></tr><tr><td>btnText</td><td><code>String</code></td><td>-</td><td>\u6309\u94AE\u6587\u6848</td><td>2.5.3</td></tr><tr><td>btnProps</td><td><code>ButtonProps</code></td><td>-</td><td>\u6309\u94AE\u7684\u5176\u5B83\u5C5E\u6027</td><td>2.5.3</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td><code>value: String</code></td><td>\u5F53\u5934\u50CF\u4E0A\u4F20\u5B8C\u6210\u65F6\u89E6\u53D1</td><td>2.5.3</td></tr></tbody></table><h3 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u5B9A\u4E49</th><th>\u8BF4\u660E</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>openModal</td><td><code>()=&gt;void</code></td><td>\u6253\u5F00\u4E0A\u4F20Modal</td><td>2.5.3</td></tr><tr><td>closeModal</td><td><code>()=&gt;void</code></td><td>\u5173\u95ED\u4E0A\u4F20Modal</td><td>2.5.3</td></tr></tbody></table>`,20),e=[o];function c(l,r,u,d,i,k){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
