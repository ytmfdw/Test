const WSURL = "wss://www.ytmfdw.com/ws/ws";
// const WSURL = "wss://wwenet.xyz/ws/";
// const WSURL = "ws://192.168.50.41:8080/ws";

//游戏大厅的ID
const DA_TIND_ID = "0";

const MSG_CONNECT = 1;//建立连接
const MSG_JOINROOM = 2;//加入房间
const MSG_LEAVEROOM = 3;//离开房间
const MSG_SPEAKTOUSER = 4;//对某人说
const MSG_SPEAKTOROOM = 5;//对整个房间说
const MSG_DATA = 6;//发送游戏数据
const MSG_DISCONNECT = 7;//断开连接

const ROOM_ID = "rid";//房间ID
const ROOM_NAME = "rname";//房间名称
const ROOM_IMG = "rimg";//房间图片
const ROOMD_ATA = "rdata";//房间属性，JSON对象
const USER_ID = "uid";//用户id
const USER_NAME = "uname";//用户名称
const USER_IMG = "uimg";//用户头像
//断线重连间隔时间
const OFFLINE_RECONNECT_TIME = 5000;
//消息来自大厅
const MSG_FROM_DATING = 1;
const MSG_FROM_USER = 2;
const MSG_FROM_ROOM = 3;


class StompUtils {
    private static self: StompUtils;
    private static WSURL = WSURL;
    // private static WSURL = 'ws://192.168.50.41:8080/ws';
    private dispatch: DispatchMsg = null;
    private roomBook = null;
    private dtBook = null;
    private userBook = null;
    private userId: string = null;
    private userName: string = null;
    private userImg: string = null;
    private roomId: string = null;
    private isReconnect: boolean = false;
    private constructor() {
        this.dispatch = DispatchImpl.getSelf();

    }
    public static getSelf(): StompUtils {
        if (StompUtils.self == null) {
            StompUtils.self = new StompUtils();
            StompUtils.self.addWsListener();
        }
        return StompUtils.self;
    }
    /**
     * 设置用户数据
     * 
     * @param {string} userId 
     * @param {string} [userName] 
     * @param {string} [userImg] 
     * @memberof StompUtils
     */
    public setUser(userId: string, userName?: string, userImg?: string): StompUtils {
        this.userId = userId;
        this.userName = userName;
        this.userImg = userImg;
        return this;
    }

    public setCallBack(callback: DispatchMsg) {
        this.dispatch = callback;
    }

    // socket是否连接
    public socketConnected = false;
    // 待发送的消息队列
    public messageQueue = [];
    // 是否断线重连
    public reconnect = true;

    private stompClient: any;


    // 发送消息
    public sendSocketMessage(msg) {
        // console.log(msg);
        // 如果socket已连接则发送消息
        if (StompUtils.getSelf().socketConnected) {
            wx.sendSocketMessage({
                data: msg
            })
        } else {
            // socket没有连接将消息放入队列中
            StompUtils.getSelf().messageQueue.push(msg);
        }
    }

    // 符合WebSocket定义的对象
    //  send: sendSocketMessage,
    //   close: close
    private ws = {
        send: this.sendSocketMessage,
        close: () => { },
        onopen: this.onopen,
        onmessage: this.onmessage
    }

    private onopen(frame) {
        Log.d("onopen");
        Log.d(frame);
    }

    private onmessage(data) {
        Log.d("onmessage");
        Log.d(data);
    }
    // 关闭连接
    public disconnect() {
        let thiz = StompUtils.getSelf();
        thiz.roomId = null;
        //清掉断线重连定时器
        Laya.timer.clear(thiz, thiz.connect);
        thiz.stompClient.disconnect();
        if (thiz.socketConnected) {
            thiz.reconnect = false;
            wx.closeSocket();
        }
    }
    // 创建一个 WebSocket 连接
    public connect() {
        StompUtils.getSelf().reconnect = true;
        wx.connectSocket({
            url: StompUtils.WSURL
        })
    }

