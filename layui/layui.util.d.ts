/**
 @name: layui.util 2.x工具集 TypeScript 类型定义.
 @author: 巽翎君.
 */

declare namespace Layui {
    /** layui.util 模块接口声明. */
    export interface IUtil {
        /** 固定块.
         * @param options 所需的参数选项. */
        fixbar(options: Object): void;
        /**倒计时：它并不负责 UI 元素的呈现，而仅仅只是返回倒计时的数据，这意味着你可以将它应用在任何倒计时相关的业务中.
         * @param endTime 结束时间戳或Date对象，如：4073558400000，或：new Date(2099,1,1).
         * @param serverTime 当前服务器时间戳或Date对象.
         * @param callback 回调函数。如果倒计时尚在运行，则每一秒都会执行一次。
         *                 并且返回三个参数： date（包含天/时/分/秒的对象）、 serverTime（当前服务器时间戳或Date对象）, 
         *                 timer（计时器返回的ID值，用于clearTimeout）*/
        countdown(endTime: number | Date, serverTime: number | Date, callback: (date: number[], serverTime: number | Date, timer: number) => any): number[];
        /** 返回某个时间在当前时间的多久前：
         * 如果在3分钟以内，返回：刚刚
         * 如果在30天以内，返回：若干分钟前、若干小时前、若干天前，如：5分钟前
         * 如果在30天以上，返回：日期字符，如：2017-01-01
         * @param time 为某个时间的时间戳或日期对象.
         * @param onlyDate 是否在超过30天后，只返回日期字符，而不返回时分秒. */
        timeAgo(time: any, onlyDate: boolean): string;
        /** 在数字前补零.
         * @param num 原始数字.
         * @param length 数字长度，如果原始数字长度小于 length，则前面补零，如：util.digit(7, 3) */
        digit(num: number, length: number): any;
        /** 转化时间戳或日期对象为日期格式字符. 
         * @param time 可以是日期对象，也可以是毫秒数
         * @param format 日期字符格式（默认：yyyy-MM-dd HH:mm:ss），可随意定义，如：yyyy年MM月dd日 */
        toDateString(time: number | Date, format: string): string;
        /** 防 xss 攻击转义.
         * @param html 任意字符. */
        escape(html: string): string;
        /** 用于更好地批量处理事件.
         * @param attr 绑定需要监听事件的元素属性.
         * @param obj 事件回调链.
         * @param eventType 事件类型（默认 click）*/
        event(attr: string, obj: Object, eventType?: string): void;
    }
}