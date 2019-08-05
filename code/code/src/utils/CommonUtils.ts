
/**
 * 生成指定位数的随机码
 * @param num 
 */
function createOneyCode(num?: number): string {
    return 'FN_' + uuid(isNaN(num) ? 8 : num, 16);
}


function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}


/**
 * 分转换成元，保留两位小数点
 * @param money 
 */
function fenToYuan(money: number): string {
    if (isNaN(money)) {
        return '0.00';
    }
    return (money / 100.00).toFixed(2);
}


/**
     * 检查版本更新
     */
function checkForUpdate(): void {
    if (!isWX) return;
    if (typeof wx.getUpdateManager === 'function') {
        const updateManager = wx.getUpdateManager();

        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            Log.d("版本更新信息：");
            Log.d(res.hasUpdate);
        });

        updateManager.onUpdateReady(function () {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            showModal({
                title: '更新提示',
                content: '新版本已经准备好，重启应用以使用',
                cancelText: "知道了",
                showCancel: true,
                confirmText: "重启",
                success: function (res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate();
                    }
                }
            })
        });
    }
}
//弹出提示框
function showModal(data: any): void {
    if (isWX) {

        let showData = {
            title: data.title ? data.title : "温馨提示",
            content: data.content ? data.content : "",
            cancelText: data.cancelText ? data.cancelText : "取消",
            confirmText: data.confirmText ? data.confirmText : "确定",
            showCancel: data.showCancel ? data.showCancel : data.cancelText,
            success: data.success ? data.success : null,
            confirmColor: data.confirmColor ? data.confirmColor : "#576B95",
            fail: data.fail ? data.fail : null,
            complete: data.complete ? data.complete : null,
            cancelColor: data.cancelColor ? data.cancelColor : "#000000"
        };
        UiManager.getSelf(Index.getApp()).showModal(showData);
    }
}

function showToast(data: any): void {
    if (isWX) {
        /*  wx.showToast({
              title: data.title ? data.title : '^_^',
              icon: data.icon ? data.icon : 'none',
              duration: data.duration ? data.duration : 1500
          });*/

        let showData = {
            title: data.title ? data.title : '^_^',
            duration: data.duration ? data.duration : 1500
        };

        UiManager.getSelf(Index.getApp()).showToast(showData.title, showData.duration);
    }
}

function showLoading(data?: any): void {
    UiManager.getSelf().showLoading(data);
}

function hideLoading(): void {
    UiManager.getSelf().hideLoading();
}

/**
 * 数组复制 
 * @param src 源数组； 
 * @param srcPos 源数组要复制的起始位置； 
 * @param dest 目的数组； 
 * @param destPos 目的数组放置的起始位置；
 * @param length 复制的长度。 
 * src and dest都必须是同类型或者可以进行转换类型的数组．
 */
function arraycopy(src: Array<any>, srcPos: number, dest: Array<any>, destPos: number, length: number): void {
    var srcLen = src.length;
    var endPos = Math.min(srcLen, srcPos + length);
    for (var i = srcPos, j = destPos; i < endPos; i++ , j++) {
        dest[j] = src[i];
    }
}



/**
 * 日期格式化函数
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 
 * yyyy-MM-dd hh:mm:ss.S  ==> 2006-07-02 08:09:04.423
 * yyyy-M-d h:m:s.S       ==> 2006-7-2 8:9:4.18
 * 
 * @param date 要格式化的日期
 * @param fmt  格式字符串
 */
function formatDate(date: Date, fmt: string) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**获取星期一的日期 */
function getFirstDayOfWeek(date?: Date) {
    var tmpDate = date ? date : new Date();
    var day = tmpDate.getDay() || 7;
    return new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate() + 1 - day);
};
/**
 * 震动时间
 * @param time  毫秒数
 */
function vibrate(time: number) {
    if (isNoVirbate) return;
    // Log.d('virbrate  time:' + time);
    let count = time / 15;
    let index = 0;
    let obj = { count: count, index: index };
    Laya.timer.loop(15, obj, function () {
        // Log.d('virbrate  loop   index:' + index);
        wx.vibrateShort();
        index++;
        if (index > count) {
            Laya.timer.clearAll(obj);
            obj = null;
        }
    });
}

function vibrateLong() {
    if (isNoVirbate) return;
    wx.vibrateLong();
}

function vibrateShort() {
    if (isNoVirbate) return;
    wx.vibrateShort();
}
/**
 * 显示骨骼动画
 * 
 * @param {string} aniPath 动画路径
 * @param {string} [aniName] 可选，动画名称
 * @param {Laya.Sprite} [father] 可选，动画加载父控件
 * @param {Function} [callBack] 播放结束回调
 * @param {number} [x] 可选，位置
 * @param {number} [y] 
 * @param {number} [scale] 可选，缩放
 */
