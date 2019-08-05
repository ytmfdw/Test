// const BASE_ADDCOUNT = "https://www.webuzz.com.cn/game/addCount.do";
// const BASE_ADDCOUNT = "http://localhost:8080/game/addCount.do";
function insertCount(data) {
    Log.d(data);
    //添加统计
    if (data.mark) {
        if (typeof data.mark == 'object') {
            Log.d(data.mark);
            var tmp = JSON.stringify(data.mark);
            tmp = tmp.replace(/&/g, "，");
            tmp = tmp.replace(/\{/g, "");
            tmp = tmp.replace(/\}/g, "");
            tmp = tmp.replace(/\s+/g, "");
            tmp = tmp.replace(/\./g, "_");
            tmp = tmp.replace(/\:/g, "：");
            data.mark = tmp;
        } else if (typeof data.mark == 'string') {
            data.mark = data.mark.replace(/\./g, "_");
            data.mark = data.mark.replace(/\:/g, "：");
            data.mark = data.mark.replace(/&/g, ",");
            data.mark = data.mark.replace(/\s+/g, "");
        } else {
            data.mark = String(data.mark);
        }
    } else {
        data.mark = '';
    }
    /*    var params = "?gameType=2&userId=" + data.userId + "&type=" + data.type + "&mark=" + 'v=' + VERSION + ',' + data.mark;
        if (typeof wx !== 'undefined') {
            Log.d('add count: wx request: params:' + params);
            wx.request({
                url: BASE_ADDCOUNT + params, //仅为示例，并非真实的接口地址
                header: {
                    //设置参数内容类型为json
                    'content-type': 'application/json'
                },
            });
        }*/

    var params = { version: VERSION.replace(/\./g, '-'), userId: Index.getApp().userId, mark: data.mark };
    Log.d(data.mark);
    Log.d(params);
    wx.aldSendEvent(data.type, params);
}

//统计常量声明 格式： COUNT_TYPE_{PAGE}_{BUTTON/EVENT}
/**游戏界面 点击 求助好友 */
const COUNT_TYPE_GAMEPAGE_ONHOPE = '游戏界面 点击 求助好友';
/**游戏界面 点击 回复求助 */
const COUNT_TYPE_GAMEPAGE_RESPONE_HELP = '游戏界面 点击 回复求助';
/**游戏界面 点击 粉丝互助 */
const COUNT_TYPE_GAMEPAGE_FANS = '游戏界面 点击 粉丝互助';
/**游戏界面 点击 金币提示 */
const COUNT_TYPE_GAMEPAGE_COIN_TIP = '游戏界面 点击 金币提示';
/**游戏界面 点击 邀请好友+10 */
const COUNT_TYPE_GAMEPAGE_SHARE_TO_FRIEND = '游戏界面 免费提示拉起分享';
/**点击 看视频提示 */
const COUNT_TYPE_GAMEPAGE_VIDEO_TIP = '点击 看视频提示 ';
/**游戏界面 点击免费提示 */
const COUNT_TYPE_GAMEPAGE_FREE_TIP = '游戏 点击 免费提示 ';
/**大礼包 点击免费获取 */
const COUNT_TYPE_BOUNS_FREE_GET = '大礼包 点击 免费获取 ';
/**统计 看完提示视频广告回来 */
const COUNT_TYPE_VIDEO_FINISH = '统计 看完视频广告回来';
/** 统计 视频出错 */
const COUNT_TYPE_VIDEO_ERROR = '统计 视频出错';
/**统计 视频未看完 */
const COUNT_TYPE_VIDEO_NOT_FINISH = '统计 视频未看完';
/**游戏界面 点击 金币 */
const COUNT_TYPE_GAMEPAGE_COIN_CLICK = '游戏界面 点击 金币';
/**游戏界面金币对话框 点击邀请好友 */
const COUNT_TYPE_GAMEPAGE_COIN_DIALOG_SHARE_TO_FRIEND = '游戏界面金币对话框 点击邀请好友';
/**首页 统计 分享链接进入 */
const COUNT_TYPE_HOMEPAGE_ENTER_TYPE = '首页 统计 分享链接进入';
/**过关大礼包 点击看视频获取 */
const COUNT_TYPE_BOUNS_SHOW_VIDEO = '过关大礼包 点击看视频获取';
/**过关大礼包 点击 分享领取 */
const COUNT_TYPE_BOUNS_SHARE_TO_FRIEND = '过关大礼包 拉起分享';
/**过关页面 点击 下一关 */
const COUNT_TYPE_PASSPAGE_NEXT = '过关页面 点击 下一关';
/**过关页面 点击 好友排行 */
const COUNT_TYPE_PASSPAGE_FRIEND_RANK = '过关页面 点击 好友排行';
/**过关页面 点击 挑战好友 */
const COUNT_TYPE_PASSPAGE_SHARE_FRIEND = '过关页面 点击 挑战好友';
/**过关页面 点击 更多好玩 */
const COUNT_TYPE_PASSPAGE_MORE = '过关页面 点击 更多好玩';
/**首页 点击 开始游戏 */
const COUNT_TYPE_HOMEPAGE_START = '首页 点击 开始游戏';
/**首页 统计 授权成功 */
const COUNT_TYPE_HOMEPAGE_SCOPE = '首页 统计 授权成功';
/**首页 统计 开始游戏失败 */
const COUNT_TYPE_HOMEPAGE_START_ERROR = '首页 统计 开始游戏失败';

/**登陆大礼包 点击看视频获取 */
const COUNT_TYPE_LOGINBOUNS_SHOW_VIDEO = '登陆大礼包 点击看视频获取';
/**登陆大礼包 点击 分享领取 */
const COUNT_TYPE_LOGINBOUNS_SHARE_TO_FRIEND = '登陆大礼包 点击 分享领取';
/**运行出错 */
const COUNT_TYPE_ERROR = "出错";


