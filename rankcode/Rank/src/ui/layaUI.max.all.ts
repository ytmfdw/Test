
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class friend_rankUI extends View {
		public listAll:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":700},"child":[{"type":"List","props":{"y":0,"x":0,"width":500,"var":"listAll","spaceY":20,"renderType":"render","height":700}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.friend_rankUI.uiView);

        }

    }
}

module ui {
    export class nextItemUI extends View {
		public labelIndex:laya.display.Text;
		public userImgBg:Laya.Image;
		public ivHead:Laya.Image;
		public imgNickBg:Laya.Image;
		public labelNick:laya.display.Text;
		public labelScore:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":210,"height":200},"child":[{"type":"Text","props":{"y":0,"x":25,"width":154,"var":"labelIndex","valign":"middle","text":"第1名","italic":true,"height":26,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":90,"x":105,"width":100,"var":"userImgBg","skin":"root/img_rank_me.png","height":117,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":63,"x":48,"width":80,"var":"ivHead","skin":"root/logo.png","height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":80,"skin":"root/img_user_head_mask.png","renderType":"mask","height":80}}]},{"type":"Image","props":{"y":63,"x":48,"width":80,"skin":"root/img_rank_mask.png","height":80,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":136,"x":38,"width":137,"var":"imgNickBg","skin":"root/img_rank_me_text.png","height":44},"child":[{"type":"Text","props":{"y":9,"x":11,"width":113,"var":"labelNick","valign":"middle","text":"昵称","overflow":"hidden","height":20,"fontSize":20,"font":"Helvetica","color":"#ffffff","align":"center"}}]},{"type":"Text","props":{"y":53,"x":30,"width":154,"visible":false,"var":"labelScore","valign":"middle","text":"345","height":30,"fontSize":25,"font":"Helvetica","color":"#333344","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nextItemUI.uiView);

        }

    }
}

module ui {
    export class next_rankUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":630,"height":200}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.next_rankUI.uiView);

        }

    }
}

module ui {
    export class rank_itemUI extends View {
		public indexLabel:Laya.Label;
		public headImg:Laya.Image;
		public nickNameLabel:Laya.Label;
		public levelLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":500,"height":120},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"root/img_rank_item_bg.png","height":120}},{"type":"Label","props":{"y":26,"x":12,"width":50,"var":"indexLabel","valign":"middle","text":"1","height":75,"fontSize":20,"color":"#FFF","align":"center"}},{"type":"Image","props":{"y":57,"x":118,"width":100,"skin":"root/img_rank_he.png","height":117,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":63,"x":48,"width":80,"var":"headImg","height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":80,"skin":"root/img_user_head_mask.png","renderType":"mask","height":80}}]},{"type":"Image","props":{"y":63,"x":48,"width":80,"skin":"root/img_rank_mask.png","height":80,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":48,"x":175,"skin":"root/img_rank_he_text.png"},"child":[{"type":"Label","props":{"y":4,"x":9,"width":113,"var":"nickNameLabel","valign":"middle","text":"姓名","overflow":"hidden","height":32,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":-31,"x":8,"width":113,"valign":"middle","text":"姓名","overflow":"hidden","height":32,"fontSize":18,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":49,"x":339,"skin":"root/img_rank_me_text.png"},"child":[{"type":"Label","props":{"y":2,"x":6,"width":118,"var":"levelLabel","valign":"middle","text":"1","overflow":"visible","height":36,"fontSize":25,"font":"SimSun","color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":-34,"x":8,"width":118,"valign":"middle","text":"积分","overflow":"visible","height":36,"fontSize":20,"font":"SimSun","color":"#ffffff","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.rank_itemUI.uiView);

        }

    }
}
