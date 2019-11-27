/**
 @name: layui.carousel 轮播模块 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {

    /** layui.carousel 接入接口声明. */
    export interface ICarouselStatic {
        /** 全局配置选项. */
        config: any;
        /** 设置全局配置选项.
         * @param options 全局配置选项. */
        set(options: Object): ICarouselStatic;
        /** 事件监听.
         * @param events 事件描述信息.
         * @param callback 处理事件的函数. */
        on(events: string, callback: Function): any;
        /** 轮播渲染.
         * @param options 轮播的选项设置. */
        render(options: Object): ICarouselInstance;
    }
    /** layui.carousel 实例接口声明. */
    export interface ICarouselInstance {
        /** 全局配置项. */
        config: any;
        /** 轮播渲染 */
        render(): void;
        /** 重置轮播.
         * @param options 轮播配置选项. */
        reload(options: Object): void;
        /** 获取上一个等待条目的索引. */
        prevIndex(): number;
        /** 获取下一个等待条目的索引. */
        nextIndex(): number;
        /** 增长当前索引.
         * @param num 在当前索引上增长的量. */
        addIndex(num: number): void;
        /** 减少当前索引.
         * @param num 在当前索引上减少的量. */
        subIndex(num: number): void;
        /** 自动轮播. */
        autoplay(): void;
        /** 渲染箭头. */
        arrow(): void;
        /** 渲染指示器. */
        indicator(): void;
        /** 滑动切换.
         * @param type 切换方式(当为 'sub' 时表示向前滑，否则表示向后滑).
         * @param num 滑动的步长（即增减量）. */
        slide(type: string, num: number): void;
        /** 处理事件. */
        events(): void;
    }
}