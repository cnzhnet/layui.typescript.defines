/**
 @name: layui 2.x TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {
    /** layui 标准模块接口成员声明. */
    export interface IModuleBase {
        /** 全局项. */
        config: any;
        /** 索引. */
        index: number;
        /** 设置全局项.
         * @param options 全局项. */
        set(options: Object): any;
        /** 事件监听.
         * @param events 事件描述信息.
         * @param callback 回调函数. */
        on(events: string, callback: Function): any;
    }
    /** layui 配置数据接口声明. */
    export interface LayuiConfiguration {
        /** 记录模块物理路径. */
        modules: any;
        /** 记录模块加载状态. */
        status: any;
        /** 符合规范的模块请求最长等待秒数. */
        timeout: number;
        /** 记录模块自定义事件 */
        event: any;
    }
    /** 设备信息数据接口声明. */
    export interface DeviceInfo {
        os: string;
        ie: string | boolean;
        weixin: string;
    }

    /** layui 实例声明. */
    export interface LayuiInstance {
        /** 版本号. */
        v: string;
        /** 记录基础数据. */
        cache: LayuiConfiguration;
        /** 定义模块.
         * @param deps 定义的模块对象数组.
         * @param factory 模块构造工厂. */
        define(deps: any[], factory: (exports: Function) => any): any;
        /** 使用特定模块.
         * @param apps 要使用的模块名称.
         * @param callback 回调函数.
         * @param exports layui 作者未对此参数进行说明! */
        use(apps: string | string[], callback?: (args: any) => void, exports?: any[]): any;
        /** 获取节点的 style 属性值.
         * @param node html 文档 dom 对节点对象.
         * @param name style属性的名称. */
        getStyle(node: HTMLElement, name: string): string;
        /** 加载外部css.
         * @param href 样式的url接路径.
         * @param fn layui 作者未对此参数进行说明!
         * @param cssname layui 作者未对此参数进行说明! */
        link(href: string, fn: Function, cssname?: string): any;
        /** 重新执行模块的工厂函数.
         * @param modName 模块名称. */
        factory(modName: string): any;
        /** css内部加载器. */
        addcss(firename: string, fn: Function, cssname: string): any;
        /** 图片预加载.
         * @param url 图片url路径.
         * @param callback 回调函数.
         * @param error 图片加载出错时的处理回调函数. */
        img(url: string, callback: (img: HTMLImageElement) => void, error: (e: any) => any): void;
        /** 全局配置.
         * @param options 全局配置参数. */
        config(options: Object): LayuiInstance;
        /** 记录全部模块. */
        modules(): string[];
        /** 拓展模块.
         * @param options 包含为模块扩展的功能的对象. */
        extend(options: Object): any;
        /** 路由解析 */
        router(hash: string): any;
        /** 本地持久性存储.
         * @param table 键名称（即：存储到字典中的该名称）.
         * @param settings 存储的值（对象或任意类型的值）.
         * @param storage 存储介质（将数据存储在该字典中）. */
        data(table: string, settings: any, storage?: Object): any;
        /** 本地会话性存储.
         * @param table 键名称（即：存储到字典中的该名称）.
         * @param settings 存储的值（对象或任意类型的值）. */
        sessionData(table: string, settings: any): any;
        /** 返回设备信息.
         * @param key 键名称. */
        device(key: string): DeviceInfo;
        /** 遍历.
         * @param obj 欲遍历的对象.
         * @param fu 对每个元素进行处理的函数.  */
        each(obj: any, fu: Function): any;
        /** 将数组中的对象按其某个成员排序.
         * @param obj 对该数组进行成员排序.
         * @param key 按此键排序.
         * @param desc 降序则为 true，否则应为 false . */
        sort(obj: any, key: string | number, desc: boolean): any;
        /** 阻止事件冒泡.
         * @param thisEvent 事件对象. */
        stope(thisEvent: any): void;
        /** 自定义模块事件.
         * @param modName 模块名称.
         * @param 事件的描述信息.
         * @param callback 事件处理回调函数. */
        onevent(modName: string, events: string, callback: Function): any;
        /** 执行自定义模块事件.
         * @param modName 模块名称.
         * @param events 事件描述信息.
         * @param params 与事件相关的参数.
         * @param fn 处理该事件的函数. */
        event(modName: string, events: string, params: any, fn: Function): any;
        /** 穿梭框组件. */
        transfer: ITransferStatic;
        /** 树形组件. */
        tree: ITreeStatic;
        /** 数据表格组件. */
        table: ITableStatic;
        /** 滑块组件. */
        slider: ISliderStatic;
        /** 上传组件. */
        upload: IUploadStatic;
        /** 工具块. */
        util: IUtil;
        /** 评分组件. */
        rate: IRateStatic;
        /** 分页组件. */
        laypage: IPagination;
        /** 弹出层组件. */
        layer: ILayerStatic;
        /** 富文本编辑器组件，详情请参见：https://www.layui.com/v1/doc/modules/layedit.html */
        layedit: ILayEditor;
        /** 日期时间控件. */
        laydate: ILayDateStatic;
        /** form 表单组件. */
        form: IFormStatic;
        /** 流加载组件. */
        flow: IFlowStatic;
        /** 常用元素操作 */
        element: IElementStatic;
        /** 颜色选择器组件. */
        colorpicker: IColorPickerStatic;
        /** 代码修饰器渲染.
         * @param options 代码修饰器的选项. */
        code(options?: Object): void;
        /** 轮播组件. */
        carousel: ICarouselStatic;
    }
}