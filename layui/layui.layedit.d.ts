/**
 @name: layui.layedit 富文本编译器 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {

    /** layui.layedit 组件接口声明. */
    export interface ILayEditor extends IModuleBase {
        /** 构建编辑器，并返回其索引.
         * @param id 实例元素（一般为textarea）的id值(不带 # 号)
         * @param options 编辑器的可配置项. */
        build(id: string, options: Object): number;
        /** 获得编辑器的内容（带html格式）.
         * @param index 编辑器的实例索引. */
        getContent(index: number): string;
        /** 获得编辑器的纯文本内容（不带html格式）.
         * @param index 编辑器的实例索引. */
        getText(index: number): string;
        /** 设置编辑器内容.
         * @param index 编辑器实例的索引.
         * @param content 要设置的内容.
         * @param flag 是否追加模式. */
        setContent(index: number, content: string, flag: boolean): void;
        /** 将编辑器内容同步到textarea（一般用于异步提交时）.
         * @param index 编辑器的实例索引. */
        sync(index: number): void;
        /** 获得编辑器中选中的内容.
         * @param index 编辑器实例的索引. */
        getSelection(index: number): string;
    }
}