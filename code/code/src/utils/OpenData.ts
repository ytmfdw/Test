/**
 * 绘制开放域数据
 * @param {*} layout    用来显示开放域数据的Sprite
 */
function drawOpenData(layout: Laya.Sprite, isNeedFlase?: boolean) {
    clearDrawOpenData(layout);
    var sp: Laya.Sprite = new Laya.Sprite();
    sp.width = layout.width;
    sp.height = layout.height;
    var openDataContext = wx.getOpenDataContext();
    var sharedCanvas = openDataContext.canvas
    sharedCanvas.width = layout.width;
    sharedCanvas.height = layout.height;
    //先清空绘制
    // layout.graphics.clear(false);
    //设置大小
    var canvas = new Laya.Texture(sharedCanvas);
    canvas.bitmap.alwaysChange = true;//小游戏使用，非常费，每帧刷新
    sp.graphics.drawTexture(canvas);
    /* if (!isNeedFlase) {
         Laya.timer.once(1000, layout, function () {
             canvas.bitmap.alwaysChange = false;//小游戏使用，非常费，每帧刷新
         });
     }*/
    layout.addChild(sp);
}
/**
 * 即将超越
 * 绘制开放域数据
 * @param {*} layout    用来显示开放域数据的Sprite
 */
function drawOpenDataNoFlash(layout: Laya.Sprite) {
    if (!layout) return;
    //先清除当前对象上的定时器
    Laya.timer.clearAll(layout);
    var openDataContext = wx.getOpenDataContext();
    var sharedCanvas = openDataContext.canvas
    sharedCanvas.width = layout.width;
    sharedCanvas.height = layout.height;
    layout.graphics.clear(false);
    //延迟500ms进行绘制
    Laya.timer.once(500, layout, function () {
        //先清空绘制
        //设置大小
        var canvas = new Laya.Texture(sharedCanvas);
        // canvas.bitmap.alwaysChange = false;//小游戏使用，非常费，每帧刷新
        layout.graphics.drawTexture(canvas);
    });
}
/**
 * 清除开放域数据
 */
function clearDrawOpenData(layout: Laya.Sprite) {
    if (layout) {
        layout.destroyChildren();
    }
}

function changePage(page) {
    var openDataContext = wx.getOpenDataContext()
    openDataContext.postMessage({
        messageType: -2, //表示好友排行榜
        page: page
    });
}

/**
 * 清空数据
 */
function clearOpenData() {
    var openDataContext = wx.getOpenDataContext()
    openDataContext.postMessage({
        messageType: -1,
    });
}

const SHARED_KEY = 'sharedContent';
// 从服务器拿到分享内容
function syncSharedContent(shareContent) {
    if (!shareContent) {
        return;
    } else {
        Log.d(shareContent);
        wx.setStorage({ key: SHARED_KEY, data: shareContent });
        //下载相关图片
        var len = shareContent.length;
        //得到所有需要下载的图片地址
        var downPic = [];
        if (len > 0) {
            for (var i = 0; i < len; i++) {
                var tmpObj = shareContent[i];
                if (tmpObj.imgs && tmpObj.imgs.length > 0) {
                    //解析相关图片
                    for (var j = 0; j < tmpObj.imgs.length; j++) {
                        if (tmpObj.imgs[j].url) {
                            downPic.push(tmpObj.imgs[j].url);
                        }
                        //自定义分享图，添加背景
                        if (tmpObj.imgs[j].e && tmpObj.imgs[j].e.bg) {
                            downPic.push(tmpObj.imgs[j].e.bg);
                        }
                    }
                }

            }
        }
        Log.d(downPic);
        //一张一张的下载，防止带宽不足
        downLoadFileSync(downPic);
    }
}

/**
 * 一个一个的下载，直到全部下载完成
 * @param files 
 */
