/**
 @name: layui.form 表单组件 TypeScript 类型定义.
 @author: 巽翎君.
 */
/// <reference types="jquery" />

declare namespace Layui {
    /** layui.form 组件接口声明. */
    export interface IFormStatic {
        /** 全局配置项. */
        config: any;
        /** 设置全局项.
         * @param options 全局配置项. */
        set(options: Object): IFormStatic;
        /** 设置验证规则.
         * @param settings 验证规则设置项. */
        verify(settings: Object): IFormStatic;
        /** 表单事件监听.
         * @param events 事件描述信息.
         * @param callback 用于处理事件的回调函数. */
        on(events: string, callback: Function): any;
        /** form 表单取值或赋值.
         * @param filter form 标记上的 lay-filter 属性值.
         * @param obj 指定该参数时则为赋值，具体用法请参见 layui 文档. */
        val(filter: string, obj?: Object): any;
        /** 获取表单内给定元素的值.
         * @param filter form 标记上的 lay-filter 属性值.
         * @param itemForm 经过 JQuery 包装的表单元素对象，指定了此参数时 filter 参数将无效 . */
        getValue(filter: string, itemForm?: JQuery<HTMLElement>): any;
        /** 渲染表单控件.
         * @param type form 下的表单控件类型，如：checkbox、radio、select 等.
         * @param filter 仅渲染 lay-filter 属性为该值的表单元素. */
        render(type?: string, filter?: string): void;
    }
}