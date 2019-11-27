
interface JQuery {
    /** 初始化一个 datagrid 数据表格.
     * @param options datagrid数据网格的初始化参数. */
    datagrid(options: Object): JQuery;
    /** 调用 datagrid 指定的方法，并返回相应内容.
     * @param methodName 方法名称.
     * @param parameters 调用目标方法所需要的参数可选参数 */
    datagrid(methodName: string, ...parameters: any[]): any;
}

interface JQueryStatic {
    /** 初始化一个 datagrid 数据表格.
     * @param options datagrid数据网格的初始化参数. */
    datagrid(options: any): JQuery;
    /** 调用 datagrid 指定的方法，并返回相应内容.
     * @param methodName 方法名称.
     * @param parameters 调用目标方法所需要的参数可选参数 */
    datagrid(methodName: string, ...parameters: any[]): any;
}

/** 编辑器类型. */
interface EUDatagridEditor {
    /** 初始化编辑器.
     * @param container 用于承载编辑输入框的父容器（通常为：JQuery<HTMLElement> 类型）.
     * @param options 渲染编辑框的相关选项. */
    init(container: Object, options: any): any;
    /** 用于销毁编辑框.
     * @param target 要销毁的编辑框（通常为 HTMLElement 或 string 类型）.*/
    destroy(target: any): void;
    /** 用于获取编辑器的值.
     * @param target 编辑框元素对象或筛选器字符串. */
    getValue(target: any): any;
    /** 设置编辑框的值.
     * @param target 编辑框元素对象或筛选器字符串.
     * @param value 要设置的值. */
    setValue(target: any, value: any): void;
    /** 重设编辑框的宽度.
     * @param target 编辑框元素对象或筛选器字符串.
     * @param width 宽度. */
    resize(target: any, width: number): void;
}

/** datagrid 的视图类型定义. */
interface EUDatagridView {
    render(target: Object, container: any, frozen: any): void;
    renderFooter(target: Object, container: any, frozen: any): void;
    renderRow(target: Object, fields: string, frozen: any, rowIndex: number, rowData: Object): void;
    refreshRow(target: Object, rowIndex: number): void;
    onBeforeRender(target: Object, rows: Object): void;
    onAfterRender(target: Object): void;
}