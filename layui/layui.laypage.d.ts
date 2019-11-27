/**
 @name: layui.laypage 2.x模块 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {
    /** layui.laypage 模块接口声明. */
    export interface IPagination {
        render(options: Object): any;
        index: number | 0;
        on(elem: HTMLElement, even: string, fn: Function): IPagination;
    }
}