/**
 @name: layer v3.1.2 Web弹层组件 TypeScript 类型定义.
 @author: 巽翎君.
 */
/// <reference types="jquery" />

declare namespace Layui {

    /** layer 组件接口声明. */
    export interface ILayerStatic {
        /** 版本信息. */
        v: string;
        /** 判断ie版本. */
        ie(): string | boolean;
        /** 索引. */
        index: number;
        /** 路径. */
        path: string;
        /** 设置 layer 的全局选项.
         * @param options 全局选项.
         * @param fn layui 作者在源代码中并未使用此参数. */
        config(options: Object, fn?: Function): ILayerStatic;
        /** 初始化就绪事件.
         * @param callback 用于事件处理的回调函数. */
        ready(callback: Function): any;
        /** 弹出 Web 层，并返回一个用于关闭该层的 index 索引（核心方法）.
         * @param options 弹出层的选项. */
        open(options: Object): number;
        /** 弹出一个普通信息框.
         * @param content 弹出框中的内容.
         * @param options 信息框的选项.
         * @param yes 信息框确认按钮的回调函数. */
        alert(content: string | string[] | JQuery<HTMLElement>, options: Object, yes: (index: number, layero: JQuery<HTMLElement>) => any): number;
        /** 弹出一个普通信息框.
         * @param content 弹出框中的内容.
         * @param options 信息框的选项. */
        alert(content: string | string[] | JQuery<HTMLElement>, options: Object): number;
        /** 弹出一个普通信息框.
         * @param content 弹出框中的内容.
         * @param yes 信息框确认按钮的回调函数. */
        alert(content: string | string[] | JQuery<HTMLElement>, yes: (index: number, layero: JQuery<HTMLElement>) => any): number;
        /** 弹出一个普通信息框.
         * @param content 弹出框中的内容. */
        alert(content: string | string[] | JQuery<HTMLElement>): number;
        /** 弹出一个确认信息框.
         * @param content 信息框的内容.
         * @param options 信息框的选项.
         * @param yes 信息框确认按钮的回调函数.
         * @param cancel 信息框取消按钮的回调函数. */
        confirm(content: string | string[] | JQuery<HTMLElement>, options: Object, yes: (index: number, layero: JQuery<HTMLElement>) => any, cancel?: (index: number, layero: JQuery<HTMLElement>) => any): number;
        /** 弹出一个确认信息框.
         * @param content 信息框的内容.
         * @param yes 信息框确认按钮的回调函数. */
        confirm(content: string | string[] | JQuery<HTMLElement>, yes: (index: number, layero: JQuery<HTMLElement>) => any): number;
        /** 弹出一个提示框.
         * @param content 提示框的内容.
         * @param options 提示框的选项.
         * @param end 提示框被销毁时执行的回调函数. */
        msg(content: string | string[] | JQuery<HTMLElement>, options: Object, end: () => any): number;
        /** 弹出一个提示框.
         * @param content 提示框的内容.
         * @param options 提示框的选项. */
        msg(content: string | string[] | JQuery<HTMLElement>, options: Object): number;
        /** 弹出一个提示框.
         * @param content 提示框的内容.
         * @param end 提示框被销毁时执行的回调函数. */
        msg(content: string | string[] | JQuery<HTMLElement>, end: () => any): number;
        /** 弹出一个提示框.
         * @param content 提示框的内容. */
        msg(content: string | string[] | JQuery<HTMLElement>): number;
        /** 弹出一个加载层：注意 load 默认是不会自动关闭的，因为一般在 ajax 回调体中关闭它.
         * @param icon 图标索引(支持传入0-2如果是 0 则无需传入).
         * @param options 加载层的选项. */
        load(icon?: number, options?: Object): number;
        /** 显示一个 tips 提示层.
         * @param content tips 层的提示内容.
         * @param follow tips 层跟随的定位元素 ID 或 DOM 元素对象，或 jquery 包装的DOM元素对象.
         * @param options tips 层的选项. */
        tips(content: string | string[] | JQuery<HTMLElement>, follow: string | HTMLElement | JQuery<HTMLElement>, options?: Object): number;
        /** 关闭指定的弹出层.
         * @param index 弹出层的索引号. */
        close(index: number): void;
        /** 关闭所有弹出层.
         * @param type 只关闭所有此类型的层，取值范围及说明如下：
         *             dialog  关闭信息层
         *             page    关闭页面层
         *             iframe  关闭 iframe 层
         *             loading 关闭加载层
         *             tips    关闭 tips 层 */
        closeAll(type?: string): void;
        /** 重新定义指定弹出层的样式.
         * @param index 弹出层的索引.
         * @param cssStyle 包含 css 样式的对象，详情请参见 layui 文档. */
        style(index: number, cssStyle: Object): void;
        /** 设置（更改）指定弹出层的标题.
         * @param title 标题内容字符串(可以为 html 格式).
         * @param index 弹出层的索引. */
        title(title: string, index: number): void;
        /** 获取 iframe 页的 DOM
         * @param selector 根据该选择器在 iframe 子页面中查找要获取的 DOM 元素.
         * @param index 弹出层的索引. */
        getChildFrame(selector: string, index: number): JQuery<HTMLElement>;
        /** 获取当前 iframe 层的索引，该方法可能返回字符串请在使用返回值时先检查类型.
         * @param name 窗口名称. */
        getFrameIndex(name: string): string | number;
        /** 自适应指定的 iframe 弹出层.
         * @param index 弹出的 iframe 层的索引. */
        iframeAuto(index: number): void;
        /** 重置指定的 iframe 弹出层的 iframe 的 url
         * @param index iframe弹出层的索引.
         * @param url 要在 iframe 中加载的网页链接. */
        iframeSrc(index: number, url: string): void;
        /** 置顶当前的弹出层，并返回其 z-index 叠层顺序. */
        setTop(layero: JQuery<HTMLElement>): number;
        /** 最小化指定的弹出层.
         * @param index 弹出层的索引. */
        min(index: number): void;
        /** 还原指定的弹出层.
         * @param index 弹出层的索引. */
        restore(index: number): void;
        /** 将指定的弹出层全屏.
         * @param index 弹出层的索引. */
        full(index: number): void;
        /** 弹出一个输入层.
         * @param options 基本参数或 prompt 专用属性.
         * @param yes 回调函数，通常在此函数中获取弹出层中输入的值. */
        prompt(options: Object, yes: (value: any, index: number, elem: HTMLElement | JQuery<HTMLElement>) => void): number;
        /** 弹出一个输入层.
         * @param yes 回调函数，通常在此函数中获取弹出层中输入的值. */
        prompt(yes: (value: any, index: number, elem: HTMLElement | JQuery<HTMLElement>) => void): number;
        /** 弹出一个选项卡层(如 TabControl 的效果).
         * @param options 选项卡层的基础参数. */
        tab(options: Object): number;
        /** 弹出图片查看器层（至于返回什么值源代码太乱未能确定）.
         * @param options 图片查看器层的基础参数，请情请参见 layui 文档.
         * @param loop 直接弹出则为 true，否则为 false.
         * @param key layui 作者未对此参数进于说明. */
        photos(options: Object, loop?: boolean, key?: any): any;
    }
}