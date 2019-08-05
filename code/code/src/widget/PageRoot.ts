
class PageRoot extends ui.page.RootPageUI {
    private app: Index = null;
    private lastPage: Laya.Sprite = null;
    private needAdaptation: boolean = false;
    public GuideFixOffset: number = 0;
    constructor(app: Index, width: number, height: number) {
        super();
        this.app = app;
        this.width = width
        this.height = height;
        this.pageLayout.width = this.width;
        this.pageLayout.height = this.height;
        this.imgBg.y = this.height - this.imgBg.height;
        this.nextImgBg.y = this.imgBg.y;
        // this.imgBg.height = this.height;
        // this.imgBg.width = this.width / Index.scaleX;
        // this.nextImgBg.height = this.imgBg.height;
        // this.nextImgBg.width = this.imgBg.width;
        let model = this.app.systemInfo.model;
        //计算刘海屏顶部高度
        for (var i = wx.getMenuButtonBoundingClientRect(),
            n = ["iPhone X", "华为P20", "华为麦芒7", "nubia Z18", "iPhone XR", "荣耀8X", "荣耀畅玩8C", "荣耀10", "荣耀Play", "荣耀9i", "vivo Y85", "vivo Y83", "vivo Y81s", "vivo X21", "vivo X23", "vivo X30", "vivo Z1", "vivo V9", "魅族X8", "一加6", "OPPO A3", "OPPO A7x", "OPPO R15", "OPPO R17", "小米红米6 Pro", "OnePlus A6010", "oneplus A6010", "坚果R1", "小米 Redmi Note 7", "小米 Redmi 7", "小米 PLAY ", "小米8", "小米8 SE", "小米9", "小米9 SE", "小米红米6 Pro", "vivo U1", "vivo Z3", "vivo Z3i", "vivo Z1", "vivo Z1青春版", "vivo X23幻彩版 ", "vivo Y81s", "vivo Y83", "vivo Y85", "vivo Y93", "vivo Y97", "vivo X21", "vivo X21s", "vivo X30", "vivo V9", "vivo iQOO", "华为nova 3", "华为nova 3i", "华为 nova 4e", "华为 畅享 MAX", "华为畅享9 Plus", "华为P30 Pro", "华为P20", "华为麦芒7", "华为Mate 20", "华为Mate 20 Pro", "荣耀10", "荣耀10青春版", "荣耀8X", "荣耀8X Max", "荣耀畅玩8C", "荣耀Play", "荣耀9i", "荣耀20i", "OPPO A3", "OPPO A5", "OPPO A7", "OPPO A7x全网通", "OPPO A7n", "OPPO R15", "OPPO R17", "OPPO R17 Pro", "OPPO K1", "联想 Z5S", "联想Z6 Pro", "三星Galaxy A8s", "三星Galaxy A90", "朵唯 D1", "海信 小海豚3", "海信 金刚4Pro", "中兴 ZTE V1000", "中兴AXON 10 Pro", "中兴Blade V10", "摩托罗拉 g7 plus", "诺基亚X6 2018", "诺基亚X7 2018", "小辣椒 红辣椒8X", "一加6", "一加6T", "魅族X8", "iPhone XR"], s = 0; s < n.length; s++) {
            var a = n[s], r = model.indexOf(a);
            if (i && i.top > 20 || -1 != r) {
                this.needAdaptation = !0, this.GuideFixOffset = iPhoneX;
                break;
            }
        }
        this.layoutTop.y = this.GuideFixOffset;
        //设置页面有效高度
        Index.pageHeight = this.height - this.layoutTop.y - this.layoutTop.height;
        /* this.pageLayout.height = Index.pageHeight;
         this.pageLayout.y = this.layoutTop.y + this.layoutTop.height;*/
    }

    public getPageHeight(): number {
        return this.height - this.layoutTop.y - this.layoutTop.height;
    }

