class GamePage extends ui.page.GamePageUI {
    private app: Index = null;
    private static self: GamePage = null;


    private constructor(app: Index) {
        super();
        this.app = app;
        this.height = Index.screenH - UiManager.getSelf().getFixOffset();
        this.y = UiManager.getSelf().getFixOffset();
        this.app.uiManager.gamePage = this;

    }
    private hasRemoved(): void {
        //移除
        UiManager.getSelf().hideBtnAni();
    }
    private homeClick(e: Laya.Event) {
        e.stopPropagation();
        // if (this.hasFinish) return;
        this.app.uiManager.goHome();
    }

    public static getSelf(app: Index): GamePage {
        if (!GamePage.self) {
            GamePage.self = new GamePage(app);
        }
        return GamePage.self;
    }

    /**
     * 根据题目索引加载题目
     * @param index 
     */
    public initGameByIndex(index: number) {
        //先隐藏顶部状态
        UiManager.getSelf().showOrHideTop(false);

    }


    public initGame() {

    }






    /**
     * 结束
     * 
     * @private
     * @param {number} arr 方向
     * @param {boolean} isSuccess 是否成功
     * @memberof TestPage
     */
    private showOver(): void {

    }


    private showNext(img: Laya.Image, pos: Laya.Point): void {

    }


}