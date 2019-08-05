class AVUtils {
    private static self: AVUtils = null;
    private app: Index = null;
    private constructor() {
        this.app = Index.getApp();
        if (!isWX) return;
        AV.init({
            appId: APP_ID,
            appKey: APP_KEY
        });
    }
    public static getSelf() {
        if (!AVUtils.self) {
            AVUtils.self = new AVUtils();
        }
        return AVUtils.self;
    }
    /**
     * 登录
     * 
     * @param {Function} [callBack] 
     * @memberof AVUtils
     */
    public login(callBack?: Function) {
        if (DEBUG) {
            UiManager.getSelf().showToast('开始登录');
        }
        AV.User.loginWithWeapp().then(user => {
            insertCount({ userId: user.id, type: "Leancloud登录成功！", mark: "" });
            //获取版本设置，登录成功后才去获取关键数据
            AVUtils.self.getVersionSettings();
            if (DEBUG) {
                UiManager.getSelf().showToast('登录成功');
            }
            //缓存用户信息
            wx.setStorageSync(USER, user);
            if (callBack) {
                callBack(user);
            }
        }).catch(e => {
            Log.d(e);
            insertCount({ userId: "errId", type: "Leancloud登录失败！" });
            if (DEBUG) {
                UiManager.getSelf().showToast('登录失败');
            }
            if (callBack) {
                callBack(null);
            }
        })
    }
    /**
     * 得到数据
     * 
     * @param {string} className 要查询的表名
     * @param {[]} params 参数 [{key,value,op},{key,value,op}] 键，值，操作符(>,<,=,!=,>=,<=,desc,asc)
     * @param {Function} callBack 查询结果
     * @memberof AVUtils
     */
    public getData(className: string, params: Array<any>, callBack: Function): void {
        var query = new AV.Query(className);
        if (params && params.length > 0) {
            var len = params.length;
            for (var i = 0; i < len; i++) {
                var param = params[i];
                var op = param.op ? param.op : "=";
                switch (op) {
                    case "=": {
                        query.equalTo(param.key, param.value);
                    } break;
                    case ">": {
                        query.greaterThan(param.key, param.value);
                    } break;
                    case ">=": {
                        query.greaterThanOrEqualTo(param.key, param.value);
                    } break;
                    case "<": {
                        query.lessThan(param.key, param.value);
                    } break;
                    case "<=": {
                        query.lessThanOrEqualTo(param.key, param.value);
                    } break;
                    case "!=": {
                        query.notEqualTo(param.key, param.value);
                    } break;
                    case "desc": {
                        query.descending(param.key);
                    } break;
                    case "asc": {
                        query.ascending(param.key);
                    } break;
                    case "limit": {
                        query.limit(param.value);
                    } break;
                    case "skip": {
                        query.skip(param.value);
                    }
                }
            }
        }
        query.find().then(data => {
            callBack({ state: 1, data: data });
        }).catch(e => {
            callBack({ state: 0, data: null });
        });
    }

    /**
     * 更新数据
     * 
     * @param {AV.Object} avObj 
     * @param {*} data 
     * @param {Function} [callBack] 
     * @memberof AVUtils
     */
    public setData(avObj: AV.Object, data: any, callBack?: Function): void {
        if (avObj && data) {
            for (var key in data) {
                Log.d('key=' + key + ';value=' + data[key]);
                avObj.set(key, data[key]);
            }
            avObj.save().then(res => {
                if (callBack) {
                    callBack({ state: 1, data: res });
                }
            }).catch(e => {
                if (callBack) {
                    callBack({ state: 0, data: e });
                }
            });
        } else {
            if (callBack) {
                callBack({ state: 0, data: "对象或参数不能为null" });
            }
        }
    }
    /**
     * 插入一条数据
     * 
     * @param {string} className 
     * @param {*} data 
     * @param {Function} [callBack] 
     * @memberof AVUtils
     */
    public insert(className: string, data: any, callBack?: Function) {
        if (className && data) {
            var ToDo = AV.Object.extend(className);
            var toDo = new ToDo();
            for (var key in data) {
                Log.d('key=' + key + ';value=' + data[key]);
                toDo.set(key, data[key]);
            }
            toDo.save().then(res => {
                if (callBack) {
                    callBack({ state: 1, data: res });
                }
            }).catch(e => {
                if (callBack) {
                    callBack({ state: 0, data: e });
                }
            });
        } else {
            if (callBack) {
                callBack({ state: 0, data: "对象或参数不能为null" });
            }
        }

    }
    //获取当前版本的功能设置
    public getVersionSettings() {
        //获取settings
        Log.d('Version:' + VERSION);
        var thiz = this;
        var query = new AV.Query('settings');
        query.equalTo('version', VERSION);
        query.first().then(function (data) {
            if (data == null) {
                Log.d('未查询到对应版本settings');
            }
            else {
                wx.setStorage({ key: SETTING_VERSION_KEY, data: VERSION });
                var settings = data.get('setting');
                Log.d('setting:');
                Log.d(settings);

                if (settings.banners !== undefined) {
                    BANNERS = settings.banners;
                }
                if (settings.videos !== undefined) {
                    VIDEOS = settings.videos;
                }
                if (settings.ifAldShare !== undefined) {
                    ifAldShare = settings.ifAldShare;
                }
                if (settings.ifShowApps !== undefined) {
                    ifShowApps = settings.ifShowApps;
                }
                if (settings.ifShowBonus !== undefined) {
                    ifShowBonus = settings.ifShowBonus;
                }
                if (settings.ifActivity !== undefined) {
                    ifActivity = settings.ifActivity;
                }
                //去掉腾讯的账号
                var nickName = wx.getStorageSync(NICKNAME);
                if (nickName && nickName.indexOf('game') > -1) {
                    ifShowBonus = false;
                }
                //游戏界面模式 
                if (settings.doubleGroupMsg !== undefined) {
                    doubleGroupMsg = settings.doubleGroupMsg;
                }
                //分享视频次数
                if (settings.tipShareMsg !== undefined) {
                    tipShareMsg = settings.tipShareMsg;
                }
                if (settings.bounsShareMsg !== undefined) {
                    bounsShareMsg = settings.bounsShareMsg;
                }
                var shareContent = data.get('shareContent');
                if (shareContent && shareContent.length > 0) {
                    syncSharedContent(shareContent);
                } else {
                    syncSharedContent(null);
                }
              
                Laya.timer.once(2000, thiz.app, function () {
                    //设置云端数据
                });

                var bgmCloud = data.get('bgm');
                if (bgmCloud && bgmCloud.length > 0) {
                    //添加到背景音乐集合中
                    let files = [];
                    let len = bgmCloud.length;
                    for (let i = 0; i < len; i++) {
                        files.push(bgmCloud[i].url);
                    }
                    Log.d(bgms);
                    downLoadFileSync(files);
                    bgms = bgms.concat(bgmCloud);
                }

                wx.setStorage({
                    key: IFSHOWBONUS,
                    data: ifShowBonus
                });
            }
        }, function (error) {
            Log.d('Query Leancloud Error: ' + error.code + ' ' + error.message);
        });
    }
    /**
     * 查询活动
     * @param callBack 
     */
    public getActivity(callBack) {
        showLoading();
        var thiz = this;
        var cache = wx.getStorageSync(ACTIVITY);
        if (cache) {
            hideLoading();
            var cacheData = cache.data;
            if (cacheData && cacheData.length > 0) {
                var rnd = Math.floor(Math.random() * cacheData.length);
                callBack(cacheData[rnd].data);
            } else {
                callBack(null);
            }
            return;
        }

        var query = new AV.Query('activity');
        query.greaterThanOrEqualTo('duration', new Date());
        query.find().then(data => {
            hideLoading();
            var cacheTmp = {
                state: 0,
                data: data
            };
            if (data && data.length > 0) {
                cacheTmp.state = 1;
                var rnd = Math.floor(Math.random() * data.length);
                callBack(data[rnd].get("data"));
            } else {
                callBack(null);
            }
            wx.setStorage({
                key: ACTIVITY,
                data: cacheTmp
            });
        }).catch(e => {
            hideLoading();
            callBack(null);
        });
    }
}