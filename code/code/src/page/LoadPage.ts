class LoadPage extends ui.page.LoadingUI {
    // private app: App = null;
    private static self: LoadPage = null;

    private subpackage = [
        'res','comp'
    ];
    private stateFlag = [];
    private subLen = 4;
    //加载索引值
    private loadIndex = 0;
    public min: number = 0;
    public max: number = 100;
    //总共移动距离：460  当前位置
    public progress: number = 0;
    //笑话
    private joke = '';
    private constructor(/*app: App*/) {
        super();
        // this.app = app;
        this.subLen = this.subpackage.length;
        for (let i = 0; i < this.subLen; i++) {
            this.stateFlag.push(false);
        }
        Laya.timer.loop(3000, this, this.jokeTitleAni);

        this.height = Index.screenH;
        //距离底部100
        this.loadLayout.y = this.height - this.loadLayout.height - 100;

    }

    private jokeTitleAni(): void {
        Log.d('jokeTitleAni  ===========');
        // sharkAniLeftRight(this.jokeTitle, this.jokeTitle);
    }

    private callBack: Function = null;

    public static getSelf(/*app: App*/) {
        if (!LoadPage.self) {
            LoadPage.self = new LoadPage(/*app*/);
        }
        return LoadPage.self;
    }
    private totalProgress: Array<number> = [0, 0, 0];
    public loadRes(callBack: Function): void {
        this.textJoke.text = this.joke;
        this.callBack = callBack;
        this.setProgress(0);
        let thiz = this;
        thiz.loadIndex = 0;
        let isSuccess: boolean = true;
        if (this.subLen == 0) {
            thiz.onCompelete(isSuccess);
            return;
        }
        //加载分包
        for (let i = 0; i < this.subLen; i++) {
            if (thiz.stateFlag[i]) {
                thiz.loadIndex++;
                // thiz.loadProgress.value = thiz.loadIndex / thiz.subLen;
                // thiz.loadText.text = '正在玩命加载...' + thiz.loadIndex + '/' + thiz.subLen;
                if (thiz.loadIndex == thiz.subLen) {
                    thiz.onCompelete(isSuccess);
                }
                continue;
            }
            let loadTask = wx.loadSubpackage({
                name: this.subpackage[i], // name 可以填 name 或者 root
                success: (res) => {
                    // 分包加载成功后通过 success 回调
                    Log.d(res);
                    thiz.stateFlag[i] = true;
                },
                fail: (res) => {
                    // 分包加载失败通过 fail 回调
                    isSuccess = false;
                    thiz.stateFlag[i] = false;
                },
                complete() {
                    thiz.loadIndex++;
                    // thiz.loadProgress.value = thiz.loadIndex / thiz.subLen;
                    if (thiz.loadIndex == thiz.subLen) {
                        // Laya.timer.once(2000, thiz, thiz.onCompelete, [true]);
                        thiz.onCompelete(isSuccess);
                    }
                }
            });

            loadTask.onProgressUpdate(res => {
                Log.d('下载进度  i=>' + i, res.progress)
                Log.d('已经下载的数据长度', res.totalBytesWritten)
                Log.d('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)

                thiz.totalProgress[i] = res.totalBytesWritten / res.totalBytesExpectedToWrite * 100;
                let per = (thiz.totalProgress[0] + thiz.totalProgress[1] + thiz.totalProgress[2]) / 300;
                // thiz.loadProgress.value = (thiz.totalProgress[0] + thiz.totalProgress[1] + thiz.totalProgress[2]) / 300;
                thiz.setProgress(per * 100);
            })
        }



    }

    public setProgress(progress: number, min?: number, max?: number) {
        if (!isNaN(min)) {
            this.min = min;
        }
        if (!isNaN(max)) {
            this.max = max;
        }
        this.progress = progress;
        //根据百分比，计算应该移动的距离 
        //该移动的距离 
        var per = this.progress / (this.max - this.min) * this.progressView.progressBar.width;

        var moveX = -this.progressView.progressBar.width / 2 + per;
        //计算mask的位置
        // var maskX = this.progressBar.width * 3 / 2 - per;
        this.progressView.progressMask.x = moveX;
        // this.progressBar.x = moveX;
        this.loadText.text = '正在玩命加载...' + Math.round(progress) + '%';
    }

    /**
     * 加载结束
     * 
     * @private
     * @memberof LoadPage
     */
    private onCompelete(flag: boolean): void {
        if (this.callBack) {
            this.callBack(flag);
        }
    }
}