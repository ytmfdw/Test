/**膨胀动画时间  */
const SCALE_DURATION = 100;
/**闪烁动画时间  */
const TWINKLE_DURATION = 100;

/**
* 抖动动画效果    旋转抖动（动画对象描点设置为中心点)
* @param caller 
* @param view 
* @param count     不用传入
*/
function sharkAni(caller: any, view: Laya.Sprite, count?: number, times?: number, callBack?: Function) {
    var index = count ? count : 0;
    var r = index % 4 === 0 ? 15 : (index % 4 === 1 ? 0 : (index % 4 === 2 ? -15 : 0));
    Laya.Tween.to(view, {
        rotation: r
    }, 100, Laya.Ease.linearInOut, Laya.Handler.create(caller, function () {
        if (index <= (4 * (times ? times : 5))) {
            sharkAni(caller, view, index + 1, times, callBack);
        } else {
            //播放完成回调
            if (callBack) {
                callBack();
            }
        }
    }));
}
/**
 * 抖动动画效果  左右抖动
 * @param caller 执行域
 * @param view 动画对象
 * @param count 抖动动画索引，不用传或传入0
 * @param times 抖动次数，默认5次
 * @param callBack 动画完成后回调
 */
function sharkAniLeftRight(caller: any, view: Laya.Sprite, count?: number, times?: number, callBack?: Function) {
    var index = count ? count : 0;
    var r = index % 4 === 0 ? 0 : (index % 4 === 1 ? 10 : (index % 4 === 2 ? 0 : -10));
    var t = view.x + r;
    Laya.Tween.to(view, {
        x: t
    }, 10, Laya.Ease.linearInOut, Laya.Handler.create(caller, function () {
        if (index <= (3 * (times ? times : 5))) {
            sharkAniLeftRight(caller, view, ++index, times, callBack);
        } else {
            //播放完成回调
            if (callBack) {
                callBack();
            }
        }
    }));
}


/**膨胀动画  x方向拉伸，y方向压缩
 * 
 * @param caller 执行域
 * @param view  动画对象
 * @param scaleXY 膨胀系数，默认0.2
 */
function scaleAni(caller: any, view: Laya.Sprite, scaleXY?: number) {
    var obj = { scale: 0 };
    var thiz = caller;
    var scaleTmp = scaleXY ? scaleXY : 0.2;
    Laya.Tween.to(obj, {
        scale: scaleTmp,
        update: new Laya.Handler(thiz, () => {
            view.scaleX = 1 + obj.scale;
            view.scaleY = 1 - obj.scale;
        })
    }, SCALE_DURATION, Laya.Ease.bounceInOut, Laya.Handler.create(thiz, function () {
        obj = { scale: 0 };
        Laya.Tween.to(obj, {
            scale: scaleTmp,
            update: new Laya.Handler(thiz, () => {
                view.scaleX = 1 + scaleTmp - obj.scale;
                view.scaleY = 1 - scaleTmp + obj.scale;
            })
        }, SCALE_DURATION, Laya.Ease.bounceInOut);
    }));
}

/**
 * 闪烁动画
 * @param caller 执行域
 * @param view 动画对象
 * @param count 动画次数索引，请传入null或0
 * @param times 闪烁次数
 * @param callBack 动画完成后回调
 */
function twinkle(caller: any, view: Laya.Sprite, count?: number, times?: number, callBack?: Function): void {
    var index = count ? count : 0;
    var r = index % 2 === 0 ? 0.5 : 1;
    Laya.Tween.to(view, {
        alpha: r
    }, TWINKLE_DURATION, Laya.Ease.linearInOut, Laya.Handler.create(caller, function () {
        if (index <= (2 * (times ? times : 1))) {
            twinkle(caller, view, index + 1, times, callBack);
        } else {
            //播放完成回调
            Log.d('播放完成回调');
            if (callBack) {
                Log.d('播放完成回调 callBack');
                callBack();
            }
        }
    }));
}


/**跳动动画
 * 
 * @param caller 执行域
 * @param view  动画对象,必需要设置描点为中心
 * @param skipHeight 跳跃高度，默认为控件高度一半
 * @param skipNum 跳跃次数，默认为3次
 * @param callBack 完成回调
 * @param skipIndex 跳跃索引，不用传入，或传0
 */
