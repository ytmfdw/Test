
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.dialog {
    export class modelUI extends View {
		public bgMask:Laya.Sprite;
		public contentLayout:Laya.Sprite;
		public titleLayout:Laya.Image;
		public textTitle:Laya.Label;
		public middleLayout:Laya.Image;
		public bottomLalyout:Laya.Image;
		public textMsg:Laya.Label;
		public btnClose:script.ImageRunTime;
		public btnCenter:script.ImageRunTime;
		public textCenter:Laya.Label;
		public btnCancel:script.ImageRunTime;
		public textCancel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":768,"height":1660},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":768,"var":"bgMask","height":1660}},{"type":"Sprite","props":{"y":500,"x":67.5,"width":633,"var":"contentLayout","skin":"root/btn_skyBlue.png","height":450,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"titleLayout","skin":"root/general_win_banner.png"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":633,"var":"textTitle","valign":"middle","text":"温馨提示","strokeColor":"#ffffff","stroke":5,"height":72,"fontSize":30,"font":"Microsoft YaHei","color":"#f00","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":71,"x":-3,"width":639,"var":"middleLayout","skin":"root/win_bg_middle.png","height":290}},{"type":"Image","props":{"y":360,"x":-3,"var":"bottomLalyout","skin":"root/win_bg_bottom.png"}},{"type":"Label","props":{"y":95,"x":40,"wordWrap":true,"width":550,"var":"textMsg","valign":"middle","text":"这是消息内容","leading":10,"height":200,"fontSize":20,"font":"SimHei","color":"#355584","bold":true,"align":"left"}},{"type":"Image","props":{"y":34,"x":599,"width":60,"var":"btnClose","skin":"root/champion_video_close_btn.png","runtime":"script.ImageRunTime","height":60,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":370,"x":172,"width":230,"var":"btnCenter","skin":"root/less_green_btn.png","runtime":"script.ImageRunTime","label":"label","height":97,"anchorY":0.5,"anchorX":0.5,"sizeGrid":"0,60,0,60"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":230,"var":"textCenter","valign":"middle","text":"确定","height":97,"fontSize":35,"color":"#fdfdfd","align":"center"}}]},{"type":"Image","props":{"y":370,"x":462,"width":230,"var":"btnCancel","skin":"root/green_btn.png","runtime":"script.ImageRunTime","label":"label","height":97,"anchorY":0.5,"anchorX":0.5,"sizeGrid":"0,60,0,60"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":230,"var":"textCancel","valign":"middle","text":"取消","height":97,"fontSize":35,"color":"#fdfdfd","align":"center"}}]},{"type":"Image","props":{"y":85,"x":6,"skin":"root/win_bg_left_corner.png"}},{"type":"Image","props":{"y":85,"x":345,"skin":"root/win_bg_right_corner.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("script.ImageRunTime",script.ImageRunTime);

            super.createChildren();
            this.createView(ui.dialog.modelUI.uiView);

        }

    }
}

module ui.dialog {
    export class toastUI extends View {
		public textMsg:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":490,"height":77},"child":[{"type":"Image","props":{"y":0,"x":245,"width":490,"skin":"root/toast_bg9.png","height":77,"anchorX":0.5}},{"type":"Label","props":{"y":0,"x":0,"width":490,"var":"textMsg","valign":"middle","text":"提示内容","height":77,"fontSize":25,"color":"#ececec","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dialog.toastUI.uiView);

        }

    }
}

module ui.page {
    export class GamePageUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":720,"name":"gamePage","height":1440}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.page.GamePageUI.uiView);

        }

    }
}