    private addWsListener() {
        let thiz = StompUtils.getSelf();
        // 监听 WebSocket 连接打开事件
        wx.onSocketOpen(function (frame) {
            Log.d("WebSocket 连接成功")
            thiz.socketConnected = true;
            //清掉断线重连定时器
            Laya.timer.clear(thiz, thiz.connect);
            thiz.addStompListener();
            thiz.ws.onopen(frame);
            // 连接成功后，将队列中的消息发送出去
            let queueLength = thiz.messageQueue.length
            for (let i = 0; i < queueLength; i++) {
                const messageQueueElement = thiz.messageQueue.shift();
                wx.sendSocketMessage({
                    data: messageQueueElement
                })
            }
        })

        // 监听 WebSocket 接受到服务器的消息事件
        wx.onSocketMessage(function (res) {
            Log.d("onSocketMessage ======> ");
            Log.d(res);
            thiz.ws.onmessage(res);
        })

        // 监听 WebSocket 错误事件
        wx.onSocketError(function (res) {
            Log.d("WebSocket 错误事件");
            /* if (thiz.reconnect) {
                 thiz.connect();
             }*/
        })

        // 监听 WebSocket 连接关闭事件
        wx.onSocketClose(function (res) {
            Log.d("WebSocket 连接关闭")
            thiz.socketConnected = false;
            // 断线重连,每隔5秒重新连接一次
            if (thiz.reconnect) {
                thiz.isReconnect = true;
                thiz.connect();
                Laya.timer.loop(OFFLINE_RECONNECT_TIME, thiz, thiz.connect);
            }
            /*  while (thiz.reconnect && !thiz.socketConnected) {
                  thiz.connect();
              }*/
        })
    }

