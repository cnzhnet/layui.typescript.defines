/**
 @name: layui.table 2.x模块 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {

    /** layui.table 模块的接入接口声明. */
    export interface ITableStatic extends IModuleBase {
        /** 数据缓存. */
        cache: any;
        /** 静态表格初始化.
         * @param filter 表格html元素上的lay-filter
         * @param settings 渲染的选项. */
        init(filter: string, settings: Object): any;
        /** 遍历表头.
         * @param id 实例的id或索引.
         * @param callback 回调函数.
         * @param cols 列信息数组. */
        eachCols(id: string | number, callback: (index: number, item: any) => void, cols: any[]): void;
        /** 获取指定表格实例的选中状态.
         * @param id 实例的 id 或索引. */
        checkStatus(id: string | number): ITableCheckedStatus;
        /** 导出数据.
         * @param id 实例id或索引.
         * @param data 导出的数据.
         * @param type 导出的文件类型：csv 或 xls */
        exportFile(id: string | number, data: any, type: string): void;
        /** 重置表格尺寸结构.
         * @param id 表格唯一 id，则只执行该 id 对应的表格实例. */
        resize(id: string | number): void;
        /** 重新载入表格.
         * @param id 实例的唯一id.
         * @param options 实例的选项. */
        reload(id: string | number, options: Object): ITableInstance;     
        /** 渲染表格（核心入口）.
         * @param options 渲染表格时所需的选项属性. */
        render(options: Object): ITableInstance;
        /** 清除临时Key.
         * @param data 存储表格临时数据的父对象. */
        clearCacheKey(data: any): any;
    }

    /** layui.table 的实例接口声明. */
    export interface ITableInstance {
        /** 选项. */
        config: any;
        /** 重置实例.
         * @param options 选项. */
        reload(options: any): void;
        /** 重置列宽. */
        setColsWidth(): void;
        /** 重置表格尺寸/结构. */
        resize(): void;
    }

    /** 表格的选择状态数据接口声明. */
    export interface ITableCheckedStatus {
        /** 数扰行. */
        data: any[];
        /** 是否为所有数据. */
        isAll: boolean;
    }
}