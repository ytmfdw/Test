module script {
    /*
    ImageRunTime逻辑类 
    */
    export class ImageRunTime extends Laya.Image {
        public scaleTime: number = 100;
        constructor() {
            super();
            //设置组件的中心点
            this.anchorX = this.anchorY = 0.5;
            //添加鼠标按下事件侦听。按时时缩小按钮。
            this.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmal);
            //添加鼠标抬起事件侦听。抬起时还原按钮。
            this.on(Laya.Event.MOUSE_UP, this, this.scaleBig);
            //添加鼠标离开事件侦听。离开时还原按钮。
            this.on(Laya.Event.MOUSE_OUT, this, this.scaleBig);
        }
        public scaleBig(): void {
            //变大还原的缓动效果
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.scaleTime);
        }
        public scaleSmal(): void {
            //缩小至0.8的缓动效果
            Laya.Tween.to(this, { scaleX: 0.8, scaleY: 0.8 }, this.scaleTime);
        }
    }

    /*
ImageRunTime逻辑类 
*/
    export class BtnRunTime extends Laya.Button {
        public scaleTime: number = 100;
        constructor() {
            super();
            //设置组件的中心点
            this.anchorX = this.anchorY = 0.5;
            //添加鼠标按下事件侦听。按时时缩小按钮。
            this.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmal);
            //添加鼠标抬起事件侦听。抬起时还原按钮。
            this.on(Laya.Event.MOUSE_UP, this, this.scaleBig);
            //添加鼠标离开事件侦听。离开时还原按钮。
            this.on(Laya.Event.MOUSE_OUT, this, this.scaleBig);
        }
        public scaleBig(): void {
            //变大还原的缓动效果
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.scaleTime);
        }
        public scaleSmal(): void {
            //缩小至0.8的缓动效果
            Laya.Tween.to(this, { scaleX: 0.8, scaleY: 0.8 }, this.scaleTime);
        }
    }
}