function downLoadFileSync(files: Array<string>): void {
    var tmp = files.pop();
    if (tmp) {
        downLoadFile(tmp, function () {
            Log.d('下载完一张：' + tmp);
            Log.d('接着下载下一张');
            downLoadFileSync(files);
        });
    }
}
/**图片预加载  */
function preload(arr: Array<string>) {
    Laya.loader.load(arr, Laya.Handler.create(this, function () {
        Log.d('图片加载完成 ');
    }), null, Laya.Loader.IMAGE);
}

//根据query，得到对应内容
function getShared(query) {
    var state = 0;
    state = getState(query);
    Log.d('得到state=' + state);
    var sharedContent = wx.getStorageSync(SHARED_KEY);
    if (typeof sharedContent == 'undefined') {
        return null;
    }
    var len = sharedContent.length;
    for (var i = 0; i < len; i++) {
        if (sharedContent[i].sharedType == state) {
            return sharedContent[i];
        }
    }
}


function getState(query) {
    if (query) {
        var result = /state=(\d+)/.exec(query);
        if (result && result.length > 1) {
            return parseInt(result[1]);
        }
    }
    return 0;
}


/**
 * 截屏分享
 * @param content 
 * @param query 
 * @param msg 
 */
function shareToFriendPrintLayout(content: Laya.Sprite, query?: string, msg?: string): void {
    Index.getApp().shareCancel = false;
    var state = getState(query);
    var newQuery = query ? query : ('uid=' + Index.getApp().userId + '&state=0');
    shareCount++;
    wx.setStorage({ key: SHARECOUNT, data: shareCount });
    //================================
    var shared = getShared(query);
    var imgPath = LOCAL_SHARE;
    var title = "这游戏告诉我们:犯下的错误会积累 获得的成功就会消失!";
    if (shared) {
        if (shared.imgs) {
            //新版本
            //1.产生一个随机数
            var rand = Math.random();
            // Log.d('生成随机数：' + rand);
            var data = null;
            var len = shared.imgs.length;
            for (var i = 0; i < len; i++) {
                var tmp = shared.imgs[i];
                if (rand >= tmp.min && rand < tmp.max) {
                    if (data && data.max < tmp.max) {
                        //有重叠
                        data = tmp;
                    } else {
                        data = tmp;
                    }
                }
            }
            if (!data) {
                data = shared.imgs[0];
            }
            title = data.title;
        }
    }
    if (msg) {
        title = msg;
    }
    if (!ifShowBonus) {
        title = "见过这种游戏机都是有故事的人了^_T";
    }
    Index.getApp().getShareTime = new Date().getTime();
    var htmlC = content.drawToCanvas(content.width, content.height, 0, 0);
    Laya.timer.once(300, Index.getApp(), function () {
        var canvas = htmlC.getCanvas();
        canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: 500,
            height: 400,
            destWidth: 500,
            destHeight: 400,
            success: function (res) {
                Log.d('截图成功：');
                Log.d(res);
                if (ifAldShare) {
                    wx.aldShareAppMessage({
                        query: newQuery,
                        imageUrl: res.tempFilePath,
                        title: title,
                        fail: () => {
                            //取消了分享
                            Index.getApp().shareCancel = true;
                        }
                    });
                } else {
                    wx.shareAppMessage({
                        query: newQuery,
                        imageUrl: res.tempFilePath,
                        title: title,
                        fail: () => {
                            //取消了分享
                            Index.getApp().shareCancel = true;
                        }
                    });
                }
            },
            complete: function () {
                Log.d('保存完成,销毁图片');
            }
        });
    });
    //关闭shareTicket分享
    setTimeout(function () {
        Log.d('update updateShareMenu withShareTicket')
        wx.updateShareMenu({
            withShareTicket: false
        });
    }, 2000);
}


