import{_ as n,c as s}from"./app.8a4997ff.js";const a={},p=s(`<h1 id="\u5F00\u53D1\u670D\u52A1\u5668-\u81EA\u52A8\u5316" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u670D\u52A1\u5668-\u81EA\u52A8\u5316" aria-hidden="true">#</a> \u5F00\u53D1\u670D\u52A1\u5668&amp;\u81EA\u52A8\u5316</h1><p>\u6BCF\u6B21\u5199\u5B8C\u4EE3\u7801\u90FD\u9700\u8981\u624B\u52A8\u8F93\u5165\u6307\u4EE4\u624D\u80FD\u7F16\u8BD1\u4EE3\u7801\uFF0C\u592A\u9EBB\u70E6\u4E86\uFF0C\u6211\u4EEC\u5E0C\u671B\u4E00\u5207\u81EA\u52A8\u5316</p><h2 id="_1-\u4E0B\u8F7D\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u5305" aria-hidden="true">#</a> 1. \u4E0B\u8F7D\u5305</h2><div class="language-text ext-text"><pre class="language-text"><code>npm i webpack-dev-server -D
</code></pre></div><h2 id="_2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E" aria-hidden="true">#</a> 2. \u914D\u7F6E</h2><ul><li>webpack.config.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ESLintWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;eslint-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;static/js/main.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06 js \u6587\u4EF6\u8F93\u51FA\u5230 static/js \u76EE\u5F55\u4E2D</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u52A8\u5C06\u4E0A\u6B21\u6253\u5305\u76EE\u5F55\u8D44\u6E90\u6E05\u7A7A</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u7528\u6765\u5339\u914D .css \u7ED3\u5C3E\u7684\u6587\u4EF6</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// use \u6570\u7EC4\u91CC\u9762 Loader \u6267\u884C\u987A\u5E8F\u662F\u4ECE\u53F3\u5230\u5DE6</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sass-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// \u5C0F\u4E8E10kb\u7684\u56FE\u7247\u4F1A\u88ABbase64\u5904\u7406</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5C06\u56FE\u7247\u6587\u4EF6\u8F93\u51FA\u5230 static/imgs \u76EE\u5F55\u4E2D</span>
          <span class="token comment">// \u5C06\u56FE\u7247\u6587\u4EF6\u547D\u540D [hash:8][ext][query]</span>
          <span class="token comment">// [hash:8]: hash\u503C\u53D68\u4F4D</span>
          <span class="token comment">// [ext]: \u4F7F\u7528\u4E4B\u524D\u7684\u6587\u4EF6\u6269\u5C55\u540D</span>
          <span class="token comment">// [query]: \u6DFB\u52A0\u4E4B\u524D\u7684query\u53C2\u6570</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(ttf|woff2?)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset/resource&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;static/media/[hash:8][ext][query]&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// \u6392\u9664node_modules\u4EE3\u7801\u4E0D\u7F16\u8BD1</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u6307\u5B9A\u68C0\u67E5\u6587\u4EF6\u7684\u6839\u76EE\u5F55</span>
      <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u4EE5 public/index.html \u4E3A\u6A21\u677F\u521B\u5EFA\u6587\u4EF6</span>
      <span class="token comment">// \u65B0\u7684html\u6587\u4EF6\u6709\u4E24\u4E2A\u7279\u70B9\uFF1A1. \u5185\u5BB9\u548C\u6E90\u6587\u4EF6\u4E00\u81F4 2. \u81EA\u52A8\u5F15\u5165\u6253\u5305\u751F\u6210\u7684js\u7B49\u8D44\u6E90</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;public/index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F00\u53D1\u670D\u52A1\u5668</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u52A8\u670D\u52A1\u5668\u57DF\u540D</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&quot;3000&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u52A8\u670D\u52A1\u5668\u7AEF\u53E3\u53F7</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><h2 id="_3-\u8FD0\u884C\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-\u8FD0\u884C\u6307\u4EE4" aria-hidden="true">#</a> 3. \u8FD0\u884C\u6307\u4EE4</h2><div class="language-text ext-text"><pre class="language-text"><code>npx webpack serve
</code></pre></div><p><strong>\u6CE8\u610F\u8FD0\u884C\u6307\u4EE4\u53D1\u751F\u4E86\u53D8\u5316</strong></p><p>\u5E76\u4E14\u5F53\u4F60\u4F7F\u7528\u5F00\u53D1\u670D\u52A1\u5668\u65F6\uFF0C\u6240\u6709\u4EE3\u7801\u90FD\u4F1A\u5728\u5185\u5B58\u4E2D\u7F16\u8BD1\u6253\u5305\uFF0C\u5E76\u4E0D\u4F1A\u8F93\u51FA\u5230 dist \u76EE\u5F55\u4E0B\u3002</p><p>\u5F00\u53D1\u65F6\u6211\u4EEC\u53EA\u5173\u5FC3\u4EE3\u7801\u80FD\u8FD0\u884C\uFF0C\u6709\u6548\u679C\u5373\u53EF\uFF0C\u81F3\u4E8E\u4EE3\u7801\u88AB\u7F16\u8BD1\u6210\u4EC0\u4E48\u6837\u5B50\uFF0C\u6211\u4EEC\u5E76\u4E0D\u9700\u8981\u77E5\u9053\u3002</p>`,12);function e(t,o){return p}var l=n(a,[["render",e],["__file","server.html.vue"]]);export{l as default};
