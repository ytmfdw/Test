class DispatchImpl extends DispatchMsg {

    private static self: DispatchImpl = null;
    public roomId: string = null;
    //收到消息后下一步该做什么
    public nextStep: number = 0;
    //下一步操作的数据
    public nextStepData: any = null;
    private constructor() {
        super();
    }
    public static getSelf(): DispatchImpl {
        if (DispatchImpl.self == null) {
            DispatchImpl.self = new DispatchImpl();
        }
        return DispatchImpl.self;
    }
    /**
    * 连接成功后，会得到游戏大厅的数据
    * 
    * @memberof DispatchMsg
    */
    public onConnect(msgFrom: number, data: Msg): void {
        Log.d("onConnect=======>");
        let thiz = DispatchImpl.getSelf();
        if (msgFrom == MSG_FROM_USER) {
            showToast({ title: "连接成功:" + data.data });
        }
        if (thiz.nextStep == MSG_JOINROOM && thiz.nextStepData != null) {
            StompUtils.getSelf().joinRoom(thiz.nextStepData.uid, thiz.nextStepData.rid);
            //把要操作的命令清掉
            thiz.nextStep = 0;
            thiz.nextStepData = null;
        }
    }

    /**
     * 得到广播数据，即游戏大厅信息
     * 
     * @param {*} data 
     * @memberof DispatchMsg
     */
    public onBroadcast(msgFrom: number, data: Msg): void {
        let thiz = DispatchImpl.getSelf();
        showToast({ title: "收到广播消息:" + data.data });
    }
    /**
     * 收到单人聊天数据
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onJoinRoom(msgFrom: number, data: Msg): void {
        let thiz = DispatchImpl.getSelf();
        showToast({ title: "有人加入了房间:" + data.data });
        if (data.state == 1) {
            //房间id
            DispatchImpl.getSelf().roomId = data.data.rid;

            //房间成员
            let users = data.data.users;
            //谁发的
            let from = data.from;

            Log.d('加入了房间：' + DispatchImpl.getSelf().roomId);
            Log.d(users);
            Log.d(from);
        } else {
            showToast({ title: data.data });
        }
    }
    /**
     * 收到单人聊天数据
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onChatMsg(msgFrom: number, data: Msg): void {
        let thiz = DispatchImpl.getSelf();
        showToast({ title: "收到单人聊天消息:" + data.data });
    }
    /**
     * 收到房间聊天数据
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onChatRoomMsg(msgFrom: number, data: Msg): void {
        let thiz = DispatchImpl.getSelf();
        showToast({ title: "收到房间聊天消息:" + data.data });
    }
    /**
     * 收到游戏数据
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onDataMsg(msgFrom: number, data: Msg): void {
        let thiz = DispatchImpl.getSelf();
        showToast({ title: "收到游戏数据:" + data.data });
    }
    /**
     * 有人离开房间信息
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onLeaveRoomMsg(msgFrom: number, data: Msg): void {
        let thiz = DispatchImpl.getSelf();
        showToast({ title: "有人离开了房间:" + data.data });
    }
    /**
     * 有人断开连接
     * 
     * @param {Msg} data 
     * @memberof DispatchMsg
     */
    public onDisconnect(msgFrom: number, data: Msg): void {
        let thiz = DispatchImpl.getSelf();
        showToast({ title: "有人断线了:" + data.data });
    }
}