//分享
function shareToFriend(msg?: string, query?: string) {
    Index.getApp().shareCancel = false;
    var state = getState(query);
    switch (state) {
        case ShareType.GROUP: {
            Index.getApp().isShareGroup = true;
        } break;
    }
    shareCount++;
    wx.setStorage({ key: SHARECOUNT, data: shareCount });
    //================================
    var shared = getShared(query);
    var imgPath = LOCAL_SHARE;
    var title = "我已经拿到钥匙了，你能打开门吗？";
    var imgId = 'none';
    var link = 'imgId=';
    var img: Laya.Image = new Laya.Image();
    img.width = 500;
    img.height = 400;
    var sprite: Laya.Sprite = new Laya.Sprite();
    sprite.width = 500;
    sprite.height = 400;
    sprite.visible = true;
    //调整到底层
    sprite.zOrder = -1;
    sprite.addChild(img);
    var spriteMask: Laya.Sprite = new Laya.Sprite();
    spriteMask.width = 500;
    spriteMask.height = 400;
    spriteMask.graphics.drawRect(0, 0, sprite.width, sprite.height, BGCOLOR);
    spriteMask.visible = true;
    sprite.addChild(spriteMask);
    Laya.stage.addChild(sprite);
    var isDelay: boolean = false;
    if (shared) {
        //兼容旧版本
        if (shared.imgs) {
            //新版本
            //1.产生一个随机数
            var rand = Math.random();
            // Log.d('生成随机数：' + rand);
            var data = null;
            var len = shared.imgs.length;
            for (var i = 0; i < len; i++) {
                var tmp = shared.imgs[i];
                if (rand >= tmp.min && rand < tmp.max) {
                    if (data && data.max < tmp.max) {
                        //有重叠
                        data = tmp;
                    } else {
                        data = tmp;
                    }
                }
            }
            if (!data) {
                data = shared.imgs[0];
            }

            if (data.e) {
                //自定义元素
                imgPath = data.e.bg;
                drawImg(img, data.e);
                isDelay = true;
            } else {
                imgPath = data.url;
            }
            title = data.title;
            imgId = data.id;
            link = data.link ? data.link : imgId = ' + imgId';
            Log.d(data);
        } else if (shared.sharedImg) {
            //旧版本
            imgPath = shared.sharedImg[0];
            title = shared.sharedTitle[0];
            link = 'imgId=' + imgId;

        }
    }
    //节省带宽，使用本地
    if (!ifShowBonus) {
        imgPath = LOCAL_SHARE;
    }
    //如果是自定义消息，就显示自定义的
    if (msg) {
        title = msg;
    }
    if (!ifShowBonus) {
        title = "我已经拿到钥匙了，你能打开门吗？";
    }
    //替换标题中的文字
    var nickName = wx.getStorageSync(NICKNAME);
    title = title.replace(/{name}/g, nickName);
    Log.d(title);
    //创建一个image
    //下载图片
    if (isDelay) {
        Laya.timer.once(200, Index.getApp(), downLoadFile, [imgPath, function (path) {
            // img.skin = path;
            var newQuery = query ? query : ('uid=' + Index.getApp().userId + '&state=0');
            // newQuery = 'imgId=' + imgId + '&' + newQuery;
            newQuery = link + '&' + newQuery;
            img.loadImage(path, 0, 0, 500, 400, Laya.Handler.create(Index.getApp(), shareImg, [img, imgId, newQuery, title]));
        }]);
    } else {

        downLoadFile(imgPath, function (path) {
            // img.skin = path;
            var newQuery = query ? query : ('uid=' + Index.getApp().userId + '&state=0');
            // newQuery = 'imgId=' + imgId + '&' + newQuery;
            newQuery = link + '&' + newQuery;
            Index.getApp().getShareTime = new Date().getTime();
            if (ifAldShare) {
                wx.aldShareAppMessage({
                    query: newQuery,
                    imageUrl: path,
                    title: title,
                    fail: () => {
                        //取消了分享
                        Index.getApp().shareCancel = true;
                    }
                });
            } else {
                wx.shareAppMessage({
                    query: newQuery,
                    imageUrl: path,
                    title: title,
                    fail: () => {
                        //取消了分享
                        Index.getApp().shareCancel = true;
                    }
                });
            }
            //关闭shareTicket分享
            setTimeout(function () {
                Log.d('update updateShareMenu withShareTicket')
                wx.updateShareMenu({
                    withShareTicket: false
                });
            }, 1500);
        });
    }
}

