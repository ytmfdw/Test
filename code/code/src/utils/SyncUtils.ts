/**
 * 使用金币 
 * @param coinNum 
 * @return <0表示金币不足，其他返回金币扣除后剩余值
 */
function useCoin(coinNum: number): number {
    var coin = wx.getStorageSync(COIN);
    if (coin !== undefined && !isNaN(coin)) {
        let leftCoin = coin - coinNum;
        if (leftCoin >= 0) {
            //扣除成功，存入本地
            wx.setStorageSync(COIN, leftCoin);
        }
        return leftCoin;
    }
    return -1;
}
/**
 * 添加金币 
 */
function addCoin(coinNum: number): number {
    var coin = wx.getStorageSync(COIN);
    let leftCoin = coinNum;
    if (coin !== undefined && !isNaN(coin)) {
        leftCoin = coin + coinNum;
        //扣除成功，存入本地
        wx.setStorageSync(COIN, leftCoin);
        return leftCoin;
    }
    return coinNum;
}
/**添加经验值 */
function addExperience(experience: number): number {
    var localExperience = wx.getStorageSync(EXPERIENCE);
    let totalExp = experience;
    if (localExperience !== undefined && !isNaN(localExperience)) {
        totalExp = localExperience + experience;
        //扣除成功，存入本地
        wx.setStorageSync(EXPERIENCE, totalExp);
        return totalExp;
    }
    return experience;
}
/**
 * 本地同步
 */
function saveUserToLoacl(): void {
    wx.setStorage({
        key: USERDATA,
        data: Index.getApp().userData
    });
}


function getTodayData() {
    let today = todayData.date;
    let todayCache = wx.getStorageSync(TODAYDATA);
    if (!todayCache || todayCache == '' || todayCache.date != today) {
        //没有缓存
        setTodayData();
        return todayData;
    } else {
        //有缓存，且是今天的
        todayData = todayCache;
        return todayCache;
    }
}


function setTodayData() {
    let today = todayData.date;
    let todayCache = wx.getStorageSync(TODAYDATA);
    //没有缓存
    wx.setStorage({
        key: TODAYDATA,
        data: todayData
    });

}


function syncUser() {
    //把本地金币同步到云端
    // var coin = wx.getStorageSync(COIN);
    var user = AV.User.current();
    // var exp = wx.getStorageSync(EXPERIENCE);
    // var props = wx.getStorageSync(PROP);
    if (!user) return;
    let isNeedSync: boolean = false;
    user.set('version', VERSION);
    /*if (coin != '' && !isNaN(coin)) {
        if (coin !== user.get(COIN)) {
            isNeedSync = true;
        }
    }
    if (exp != '' && !isNaN(exp)) {
        if (exp !== user.get(EXPERIENCE)) {
            isNeedSync = true;
        }
    }*/
    /*  if (props != '') {
          var cloudProp = user.get(PROP);
          if (!cloudProp || cloudProp.length != props.length) {
              isNeedSync = true;
          } else {
              let len = props.length;
              for (let i = 0; i < len; i++) {
                  if (isNeedSync) {
                      break;
                  }
                  for (let j = 0; j < len; j++) {
                      if (cloudProp[i].type == props[j].type && cloudProp[i].num != props[j].num) {
                          isNeedSync = true;
                          break;
  
                      }
                  }
              }
          }
          user.set(PROP, props);
      }*/

    //分享次数
    let cacheShareStr = wx.getStorageSync(SHARECOUNT);
    if (cacheShareStr !== '' && !isNaN(cacheShareStr)) {
        shareCount = parseInt(cacheShareStr);
        //本地有金币
        //如果云端也有，取大的
        let cloudShareCount = user.get(SHARECOUNT);
        if (shareCount != cloudShareCount) {
            //本地要大于云端，同时没有提现，同步到云端
            user.set(SHARECOUNT, shareCount);
            isNeedSync = true;
        }
    }
    //成功打开视频次数
    let cacheOpenVideoCount = wx.getStorageSync(OPENVIDEOCOUNT);
    if (cacheOpenVideoCount !== '' && !isNaN(cacheOpenVideoCount)) {
        openVideoCount = parseInt(cacheOpenVideoCount);
        //本地有金币
        //如果云端也有，取大的
        let cloudOpenVideoCount = user.get(OPENVIDEOCOUNT);
        if (openVideoCount != cloudOpenVideoCount) {
            //本地要大于云端，同时没有提现，同步到云端
            user.set(OPENVIDEOCOUNT, openVideoCount);
            isNeedSync = true;
        }
    }
    //成功看完视频次数
    let cacheFinishVideoCount = wx.getStorageSync(FINISHVIDEOCOUNT);
    if (cacheFinishVideoCount !== '' && !isNaN(cacheFinishVideoCount)) {
        finishVideoCount = parseInt(cacheFinishVideoCount);
        //本地有金币
        //如果云端也有，取大的
        let cloudFinishVideo = user.get(FINISHVIDEOCOUNT);
        if (finishVideoCount != cloudFinishVideo) {
            //本地要大于云端，同时没有提现，同步到云端
            user.set(FINISHVIDEOCOUNT, finishVideoCount);
            isNeedSync = true;
        }
    }

    let cloudTodayData = user.get(TODAYDATA);
    if (!cloudTodayData || cloudTodayData.date != todayData.date || cloudTodayData.video != todayData.video || cloudTodayData.ifGift != todayData.ifGift) {
        isNeedSync = true;
    }

    if (!isNeedSync) return;
    //同步
    user.set(TODAYDATA, todayData);
    user.set(USERDATA, Index.getApp().userData);
    wx.setStorageSync(USERDATA, Index.getApp().userData);
    // user.set(COIN, coin);
    // user.set(EXPERIENCE, exp);
    user.save();
}