class BannerManager {
    /**游戏界面的Banner广告 */
    //隐藏所有广告
    public static HIDE_ALL: number = -1;
    /**banner */
    private static VIDEOSNAME = [
        '游戏界面提示视频',//游戏界面提示视频
        '过关大礼包视频',//过关大礼包视频
    ];
    //所有banner数组
    private bannerMap: Map = new Map();
    //所有激励视频广告数组
    private videoMap: Map = new Map();
    private app: Index = null;
    private static self: BannerManager;
    constructor(app: Index) {
        this.app = app;
        //预加载视频广告
        this.loadVideo();
    }
    /**
     * 获取实例
     * 
     * @static
     * @param {Index} [app] 
     * @returns {BannerManager} 
     * @memberof BannerManager
     */
    public static getSelf(app?: Index): BannerManager {
        if (!BannerManager.self) {
            BannerManager.self = new BannerManager(app ? app : Index.getApp());
        }

        return BannerManager.self;
    }




    /**初始化指定广告，如果没有指定，就是全部广告  */
    public initBanner(bannerIndex: number, callBack?: Function) {
        var entity = this.bannerMap.get(BANNERS[bannerIndex]);
        if (!entity) {
            entity = wx.createBannerAd({
                adUnitId: BANNERS[bannerIndex],
                style: {
                    left: 0,
                    top: this.app.systemInfo.height - 100,
                    width: this.app.systemInfo.screenWidth,
                }
            });

            //错误回调
            entity.onError(function (e) {
                if (e) {
                    insertCount({ userId: this.app.userId, type: "banner加载错误", mark: 'errCode:' + e.errCode + ',errMsg:' + e.errMsg });
                    if (e.errCode == 1004 || e.errCode == 0 || e.errCode == -1000) {
                        bannerError = true;
                    }
                    if (callBack) {
                        callBack(bannerIndex, e);
                    }
                }
            });
            this.bannerMap.put(BANNERS[bannerIndex], entity);
        }
    }

    /**得到指定Banner */
    public getBanner(bannerIndex: number): any {
        var entity = this.bannerMap.get(BANNERS[bannerIndex]);
        if (!entity) {
            entity = wx.createBannerAd({
                adUnitId: BANNERS[bannerIndex],
                style: {
                    left: 0,
                    top: this.app.systemInfo.height - 100,
                    width: this.app.systemInfo.screenWidth,
                }
            });
            this.bannerMap.put(BANNERS[bannerIndex], entity);
        }

        return entity;
    }

