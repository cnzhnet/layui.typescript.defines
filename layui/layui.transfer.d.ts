/**
 @name: layui.transfer 2.x模块 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {

    /** layui.transfer 模块接入接口声明 */
    export interface ITransferStatic extends IModuleBase {
        /** 重置实例.
         * @param id 实例的id或索引.
         * @param options 实体的选项. */
        reload(id: number | string, options: Object): ITransferInstance;
        /** 获得选中的数据（右侧面板）.
         * @param id 实例id或索引. */
        getData(id: number | string): any[];
        /** 渲染表格（核心入口）.
         * @param options 渲染表格时所需的选项属性. */
        render(options: Object): ITransferInstance;
    }

    /** layui.transfer 的实例接口声明. */
    export interface ITransferInstance {
        /** 实例的全局选项. */
        config: any;
        /** 重置实例.
         * @param options 实体的全局选项. */
        reload(options: Object): void;
        /** 获取右侧数据. */
        getData(): any[];
    }

    /** layui.transfer 的数据格式定义. */
    export interface ITransferData {
        /** 值. */
        value: string | number;
        /** 标题 */
        title: string;
        /** 是否禁用. */
        disabled: string | boolean;
        /** 是否勾选. */
        checked: string | boolean;
    }
}