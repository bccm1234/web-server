# web 服务器开发代码格式

## h5c3js 参考格式

### 文件命名规则

> 基础规则
>
> > 文件名称统一用小写的英文字母、数字和下划线的组合，其中不得包含汉字、空格和特殊字符.  
> > 命名原则的指导思想一是使得你自己和工作组的每一个成员能够方便的理解每一个文件的意义.
> >
> > 如果需要多个单词或者汉字拼音来命名文件、变量、类名等，采用驼峰命名法；例如：detailsCharge
> >
> > 建议单词和拼音尽量采用易懂的全拼写形式

> HTML 的命名原则
>
> > 引文件统一使用 index.html 文件名（小写）  
> > 各子页命名的原则首先应该以栏目名的英语翻译取单一单词为名称。  
> > 例如：
> >
> > 1. 关于我们\aboutUs
> > 2. 信息反馈\feedback
> > 3. 产品\product
> >
> > - 如果栏目名称多而复杂并不好以英文单词命名，则统一使用该栏目名称拼音或拼音的首字母表示.

> 图片的命名原则
>
> > 图片的名称分为头尾两部分，用下划线隔开，头部分表示此图片的大类性质，尾部表示此图片具体的一些性质。
> >
> > 例如：广告、标志、菜单、按钮等等。
> >
> > - 放置在页面顶部的广告、装饰图案等长方形的图片取名：banner
> > - 标志性的图片取名为：logo
> > - 在页面上位置不固定并且带有链接的小图片我们取名为 button
> > - 在页面上某一个位置连续出现，性质相同的链接栏目的图片我们取名：menu
> > - 装饰用的照片我们取名：pic
> > - 不带链接表示标题的图片我们取名：title
> > - 鼠标感应效果图片命名规范为"图片名+\_+on/off"
> >
> > 1. menu1_on.gif
> > 2. menu1_off.gif
> > 3. banner_sohu.gif
> > 4. banner_sina.gif
> > 5. menu_aboutus.gif
> > 6. menu_job.gif
> > 7. title_news.gif
> > 8. logo_police.gif
> > 9. logo_national.gif
> > 10. pic_people.jpg

> javascript 的命名原则
>
> > 命名要通俗易懂  
> > 例如：  
> > 广告条的 javascript 文件名为 advertising.js 
> > 弹出窗口的 javascript 文件名为 popUpBox.js

### 文件存放位置规范

> public
>
> > 使用 public 文件下面的资源，是不会被 webpack 处理的，它们会被直接复制到最终的打包目录下面，且必须使用绝对路径来引用这些文件。  
> > public 放不会变动的文件.

> src 目录结构
>
> > - assets: 放置静态资源，包括公共的 css 文件、 js 文件、iconfont 字体文件、img 图片文件 以及其他资源类文件。  
> >   之所以强调是公共的 css 文件，是因为要在组件的 css 标签里加入 ‘scoped‘ 标记，将其作用范围限制在此组件以及调用它的父级组件中，避免污染全局样式
> > - components: 放置通用模块组件。  
> >   项目里总会有一些复用的组件，例如弹出框、发送手机验证码、图片上传等，将它们作为通用组件，避免重复工作（放置views大页面下的后代组件；根据views中的大页面命名文件夹存放相应大页面下的后代组件）
> > - utils: 放置混合选项的文件。  
> >    具体来说，相当于是公用函数的集合，在组件中引用时，可以作用于组件而不必书写重复的方法
> > - views: 放置主要页面的组件。  
> >   例如登录页、用户信息页等。通常是这里的组件本身写入一些结构，再引入通用模块组件，形成完整的页面(项目中的每个大页面，例如登录页面、主页面、子页面)
> > - router: 放置路由设置文件，指定路由对应的组件.
> > - store: 放置 vuex 需要的状态关联文件，设置公共的 state、mutations 等.
> > - App.vue: 入口组件，views 里的组件会被插入此组件中，此组件再插入 index.html 文件里，形成单页面应用.
> > - main.js: 入口 js 文件，影响全局，作用是引入全局使用的库、公共的样式和方法、设置路由等.

### CSS 编码规范

> 目标是使 CSS 代码风格保持一致，容易被理解和被维护。

