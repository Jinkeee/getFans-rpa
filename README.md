# 什么是RPA？



**RPA的全称为机器人流程自动化**(Robotic Process Automation)，主要的功能就是将工作信息与业务交互通过机器人来按照自先设计的流程去执行。这样如果当工作信息与业务交互过多时，RPA就可以高效解决这些复杂的流程，节约人工成本。RPA主要通过各种**封装好的控件**，让用户能利用**拖拉拽**控件，简单的操作**生成自动化流程**，在电脑上实现**浏览器应用程序自动鼠标点击、键盘输入、excel操作、数据处理、定时执行、自动生成界面交互。** 

基础的工具型RPA由控制器、编辑器及运行器组成。应用场景包括财务会计、人力资源、采购、供应链管理等等，如费用报销、单据审核、人员入职、开具证明、订单核对等等。

从业务层面，RPA的三个核心技术分别是**屏幕抓取**、**业务流程自动化管理**和**人工智能**。屏幕抓取主要用于选取指定对象后，模拟人的行为进行鼠标点击、键盘输入，而业务流程自动化管理可以将更多其他操作比如excel处理，逻辑判断等结合起来，形成可以稳定按照指定规则运行的自动化流程。AI能力则进一步扩展了RPA的能力边界，比如发票OCR识别、合同NLP语义分析，使得RPA变得更加智能，进一步处理一些漫长而复杂的任务。

## Auto.js

Auto.js(https://pro.autojs.org/)是一款自动化工作流 JavaScript IDE。解放双手，用JavaScript创造自己的应用与自动化工具。

Auto.js Pro使用[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)作为脚本语言。目前使用两个JavaScript引擎：

- [Rhino 1.7.7.2](https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/Rhino)，支持ES5与部分ES6特性。免费版和旧版Pro使用的引擎，对新的JS标准的支持不太完善。
- [V8](https://v8.dev/)。在9.0版本，Auto.js Pro全面支持了Node.js 15，并重新设计了所有API。

因此，文档实际上有两大部分，旧版API(本文档)和新的[Pro9 API](https://pro.autojs.org/docs/v9/zh)。

- 因为Auto.js是基于JavaScript的，学习Auto.js的API之前建议先学习JavaScript的基本语法和内置对象，可以使用教程前面的两个JavaScript教程链接来学习。

- 如果您想要使用TypeScript来开发，目前已经有开发者公布了一个可以把使用TypeScript进行Auto.js开发的工具，参见[Auto.js DevTools](https://github.com/pboymt/autojs-dev)。

- 如果想要在电脑而不是手机上开发Auto.js，可以使用VS Code以及相应的Auto.js插件使得在电脑上编辑的脚本能推送到手机运行，参见[Auto.js-VSCode-Extension](https://github.com/hyb1996/Auto.js-VSCode-Extension)，Auto.js Pro用户则需要使用[Auto.js-Pro-Ext](https://marketplace.visualstudio.com/items?itemName=hyb1996.auto-js-pro-ext)。

  **<u>注：目前yuanyuan-rpa项目使用auto.js 4.1.1版本，尚不兼容auto.js pro版本内容</u>**

## yuanyuan-rpa

本项目项目以yuanyaun-cloud以及yuanyuan-admin系统为依托，为了进一步实现抖音自动化运营涨粉等功能而设计。能够节约大量人力和时间，快速帮助企业店铺等进行抖音账号自动化运营。

目前，初步设计包含精准引流、精准行业、同城引流、截流评论、榜单私信、赞回访等自动化运营功能。

项目基于Auto.js4.1.1以及抖音21.7.0，在VScode中进行项目开发，使用autojs官方插件进行手机/逍遥模拟器8.0.2(内置安卓版本7.1.2)连接进行测试，环境搭建详见[企业微信元元获客文档](https://www.tapd.cn/41897244/documents/show/1141897244001000065)，软件以及相关插件也可在企业微信微盘中下载。

### 项目说明：

1.project.json为项目配置文件,内部定义了项目相关信息

2.main.js为项目入口文件

3.build文件夹为打包文件夹，打包生成的apk文件再次文件夹

4.res为项目资源文件夹

5.scrips文件夹为脚本文件夹（自动化脚本请写在这里）

6.views文件夹为UI界面文件夹（UI界面请写在这里）

7.settingJson文件夹为项目各个脚本模块JSON数据存放文件夹（JSON文件请写在这里）

开发与调试过程参考[企业微信元元获客文档](https://www.tapd.cn/41897244/documents/show/1141897244001000065)

**注：在开发过程中，请不要使用相对路径，直接写绝对路径，如require("scripts/accurateGetFans")**

