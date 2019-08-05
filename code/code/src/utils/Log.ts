class Log {
    public static d(msg?: any, data?: any) {
        if (DEBUG) {
            // console.log(msg, typeof data === 'undefined' ? '' : data);
            if (typeof data === 'undefined') {
                console.log(msg);
            } else {
                console.log(msg + "==>" + data);
            }
        }
    }

    public static error(msg?: any, data?: any) {
        if (DEBUG) {
            // console.log(msg, typeof data === 'undefined' ? '' : data);
            if (typeof data === 'undefined') {
                console.error(msg);
            } else {
                console.error(msg + "==>" + data);
            }
        }
    }
}