module ui.page {
    export class HomePageUI extends View {
		public bottomLayout:Laya.Sprite;
		public yun1:Laya.Image;
		public yun2:Laya.Image;
		public yun3:Laya.Image;
		public fengzheng:Laya.Image;
		public btnStart:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":768,"name":"homePage","height":1360},"child":[{"type":"Sprite","props":{"y":311,"x":0,"width":768,"var":"bottomLayout","height":1050},"child":[{"type":"Image","props":{"y":0,"x":0,"width":768,"skin":"comp/home.png","height":1050}},{"type":"Image","props":{"y":-236,"x":19,"var":"yun1","skin":"comp/img_yun1.png"}},{"type":"Image","props":{"y":-35,"x":406,"var":"yun2","skin":"comp/img_yun2.png"}},{"type":"Image","props":{"y":83,"x":15,"var":"yun3","skin":"comp/img_yun3.png"}},{"type":"Image","props":{"y":510,"x":324,"var":"fengzheng","skin":"comp/img_fengzheng.png","anchorY":1,"anchorX":1}},{"type":"Image","props":{"y":684,"x":378,"width":300,"var":"btnStart","skin":"root/less_green_btn.png","height":97,"anchorY":0.5,"anchorX":0.5,"sizeGrid":"0,60,0,60"},"child":[{"type":"Label","props":{"width":300,"valign":"middle","text":"开始游戏","strokeColor":"#17c5b7","stroke":5,"height":97,"fontSize":45,"font":"SimHei","color":"#ffffff","bold":true,"align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.page.HomePageUI.uiView);

        }

    }
}

module ui.page {
    export class LoadingUI extends View {
		public jokeTitle:Laya.Label;
		public textJoke:Laya.Label;
		public loadLayout:Laya.Sprite;
		public loadText:Laya.Label;
		public progressView:ui.view.ProgressViewUI;

        public static  uiView:any ={"type":"View","props":{"width":768,"name":"loadPage","height":1660},"child":[{"type":"Label","props":{"y":200,"x":360,"var":"jokeTitle","text":"消消消消消消","skin":"root/title.png","fontSize":45,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":583,"x":384,"wordWrap":true,"width":700,"var":"textJoke","leading":20,"height":621,"fontSize":28,"color":"#C4AD8E","anchorY":0.5,"anchorX":0.5}},{"type":"Sprite","props":{"y":918,"x":64,"width":640,"var":"loadLayout","height":200},"child":[{"type":"Label","props":{"y":92,"x":0,"width":640,"var":"loadText","valign":"middle","text":"玩命加载中...","height":50,"fontSize":25,"font":"Microsoft YaHei","color":"#9c9999","align":"center"}},{"type":"ProgressView","props":{"y":155,"x":0,"var":"progressView","runtime":"ui.view.ProgressViewUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.view.ProgressViewUI",ui.view.ProgressViewUI);

            super.createChildren();
            this.createView(ui.page.LoadingUI.uiView);

        }

    }
}

module ui.page {
    export class PassPageUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":720,"name":"passPage","height":1280}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.page.PassPageUI.uiView);

        }

    }
}

module ui.page {
    export class RootPageUI extends View {
		public nextImgBg:Laya.Image;
		public imgBg:Laya.Image;
		public pageLayout:Laya.Sprite;
		public layoutTop:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":768,"name":"rootPage","height":1660},"child":[{"type":"Image","props":{"y":0,"x":0,"width":768,"var":"nextImgBg","height":1660,"alpha":0}},{"type":"Image","props":{"y":0,"x":0,"width":768,"var":"imgBg","skin":"root/bg.png","height":1660}},{"type":"Sprite","props":{"y":0,"x":0,"width":768,"var":"pageLayout","height":1660}},{"type":"Sprite","props":{"y":0,"x":0,"width":768,"visible":false,"var":"layoutTop","height":130}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.page.RootPageUI.uiView);

        }

    }
}

module ui.view {
    export class ProgressViewUI extends View {
		public progressBg:Laya.Image;
		public progressBar:Laya.Image;
		public progressMask:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":60},"child":[{"type":"Panel","props":{"y":30,"x":300,"width":600,"height":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":31,"x":300,"width":583,"var":"progressBg","value":0,"skin":"root/loginProgressBase.png","height":58,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":31,"x":300,"width":583,"var":"progressBar","skin":"root/loginProgress.png","height":58,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":29,"x":-292,"width":583,"var":"progressMask","skin":"root/loginProgress.png","renderType":"mask","height":58,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":31,"x":300,"width":583,"value":0,"skin":"root/loginProgressGlass.png","height":58,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.view.ProgressViewUI.uiView);

        }

    }
}
