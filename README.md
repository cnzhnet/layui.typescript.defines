# layui.typescript.defines
layui 及 easyui.datagrid 的 typescript定义

注意事项：此代码使用 TypeScript 3.7.2 版本，使用更老版本的 TypeScript 可能出现编译错误.

使用方法：根据需要选择将 layui 或 easyui 目标中的类型定义复制到您的项目。并使用三斜线指令引入类型后即可使用
easyui 引入： /// &lt;reference path="../[按你自己的目录结构]/easyui/datagrid.d.ts" /&gt;
layui 引入：  /// &lt;reference path="../[按你自己的目录结构]/layui/index.d.ts" /&gt;

引入后需可使用 layui 及 layer 调用 layui 的模块及组件，当调用 layui 的某个模块出现 undefined 错误时说明你没有事先通过 layui.use(....) 加载模块，或者通过在页面中引入 layui.all.js
