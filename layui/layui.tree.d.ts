/**
 @name: layui.tree 2.x模块 TypeScript 类型定义.
 @author: 巽翎君.
 */
/// <reference types="jquery" />

declare namespace Layui {    
    /** layui.tree 模块接入接口声明. */
    export interface ITreeStatic extends IModuleBase {
        /** 重载实例.
         * @param id 实例的ID.
         * @param options 选项. */
        reload(id: string | number, options: Object): ITree;
        /** 获取选中的节点数据.
         * @param 树实例的id. */
        getChecked(id: string | number): any[];
        /** 设置选中节点.
         * @param id 树实例的id.
         * @param checkedId 节点选项的id. */
        setChecked(id: string | number, checkedId: string | number): any;
        /** 渲染（核心入口）.
         * @param options 树实例的选项. */
        render(options: Object): ITreeInstance;
    }

    /** layui.tree 实例接口声明. */
    export interface ITreeInstance {
        /** 实例的全局选项. */
        config: any;
        /** 重载实例.
         * @param options 实例的全局选项. */
        reload(options: Object): any;
        /** 获取选中的节点数据. */
        getChecked(): any[];
        /** 设置节点选中.
         * @param id 不知是实例id还是节点id，用到时自己试吧. */
        setChecked(id: string | number): any;
    }

    /** layui.tree 接口核心方法的声明. */
    export interface ITree {
        /** 全局项. */
        config: any;
        /** 重载实例.
         * @param options 全局项. */
        reload(options: Object): any;
        /** 主体渲染. */
        render(): void;
        /** 渲染表单.
         * @param type 表单类型. */
        renderForm(type: string): void;
        /** 节点解析.
         * @param elem 树的容器元素.
         * @param children 节点对象数组. */
        tree(elem: JQuery<HTMLElement>, children: Object[]): void;
        /** 展开节点.
         * @param elem 欲展开的节点元素.
         * @param item 对应的节点信息实体对象. */
        spread(elem: JQuery<HTMLElement>, item: Object): void;
        /** 计算复选框选中状态.
         * @param elem 树节点元素.
         * @param item 对应的节点信息实体对象.
         * @param elemCheckbox 复选框元素. */
        setCheckbox(elem: JQuery<HTMLElement>, item: Object, elemCheckbox: JQuery<HTMLElement>): void;
        /** 复选框选择.
         * @param elem 树节点对象.
         * @param item 节点信息实体对象. */
        checkClick(elem: JQuery<HTMLElement>, item: Object): void;
        /** 节点操作.
         * @param elem 树节点对象.
         * @param item 节点信息实体对象. */
        operate(elem: JQuery<HTMLElement>, item: Object): void;
        /** 监听事件. */
        events(): void;
        /** 获得选中的节点. */
        getChecked(): any[];
        /** 设置选中节点.
         * @param checkedId 要选择的主键ID. */
        setChecked(checkedId: string | number): any;
    }
}