function drawImg(view: Laya.Image, obj) {
    //绘制自定义图片
    var nickName = wx.getStorageSync(NICKNAME);
    //1.绘制头像
    if (obj.headpos) {
        var path = wx.getStorageSync(AVATARURL);
        var img: Laya.Image = new Laya.Image();
        downLoadFile(path, function (path) {
            img.skin = path;
        });
        if (obj.headpos.size) {
            img.width = obj.headpos.size;
            img.height = obj.headpos.size;
        }
        img.x = isNaN(obj.headpos.x) ? 0 : obj.headpos.x;
        img.y = isNaN(obj.headpos.y) ? 0 : obj.headpos.y;
        var maskImg: Laya.Image = new Laya.Image();
        maskImg.width = img.width;
        maskImg.height = img.height;
        maskImg.skin = 'comp/mask.png';
        img.mask = maskImg;
        view.addChild(img);
    }
    //2,绘制昵称
    if (obj.namepos) {
        var name: Laya.Text = new Laya.Text();
        name.text = nickName;
        name.fontSize = obj.namepos.fontSize ? obj.namepos.fontSize : 18;
        //字体颜色，默认为黑色
        name.color = obj.namepos.color ? obj.namepos.color : '#000000';
        name.width = obj.namepos.width ? obj.namepos.width : 500;
        name.height = obj.namepos.height ? obj.namepos.height : 20;
        name.overflow = 'hidden'
        name.x = obj.namepos.x ? obj.namepos.x : 0;
        name.y = obj.namepos.y ? obj.namepos.y : 0;
        name.align = obj.namepos.align ? obj.namepos.align : 'center';
        name.valign = obj.namepos.valign ? obj.namepos.valign : 'middle';
        name.bold = obj.namepos.bold ? obj.namepos.bold : false;
        view.addChild(name);
    }
    //3,绘制文字
    if (obj.texts && obj.texts.length > 0) {
        var len = obj.texts.length;
        for (var i = 0; i < len; i++) {
            var textObj = obj.texts[i];
            var textView: Laya.Text = new Laya.Text();
            textView.text = textObj.text.replace(/{name}/g, nickName);
            textView.fontSize = textObj.fontSize ? textObj.fontSize : 18;
            //字体颜色，默认为黑色
            textView.color = textObj.color ? textObj.color : '#000000';
            textView.width = textObj.width ? textObj.width : 500;
            textView.height = textObj.height ? textObj.height : 20;
            textView.overflow = 'hidden'
            textView.x = textObj.x ? textObj.x : 0;
            textView.y = textObj.y ? textObj.y : 0;
            textView.align = textObj.align ? textObj.align : 'center';
            textView.valign = textObj.valign ? textObj.valign : 'middle';
            textView.bold = textObj.bold ? textObj.bold : false;
            textView.wordWrap = true;
            if (textObj.filter) {
                //创建一个发光滤镜
                var blur = isNaN(textObj.filter.blur) ? 8 : textObj.filter.blur;
                var offX = isNaN(textObj.filter.offX) ? 8 : textObj.filter.offX;
                var offY = isNaN(textObj.filter.offY) ? 8 : textObj.filter.offY;
                var shadowFilter: Laya.GlowFilter = new Laya.GlowFilter(textObj.filter.color, blur, offX, offY);
                //设置滤镜为阴影滤镜
                textView.filters = [shadowFilter];
            }
            view.addChild(textView);
        }
    }
}

/**
 * 
 * @param imgPath 图片地址
 * @param imgId 图片id
 * @param query 分享链接
 * @param msg 分享标题
 */
