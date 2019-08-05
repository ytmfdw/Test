class FriendRankItem extends ui.rank_itemUI {
    public setData(data, index) {
        // var color = index % 2 == 0 ? '#777' : '#888';
        //先清空绘制
        // this.graphics.clear(false);
        // this.graphics.drawRect(0, 0, this.width, this.height, color);
        var rankIndex = index;
        this.indexLabel.text = rankIndex + "";
        this.headImg.skin = data.avatarUrl ;
        this.nickNameLabel.text = data.nickname;
        this.levelLabel.text = data.score + "";
    }
}