function skipAni(caller: any, view: Laya.Sprite, skipHeight?: number, skipNum?: number, callBack?: Function, skipIndex?: number) {
    var obj = { scale: 0 };
    var thiz = caller;
    var h = view.height;
    var baseY = view.y;
    var height = skipHeight ? skipHeight : (h * 3 / 4);
    var skipCount = skipNum ? skipNum : 3;
    var skips = skipIndex ? skipIndex : 0;
    //计算本次高度
    height = height / (skips + 1);
    Laya.Tween.to(obj, {
        scale: height,
        update: new Laya.Handler(thiz, () => {
            view.y = baseY - obj.scale;
        })
    }, 100, Laya.Ease.bounceInOut, Laya.Handler.create(thiz, function () {
        obj = { scale: 0 };
        Laya.Tween.to(obj, {
            scale: height,
            update: new Laya.Handler(thiz, () => {
                view.y = baseY - height + obj.scale;
            })
        }, 100, Laya.Ease.bounceInOut, Laya.Handler.create(thiz, function () {
            scaleAni(thiz, view);
            if (skips >= skipCount) {

                if (callBack) {
                    callBack();
                }
            } else {
                skipAni(caller, view, skipHeight, skipNum, callBack, skips + 1);
            }
        }));
    }));
}


/***获取舞台最后一个名称 */
function getStageLastName(): string {
    if (Laya.stage.numChildren > 0) {
        return Laya.stage.getChildAt(Laya.stage.numChildren - 1).name;
    } else {
        return null;
    }
}

/**震屏效果临时变量 */
var vibrateObj = {
    x: 0, y: 0, rotation: 0, view: null
};
/**
 * 调用该方法前，请将view的描点设置为中心点
 * 震屏效果
 * 三个变量：x水平方向  5,y垂直方向  5,rotation旋转角度  10
 * @param view 
 * @param time  持续时间 以毫秒为单位
 */
function vibrateScreen(view: Laya.Sprite, time?: number): void {
    if (vibrateObj.view) {
        Laya.timer.clearAll(vibrateObj);
        //说明上一次的动画还没完成
        vibrateObj.view.x = vibrateObj.x;
        vibrateObj.view.y = vibrateObj.y;
        vibrateObj.view.rotation = vibrateObj.rotation;
    }
    //先清除该对象上的缓和时间
    vibrateObj.x = view.x;
    vibrateObj.y = view.y;
    vibrateObj.rotation = view.rotation;
    vibrateObj.view = view;
    //定义参数  
    var count = time ? (time / 10) : 50;
    var loop = 0;//震动次数  
    var offX;
    var offY;
    var dir = 1;//震动方向。1正，-1反  
    var rotation;

    Laya.timer.loop(10, vibrateObj, function () {
        loop++;
        //随机获取震动方向  
        dir = Math.random() > .5 ? 1 : -1;
        //随机获取X轴移动量  
        offX = Math.random() * 5 * dir + vibrateObj.x;
        //随机获取Y轴移动量  
        offY = Math.random() * 5 * dir * -1 + vibrateObj.y;
        // rotation = Math.random() * 5 * dir + vibrateObj.rotation;
        Laya.Tween.to(view, { x: offX, y: offY, rotation: rotation }, 10, Laya.Ease.linearNone, Laya.Handler.create(vibrateObj, function () {
            if (loop > count) {
                Laya.timer.clearAll(vibrateObj);
                view.x = vibrateObj.x;
                view.y = vibrateObj.y;
                view.rotation = vibrateObj.rotation;
                vibrateObj.view = null;
                return;
            }
        }));
    });
}



/**
 * 数字文本变化动画
 * 
 * @param {Laya.Text} text 
 * @param {number} newNum 
 * @returns {void} 
 */
