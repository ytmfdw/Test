class HomePage extends ui.page.HomePageUI {
    private static self: HomePage = null;
    private app: Index = null;
    private lightAni: Laya.Animation = null;
    private constructor(app: Index) {
        super();
        this.app = app;
        this.height = this.app.uiManager.getPageHeight();
        this.y = UiManager.getSelf().getTopOffset();
        this.app.uiManager.homePage = this;

        this.bottomLayout.y = this.height - this.bottomLayout.height;

        this.btnStart.on(Laya.Event.CLICK, this, this.startGame);
    }

    private startGame(e: Laya.Event): void {
        e.stopPropagation();
        let thiz = this;
        /*  UiManager.getSelf().usePower(function (state) {
              if (state > 0) {
                  UiManager.getSelf().gotoPage(GamePage.getSelf(thiz.app));
                  GamePage.getSelf(thiz.app).initGameByIndex(app.userData.level);
              }
          }, eachPower);*/
        UiManager.getSelf().gotoPage(GamePage.getSelf(thiz.app));
        GamePage.getSelf(thiz.app).initGameByIndex(0);



        // StompUtils.getSelf().setUser(thiz.app.userId).connect();
    }


    public static getSelf(app: Index): HomePage {
        if (!HomePage.self) {
            HomePage.self = new HomePage(app);
        }

        return HomePage.self;
    }
}