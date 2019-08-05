
/**
 * 下载压缩文件
 * @param callBack 
 */
function downLoadResZip(resPath: string, callBack?: Function, updateCallBack?: Function) {
    if (!isWX) {
        return;
    }
    var tmpPath: string = wx.getStorageSync(resPath);
    if (tmpPath && tmpPath.length > 0) {
        //判断文件是否存在
        if (callBack) {
            callBack(tmpPath);
        }
        if (updateCallBack) {
            updateCallBack({
                progress: 100,
                totalBytesWritten: 100,
                totalBytesExpectedToWrite: 100
            });
        }
        return;
    }
    var fs = wx.getFileSystemManager();
    var df = wx.downloadFile({
        url: resPath,
        success: function (res) {
            Log.d('资源下载完成');
            Log.d(res);
            if (res.statusCode === 200) {
                var zip_res = res.tempFilePath;
                Log.d(zip_res);
                var zipPath = wx.env.USER_DATA_PATH + '/assets/';
                Log.d(zipPath);
                fs.unzip({
                    zipFilePath: zip_res,
                    targetPath: zipPath,    // 解压到res目录下
                    success: function (result) {
                        Log.d('解压缩成功---')      // 解压成功后，再开始初始化场景内容
                        Log.d(result);
                        //读取目录,得到文件数组
                        var files = fs.readdirSync(zipPath);
                        var resFile = null;
                        if (files && files.length > 0) {
                            resFile = zipPath + files[0] + '/';
                            // files = fs.readdirSync(fontFile);
                            if (callBack) {
                                callBack(resFile);
                            }
                            wx.setStorage({
                                key: resPath,
                                data: resFile,
                                complete: null,
                                success: null,
                                fail: null
                            });
                        } else {
                            Log.d('资源加载失败');
                            wx.removeStorageSync(resPath);
                            if (callBack) {
                                callBack(null);
                            }
                        }
                    }
                });
            }
        },
        fail: e => {
            Log.d('资源加载失败');
            wx.removeStorageSync(resPath);
            if (callBack) {
                callBack(null);
            }
        },
        complete: null
    });
    //进度提醒
    if (updateCallBack) {
        df.onProgressUpdate(function (data) {
            if (data) {
                updateCallBack(data);
                if (data.progress >= 100) {
                    //移除监听
                    df.offProgressUpdate(this);
                }
            }
        });
    }
}
/**
 * 文件是否存在
 * @param url 
 */
function hasDownLoad(url: string): string {
    //只能下载https网址的文件
    if (url.indexOf('https://') == -1) {
        //不是网络地址，直接返回
        return url;
    }
    var fs = wx.getFileSystemManager();
    var tmpPath: string = wx.getStorageSync(url);
    if (tmpPath && tmpPath.length > 0) {
        //判断文件是否存在
        if (testFile(tmpPath)) {
            Log.d('文件存在~~~~~~~~');
            return tmpPath;
        } else {
            //文件不存在了，清掉
            wx.removeStorageSync(url);
        }
    }
    return null;
}


/**
 * 下载文件
 * @param url 
 * @param callBack 
 */
function downLoadFile(url: string, callBack?: Function, updateCallBack?: Function): void {

    if (!isWX) {
        if (callBack) {
            callBack(null);
        }
        return;
    }
    //只能下载https网址的文件
    if (url.indexOf('https://') == -1) {
        //不是网络地址，直接返回
        if (callBack) {
            callBack(url);
        }
        if (updateCallBack) {
            updateCallBack({
                progress: 100,
                totalBytesWritten: 100,
                totalBytesExpectedToWrite: 100
            });
        }
        return;
    }
    var fs = wx.getFileSystemManager();
    var tmpPath: string = wx.getStorageSync(url);
    if (tmpPath && tmpPath.length > 0) {
        //判断文件是否存在
        if (testFile(tmpPath)) {
            Log.d('文件存在~~~~~~~~');
            if (callBack) {
                callBack(tmpPath);
            }
            if (updateCallBack) {
                updateCallBack({
                    progress: 100,
                    totalBytesWritten: 100,
                    totalBytesExpectedToWrite: 100
                });
            }
            return;
        } else {
            //文件不存在了，清掉
            wx.removeStorageSync(url);
        }
    }

    var df = wx.downloadFile({
        url: url,
        success: function (res) {
            Log.d('资源下载完成');
            Log.d(res);
            if (res.statusCode === 200) {
                var filePath = res.tempFilePath;
                Log.d(filePath);
                wx.saveFile({
                    tempFilePath: filePath,
                    success: obj => {
                        if (callBack) {
                            callBack(obj.savedFilePath);
                        }
                        wx.setStorage({
                            key: url,
                            data: obj.savedFilePath,
                            complete: null,
                            success: null,
                            fail: null
                        });
                    },
                    fail: () => {
                        if (callBack) {
                            callBack(null);
                        }
                    },
                    complete: null
                });
            } else {
                if (callBack) {
                    callBack(null);
                }
            }
        },
        fail: e => {
            Log.d('资源加载失败');
            wx.removeStorageSync(url);
            if (callBack) {
                callBack(null);
            }
        },
        complete: null
    });
    //进度提醒
    if (updateCallBack) {
        df.onProgressUpdate(function (data) {
            if (data) {
                updateCallBack(data);
                if (data.progress >= 100) {
                    //移除监听
                    df.offProgressUpdate(this);
                }
            }
        });
    }
}


/**
 * 判断文件 是否存在
 * @param path 
 */
function testFile(path: string): boolean {
    try {
        wx.getFileSystemManager().accessSync(path);
        Log.d('文件存在~~~~~~' + path);
        return true;
    } catch (e) {
        Log.d('文件不存在~~~~~~');
        return false;
    }
}