    private addStompListener() {
        Log.d("addStompListener   ================>");
        let thiz = StompUtils.getSelf();
        if (thiz.stompClient == null) {
            thiz.stompClient = Stomp.over(thiz.ws);
        }
        // let userId = Index.getApp().userId;
        // let user = Index.getApp().user;
        var headers = {
            uid: thiz.userId,
        }
        // 游戏大厅订阅
        if (thiz.dtBook) {
            thiz.dtBook.unsubscribe();
            thiz.dtBook = null;
        }
        thiz.dtBook = thiz.stompClient.subscribe('/book/0', function (frame: any) {
            //游戏大厅过来的数据
            Log.d("游戏大厅来的数据：");
            Log.d(frame);
            if (thiz.dispatch && frame) {
                let content = frame.body;
                let msg: Msg = JSON.parse(content);
                Log.d("转换成消息：")
                Log.d(msg);
                Log.d(msg.data);
                switch (msg.type) {
                    case MSG_CONNECT: {
                        //有用户连接上来了
                        Log.d("onConnect  ==>大厅有人加入");
                        thiz.dispatch.onConnect(MSG_FROM_DATING, msg);
                    } break;
                    case MSG_JOINROOM: {
                        //加入房间
                        // thiz.dispatch.onJoinRoom(msg);
                    } break;
                    case MSG_LEAVEROOM: {
                        //离开房间
                        // thiz.dispatch.onLeaveRoomMsg(msg);
                    } break;
                    case MSG_SPEAKTOUSER: {
                        //有人找我聊天
                        thiz.dispatch.onChatMsg(MSG_FROM_DATING, msg);
                    } break;
                    case MSG_SPEAKTOROOM: {
                        //房间聊天
                        thiz.dispatch.onChatRoomMsg(MSG_FROM_DATING, msg);
                    } break;
                    case MSG_DATA: {
                        //房间聊天
                        // thiz.dispatch.onDataMsg(msg);
                    } break;
                    case MSG_DISCONNECT: {
                        //房间聊天
                        thiz.dispatch.onDisconnect(MSG_FROM_DATING, msg);
                    } break;
                }
            }
        });
        //我的消息订阅
        if (thiz.userBook) {
            thiz.userBook.unsubscribe();
            thiz.userBook = null;
        }
        thiz.userBook = thiz.stompClient.subscribe("/user/queue/notifications", function (frame: any) {
            Log.d("个人数据：");
            Log.d(frame);
            if (thiz.dispatch && frame) {
                let content = frame.body;
                let msg: Msg = JSON.parse(content);
                Log.d("转换成消息：")
                Log.d(msg);
                Log.d(msg.data);
                switch (msg.type) {
                    case MSG_CONNECT: {
                        // if (thiz.socketConnected) return;
                        Log.d("onConnect  ==>自己连接成功");
                        //有用户连接上来了
                        if (thiz.isReconnect && thiz.roomId != null) {
                            thiz.joinRoom(headers.uid, thiz.roomId);
                        }
                        thiz.dispatch.onConnect(MSG_FROM_USER, msg);
                        thiz.isReconnect = false;
                    } break;
                    case MSG_JOINROOM: {
                        if (msg.state == 1) {
                            //有房间数据
                            //再订阅该房间的消息
                            thiz.roomId = msg.data.rid;
                            thiz.bookRoom(thiz.roomId);
                        }
                        thiz.dispatch.onJoinRoom(MSG_FROM_USER, msg);
                        //加入房间
                    } break;
                    case MSG_LEAVEROOM: {
                        //离开房间
                        thiz.dispatch.onLeaveRoomMsg(MSG_FROM_USER, msg);
                    } break;
                    case MSG_SPEAKTOUSER: {
                        //有人找我聊天
                        thiz.dispatch.onChatMsg(MSG_FROM_USER, msg);
                    } break;
                    case MSG_SPEAKTOROOM: {
                        //房间聊天
                        thiz.dispatch.onChatRoomMsg(MSG_FROM_USER, msg);
                    } break;
                    case MSG_DATA: {
                        //房间聊天
                        thiz.dispatch.onDataMsg(MSG_FROM_USER, msg);
                    } break;
                    case MSG_DISCONNECT: {
                        //房间聊天
                        thiz.dispatch.onDisconnect(MSG_FROM_USER, msg);
                    } break;
                }
            }
        });
        thiz.stompClient.connect(headers, function (callback) {
            Log.d("connect ======== stompClient  callBack   ");
            var tx = thiz.stompClient.begin();
            thiz.stompClient.send("/app/connect", {}, JSON.stringify({
                'type': 1,
                'from': headers.uid,
                'data': JSON.stringify({ 'uname': thiz.userName, 'uimg': thiz.userImg })
            }));
            tx.commit();

        });

        //若使用STOMP 1.1 版本，默认开启了心跳检测机制（默认值都是10000ms）
        thiz.stompClient.heartbeat.outgoing = 30000;

        thiz.stompClient.heartbeat.incoming = 0; //客户端不从服务端接收心跳包
    }
    //加入房间   data.from  用户ID;   data.to 房间ID
    public joinRoom(uid: string, rid?: string, rName?: string, rImg?: string, data?: any): void {
        let thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        let msg: Msg = new Msg();
        msg.from = uid;
        msg.type = MSG_JOINROOM;
        msg.data = {
            rid: rid,
            rname: rName,
            rimg: rImg,
            rdata: data
        }
        var tx = thiz.stompClient.begin();
        thiz.stompClient.send("/app/joinRoom", {}, JSON.stringify(msg));
        tx.commit();
    }
    //发送游戏数据  data.from:userId,data.to:roomId,data.data:自定义数据
    public sendData(rid: string, data: any, uid: string): void {
        let thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        let msg: Msg = new Msg();
        msg.type = MSG_DATA;
        msg.from = uid;
        msg.to = rid;
        msg.data = data;
        var tx = thiz.stompClient.begin();
        thiz.stompClient.send("/app/sendData", {}, JSON.stringify(msg));
        tx.commit();
    }
    //单人聊天 data.from  用户ID;   data.to 另一个用户ID,   data.data 聊天内容，
    public chatToUser(data: Msg): void {
        let thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        var tx = thiz.stompClient.begin();
        data.type = MSG_SPEAKTOUSER;
        thiz.stompClient.send("/app/chatToUser", {}, JSON.stringify(data));
        tx.commit();
    }
    //房间聊天,data.from  用户ID;   data.to 房间ID,   data.data 聊天内容， Msg.to  "0"  表示游戏大厅，所有人都可以收得到
    public chatToRoom(data: Msg): void {
        let thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        data.type = MSG_SPEAKTOROOM;
        var tx = thiz.stompClient.begin();
        thiz.stompClient.send("/app/chatToRoom", {}, JSON.stringify(data));
        tx.commit();
    }
    //离开房间   data.from  用户ID;   data.to 房间ID
    public leaveRoom(data: Msg): void {
        let thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        thiz.roomId = null;
        data.type = MSG_LEAVEROOM;
        var tx = thiz.stompClient.begin();
        thiz.stompClient.send("/app/exitRoom", {}, JSON.stringify(data));
        tx.commit();
        //取消该房间的订阅
        if (thiz.roomBook) {
            thiz.roomBook.unsubscribe();
            thiz.roomBook = null;
        }
    }

