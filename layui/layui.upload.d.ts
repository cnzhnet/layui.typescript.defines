/**
 @name: layui.upload 2.x模块 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {

    /** layui.upload 模块接口声明. */
    export interface IUploadStatic extends IModuleBase {
        /** 初始渲染.
         * @param options 渲染选项. */
        render(options: Object): IUploadInstance;       
    }

    /** layui.upload 的核心接口声明 */
    interface IUpload {
        config: any;
        /** 初始渲染. */
        render(): void;
        /** 上传文件.
         * @param files 要上传的文件列表. */
        upload(files: FileList | File[]): void;
        /** 重新渲染 upload 模块.
         * @param options 选项. */
        reload(options: Object): void;
        /** 追加文件域. */
        file(): void;
        /** 预读图片信息.
         * @param callback 每张图片读取完成时的回调函数. */
        preview(callback: (index: number, file: File, result: string | ArrayBuffer) => void): void;
        /** 判断绑定元素是否为文件域本身. */
        isFile(): boolean;
        /** 处理事件. */
        events(): void;
        /** ie8-9初始化. */
        initIE(): void;
        /** 异常提示. */
        msg(content: string): void;
    }

    /** layui.upload 的实例声明. */
    export interface IUploadInstance {
        /** 实例的全局选项. */
        config: any;
        /** 上传指定的文件列表.
         * @param files 文件列表. */
        upload(files: FileList | File[]): void;
        /** 重新载入实例.
         * @param options 实例的全局选项. */
        reload(options: Object): void;
    }

    /** layui.upload 模块的事件返回参数对象接口声明. */
    export interface IUploadEventArgs {
        /** 预览.
         * @param callback 回调函数. */
        preview(callback: (index: number, file: File, result: string | ArrayBuffer) => void): void;
        /** 上传指定的文件.
         * @param index 要上传的文件的索引.
         * @param file 要上传的文件对象. */
        upload(index: number, file: File): void;
        /** 追加文件到队列. */
        pushFile(): FileList;
        /** 重置指定的文件.
         * @param index 重置的文件索引.
         * @param file 文件对象.
         * @param filename 文件名. */
        resetFile(index: number, file: File, filename: string): void;
    }
}