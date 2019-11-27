/**
 @name: layui.rate 2.x模块 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {

    /** layui.rate 模块接入声明. */
    export interface IRateStatic extends IModuleBase {
        /** 渲染（核心入口）. */
        render(options: Object): IRateInstance;
    }

    /** layui.rate 实例接口声明. */
    export interface IRateInstance {
        /** 设置值.
         * @param value 值. */
        setvalue(value: any): void;
        /** 实例的全局项. */
        config: any;
    }
}