> 代码风格
>
> > - 缩进,使用 4 个空格为一个缩进层级
> > - 空格,选择器与{之间必须包含空格；属性名与之后的:之间不允许包含空格；列表型属性值书写在单行时，后必须跟一个空格。
> > - 选择器,当一个 rule 包含多个 selector 时，选择器共占一行；>\+\-等选择器的两边各保留一个空格。
> > - 属性,属性定义必须另起一行；属性定义后必须以分号结尾。

> 属性书写顺序
>
> > 同一 ruleset 下的属性在书写时，应按功能进行分组，并以 Formatting Model>Box Model > Typographic > Visual 的顺序书写，以提高代码的可读性。
> >
> > - Formatting Model: position/top/right/bottom/left/float/display/overflow
> > - Box Model: border/margin/padding/width/height
> > - Typographic: font/line-height/text-align/word-wrap
> > - Visual: background/color/transition/list-style

> > 另外，如果包含 content 属性，应该放在最前面

## Eslint 规则

### 使用了 eslint 推荐规则

> 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：

> - for-direction 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
> - getter-return 强制 getter 函数中出现 return 语句
> - no-async-promise-executor 禁止使用异步函数作为 Promise executor
> - no-compare-neg-zero 禁止与 -0 进行比较
> - no-cond-assign 禁止条件表达式中出现赋值操作符
> - no-constant-condition 禁止在条件中使用常量表达式
> - no-control-regex 禁止在正则表达式中使用控制字符
> - no-debugger 禁用 debugger
> - no-dupe-args 禁止 function 定义中出现重名参数
> - no-dupe-keys 禁止对象字面量中出现重复的 key
> - no-duplicate-case 禁止出现重复的 case 标签
> - no-empty 禁止出现空语句块
> - no-empty-character-class 禁止在正则表达式中使用空字符集
> - no-ex-assign 禁止对 catch 子句的参数重新赋值
> - no-extra-boolean-cast 禁止不必要的布尔转换
> - no-extra-semi 禁止不必要的分号
> - no-func-assign 禁止对 function 声明重新赋值
> - no-inner-declarations 禁止在嵌套的块中出现变量声明或 function 声明
> - no-invalid-regexp 禁止 RegExp 构造函数中存在无效的正则表达式字符串
> - no-irregular-whitespace 禁止不规则的空白
> - no-misleading-character-class 不允许在字符类语法中出现由多个代码点组成的字符
> - no-obj-calls 禁止把全局对象作为函数调用
> - no-prototype-builtins 禁止直接调用 Object.prototypes 的内置属性
> - no-regex-spaces 禁止正则表达式字面量中出现多个空格
> - no-sparse-arrays 禁用稀疏数组
> - no-unexpected-multiline 禁止出现令人困惑的多行表达式
> - no-unreachable 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
> - no-unsafe-finally 禁止在 finally 语句块中出现控制流语句
> - no-unsafe-negation 禁止对关系运算符的左操作数使用否定操作符
> - require-atomic-updates 禁止由于 await 或 yield 的使用而可能导致出现竞态条件的赋值
> - use-isnan 要求使用 isNaN() 检查 NaN
> - valid-typeof 强制 typeof 表达式与有效的字符串进行比较

> 这些规则是关于最佳实践的，帮助你避免一些问题
>
> - no-case-declarations 不允许在 case 子句中使用词法声明
> - no-empty-pattern 禁止使用空解构模式
> - no-fallthrough 禁止 case 语句落空
> - no-global-assign 禁止对原生对象或只读的全局对象进行赋值
> - no-octal 禁用八进制字面量
> - no-redeclare 禁止多次声明同一变量
> - no-self-assign 禁止自我赋值
> - no-unused-labels 禁用出现未使用过的标
> - no-useless-catch 禁止不必要的 catch 子句
> - no-useless-escape 禁用不必要的转义字符
> - no-with 禁用 with 语句

> 这些规则与变量声明有关：
>
> - no-delete-var 禁止删除变量
> - no-shadow-restricted-names 禁止将标识符定义为受限的名字
> - no-undef 禁用未声明的变量，除非它们在 /\*global \*/ 注释中被提到
> - no-unused-vars 禁止出现未使用过的变量

> 这些规则是关于风格指南的，而且是非常主观的：
>
> - no-mixed-spaces-and-tabs 禁止空格和 tab 的混合缩进

> 这些规则只与 ES6 有关, 即通常所说的 ES2015：
>
> - constructor-super 要求在构造函数中有 super() 的调用
> - no-class-assign 禁止修改类声明的变量
> - no-const-assign 禁止修改 const 声明的变量
> - no-dupe-class-members 禁止类成员中出现重复的名称
> - no-new-symbol 禁止 Symbolnew 操作符和 new 一起使用
> - no-this-before-super 禁止在构造函数中，在调用 super() 之前使用 this 或 super
> - require-yield 要求 generator 函数内有 yield

> 手动补充 rules

```
"no-console": process.env.NODE_ENV === "production" ? "warn" : "off"
"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
```