function shareImg(img: Laya.Sprite, imgId: string, query: string, msg: string) {
    insertCount({ userId: Index.getApp().userId, type: '拉起分享图片ID_' + imgId, mark: 'userId:' + Index.getApp().userId });
    Log.d('shareImg:' + imgId);
    //记录拉起分享的时间
    Index.getApp().getShareTime = new Date().getTime();

    var htmlC = img.drawToCanvas(500, 400, 0, 0);
    var canvas = htmlC.getCanvas();
    canvas.toTempFilePath({
        x: 0,
        y: 0,
        width: 500,
        height: 400,
        destWidth: 500,
        destHeight: 400,
        success: function (res) {
            Log.d('截图成功：');
            Log.d(res);
            if (ifAldShare) {
                wx.aldShareAppMessage({
                    query: query,
                    imageUrl: res.tempFilePath,
                    title: msg,
                    fail: () => {
                        //取消了分享
                        Index.getApp().shareCancel = true;
                    }
                });
            } else {
                wx.shareAppMessage({
                    query: query,
                    imageUrl: res.tempFilePath,
                    title: msg,
                    fail: () => {
                        //取消了分享
                        Index.getApp().shareCancel = true;
                    }
                });
            }
        },
        complete: function () {
            Log.d('保存完成,销毁图片');
            var father = img.parent;
            father.destroy();
        }
    });
    //关闭shareTicket分享
    setTimeout(function () {
        Log.d('update updateShareMenu withShareTicket')
        wx.updateShareMenu({
            withShareTicket: false
        });
    }, 1500);
}



function shareInSameGroup(state: number, level?: any) {
    var query = 'uid=' + Index.getApp().userId + '&token=' + new Date().getTime() + '&level=' + level + '&state=' + state;
    showModal({
        title: '提示',
        content: doubleGroupMsg,
        cancelText: '我知道了',
        confirmText: '分享到群',
        showCancel: true,
        success: function (callBack) {
            //更新金币数量
            if (callBack.confirm) {
                wx.updateShareMenu({ withShareTicket: !0, complete: function () { shareToFriend(null, query) } });
            }
        }
    });
}

function shareError(state: number, level, ifCancel?: boolean) {
    var query = 'uid=' + Index.getApp().userId + '&token=' + new Date().getTime() + '&level=' + level + '&state=' + state;
    //打开shareTicket
    // var msg = ifCancel ? '分享失败，请分享到群！' : (state === ShareType.BONUS ? '请分享到微信群，领取10枚金币哦！' : (state === ShareType.SHOWTIP ? '必需分享到群才能获取提示！' : '请分享到群'));
    var msg = ifCancel ? '您刚刚取消了分享，请分享到群！' : '分享失败，请分享到不同的群!';
    showModal({
        title: '提示',
        content: msg,
        cancelText: '我知道了',
        confirmText: '分享到群',
        showCancel: true,
        success: function (callBack) {
            if (callBack.confirm) {
                wx.updateShareMenu({ withShareTicket: !0, complete: function () { shareToFriend(null, query) } });
            }
        }
    });
}
/**分享到群成功回调 */
function shareSuccess(state: number, level?: any) {
    // insertCount({ userId: Index.getApp().userId, type: state == ShareType.BONUS ? '分享链接点击成功 获得金币' : (state == ShareType.SHOWTIP ? '分享链接点击成功 获得提示' : '分享链接点击成功 拆开红包'), mark: 'userId:' + Index.getApp().userId + '；level:' + (Index.getApp().gamePage ? Index.getApp().gamePage.question.index : -1) });
    /* Index.getApp().bannerManager.hideBanner(-1);
     Log.d('shareSucess ===>state=' + state + ',level==>' + level);
     var index = level ? (!isNaN(level) ? parseInt(level) : -1) : -1;
     var lastPage = getStageLastName();
     Log.d('shareSucess  ====>lastPage=' + lastPage + 'index=' + index);
     if (state == ShareType.SHOWTIP && Index.getApp().gamePage) {
         Log.d('shareSucess  showTip ');
         Log.d('shareSucess   Index.getApp().gamePage.question=> ' + Index.getApp().gamePage.question.index);
         if (Index.getApp().gamePage.question && Index.getApp().gamePage.question.index == index) {
             wx.setStorageSync(HAS_SHARE_TIP, true);
             Index.getApp().gamePage.showTip();
             wx.aldStage.onRunning({
                 stageId: Index.getApp().gamePage.levelData.grade + '.' + Index.getApp().gamePage.levelData.level,
                 stageName: Index.getApp().gamePage.levelData.grade + ' 级' + Index.getApp().gamePage.levelData.level + ' 关',
                 userId: Index.getApp().userId,
                 event: "tools",  //使用道具  关卡进行中，用户触发的操作    该字段必传
                 params: {
                     itemName: "分享提示",//使用道具名称 该字段必传
                     itemCount: 10,   //使用道具数量  可选
                     desc: "分享成功获取提示" //使用道具描述
                 }
             });
         }
 
     } else if (state == ShareType.BONUS) {
         //关掉对话框
         if (Index.getApp().bonusDialog) {
             Index.getApp().bonusDialog.close();
         }
         //获取10枚金币
         wx.showLoading({
             title: '正在领取',
         });
         var coinNum = Index.getApp().bonusDialog ? Index.getApp().bonusDialog.coinNum : BONUS_COIN_NUM;
         addCardNum(coinNum, { to_user_id: Index.getApp().userId, detail: '大礼包分享到群领取' }, function (num) {
             wx.hideLoading();
             wx.setStorageSync(HAS_SHARE_BOUNS, true);
             if (num > 0) {
                 wx.showToast({
                     title: '成功领取' + coinNum + '枚金币！',
                     icon: 'success'
                 });
             }
         });
     } else if (state == ShareType.GETMONEY) {
         //点击了红包分享链接,红包对话框必需显示
         if (Index.getApp().redpacketDialog && Index.getApp().redpacketDialog.isShowing && Index.getApp().redpacketDialog.state == REDBEG_STATE.GET) {
             //拆红包
             wx.setStorageSync(HAS_SHARE_REDPACKET, true);
             Index.getApp().redpacketDialog.openRedpacket('分享');
         } else {
             if (!Index.getApp().redpacketDialog || !Index.getApp().redpacketDialog.isShowing) {
                 //关闭了对话框
                 wx.showToast({
                     title: '请不要关闭红包对话框！！！',
                     icon: 'none'
                 });
             }
         }
     }*/
}