    public getTopOffset(): number {
        return this.height - this.getPageHeight();
    }
    /**
     * 
     *切换背景 
     * @param {string} bgPath 
     * @memberof PageRoot
     */
    public changeBg(bgPath: string): void {
        let thiz = this;
        Laya.Tween.clearAll(this.imgBg);
        thiz.nextImgBg.skin = bgPath;
        Laya.Tween.to(this.imgBg, {
            alpha: 0,
            update: Laya.Handler.create(thiz.imgBg, function () {
                thiz.nextImgBg.alpha = 1 - thiz.imgBg.alpha;
            }, null, false)

        }, 1000, null, Laya.Handler.create(this, function () {
            //切换结束后
            thiz.imgBg.skin = bgPath;
            thiz.imgBg.alpha = 1;
            thiz.nextImgBg.alpha = 0;
        }));
    }

    /**
     * 当前页面上添加一个页面
     * @param page 
     * @param noAni 
     */
    public addPage(page: Laya.Sprite, noAni?: boolean): void {
        page.alpha = 0;
        if (this.numChildren > 0) {
            this.lastPage = this.pageLayout.getChildAt(this.pageLayout.numChildren - 1) as Laya.Sprite;
        }
        this.pageLayout.addChild(page);
        var duration = noAni ? 0 : PAGE_CHANGE_DURATION;
        Laya.Tween.to(page, { alpha: 1 }, duration, Laya.Ease.linearNone);
    }

    /**
     * 场景切换
     * @param page 
     * @param noAni  是否显示过场动画
     */
    public gotoPage(page: Laya.Sprite, noAni?: boolean): void {
        //直接加载页面
        page.alpha = 0;
        this.pageLayout.addChild(page);
        var duration = noAni ? 0 : PAGE_CHANGE_DURATION;
        if (this.pageLayout.numChildren > 1) {
            //保存上一个页面
            this.lastPage = this.pageLayout.getChildAt(this.pageLayout.numChildren - 2) as Laya.Sprite;
            var obj = {
                alpha: 1
            };
            var thiz = this;
            Laya.Tween.to(obj, {
                alpha: 0, update: new Laya.Handler(this, function () {
                    thiz.lastPage.alpha = obj.alpha;
                    page.alpha = 1 - obj.alpha;
                })
            }, duration, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                thiz.pageLayout.removeChild(thiz.lastPage);
            }));
        } else {
            Laya.Tween.to(page, { alpha: 1 }, duration, Laya.Ease.linearNone);
        }
        //场景切换，关闭背景音乐
        // playBgMusic(false);
    }

    /**
     * 关闭页面
     * @param page 
     * @param noAni  是否显示过场动画
     */
    public closePage(page?: Laya.Sprite, noAni?: boolean) {
        var duration = noAni ? 0 : PAGE_CHANGE_DURATION;
        if (page) {
            //关闭当前页面，并返回到指定页面
            this.gotoPage(page, noAni);
        } else {
            //没有指定页面,返回上一个页面
            if (this.lastPage) {
                this.gotoPage(this.lastPage, noAni);
            } else {
                //回主页
                this.goHome();
            }
        }
    }
    /**
     * 页面抖动效果
     * @param page 抖动指定页面，如果没有就获取当前的最后一个子控件
     */
    public sharkPage(page?: Laya.Sprite): void {
        if (this.pageLayout.numChildren < 1) return;
        var sharkpage: Laya.Sprite = page ? page : this.pageLayout.getChildAt(this.pageLayout.numChildren - 1) as Laya.Sprite;
        //震屏
        vibrateScreen(sharkpage);
        //
        vibrate(30);
    }

    /**
 * 设置元宝值 
 * @param num 
 */
    public setPowerNum(num: number) {
        // numberTextAni(this.textPower.getChildAt(0) as Laya.Text, num);
        // this.powerNum.value = num + '';
        // numberClipAni(this.powerNum, num);
    }

    /**返回主页 */
    public goHome(): void {
        //清除广告
        UiManager.getSelf().showOrHideTop(true);
        Index.getApp().banner.hideBanner(BannerManager.HIDE_ALL);
        let pageNum = this.pageLayout.numChildren;
        for (let i = 0; i < pageNum; i++) {
            this.pageLayout.getChildAt(i).removeSelf();
        }
        //再添加主页
        this.addPage(HomePage.getSelf(Index.getApp()));
    }

}