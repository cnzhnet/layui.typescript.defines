/**
 @name: layui.flow 流加载 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {

    /** layui.flow 组件接口声明. */
    export interface IFlowStatic {
        /** 加载信息流.
         * @param options 加载行为参数选项. */
        load(options: Object): IFlowStatic;
        /** 图片懒加载.
         * @param options 加载行为参数选项. */
        lazyimg(options?: Object): any;
    }
}