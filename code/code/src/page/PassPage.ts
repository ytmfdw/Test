class PassPage extends ui.page.PassPageUI {
    private app: Index = null;
    private static self: PassPage = null;
    private data: any = null;
    private index: number = 0;
    private keyImg: Laya.Image = null;
    private constructor(app: Index) {
        super();
        this.app = app
        UiManager.getSelf(app).passPage = this;
        this.height = this.app.uiManager.getPageHeight();
        this.y = UiManager.getSelf().getTopOffset();
        // this.btnHome.on(Laya.Event.CLICK, this, this.closeHome);
        // this.btnNext.on(Laya.Event.CLICK, this, this.goNext);
        // this.btnShare.on(Laya.Event.CLICK, this, this.clickShare);

        this.on(Laya.Event.ADDED, this, this.hasAdded);
        this.on(Laya.Event.REMOVED, this, this.hasRemoved);

    }

    private hasAdded(): void {
        //添加到舞台
        Log.d("添加到舞台")
        let thiz = this;
    }

    private hasRemoved(): void {
        //移除
        Log.d("移出舞台")
        Laya.timer.clearAll(this);
    }


    private closeHome(e: Laya.Event) {
        e.stopPropagation();
        // if (this.hasFinish) return;
        this.app.uiManager.goHome();
    }
    private clickShare(e: Laya.Event) {
        e.stopPropagation();
        // if (this.hasFinish) return;
        let query = "uid=" + this.app.userId + "&state=" + ShareType.FIGHT;
        shareToFriend(null, query);
    }
    private goNext(e: Laya.Event) {
        e.stopPropagation();
        let thiz = this;
        /* UiManager.getSelf().usePower(function (state) {
             if (state > 0) {
                 UiManager.getSelf().gotoPage(GamePage.getSelf(thiz.app));
                 GamePage.getSelf(thiz.app).initGameByIndex(++thiz.index);
             }
         }, eachPower);*/
        UiManager.getSelf().gotoPage(GamePage.getSelf(thiz.app));
        GamePage.getSelf(thiz.app).initGameByIndex(++thiz.index);
    }

    public static getSelf(app?: Index): PassPage {
        if (!PassPage.self) {
            PassPage.self = new PassPage(app ? app : Index.getApp());
        }
        return PassPage.self;
    }

    public setData(data: any): void {
        let thiz = this;
        thiz.data = data;
        thiz.index = data.index;
        thiz.keyImg = data.img;

    }

}