    private bookRoom(rid): void {
        if (rid == null) return;
        let thiz = StompUtils.getSelf();
        //先取消订阅
        if (thiz.roomBook) {
            thiz.roomBook.unsubscribe();
            thiz.roomBook = null;
        }
        //已经订阅过了，就不再订阅
        // if (thiz.roomBook) return;
        thiz.roomBook = thiz.stompClient.subscribe("/book/" + rid, function (frame) {
            Log.d("房间来的数据：");
            Log.d(frame);
            if (thiz.dispatch && frame) {
                let content = frame.body;
                let msg: Msg = JSON.parse(content);
                Log.d("转换成消息：")
                Log.d(msg);
                Log.d(msg.data);
                switch (msg.type) {
                    case MSG_CONNECT: {
                        //有用户连接上来了
                        Log.d("onConnect  ==>房间有人加入");
                        thiz.dispatch.onConnect(MSG_FROM_ROOM, msg);
                    } break;
                    case MSG_JOINROOM: {
                        //加入房间
                        thiz.dispatch.onJoinRoom(MSG_FROM_ROOM, msg);
                    } break;
                    case MSG_LEAVEROOM: {
                        //离开房间
                        thiz.dispatch.onLeaveRoomMsg(MSG_FROM_ROOM, msg);
                    } break;
                    case MSG_SPEAKTOUSER: {
                        //有人找我聊天
                        thiz.dispatch.onChatMsg(MSG_FROM_ROOM, msg);
                    } break;
                    case MSG_SPEAKTOROOM: {
                        //房间聊天
                        thiz.dispatch.onChatRoomMsg(MSG_FROM_ROOM, msg);
                    } break;
                    case MSG_DATA: {
                        //房间聊天
                        thiz.dispatch.onDataMsg(MSG_FROM_ROOM, msg);
                    } break;
                    case MSG_DISCONNECT: {
                        //房间聊天
                        thiz.dispatch.onDisconnect(MSG_FROM_ROOM, msg);
                    } break;
                }
            }
        })
    }
}

class Msg {
    public type: number;//消息类型,1:建立连接，加入大厅，2:加入房间/创建房间,3:离开房间，4：对某人说，5:对整个房间说，6:命令数据，7:断开连接
    public from: string;//谁发出来的，默认为 system,其他为用户的id(sessionId)
    public to: string;//发给谁的，为sessionId
    public data: any;//发送的数据，如果type = 4 ,则应该为json对象字符串
    public state: number = 1;//消息状态,默认是成功的
}

/**
 * 消息分发
 * 
 * @class DispatchMsg
 */
class DispatchMsg {
    /**
     * 连接成功后，会得到游戏大厅的数据
     * 
     * @memberof DispatchMsg
     */
    public onConnect(msgFrom: number, data: Msg): void { }

    /**
     * 得到广播数据，即游戏大厅信息
     * 
     * @param {*} data 
     * @memberof DispatchMsg
     */
    public onBroadcast(msgFrom: number, data: Msg): void { }
    /**
     * 有人加入了房间
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onJoinRoom(msgFrom: number, data: Msg): void { }
    /**
     * 收到单人聊天数据
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onChatMsg(msgFrom: number, data: Msg): void { }
    /**
     * 收到房间聊天数据
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onChatRoomMsg(msgFrom: number, data: Msg): void { }
    /**
     * 收到游戏数据
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onDataMsg(msgFrom: number, data: Msg): void { }
    /**
     * 有人离开房间信息
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onLeaveRoomMsg(msgFrom: number, data: Msg): void { }
    /**
     * 有人断开连接
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onDisconnect(msgFrom: number, data: Msg): void { }

}