/**
 * 根据shareTicket得到群id
 * @param shareTicket 
 */
function getGroupId(shareTicket: string, callBack?: Function) {
    if (!shareTicket) {
        if (callBack) {
            callBack(null);
        }
        return;
    }
    wx.login({
        success: res => {
            var code = encodeURIComponent(res.code);
            Log.d('登录：' + code);
            wx.getShareInfo({
                shareTicket: shareTicket,
                success: res => {
                    Log.d(res);
                    var encryptedData = encodeURIComponent(res.encryptedData);
                    Log.d('encode data：' + encryptedData);
                    var iv = encodeURIComponent(res.iv);
                    var url = WXINFOPATH + "?appName=" + APPNAME + "&code=" + code + "&encryptedData=" + encryptedData + "&iv=" + iv;
                    Log.d('请求地址：');
                    Log.d(url);
                    wx.request({
                        url: url,
                        dataType: 'json',
                        header: {
                            //设置参数内容类型为json
                            'content-type': 'application/json'
                        },
                        success: data => {
                            Log.d('群信息：');
                            Log.d(data);
                            if (callBack) {
                                callBack(data.data.openGId);
                            }
                        },
                        fail: err => {
                            if (callBack) {
                                callBack(null);
                            }
                        }
                    });
                }
            });
        },
        fail: err => {
            if (callBack) {
                callBack(null);
            }
        }
    });
}


function more(e?: Laya.Event) {
    if (e) {
        e.stopPropagation();
    }
    insertCount({ type: '点击更多好玩' });
    /* if (Index.getApp().systemInfo.version < '2.2.0') {
         wx.previewImage({
             urls: ['http://www.webuzz.com.cn/game/image/share_brain_image.png'],
             success: function () {
 
             },
             complete: function () {
 
             }
         });
     } else {
         wx.navigateToMiniProgram({
             appId: GOTO_APPID,
             path: channelPath,
             extraData: {
                 from: 'FillLine',
             },
             envVersion: 'release',
             success(res) {
             }
         });
     }*/
}