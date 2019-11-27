/**
 @name: layui.slider 2.x模块 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {

    /** layui.slider 模块接入接口声明. */
    export interface ISliderStatic extends IModuleBase {
        /** 渲染（核心入口）.
         * @param options 选项. */
        render(options: Object): ISliderInstance;
    }
    /** layui.slider 实例接口声明. */
    export interface ISliderInstance {
        /** 设置值.
         * @param value 值.
         * @param index 索引. */
        setValue(value: any, index: number): any;
        /** 实例的全局选项. */
        config: any;
    }
}