//切换页面:PassPage
const PAGE_PASS = 1;
//好友排行榜
const RANK_TYPE_FRIEND = 1;
//群排行榜
const RANK_TYPE_GROUP = 2;
const FRIENDS = 'friends';

const SCREEN_WIDTH = 768;
const SCREEN_HEIGHT = 1440;

var friends: Array<any> = [];

// 程序入口
class GameMain {

    //页面
    private nextUi: PassPage = null;
    private rankUi: RankPage = null;
    //主名称
    private scoreStr: string;
    //群ticket
    private shareTicket: string;
    constructor() {
        //微信小游戏适配库初始化
        Laya.MiniAdpter.init(true, true);
        //初始化引擎
        Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT);
        Laya.stage.bgColor = null;
        //最小宽度，竖屏，保持宽度
        Laya.stage.scaleMode = "fixedwidth";
        Laya.stage.alignH = "center";
        Laya.stage.alignV = "middle";
        //设置帧率
        Laya.stage.frameRate = Laya.Stage.FRAME_MOUSE;
        this.addMsgListener();
    }

    private cleanStage() {
        if (Laya.stage) {
            var num = Laya.stage.numChildren;
            for (var i = 0; i < num; i++) {
                Laya.stage.removeChildAt(i);
            }
        }
    }


    private initRanklist(list: Array<Object>, pageFlag, rankType) {
        this.rankUi.setData(list);
    }

    private getFriendsRankDatas(mainKey: string, pageFlag: number, rectH: number) {
        //先清空舞台
        this.cleanStage();
        if (!this.rankUi) {
            this.rankUi = new RankPage(rectH);
        }
        Laya.stage.addChild(this.rankUi);
        var thiz = this;
        wx.getFriendCloudStorage({
            keyList: [mainKey],
            success: res => {
                let data = res.data;
                thiz.initRanklist(sortByScore(data, mainKey), pageFlag, RANK_TYPE_FRIEND);
            }
        });
    }

    private drawNextRank(mainKey, openId, nickName, avatarUrl, score) {
        //先移除其他的界面
        this.cleanStage();
        if (!this.nextUi) {
            this.nextUi = new PassPage();
        }
        Laya.stage.addChild(this.nextUi);
        // nextUi.destroyChildren();
        //再绘制需要的数据
        //得到当前三名数据
        this.getThreeData(mainKey, openId, nickName, avatarUrl, score);
    }

    private getThreeData(mainKey, openId, nickName, avatarUrl, score) {
        var thiz = this;
        wx.getFriendCloudStorage({
            keyList: [mainKey],
            success: res => {
                let tmp = res.data;
                var datas = sortByScore(tmp, mainKey);
                thiz.drawNextRankItem(datas, openId, nickName, avatarUrl, score);
            }
        });
    }

    private drawNextRankItem(datas, openId, nickName, avatarUrl, score) {
        if (datas && datas.length > 0) {
            var len = datas.length;
            var tmpArr = [];
            for (var i = 0; i < len; i++) {
                if (datas[i].openid == openId) {
                    //找到我了
                    if (i > 0) {
                        //有人超过我了
                        tmpArr.push({
                            index: i,
                            isMe: false,
                            avatarUrl: datas[i - 1].avatarUrl,
                            nickname: datas[i - 1].nickname,
                            score: datas[i - 1].score,
                        });
                    }
                    tmpArr.push({
                        index: i + 1,
                        isMe: true,
                        avatarUrl: datas[i].avatarUrl,
                        nickname: datas[i].nickname,
                        score: Math.max(datas[i].score, score),
                    });
                    //如果我后面还有人
                    if (i < len - 1) {
                        tmpArr.push({
                            index: i + 2,
                            isMe: false,
                            avatarUrl: datas[i + 1].avatarUrl,
                            nickname: datas[i + 1].nickname,
                            score: datas[i + 1].score,
                        });
                    }
                    break;
                }
            }
            if (tmpArr.length === 0) {
                //理论上是不可能发生的
                //说明我还没玩过
                tmpArr.push({
                    index: len,
                    isMe: false,
                    avatarUrl: datas[len - 1].avatarUrl,
                    nickname: datas[len - 1].nickname,
                    score: datas[len - 1].score,
                });
                tmpArr.push({
                    index: len + 1,
                    isMe: true,
                    avatarUrl: avatarUrl,
                    nickname: nickName,
                    score: score
                });
            }
            len = tmpArr.length;
            //me is first
            var meIsFirst = false;
            if (tmpArr.length === 1 || !tmpArr[0].isMe) {
                meIsFirst = true;
            }
            var baseX = (len === 3 || meIsFirst) ? 0 : 210;
            if (tmpArr.length == 1) {
                baseX = 210;
            }
            var itemNum = this.nextUi.numChildren;
            if (itemNum != len) {
                this.nextUi.destroyChildren();
                for (var i = 0; i < len; i++) {
                    var item = Laya.Pool.getItemByClass("PassItem", PassItem) as PassItem;
                    item.setData(tmpArr[i]);
                    item.pos(baseX + item.width * i, 0);
                    this.nextUi.addChild(item);
                }
            } else {
                for (var i = 0; i < len; i++) {
                    var item = this.nextUi.getChildAt(i) as PassItem;
                    item.setData(tmpArr[i]);
                }
            }

        }
    }

    private getGroupRankDatas(shareTicket: string, mainKey: string, pageFlag, rectH: number) {
        this.cleanStage();
        if (!this.rankUi) {
            this.rankUi = new RankPage(rectH);
        }
        Laya.stage.addChild(this.rankUi);
        //取出所有好友数据
        var thiz = this;
        wx.getGroupCloudStorage({
            shareTicket: shareTicket,
            keyList: [mainKey],
            success: res => {
                let data = res.data;
                this.initRanklist(sortByScore(data, mainKey), pageFlag, RANK_TYPE_GROUP);
            },
            fail: res => {
                this.initRanklist([], pageFlag, RANK_TYPE_GROUP);
            },
        });
    }



    //消息监听
    private addMsgListener() {
        var thiz = this;
        wx.onMessage(data => {
            if (data.friends) {
                //收到好友数据
                friends = data.friends;
            }
            if (data.messageType == 2) {
                this.scoreStr = data.mainKey;
                var pageFlag = data.pageFlag;
                // var rectW = data.rectW;
                var rectH = data.rectH;
                this.getFriendsRankDatas(data.mainKey, pageFlag, rectH);

            } else if (data.messageType === 3) {
                var shareTicket = data.ticket;
                // console.log("getGroupRankDatas= shareTicket = ", this.shareTicket);
                var pageFlag = data.pageFlag;
                var rectH = data.rectH;
                this.getGroupRankDatas(data.ticket, data.mainKey, pageFlag, rectH);
            } else if (data.messageType === 4) {
                this.scoreStr = data.mainKey;
                var openId = data.openId;
                var currentScore = data.score;
                var nickName = data.nickName;
                var avatarUrl = data.avatarUrl;
                this.drawNextRank(data.mainKey, openId, nickName, avatarUrl, currentScore);
                // getMyScore();
            } else if (data.messageType === 5) {
                //即将超越的好友
                this.scoreStr = data.mainKey;
                var openId = data.openId;
                var currentScore = data.score;
                // getMyScore();
                // drawPreFriend(data.mainKey, openId, currentScore);
            } else if (data.messageType === -1) {
                //清空
                Laya.stage.removeChildren(0, Laya.stage.numChildren - 1);
            } else if (data.messageType === -2) {
                var page = data.page;
                switch (page) {
                    case PAGE_PASS: {
                        //切换到好友
                        if (this.rankUi) {
                            Laya.stage.addChild(this.rankUi);
                        }
                        if (this.nextUi) {
                            Laya.stage.removeChild(this.nextUi);
                        }
                    } break;
                    default: {
                        if (this.rankUi) {
                            Laya.stage.removeChild(this.rankUi);
                        }
                        if (this.nextUi) {
                            Laya.stage.addChild(this.nextUi);
                        }
                    } break;
                }
            }
        });
    }
}

/**
 * 排序功能函数  冒泡算法
 * @param data 
 */
function sortByScore(data: Array<any>, key: string) {
    //排行榜数据
    /*  if (friends && friends.length > 0) {
          data = data.concat(friends);
      }*/
    let array: Array<any> = [];
    data.map(item => {

        let score = 0;
        for (let idx = 0; idx < item.KVDataList.length; idx++) {
            if (item.KVDataList[idx].key == key) {
                score = JSON.parse(item.KVDataList[idx].value).score;
            }
        }

        array.push({
            avatarUrl: item.avatarUrl,
            nickname: item.nickname,
            openid: item.openid,
            // score: item['KVDataList'][1] && item['KVDataList'][1].value != 'undefined' ? item['KVDataList'][1].value : (item['KVDataList'][0] ? item['KVDataList'][0].value : 0) // 取最高分
            score: score // 取最高分
        })
        // console.log(item);
    });

    if (array && array.length > 0) {
        var temp = null;
        var size = array.length;
        for (var i = 0; i < size - 1; i++) {
            for (var j = 0; j < size - 1 - i; j++) {
                if (parseInt(array[j].score) < parseInt(array[j + 1].score))  //交换两数位置
                {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }

    return array;
}



//入口
new GameMain();