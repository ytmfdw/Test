/**
 * 队列的实现
 */
class Queue {
    private list: Array<any> = null;
    private len: number;
    /**设置queue的大小 */
    constructor(size?: number) {
        this.list = new Array();
        this.len = size;
    }

    //向队列中添加数据
    public push(data: any) {
        if (data == null) {
            return false;
        }
        //如果传递了size参数就设置了队列的大小
        if (this.len != null && !isNaN(this.len)) {
            if (this.list.length == this.len) {
                this.pop();
            }
        }
        this.list.unshift(data);
        return true;
    }

    //从队列中取出数据
    public pop() {
        return this.list.pop();
    }

    //返回队列的大小
    public size() {
        return this.list.length;
    }

    //返回队列的内容
    public quere() {
        return this.list;
    }

    public clear() {
        this.list.splice(0, this.list.length);
    }
}