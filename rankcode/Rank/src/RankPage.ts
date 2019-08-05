class RankPage extends ui.friend_rankUI {
    constructor(h: number) {
        super();
        this.height = h;
        this.listAll.height = h;
        this.listAll.x = 0;
        this.listAll.y = 0;
        // 使用但隐藏滚动条
        this.listAll.vScrollBarSkin = "";
        this.listAll.itemRender = FriendRankItem;
        this.listAll.renderHandler = new Laya.Handler(this, this.updateItem);
        this.listAll.array = [];
    }

    /**
     *  设置数据
     * @param itemDatas 
     */
    public setData(itemDatas: Array<Object>) {
        this.listAll.array = itemDatas;
    }
    private updateItem(cell, index: number) {
        cell.setData(cell.dataSource, index + 1);
    }
}