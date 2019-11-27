/**
 @name: layDate 5.0.9 日期时间控件 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {
    /** layDate 控件接口声明. */
    export interface ILayDateStatic {
        /** 版本. */
        v: string;
        /** 全局配置项. */
        config: any;
        /** 索引. */
        index: number;
        /** 路径. */
        path: string;
        /** 配置全局项.
         * @param options 全局项. */
        set(options: Object): ILayDateStatic;
        /** 主体CSS等待事件.
         * @param fn 用于处理该事件的回调函数. */
        ready(fn: Function): any;
        /** 渲染日期控件.
         * @param options 全局配置项. */
        render(options: Object): ILayDateInstance;
        /** 获得某月的最后一天.
         * @param month 月份.
         * @param year 年份. */
        getEndDate(month?: number, year?: number): number;
    }
    /** layDate 控件实例接口声明. */
    export interface ILayDateInstance {
        /** 提示信息.
         * @param content 提示信息的内容. */
        hint(content: string): void;
        /** 实例的全局配置项. */
        config: any;
    }
}