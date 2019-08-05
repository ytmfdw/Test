class Toast extends ui.dialog.toastUI {
    private app: Index = null;
    /**3秒后消失 */
    public static LONG: number = 3000;

    /**1秒后消失 默认 */
    public static SHORT: number = 1000;

    private static toastEntity: Toast = null;
    /**需要显示的队列 */
    private msgArray: Queue = new Queue();
    /**是否显示 */
    public isShowIng: boolean = false;

    public static isUserClose: boolean = false;


    private constructor(app: Index) {
        super();
        this.app = app;
        // this.btnClose.on(Laya.Event.CLICK, this, this.closeClick);
    }

    private closeClick(e: Laya.Event) {
        e.stopPropagation();
        Toast.isUserClose = true;
        this.dissmass();
    }

    public static getSelf(): Toast {
        return Toast.toastEntity;
    }

    public static toast(msg: string, showTime?: number, foce?: boolean): void {
        if (Toast.isUserClose && !foce) {
            return;
        }
        if (!this.toastEntity) {
            this.toastEntity = new Toast(Index.getApp());
        }
        var duration = showTime ? showTime : Toast.SHORT;
        this.toastEntity.msgArray.push({ msg: msg, time: duration });
        this.toastEntity.showToast();
    }

    private showToast() {
        //已经显示了，就返回
        if (this.isShowIng) {
            return;
        }
        var data: ShowMsg = this.msgArray.pop();
        if (!data || !data.msg) {
            this.removeSelf();
            return;
        }
        this.setMsg(data.msg);
        this.popup();
        //延迟关闭
        var thiz = this;
        Laya.timer.once(data.time, this, function () {
            thiz.dissmass();
        });
    }

    /**展示 */
    private popup() {
        //设置位置 屏幕顶部
        this.pos((Index.screenW - this.width) / 2, Index.pageHeight / 2);
        //显示
        this.alpha = 0;
        Laya.stage.addChild(this);
        //设置层级最高
        this.zOrder = 1001;
        Laya.Tween.to(this, { alpha: 1, y: Index.pageHeight / 3 }, 100, Laya.Ease.linearNone);
        this.isShowIng = true;
    }
    /**消失 */
    private dissmass() {
        var thiz = this;
        var obj = { value: 1 };
        Laya.Tween.to(obj, {
            value: 0, update: Laya.Handler.create(thiz, function () {
                thiz.alpha = obj.value;
                thiz.y = thiz.y - 1;
            }, null, false)
        }, 300, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
            thiz.isShowIng = false;
            thiz.removeSelf();
            thiz.showToast();
        }));
    }

    private setMsg(msg: string) {
        //设置自定义字体
        /* if (isWX && this.app.family) {
             this.msg.font = this.app.family;
         }*/
        this.textMsg.text = msg;
        this.textMsg.y = 100;
        Laya.Tween.to(this.textMsg, { y: 0 }, 300, Laya.Ease.linearNone);
        //计算大小

    }

    /**清除消息 */
    public clear(): void {
        this.msgArray.clear();
        //首先移除自己
        this.removeSelf();
        //清空消息队列
    }

}

class ShowMsg {
    public msg: string;
    public time?: number = Toast.LONG;
}