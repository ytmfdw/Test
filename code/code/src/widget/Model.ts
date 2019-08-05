class Model extends ui.dialog.modelUI {
    private static self: Model = null;
    private isShowing: boolean = false;
    private constructor() {
        super();
        this.height = Index.screenH;
        this.contentLayout.y = (this.height - this.contentLayout.height) / 2;
        this.bgMask.height = this.height;
        this.bgMask.alpha = 0.5;
        this.bgMask.graphics.drawRect(0, 0, this.width, this.height, "#000");
        this.on(Laya.Event.REMOVED, this, this.removed);
        this.btnCancel.on(Laya.Event.CLICK, this, this.clickClose);
        this.btnClose.on(Laya.Event.CLICK, this, this.clickClose);
        //防止点击穿透
        this.bgMask.on(Laya.Event.CLICK, this, (e: Laya.Event) => {
            e.stopPropagation();
        });
    }

    private clickClose(e: Laya.Event): void {
        e.stopPropagation();
        this.dismiss();
    }

    private removed(): void {
        Log.d('model  removed  ');
        this.isShowing = false;
    }

    public static getSelf(): Model {
        if (!Model.self) {
            Model.self = new Model();
        }
        return Model.self;
    }

    public dismiss(): void {
        let thiz = this;
        Laya.Tween.to(this.contentLayout, {
            scaleX: 0.1,
            scaleY: 0.1
        }, 300, Laya.Ease.bounceOut, Laya.Handler.create(this, function () {
            thiz.removeSelf();
        }));
    }
    /**
     * 弹出方法
     * 
     * @memberof Model
     */
    public popup(): void {
        Laya.stage.addChild(this);
        this.contentLayout.scale(0.1, 0.1);
        let thiz = this;
        Laya.Tween.to(this.contentLayout, {
            scaleX: 1,
            scaleY: 1
        }, 300, Laya.Ease.bounceOut, Laya.Handler.create(this, function () {
            thiz.isShowing = true;
        }));
    }

    /*        title: data.title ? data.title : "温馨提示",
                content: data.content ? data.content : "",
                cancelText: data.cancelText ? data.cancelText : "取消",
                confirmText: data.confirmText ? data.confirmText : "确定",
                showCancel: data.showCancel ? data.showCancel : data.cancelText,
                success: data.success ? data.success : null,
                confirmColor: data.confirmColor ? data.confirmColor : "#576B95",
                fail: data.fail ? data.fail : null,
                complete: data.complete ? data.complete : null,
                cancelColor: data.cancelColor ? data.cancelColor : "#000000"*/

    public setData(data: any): Model {
        if (this.isShowing) {
            this.removeSelf();
        }
        Log.d('model setData;;;;');
        Log.d(data);
        let thiz = this;
        this.textTitle.text = data.title ? data.title : '温馨提示';
        this.textMsg.text = data.content;
        this.textCenter.text = data.confirmText ? data.confirmText : '确定';
        this.btnCenter.on(Laya.Event.CLICK, this, function (e: Laya.Event) {
            e.stopPropagation();
            if (data.success) {
                data.success();
            }
            thiz.dismiss();
        });
        this.btnCancel.on(Laya.Event.CLICK, this, function (e: Laya.Event) {
            e.stopPropagation();
            if (data.fail) {
                data.fail();
            }
            thiz.dismiss();
        });
        if (data.showCancel || data.cancelText) {
            this.btnCancel.visible = true;
            this.textCancel.text = data.cancelText ? data.cancelText : '取消';
            this.btnCenter.x = 150;
            this.btnCancel.x = 360;
        } else {
            this.btnCenter.x = 255;
            this.btnCancel.visible = false;
        }
        this.btnClose.visible = !this.btnCancel.visible;
        return this;
    }

}