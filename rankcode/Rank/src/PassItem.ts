class PassItem extends ui.nextItemUI {
    constructor() {
        super();
    }
    public setData(data) {
        //排名
        this.labelIndex.text = '第' + (data.index) + '名';
        this.ivHead.skin = data.avatarUrl;
        this.labelNick.text = data.nickname;
        this.labelScore.text = data.score + '';
        if (data.isMe) {
            this.userImgBg.skin = 'root/img_rank_me.png';
            this.imgNickBg.skin = 'root/img_rank_me_text.png';
            // this.labelNick.color = '#e44549';
            // this.graphics.drawRect(0, 0, this.width, this.height, '#888');
        } else {
            this.userImgBg.skin = 'root/img_rank_he.png';
            this.imgNickBg.skin = 'root/img_rank_he_text.png';
            // this.labelNick.color = '#8a8889';
            // this.graphics.drawRect(0, 0, this.width, this.height, '#555');
        }
    }
}