    /**显示指定广告
     * 
     * @param bannerIndex:广告索引
     * @param height:指定高度
     * @param callBack  :回调，-1高度不够，0正常显示，-2创建为空
     */
    public showBanner(bannerIndex: number, height: number, callBack?: Function) {

        var thiz = this;
        //先判断是否存在
        var adKey = BANNERS[bannerIndex];
        var entity = this.bannerMap.get(adKey);
        //判断高度是否足够
        if (entity) {
            this.bannerMap.remove(adKey);
            entity.hide();
            entity.destroy();
            entity = null;
        }
        if (!entity) {
            entity = wx.createBannerAd({
                adUnitId: adKey,
                style: {
                    left: 0,
                    top: 0,
                    width: this.app.systemInfo.screenWidth,
                }
            });
        }
        entity.onError(e => {
            Log.d(e);
            if (e) {
                insertCount({ userId: this.app.userId, type: "banner加载错误", mark: 'errCode:' + e.errCode + ',errMsg:' + e.errMsg });
                if (e.errCode == 1004 || e.errCode == 0 || e.errCode == -1000) {
                    bannerError = true;
                }
            }
            if (callBack) {
                callBack(-2);
            }
        });
        if (!entity) {
            if (callBack) {
                callBack(-2);
            }
            return;
        }
        this.bannerMap.put(adKey, entity);
        entity.onResize(size => {
            if (height) {
                if (height < size.height || (Index.stageH >= 1000 && height - 30 < size.height)) {
                    //高度不够，统计
                    // this.hideBanner(bannerIndex);
                    if (callBack) {
                        callBack(-1);
                    }
                    return;
                }
                if (Index.stageH >= 1000) {
                    //往上移动
                    entity.style.top = Index.getApp().systemInfo.screenHeight - 30 - size.height;
                } else {
                    entity.style.top = Index.getApp().systemInfo.screenHeight - size.height;
                }

                entity.show();
                if (callBack) {
                    callBack(0);
                }
            }
        });
    }
    /**显示指定广告
     * 
     * @param bannerIndex:广告索引
     * @param x  位置  Laya坐标体系
     * @param y  位置  Laya坐标体系
     * @param width 宽度 Laya坐标体系
     * @param callBack  :回调，-1高度不够，0正常显示，-2创建为空
     */
    public showBannerInPosition(bannerIndex: number, x: number, y: number, width?: number, callBack?: Function) {
        var thiz = this;
        //先判断是否存在
        var adKey = BANNERS[bannerIndex];
        var entity = this.bannerMap.get(adKey);;
        //判断高度是否足够
        if (entity) {
            this.bannerMap.remove(adKey);
            entity.hide();
            entity.destroy();
            entity = null;
        }
        entity = wx.createBannerAd({
            adUnitId: adKey,
            style: {
                left: x * Index.scaleX,
                top: y * Index.scaleX,
                width: width ? width * Index.scaleX : Index.getApp().systemInfo.screenWidth,
            }
        });
        entity.onError(e => {
            Log.d(e);
            if (e && e.errCode) {
                insertCount({ userId: this.app.userId, type: "banner加载错误", mark: 'errCode:' + e.errCode });
                if (e.errCode == 1004 || e.errCode == 0 || e.errCode == -10000) {
                    bannerError = true;
                }
            }
            if (callBack) {
                callBack(-2);
            }
        });
        if (!entity) {
            if (callBack) {
                callBack(-2);
            }
            return;
        }
        this.bannerMap.put(adKey, entity);
        entity.onResize(size => {
            entity.show();
            if (callBack) {
                callBack(0);
            }
        });
    }
    /**
     * 隐藏指定Banner
     * 
     * @param bannerIndex  指定广告索引，如果<0，则表示全部
     * 
     */
    public hideBanner(bannerIndex: number) {
        if (bannerIndex >= 0) {
            var entity = this.bannerMap.get(BANNERS[bannerIndex]);
            if (entity) {
                this.bannerMap.remove(BANNERS[bannerIndex]);
                entity.hide();
                entity.destroy();
                entity = null;
            }
        } else {
            var keyList = this.bannerMap.keyArray();
            var keyLen = keyList.length;
            for (var i = 0; i < keyLen; i++) {
                var entity = this.bannerMap.get(keyList[i]);
                if (entity) {
                    entity.hide();
                    entity.destroy();
                    entity = null;
                }
            }
        }
    }


    //======================视频广告部分
    /**
     * 得到指定视频广告
     * @param videoIndex 
     */
    public getVideoAd(videoIndex: number): any {
        var entity = this.videoMap.get(VIDEOS[videoIndex]);
        if (!entity) {
            entity = wx.createRewardedVideoAd({
                adUnitId: VIDEOS[videoIndex]
            });
            entity.onError(e => {
                Log.d(e);
            });
            this.videoMap.put(VIDEOS[videoIndex], entity);
        } else {
            entity.onError(e => {
                Log.d(e);
            });
        }
        return entity;
    }

    private hasLoadAd = null;
    /**
     *预加载视频
     * @param videoIndex 
     */
    public loadVideo(callBack?: Function): any {
        Log.d("loadVideo  =============");
        if (this.hasLoadAd) {
            if (callBack) {
                callBack(this.hasLoadAd);
            }
            return;
        }
        var entity = this.getVideoAd(0);
        if (entity != null) {
            entity.load()
                .then(() => {
                    Log.d("loadVideo  ============= success!!!");
                    //保存已经缓存的广告
                    canShowVideo = true;
                    this.hasLoadAd = entity;
                    if (callBack) {
                        callBack(entity);
                    }
                })
                .catch(err => {
                    Log.d("loadVideo  err=>");
                    Log.d(err);
                    this.hasLoadAd = null;
                    //不能看视频
                    canShowVideo = false;
                    if (callBack) {
                        callBack(null);
                    }
                });
        }
    }

