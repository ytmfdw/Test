class Index {
	private static app: Index = null;
	public systemInfo: any = null;

    /**
* 所有页面的根元素
*/
	public static pageRoot: PageRoot = null;
	public uiManager: UiManager = null;
    /**
 * 默认高度
 */
	public static screenH = SCREEN_HEIGHT;
	/**页面有效高度 */
	public static pageHeight = Index.screenH;
    /**
     * 默认宽度
     */
	public static screenW = SCREEN_WIDTH;
    /**
     * 缩放
     */
	public static scaleX: number = 1;
    /**
     * 舞台高度
     */
	public static stageH = Index.screenH;
	//page

	public userId: string = null;
	public userData = {
		"userId": "user",                 //用户id
		"level": 0,                      //用户当前过关数
		"heroLevel": 1,                  //英雄等级
		"coin": 0,                     //金币数
		"power": 5                     //体力值
	};

	public banner: BannerManager = null;
    /**
     * 是否取消了分享
     * 
     * @type {boolean}
     * @memberof App
     */
	public shareCancel: boolean = false;
	public getShareTime: number = 0;

	public isShareGroup: boolean = false;
	public avUtils: AVUtils = null;
	//是否授权
	public isScope: boolean = false;
	public user: av.User = null;

	public isLogin: boolean = false;
	constructor() {
		app = this;
		Laya.MiniAdpter.init(true);
		//消除锯齿
		// Laya.Config.isAntialias = true;
		Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT, Laya.WebGL);
		// Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT);
		// Laya.init(500, 1000);
		// Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
		Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
		// Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
		Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
		//画布水平居中对齐
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
		let today = new Date();
		if ((today.getTime() - examineTime) / (1000 * 60 * 60 * 24) > 2) {
			//距离提审日期超过了两天
			ifShowBonus = true;
		}
		if (isWX) {
			Laya.stage.bgColor = BGCOLOR;
			this.systemInfo = wx.getSystemInfoSync();
			Index.scaleX = this.systemInfo.screenWidth / Index.screenW;
			//计算舞台高度，有可能 Laya.stage.height还没初始化好
			Index.stageH = this.systemInfo.screenHeight / Index.scaleX;
			Index.screenH = Index.stageH;
			ifShowBonus = wx.getStorageSync(IFSHOWBONUS);
			openId = wx.getStorageSync(OPENID);
			isMuteBgm = wx.getStorageSync(ISMUTEBGM);
			isMute = isMuteBgm;
			this.avUtils = AVUtils.getSelf();
			this.avUtils.login(this.loginSucess);
			// Laya.loader.load(bgImg, Laya.Handler.create(this, this.onBgImageLoaded), null, Laya.Loader.IMAGE);
			this.initWx();
			let cacheUserData = wx.getStorageSync(USERDATA);
			if (cacheUserData && cacheUserData != '') {
				this.userData = cacheUserData;
			}
			this.banner = new BannerManager(this);
		}
		Laya.stage.graphics.drawRect(0, 0, Laya.stage.width, Index.stageH, Laya.stage.bgColor);
		Index.app = this;
		this.onBgImageLoaded();
	}

	private loginSucess(user): void {
		let thiz = Index.getApp();
		if (user) {
			thiz.user = user;
			thiz.userId = user.id;
			openId = user.attributes ? (user.attributes.authData ? (user.attributes.authData.lc_weapp ? user.attributes.authData.lc_weapp.openid : '') : '') : '';
			wx.setStorage({
				key: OPENID,
				data: openId
			});
			Log.d('openId = ' + openId);
			//登录成功
			thiz.isLogin = true;
			//登录微信
			// thiz.getWxSetting(user);
			// thiz.dispatchState();
			//本地金币是否有缓存，没有就缓存云端
			let cacheUserData = wx.getStorageSync(USERDATA);
			if (!cacheUserData || cacheUserData == '') {
				let cloudUserData = user.get(USERDATA);
				if (cloudUserData) {
					wx.setStorageSync(USERDATA, thiz.userData);
					thiz.userData = cloudUserData;
				}
			} else {
				thiz.userData = cacheUserData;
			}
			thiz.userData.userId = thiz.userId;
			Index.pageRoot.setPowerNum(thiz.userData.power);
			//分享次数
			{
				let cacheShareStr = wx.getStorageSync(SHARECOUNT);
				if (cacheShareStr !== '' && !isNaN(cacheShareStr)) {
					shareCount = parseInt(cacheShareStr);
					//本地有金币
					//如果云端也有，取大的
					let cloudShareCount = user.get(SHARECOUNT);
					if (shareCount > cloudShareCount) {
						//本地要大于云端，同时没有提现，同步到云端
						// user.set(SHARECOUNT, shareCount);
					} else {
						shareCount = cloudShareCount;
						//其他情况，云端保存到本地
						wx.setStorageSync(SHARECOUNT, cloudShareCount);
					}
				} else {
					shareCount = user.get(SHARECOUNT);
					wx.setStorageSync(SHARECOUNT, shareCount);
				}
			}
			//成功打开视频次数
			{
				let cacheOpenVideoCount = wx.getStorageSync(OPENVIDEOCOUNT);
				if (cacheOpenVideoCount !== '' && !isNaN(cacheOpenVideoCount)) {
					openVideoCount = parseInt(cacheOpenVideoCount);
					//本地有金币
					//如果云端也有，取大的
					let cloudOpenVideoCount = user.get(OPENVIDEOCOUNT);
					if (openVideoCount > cloudOpenVideoCount) {
						//本地要大于云端，同时没有提现，同步到云端
						// user.set(SHARECOUNT, openVideoCount);
					} else {
						openVideoCount = cloudOpenVideoCount;
						//其他情况，云端保存到本地
						wx.setStorageSync(OPENVIDEOCOUNT, cloudOpenVideoCount);
					}
				} else {
					openVideoCount = user.get(OPENVIDEOCOUNT);
					wx.setStorageSync(OPENVIDEOCOUNT, openVideoCount);
				}
			}
			//成功看完视频次数
			{
				let cacheFinishVideoCount = wx.getStorageSync(FINISHVIDEOCOUNT);
				if (cacheFinishVideoCount !== '' && !isNaN(cacheFinishVideoCount)) {
					finishVideoCount = parseInt(cacheFinishVideoCount);
					//本地有金币
					//如果云端也有，取大的
					let cloudFinishVideo = user.get(FINISHVIDEOCOUNT);
					if (finishVideoCount > cloudFinishVideo) {
						//本地要大于云端，同时没有提现，同步到云端
						// user.set(SHARECOUNT, finishVideoCount);
					} else {
						finishVideoCount = cloudFinishVideo;
						//其他情况，云端保存到本地
						wx.setStorageSync(FINISHVIDEOCOUNT, cloudFinishVideo);
					}
				} else {
					finishVideoCount = user.get(FINISHVIDEOCOUNT);
					wx.setStorageSync(FINISHVIDEOCOUNT, finishVideoCount);
				}
			}
			//今天的数据
			{
				let cacheTodayData = getTodayData();
				let cloudTodayData = user.get(TODAYDATA);
				let localSave: boolean = false;
				//如果云端有，且是今天的，且比本地的大
				if (cloudTodayData && cloudTodayData.date && cloudTodayData.date == todayData.date) {
					if (cloudTodayData.video > todayData.video) {
						todayData.video = cloudTodayData.video;
						localSave = true;
					}
					if (cloudTodayData.ifGift) {
						todayData.ifGift = true;
						localSave = true;
					}
					if (cloudTodayData.hasGivePower) {
						todayData.hasGivePower = true;
						localSave = true;
					}
				}
				//判断是否需要送体力
				/*	if (!todayData.hasGivePower && thiz.userData.power < maxPower) {
						UiManager.getSelf().showToast('每日登录赠送5体力');
						thiz.userData.power += givePoser;
						todayData.hasGivePower = true;
					}*/
				if (localSave) {
					setTodayData();
				}
			}
			/*if (UiManager.getSelf().homePage) {
				UiManager.getSelf().homePage.setPowerView();
			}*/
			//登录时同步一次
			syncUser();
		} else {
			//登录失败
			//本地是否有缓存
			this.userId = wx.getStorageSync(USERID);
			openId = wx.getStorageSync(OPENID);
		}

	}
    /**
     * 授权成功后回调
     * 
     * @private
     * @param {av.User} user 
     * @memberof App
     */
	private scopeSuccess(user: av.User): void {
		wx.setStorage({ key: USER, data: user });
		wx.setStorage({ key: NICKNAME, data: user.attributes.nickName });
		wx.setStorage({ key: AVATARURL, data: user.attributes.avatarUrl });
		this.isScope = true;
		var nickName = user.attributes.nickName;
		if (nickName && nickName.indexOf('game') > -1) {
			ifShowBonus = false;
		}
		//下载头像
		downLoadFile(user.attributes.avatarUrl);
	}

    /**
* 微信相关的
*/
	public initWx() {
		if (isWX) return;
		//分享设置
		wx.showShareMenu({
			withShareTicket: true
		});
		var thiz = this;
		if (ifAldShare) {
			wx.aldOnShareAppMessage(function () {
				//判断是否是特殊用户分享
				var tmp_query = '';
				tmp_query = 'uid=' + thiz.userId + '&state=' + ShareType.MENU;
				Log.d('右上角转发~~~');
				Log.d('右上角转发~~~');
				Log.d(tmp_query);
				return {
					query: tmp_query,
					title: '据说只有1%的人能过关，是你吗？',
					// imageUrl: tempFilePath
					imageUrl: LOCAL_SHARE,
				}
			});
		} else {
			wx.onShareAppMessage(function () {
				//判断是否是特殊用户分享
				var tmp_query = '';
				tmp_query = 'uid=' + thiz.userId + '&state=' + ShareType.MENU;
				Log.d('右上角转发~~~');
				Log.d(tmp_query);
				return {
					query: tmp_query,
					title: '据说只有1%的人能过关，是你吗？',
					// imageUrl: tempFilePath
					imageUrl: LOCAL_SHARE,
				}
			});
		}
	}
	//加载分包
	private onBgImageLoaded() {
		Index.pageRoot = new PageRoot(this, Index.screenW, Index.screenH);
		Log.d('screenH:' + Index.screenH);
		Laya.stage.addChild(Index.pageRoot);
		this.uiManager = UiManager.getSelf(this);
		this.uiManager.addPage(LoadPage.getSelf(/*this*/));
		LoadPage.getSelf(/*this*/).loadRes(this.onSubpackageLoaded);
	}

	private onSubpackageLoaded(flag: boolean): void {
		Log.d('分包加载完成::::' + flag);
		let thiz = Index.app;//=======================>这里的thiz一定要指向App，不能用this,因为onSubpackageLoaded是从子线程中加载进来的，this指向的是子线程
		if (flag) {
			let resPath = "res/atlas/comp.atlas";
			Laya.loader.load(resPath, Laya.Handler.create(thiz, thiz.onAssetsLoaded), null, Laya.Loader.ATLAS);
		} else {
			//资源加载失败，重新加载
			showModal({
				content: "资源加载失败，是否重试？",
				showCancel: true,
				confirmText: "重载",
				success: res => {
					if (res.confirm) {
						LoadPage.getSelf(/*thiz*/).loadRes(thiz.onSubpackageLoaded);
					}
				}
			});

		}
	}

	private onAssetsLoaded(): void {
		Log.d('资源加载完成::::');
		//资源加载完成
		// this.gotoPage(HomePage.getSelf(this));

		// HomePage.getSelf(this).setGameData(this.userData);
		//加载页面销毁
		LoadPage.getSelf().destroy();
		Index.pageRoot.layoutTop.visible = true;
		Index.pageRoot.setPowerNum(this.userData.power);
		UiManager.getSelf().goHome();
	}

	public static getApp(): Index {
		return app;
	}
}

var app = new Index();
//
wx.onShow(res => {

});


wx.onHide(function () {
	Log.d('切到后台  ~~~~~~');
	// bgMusic = null;
	wx.setStorageSync(USERDATA, app.userData);
	syncUser();
});