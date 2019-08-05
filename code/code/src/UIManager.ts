class UiManager {
    private static self: UiManager = null;
    private app: Index;
    private pageRoot: PageRoot = null;
    //所有页面
    public gamePage: GamePage = null;
    public homePage: HomePage = null;
    public passPage: PassPage = null;
    //弹窗提示
    private toast = null;
    private model = null;
    private bgImgs = [
        'comp/bg0.jpg',
        'bg/bg1.jpg',
        'bg/bg2.jpg',
        'bg/bg3.jpg',
        'bg/bg4.jpg',
        'bg/bg5.jpg',
        'bg/bg6.jpg',
        'bg/bg7.jpg',
        'bg/bg8.jpg',
    ];
    private bgIndex = 0;
    private hasLoadBtnAni: boolean = false;
    //提示按钮位置
    private btnAni: Laya.Animation = null;
    private constructor(app: Index) {
        this.app = app;
        app.uiManager = this;
        this.pageRoot = Index.pageRoot;

    }

    public static getSelf(app?: Index): UiManager {
        if (!UiManager.self) {
            UiManager.self = new UiManager(app ? app : Index.getApp());
        }
        UiManager.self.pageRoot = Index.pageRoot;
        return UiManager.self;
    }
    /**
     * 切换背景
     * 
     * @memberof UiManager
     */
    public changeBg(): void {
        this.pageRoot.changeBg(this.bgImgs[++this.bgIndex % this.bgImgs.length]);
    }
    /**
     * 显示toast
     * 
     * @param {string} msg 
     * @param {number} [time] 
     * @memberof UiManager
     */
    public showToast(msg: string, time?: number): void {
        Toast.toast(msg, time);
    }

    public clearToast(): void {
        if (Toast.getSelf()) {
            Toast.getSelf().clear();
        }
    }
    /**
     * 判断toast是否正在显示
     * 
     * @returns {boolean} 
     * @memberof UiManager
     */
    public isToastShowing(): boolean {
        if (Toast.getSelf()) {
            return Toast.getSelf().isShowIng;
        }
        return false;
    }

    /**
     * 显示弹窗提示
     * 
     * @param {*} data 
     * @memberof UiManager
     */
    public showModal(data: any): void {
        this.hideLoading();
        Model.getSelf().setData(data).popup();
    }


    /**
* 场景切换
* @param page 
* @param noAni  是否显示过场动画
*/
    public gotoPage(page: Laya.Sprite, noAni?: boolean): void {
        Log.d('gotoPage  name=' + page.name);
        this.pageRoot.gotoPage(page, noAni);
    }

    /**
     * 关闭页面
     * @param page 
     * @param noAni  是否显示过场动画
     */
    public closePage(page?: Laya.Sprite, noAni?: boolean) {
        this.pageRoot.closePage(page, noAni);
    }

    /**
     * 当前页面上添加一个页面
     * @param page 
     * @param noAni 
     */
    public addPage(page: Laya.Sprite, noAni?: boolean): void {
        this.pageRoot.addPage(page, noAni);
    }

    /**
  * 返回首页
  */
    public goHome(): void {
        //移除所有界面
        this.pageRoot.goHome();
    }


    /**
     * 提示用户点击的位置
     * @param x 全局坐标
     * @param y 全局坐标
     * @param endHide  是否循环播放,默认是循环播放的
     */
    public showBtnAni(x: number, y: number, endHide?: boolean, father?: Laya.Sprite): void {
        if (this.hasLoadBtnAni) {
            this.showAniBtn(x, y, endHide, father ? father : Laya.stage);
        } else {
            Laya.loader.load('res/atlas/BtnAni.atlas', Laya.Handler.create(this, this.showAniBtn, [x, y, endHide, father ? father : Laya.stage]), null, Laya.Loader.ATLAS);
        }
    }

    /**
     * 显示或隐藏顶部状态
     * @param flag 
     */
    public showOrHideTop(flag?: boolean): void {
        let thiz = UiManager.getSelf();
        if (thiz.pageRoot.layoutTop.visible == flag) return;
        Laya.Tween.clearAll(thiz.pageRoot.layoutTop);
        thiz.pageRoot.layoutTop.visible = true;
        // thiz.pageRoot.layoutTop.alpha = flag ? 0 : 1;
        Laya.Tween.to(thiz.pageRoot.layoutTop, {
            // alpha: flag ? 1 : 0,
            y: flag ? thiz.pageRoot.GuideFixOffset : (thiz.pageRoot.GuideFixOffset - thiz.pageRoot.height)
        }, 500, flag ? Laya.Ease.bounceIn : Laya.Ease.bounceOut, Laya.Handler.create(thiz.pageRoot.layoutTop, function () {
            thiz.pageRoot.layoutTop.visible = flag;
        }))
    }

    /**
     * 隐藏提示按钮
     * 
     * @param destory  是否销毁
     * 
     * @memberof UiManager
     */
    public hideBtnAni(destory?: boolean): void {
        if (this.btnAni) {
            this.btnAni.stop();
            this.btnAni.visible = false;
            if (destory) {
                //销毁，并清掉资源
                this.btnAni.destroy();
                this.btnAni = null;
                Laya.loader.clearRes('res/atlas/BtnAni.atlas');
                this.hasLoadBtnAni = false;
            }
        }
    }

    private showAniBtn(x: number, y: number, endHide?: boolean, father?: Laya.Sprite): void {
        this.hasLoadBtnAni = true;
        let thiz = UiManager.getSelf();
        if (this.btnAni) {
            this.btnAni.pos(x, y);
            this.btnAni.visible = true;
            thiz.btnAni.play(0, !endHide);
            if (father) {
                father.addChild(thiz.btnAni);
            } else {
                Laya.stage.addChild(thiz.btnAni);
            }
        } else {
            this.btnAni = new Laya.Animation();
            this.btnAni.loadAnimation('ani/btnAni.ani');
            thiz.btnAni.scale(0.5, 0.5);
            thiz.btnAni.pos(x, y);
            thiz.btnAni.play(0, !endHide);
            if (father) {
                father.addChild(thiz.btnAni);
            } else {
                Laya.stage.addChild(thiz.btnAni);
            }
        }
    }
    /**
     * 显示体力值
     * @param power 
     */
    public setPowerNum(power: number): void {
        if (this.pageRoot) {
            this.pageRoot.setPowerNum(power);
        }
    }

    /**
     * 使用体力
     * 
     * @param {Function} callBack 
     * @param {number} [num] 
     * @memberof UiManager
     */
    public usePower(callBack: Function, num?: number): void {
        let powers = num ? num : 1;
        if (this.app && this.app.userData.power >= powers) {
            this.app.userData.power -= powers;
            this.setPowerNum(this.app.userData.power);
            this.showToast('消耗' + powers + '体力');
            callBack(1);
        } else {
            this.showToast('体力值不够');
            callBack(-1);
        }
        /* if (this.homePage) {
             this.homePage.setPowerView();
         }*/
    }


    public showLoading(data?: any): void {
        wx.showLoading({
            title: data ? data.title ? data.title : "加载中..." : '加载中...',
            icon: data ? data.icon ? data.icon : "none" : "none",
            mask: data ? (data.mask ? data.mask : true) : true
        });
    }

    public hideLoading(): void {
        wx.hideLoading();
    }

    /**
     * 获取页面可用高度
     * 
     * @returns {number} 
     * @memberof UiManager
     */
    public getPageHeight(): number {
        return this.pageRoot.getPageHeight();
    }
    /**
     * 获取顶部可用距离
     */
    public getTopOffset(): number {
        return this.pageRoot.getTopOffset();
    }

    /**
 * 获取刘海距离
 * 
 * @returns {number} 
 * @memberof UiManager
 */
    public getFixOffset(): number {
        return this.pageRoot.GuideFixOffset;
    }


}