    /**
     * 加载完成后的视频广告
     * @param entity 
     * @param callBack 
     */
    public showVideo(callBack: Function, errorMsg?: string, incomplete?: string, errorCallBack?: Function): any {
        if (this.hasLoadAd) {
            playBgMusic(false);
            var thiz = this;
            this.hasLoadAd.onClose((status) => {
                Log.d('提示视频广告close回调');
                thiz.hasLoadAd.offClose();
                this.hasLoadAd = null;
                //再预加载下一次
                thiz.loadVideo();
                //两次关闭时间必需大于15秒才算
                var dTime = (new Date().getTime() - this.videoCloseTime) / 1000;
                var isRealClose: boolean = dTime > 15000 ? true : false;
                thiz.videoCloseTime = new Date().getTime();
                Log.d('视频关闭时间：' + thiz.videoCloseTime);
                if (gameState == GAME_STATE.PLAYING) {
                    playBgMusic(true);
                }
                //转换成秒
                Log.d('时差：' + dTime + '秒');
                if ((status && status.isEnded) || status === undefined && isRealClose) {
                    //正常播放结束
                    //添加统计
                    insertCount({ userId: this.app.userId, type: COUNT_TYPE_VIDEO_FINISH, mark: 'userId:' + this.app.userId + ';video:' + BannerManager.VIDEOSNAME[0] + 'dTime:' + dTime + '秒' });
                    callBack();
                    finishVideoCount++;
                    wx.setStorageSync(FINISHVIDEOCOUNT, finishVideoCount);
                    todayData.video = todayData.video + 1;
                    setTodayData();
                } else {
                    //播放未完成
                    //添加统计
                    insertCount({ userId: this.app.userId, type: COUNT_TYPE_VIDEO_NOT_FINISH, mark: 'video:' + BannerManager.VIDEOSNAME[0] });
                    showModal({
                        title: '提示',
                        content: incomplete ? incomplete : '视频未完整播放，无法获得提示！',
                        confirmText: '好的',
                        showCancel: false,
                    });
                }
            })
            //显示广告
            this.hasLoadAd.show();
            openVideoCount++;
            wx.setStorageSync(OPENVIDEOCOUNT, openVideoCount);
        } else {
            if (errorCallBack) {
                errorCallBack();
            } else {
                //弹出提示
                showModal({
                    title: '提示',
                    content: errorMsg ? errorMsg : '非常抱歉，暂时没有可观看的视频，建议先使用金币看提示吧！',
                    confirmText: '好的',
                    showCancel: false,
                });
            }
        }
    }
    /**以毫秒为单位 */
    private videoCloseTime: number = -1;
    /**
     * 显示指定广告  本方法已废弃
     * @Deprecated
     * @param videoIndex    索引
     * @param callBack      回调
     * @param errorMsg      出错提示
     * @param incomplete    不完整提示
     */
    public showVideoAd(videoIndex: number, callBack: Function, errorMsg?: string, incomplete?: string, errorCallBack?: Function) {
        var entity = this.getVideoAd(videoIndex);
        var thiz = this;
        if (entity != null) {
            entity.load()
                .then(() => {
                    //背景音乐停止
                    //静音
                    playBgMusic(false);
                    //显示广告
                    entity.show();
                    openVideoCount++;
                    wx.setStorageSync(OPENVIDEOCOUNT, openVideoCount);
                })
                .catch(err => {
                    //不能看视频
                    canShowVideo = false;
                    //添加统计
                    insertCount({ userId: this.app.userId, type: COUNT_TYPE_VIDEO_ERROR, mark: 'video:' + BannerManager.VIDEOSNAME[videoIndex] });
                    playBgMusic(true);
                    if (errorCallBack && ifShowBonus) {
                        errorCallBack();
                    } else {
                        //弹出提示
                        showModal({
                            title: '提示',
                            content: errorMsg ? errorMsg : '非常抱歉，暂时没有可观看的视频，建议先使用金币看提示吧！',
                            confirmText: '好的',
                            showCancel: false,
                        });
                    }
                });
            //添加回调
            // ad.onClose(callBack);
            entity.onClose((status) => {
                Log.d('提示视频广告close回调');
                //两次关闭时间必需大于15秒才算
                var dTime = (new Date().getTime() - this.videoCloseTime) / 1000;
                var isRealClose: boolean = dTime > 15000 ? true : false;
                thiz.videoCloseTime = new Date().getTime();
                Log.d('视频关闭时间：' + thiz.videoCloseTime);
                entity.offClose();
                playBgMusic(true);
                //转换成秒
                Log.d('时差：' + dTime + '秒');
                if ((status && status.isEnded) || status === undefined && isRealClose) {
                    //正常播放结束
                    //添加统计
                    insertCount({ userId: this.app.userId, type: COUNT_TYPE_VIDEO_FINISH, mark: 'userId:' + this.app.userId + ';video:' + BannerManager.VIDEOSNAME[videoIndex] + 'dTime:' + dTime + '秒' });
                    callBack();
                    finishVideoCount++;
                    wx.setStorageSync(FINISHVIDEOCOUNT, finishVideoCount);
                    todayData.video = todayData.video + 1;
                    setTodayData();
                }
                else {
                    //播放未完成
                    //添加统计
                    insertCount({ userId: this.app.userId, type: COUNT_TYPE_VIDEO_NOT_FINISH, mark: 'video:' + BannerManager.VIDEOSNAME[videoIndex] });
                    showModal({
                        title: '提示',
                        content: incomplete ? incomplete : '视频未完整播放，无法获得提示！',
                        confirmText: '好的',
                        showCancel: false,
                    });
                }
            })
        }
    }
}