function numberTextAni(text: Laya.Text, newNum: number): void {
    if (!text) return;
    Laya.timer.clearAll(text);
    text.destroyChildren();
    let totalTime = 1500;
    let dt = 100;
    let panel = new Laya.Panel();
    panel.width = text.width;
    panel.height = text.height;
    text.addChild(panel);
    let nextText = new Laya.Text();
    nextText.width = text.width;
    nextText.height = text.height;
    nextText.font = text.font;
    nextText.fontSize = text.fontSize;
    nextText.color = text.color;
    nextText.align = text.align;
    nextText.valign = text.valign;
    nextText.pos(0, 0);
    panel.addChild(nextText);
    //最下面一个
    let perText = new Laya.Text();
    perText.width = text.width;
    perText.height = text.height;
    perText.font = text.font;
    perText.fontSize = text.fontSize;
    perText.align = text.align;
    perText.valign = text.valign;
    perText.color = text.color;
    perText.pos(0, text.height);
    panel.addChild(perText);
    let lastNum = 0;
    if (text.text && !isNaN(text.text)) {
        lastNum = parseInt(text.text);
    }
    // text.text = '';
    let obj = { value: lastNum };
    let count = totalTime / dt;
    let dx = Math.round((newNum - lastNum) / count);
    let first = nextText;
    let last = perText;
    first.text = lastNum + '';
    let index = 0;
    first.text = (lastNum + dx * index) + '';
    last.text = (lastNum + dx * (index + 1)) + '';
    Laya.timer.loop(dt, text, function () {
        text.text = '';
        if (index >= count) {
            Laya.timer.clearAll(text);
            text.text = newNum + '';
            text.destroyChildren();
            return;
        }
        let pos = { y: 0 }
        Laya.Tween.to(pos, {
            y: -text.height,
            update: Laya.Handler.create(text, function () {
                if (!first || !last) {
                    return;
                }
                //哪个是第一个
                first.y = pos.y;
                last.y = text.height + pos.y;

            }, null, false)
        }, dt, null, Laya.Handler.create(text, function () {
            if (index >= count) {
                return;
            }
            if (!nextText || !perText) {
                return;
            }
            //本次结束后，有一个文本框变到下面来
            if (nextText.y < perText.y) {
                first = nextText;
                last = perText;
            } else {
                last = nextText;
                first = perText;
            }
            last.text = first.text;
            // first.y = text.height;
            first.text = (lastNum + dx * (index + 1)) + '';
        }))
        index++;
    });
}

/**
 * 数字滚动动画
 * @param text 
 * @param newNum 
 */
function numberClipAni(text: Laya.FontClip, newNum: number): void {
    if (!text) return;
    Laya.timer.clearAll(text);
    // Log.d('clip childrenNum;' + text.numChildren);
    text.destroyChildren();
    let totalTime = 1500;
    let dt = 100;
    let panel = new Laya.Panel();
    panel.width = text.width;
    panel.height = text.height;
    text.addChild(panel);
    let nextText = new Laya.FontClip();
    nextText.width = text.width;
    nextText.height = text.height;
    nextText.skin = text.skin;
    nextText.sheet = text.sheet;
    nextText.align = text.align;
    nextText.pos(0, 0);
    panel.addChild(nextText);
    //最下面一个
    let perText = new Laya.FontClip();
    perText.width = text.width;
    perText.height = text.height;
    perText.skin = text.skin;
    perText.sheet = text.sheet;
    perText.align = text.align;
    perText.pos(0, text.height);
    panel.addChild(perText);
    let lastNum = 0;
    if (text.value && !isNaN(text.value)) {
        lastNum = parseInt(text.value);
    }
    // text.text = '';
    let obj = { value: lastNum };
    let count = totalTime / dt;
    let dx = Math.round((newNum - lastNum) / count);
    let first = nextText;
    let last = perText;
    first.value = lastNum + '';
    let index = 0;
    first.value = (lastNum + dx * index) + '';
    last.value = (lastNum + dx * (index + 1)) + '';
    Laya.timer.loop(dt, text, function () {
        text.value = ' ';
        if (index >= count) {
            Log.d('动画结束 ：' + index);
            Laya.timer.clearAll(text);
            text.value = newNum + '';
            Log.d('动画结束 ：text.value=' + text.value);
            text.destroyChildren();
            // panel.destroy();
            return;
        }
        let pos = { y: 0 }
        Laya.Tween.to(pos, {
            y: -text.height,
            update: Laya.Handler.create(text, function () {
                if (!first || !last) {
                    return;
                }
                //哪个是第一个
                first.y = pos.y;
                last.y = text.height + pos.y;

            }, null, false)
        }, dt, null, Laya.Handler.create(text, function () {
            if (index >= count) {
                return;
            }
            if (!nextText || !perText) {
                return;
            }
            //本次结束后，有一个文本框变到下面来
            if (nextText.y < perText.y) {
                first = nextText;
                last = perText;
            } else {
                last = nextText;
                first = perText;
            }
            last.value = first.value;
            // first.y = text.height;
            first.value = (lastNum + dx * (index + 1)) + '';
        }))
        index++;
    });
}

const SMALLKEYCOUNT = 12;

//显示小星星
function showSmallKeys(x: number, y: number): void {
    //产生小星星
    for (var i = 0; i < SMALLKEYCOUNT; i++) {
    }
}
