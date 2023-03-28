cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    start () {
        this.canvas = this.node.getComponent(cc.Canvas)
        cc.find('bt',this.node).on('click',this.onClick,this)
    },

    onClick(){
        this._dir = this._dir == 'V' ? 'H' : 'V'  //H横屏  V竖屏
        if(cc.sys.os == cc.sys.OS_ANDROID)
            jsb.reflection.callStaticMethod('org/cocos2dx/javascript/AppActivity', 'setOrientation', '(Ljava/lang/String;)V', this._dir)
        else if(cc.sys.os == cc.sys.OS_IOS)
            jsb.reflection.callStaticMethod('AppController', 'setOrientation:', this._dir)

        let frameSize = cc.view.getFrameSize()
        console.log('frameSize: '+frameSize.width+'   '+frameSize.height)
        if (this._dir == 'V') {x
            cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT)
            if (frameSize.width > frameSize.height)
                cc.view.setFrameSize(frameSize.height,frameSize.width)
            this.canvas.designResolution = cc.size(720,1280)

            // this.canvas.fitHeight = false;
            // this.canvas.fitWidth = true;
            // cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_WIDTH);
        }
        else{
            cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE)
            if (frameSize.height > frameSize.width)
                cc.view.setFrameSize(frameSize.height,frameSize.width)
            this.canvas.designResolution = cc.size(1280,720)

            // this.canvas.fitHeight = true;
            // this.canvas.fitWidth = false;
            // cc.view.setDesignResolutionSize(1280, 720, cc.ResolutionPolicy.FIXED_HEIGHT);
        }

        if(window.jsb) //手动调用触发 Wdiget 组件重新布局
            window.dispatchEvent(new cc.Event.EventCustom('resize', true))
    },

});
