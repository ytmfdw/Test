const APPNAME = 'XiaoXiaoXiao';
const VERSION = '1.0.0';

const APP_ID = "dURtecOkcYIc6MyqpGCJBS2P-gzGzoHsz";
const APP_KEY = "pJvDPlOJxnTDmgPj90ic50Oy";

const SCREEN_WIDTH = 768;
const SCREEN_HEIGHT = 1440;

const DEBUG = true;

const BGCOLOR = '#5dcfd4';

var isWX = true;

/**提审日期 */
const examineTime = new Date('2019-05-25').getTime();

//是否开启震动
var isNoVirbate = true;


const BLOCKSIZE = 80;

const ROW = 14;
const COL = 8;

const BLOCK_STATE = {
    NONE: -1,
    EMPTY: 0,//空的
    KEYUNABLE: 1,//等解救方块灰色
    MOVER: 2,//可移动方块
    STATIC: 3,//静态阻止方块
    BLOCKACT: 4,//撞击后方块颜色变化
    KEY: 5,//待解救方块
}

const MOVE_ARROW = {
    NONE: 0,
    LEFT: 1,//180
    RIGHT: 2,//0
    UP: 3,//-90
    DOWN: 4//90
};

const MOVE_ROATION = {
    NONE: 0,
    LEFT: 0,//180
    RIGHT: 180,//0
    UP: 60,//-90
    DOWN: -60//90
}

const QUESTION_CLASS = "Question";

// 分享源
const ShareType = {
    HOME: 1,//首页分享
    MENU: 9,//右上角转发
    FIGHT: 6,//通关分享好友
    GROUP: 4,//群排行榜
    CARD: 2,//复活
    BONUS: 5,//大礼包
    HELP: 7,//出题
    SOLVE: 8,//帮助好友解决
    SHOWTIP: 10//分享到群看提示
}

const LOCAL_SHARE = "https://www.webuzz.com.cn/game/image/share.jpg";


/**
 * 格子状态
 */
const BOXSTATE = {
    NONE: -1,   //空的，不能画线
    EMPTY: 1,   //可连线
    START: 0,   //起始点
}

/**页面切换动画时间 */
const PAGE_CHANGE_DURATION = 500;

/**是否震动 */
const ISVIBRATE = 'vibrate';
var isNoVirbate: boolean = false;
/**是否静音 */
const ISMUTE = 'mute';
var isMute = false;
/**背景是否静音 */
const ISMUTEBGM = 'muteBgm';
var isMuteBgm = false;
/**背景音乐 */
var bgms = [
    {
        "name": "货郎",
        "url": BGLOCALMUSICPATH,
        "author": "俄罗斯民歌"
    }
];


/**本地缓存 UserData */
const USERDATA = 'userData';
//体力值，每天登录送5点，每过一关减少1点
const COIN = 'coin';
//经验值，不会减少
const EXPERIENCE = 'experience';

const NICKNAME = 'nickName';
const AVATARURL = 'nickName';
var shareCount = 0;
const SHARECOUNT = 'shareCount';
const SCORE = 'level';
const OPENVIDEOCOUNT = 'openVideoCount';
/**打开视频次数 */
var openVideoCount = 0;
const FINISHVIDEOCOUNT = 'finishVideoCount';
/**成功看完视频次数 */
var finishVideoCount = 0;
var canShowVideo: boolean = true;
var bannerError: boolean = false;

const USER = 'user';

const IFSHOWBONUS = 'ifShowBounus';
var openId: string = null;
const OPENID = 'openId';
const USERID = 'userId';
const SCORE_KEY = "maxLevel";
const ACTIVITY = 'activity';

/**同步时的setting */
const SETTING_VERSION_KEY = "settgin_version";

/**分享过的群id */
const OPENGIDS = 'openGIds_';
/**提示方式  */
const TIP_MODE = {
    SHARE: 'share',
    VEDIO: 'vedio'
};

/**是否是新用户 */
var ifNewuser = false;
/**今日看完视频次数 */
const TODAYDATA = 'todayData';
//今天的数据
var todayData = {
    date: formatDate(new Date, 'yyyy-MM-dd'),
    video: 0,
    ifGift: false,
    hasGivePower: false
};

const YTMFDW = "https://www.ytmfdw.com/";
const CDN = 'https://cdn.ytmfdw.com/';
const WXINFOPATH = YTMFDW + 'game/'



const GAME_STATE = {
    NONE: -1,
    PLAYING: 0,
    PAUSE: 1,
    GAMEOVER: 2
};
//游戏状态
var gameState = GAME_STATE.NONE;

//说明文字颜色
const TEXTCOLOR = '#ececec';
//按钮字体颜色
const BUTTONTEXTCOLOR = '#fdfdfd';
//对话框标题颜色 
const TEXTTITLECOLOR = '#C4AD8E';
//适配刘海屏
const iPhoneX = 52


//云端控制 ================  test Git

var doubleGroupMsg = '短时间内，不能分享到相同的群哦！请分享到其他群吧！';
var tipShareMsg = '请分享到微信群，才能获得提示哦！';
var onShowTipShareMsg = '1.请去群里点击自己分享的链接，可获得提示！\n2.若尚未分享到群，请先分享到群！';
var onShowBounsShareMsg = '1.请去群里点击自己分享的链接，可获得奖励！\n2.若尚未分享到群，请先分享到群！';
var bounsShareMsg = '请分享到微信群，才能获得奖励哦！';

var BANNERS = [
    'adunit-2c1aea2cd1fc580e'
];
/**video */
var VIDEOS = [
    'adunit-12ca3579f78d92a3'
];

var ifShowBonus: boolean = true;
var ifAldShare: boolean = false;
var ifShowApps: boolean = false;
var ifActivity: boolean = false;
//最大体力
var maxPower: number = 10;
//每日赠送体力
var givePoser: number = 5;

var loopTime = 5 * 60 * 1000;
var loopPower = 1;
//每局消耗一体力
var eachPower = 1;
var gamePowerTip = '洪荒之力已使用完，是否消耗' + eachPower + '继续解题？';
//体力不足提示语
var powerNotEnough = '体力不足，看下视频，休息下，补充下体力？';
//题目最长不能超过20个字
var maxQuestionLen = 20;
var minQuestionLen = 4;
var maxQuestionTipLen = 40;
var minQuestionTipLen = 4;