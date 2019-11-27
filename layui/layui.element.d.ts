/**
 @name: layui.element 常用元素操作 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {
    /** layui.element 组件接口声明. */
    export interface IElementStatic {
        /** 全局配置选项. */
        config: any;
        /** 设置全局配置选项.
         * @param options 全局配置选项. */
        set(options: Object): IElementStatic;
        /** 事件监听.
         * @param events 事件描述信息.
         * @param callback 处理事件的回调函数. */
        on(events: string, callback: Function): any;
        /** 向指定的 tabControl 添加页.
         * @param filter tabControl 元素上的 lay-filter 值.
         * @param options 设定可选值的对象. */
        tabAdd(filter: string, options: Object): any;
        /** 删除指定的 tabControl 的指定标签页.
         * @param filter tabControl 元素上的 lay-filter 值.
         * @param layid 选项卡标题列表的 属性 lay-id 的值. */
        tabDelete(filter: string, layid: string): any;
        /** 将指定的标签页切换为 tabControl 的当前页.
         * @param filter tabControl 元素上的 lay-filter 值.
         * @param layid 标签页的 lay-id 属性值. */
        tabChange(filter: string, layid: string): any;
        /** 用于绑定自定义 Tab 元素(即非 layui 自带的 tab 结构)，该方法为 layui 2.1.6 新增！
         * @param options 设定可选值的对象. */
        tab(options: Object): void;
        /** 动态改变进度条百分比.
         * @param filter 进度条元素上的 lay-filter 值.
         * @param percent 百分比的字符串值，如：'80%' */
        progress(filter: string, percent: string): any;
        /** 初始化元素或更新渲染.
         * @param type 元素的类型，值范围：'tab'，'nav'，'breadcrumb'，'progress'，'collapse'
         * @param filter 元素上的 lay-filter 值. */
        init(type?: string, filter?: string): any;
        /** 功能与 init 方法相同，此为 layui 2.1.6 版本新增方法. */
        render(type?: string, filter?: string): any;
    }
}