function showOverAni(aniPath: string, aniName?: string, father?: Laya.Sprite, callBack?: Function, x?: number, y?: number, scale?: number) {
    //显示升官动画
    let resPath = aniPath;
    // var ske: Laya.Skeleton = new Laya.Skeleton();
    let thiz = this;
    let mTemplet = new Laya.Templet();
    mTemplet.on(Laya.Event.COMPLETE, this, function () {
        // Log.d('动画加载完成~~~~~~~~~');
        let mArmature = mTemplet.buildArmature(1);
        if (aniName) {
            mArmature.play(aniName, false);
        } else {

            let aniNum = mArmature.getAnimNum();
            let names = [];
            for (let i = 0; i < aniNum; i++) {
                var name = mTemplet.getAniNameByIndex(i);
                // Log.d('动画名：' + name);
                names.push(name);
            }
            // Log.d('动画个数：' + aniNum);
            mArmature.play(names[0], false);
        }
        // mArmature.scale(1.5, 1.5);
        // mArmature.pos(thiz.imgHouse.width / 2, thiz.imgHouse.height);
        // mArmature.pos(thiz.heroShadow.width / 2, 0);
        mArmature.pos(x ? x : 0, y ? y : 0);
        if (scale) {
            mArmature.scale(scale, scale);
        }
        if (father) {
            father.addChild(mArmature);
        } else {
            Laya.stage.addChild(mArmature);
        }
        // thiz.play();
        mArmature.on(Laya.Event.STOPPED, this, function () {
            // Log.d('fix 播放完成 =======');
            mArmature.destroy();
            mTemplet.destroy();
            Laya.loader.clearRes(resPath);
            //播放结束 回调
            if (callBack) {
                callBack();
            }
        });
    });
    mTemplet.on(Laya.Event.ERROR, this, function () {
        Log.d('加载出错~~~~~~~~');
    });
    mTemplet.loadAni(resPath);
}

/**
 * 随机生成一个汉字 
 * 
 * @returns {string} 
 */
function randomStr(): string {
    // let str = '\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16);
    let str = '\\u' + (Math.round(Math.random() * 3000) + 19968).toString(16);
    return (decode(str));



}
/**将汉字 \u编码解码 */
function decode(s) {
    isNaN
    return unescape(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
}


function encode1(s) {
    return escape(s).replace(/%(u[0-9A-F]{4})|(%[0-9A-F]{2})/gm, function ($0, $1, $2) {
        return $1 && '\\' + $1.toLowerCase() || unescape($2);
    });
}



/**判断两点是否相邻 */
function isNear(p1, p2): boolean {
    return (((p1.y === p2.y) && Math.abs(p1.x - p2.x) === 1) || (p1.x === p2.x && Math.abs(p1.y - p2.y) === 1));
}

//从point1移动到point2,转过的角度    
function getPointAngle(point1, point2): number {
    if (point2.x == point1.x && point2.y == point1.y) {
        return 0;
    }
    if (point2.x > point1.x && point2.y > point1.y) {//第一象限
        return Math.atan((point2.y - point1.y) / (point2.x - point1.x)) / Math.PI * 180
    } else if (point2.x < point1.x && point2.y > point1.y) {
        return Math.atan((point1.x - point2.x) / (point2.y - point1.y)) / Math.PI * 180 + 90
    } else if (point2.x < point1.x && point2.y < point1.y) {
        return Math.atan((point1.y - point2.y) / (point1.x - point2.x)) / Math.PI * 180 + 180
    } else if (point2.x > point1.x && point2.y < point1.y) {
        return Math.atan((point2.x - point1.x) / (point1.y - point2.y)) / Math.PI * 180 + 270
    }
    if (point2.x == point1.x && point2.y > point1.y) {
        return 90;//下
    } else if (point2.x == point1.x && point2.y < point1.y) {
        return 270;//上
    } else if (point2.x > point1.x && point2.y == point1.y) {
        return 360;//右
    } else {
        return 180;//左
    }
}

/**
 * 根据索引值，获取该索引所在的二维数组位置
 * @param col 
 * @param index 
 */
function getPointByIndex(index: number, col: number): any {
    var point = { x: 0, y: 0 };
    point.x = index % col;
    point.y = Math.floor(index / col);
    return point;
}
/**
 * 根据点坐标，获取该点的索引
 * @param col 
 * @param index 
 */
function getIndexByPoint(x: number, y: number, col: number): number {
    var index = -1;
    index = y * col + x;
    return index;
}


/**
* 存储分数到微信开放域，只有更大分值时才存储
* @param {Number} score 
* @param {function} callback 
*/
function saveScoreToWxCloudStorage(score: number, callback?: Function) {
    Log.d('saveScoreToWxCloudStorage=============score=' + score);
    var kvDataList = [];
    var maxScore = wx.getStorageSync(SCORE_KEY);
    if (maxScore == null || maxScore == "" || score > maxScore) {
        wx.setStorageSync(SCORE_KEY, score);
        let date = Math.round(new Date().getTime() / 1000);
        var scoreValue = JSON.stringify({
            "wxgame": {
                "score": score,
                "update_time": date,
            }
        });
        //总分数
        kvDataList.push({ key: SCORE, value: scoreValue });
    }
    if (kvDataList.length > 0) {
        wx.setUserCloudStorage({
            KVDataList: kvDataList,
            success: res => {
                Log.d('wx cloud storage save done: ' + res);
                Log.d(res);
                callback(1);
            },
            fail: res => {
                Log.d('wx cloud storage save failed: ' + res);
                callback(0);
            }
        });
    } else {
        callback(1);
    }
}

/**
 * 单位转换
 * @param num 
 */
function num2size(num: number): string {
    if (num === 0) return '0';
    if (num < 1000) {
        return num + '';
    }
    var k = 1000, // or 1024
        sizes = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
        i = Math.floor(Math.log(num) / Math.log(k));

    return (num / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}


/**
 * 灰化控件
 * @param view 
 */
function grayView(view: Laya.Sprite): void {
    var grayMat: Array<number> =
        [
            .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0
        ];
    //创建一个颜色滤镜对象,红色
    var grayFilter: Laya.ColorFilter = new Laya.ColorFilter(grayMat);
    view.filters = (view.filters ? (view.filters.push(grayFilter), view.filters) : [grayFilter]);
}