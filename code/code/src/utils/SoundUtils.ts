const BGLOCALMUSICPATH = 'sound/back2.mp3';
const BOXOVER = 'sound/prop_get.mp3'
var bgMusicPath = null;
var bgMusicChannal: Laya.SoundChannel = null;
var isNeedPlayBgm: boolean = false;
/**音效播放 ,可统一管理*/
function playSound(soundUrl: string): void {
    if (isMute) return;
    Laya.SoundManager.playSound(soundUrl);
}
var playIndex: number = 0;
/**播放背景音乐 */
function playBgMusic(isPlay: boolean): void {
    isNeedPlayBgm = isPlay;
    // if (!isPlay && !bgMusicChannal) return;
    if (bgMusicChannal) {
        if (isPlay) {
            //暂停
            if (!isMuteBgm) {
                bgMusicChannal.resume();
            } else {
                bgMusicChannal.pause();
            }
        } else {
            bgMusicChannal.pause();
        }
        return;
    }
    if (isPlay && !isMuteBgm) {
        Laya.SoundManager.setMusicVolume(0.3);
        playIndex = Math.floor(Math.random() * bgms.length);
        //下载背景音乐
        Log.d("playBgMusic   bgms:" + bgms[playIndex].url);
        var playPath = hasDownLoad(bgms[playIndex].url);
        if (playPath) {
            bgMusicChannal = Laya.SoundManager.playMusic(playPath, 1, Laya.Handler.create(Index.getApp(), function () {
                Log.d("bgm play complete~~~~~~~");
                bgMusicChannal = null;
                if (!isMuteBgm && isNeedPlayBgm) {
                    playBgMusic(true);
                }
            }));
        } else {
            //这个文件还没下载完成
            bgMusicChannal = Laya.SoundManager.playMusic(BGLOCALMUSICPATH, 1, Laya.Handler.create(Index.getApp(), function () {
                Log.d("bgm play complete~~~~~~~");
                bgMusicChannal = null;
                if (!isMuteBgm && isNeedPlayBgm) {
                    playBgMusic(true);
                }
            }));
        }

    }
}

//点击音效
function clickSound() {

}