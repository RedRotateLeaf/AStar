class PlayerRoot extends egret.DisplayObjectContainer {
    Player: egret.Bitmap;
    playerTempTargetX: number;
    playerTempTargetY: number;
    walkable: Boolean;

    PlayerX = new playerAction();
    public constructor() {
        super();
        // this.Player = new egret.Bitmap();
        // this.Player.width = 64;
        // this.Player.height = 64;
        // this.Player.texture = RES.getRes("bg_jpg");
        this.playerTempTargetX = 0;
        this.playerTempTargetY = 0;
        this.anchorOffsetX = 0;
        this.anchorOffsetY = 0;
        this.walkable = false;
        // this.addChild(this.Player);
        //PlayerX:
        this.PlayerX.width = 64;
        this.PlayerX.height = 64;
        this.addChild(this.PlayerX);
        // this.PlayerX.x = this.Player.y = 0;
        this.PlayerX.Idle();

    }
    public Action(e: egret.TouchEvent): void {


        var PlayerTween = egret.Tween.get(this);
        var localX = e.localX;
        var localY = e.localY;
        var gridX = Math.floor(localX / TileMap.TILE_SIZE);
        var gridY = Math.floor(localY / TileMap.TILE_SIZE);
        var grid = new Grid(10, 10);
        for (var i = 0; i < config.length; i++) {
            grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
        }
        var aStar: AStar = new AStar();
        grid.setStartNode(this.playerTempTargetX, this.playerTempTargetY);
        grid.setEndNode(gridX, gridY);
        if (aStar.findPath(grid)) {
            var path = aStar._path;
            if (!this.walkable) {
                for (var i = 1; i < path.length; i++) {
                    this.walkable = true;
                    this.playerTempTargetX = gridX;
                    this.playerTempTargetY = gridY;

                    PlayerTween.to({ x: path[i].x * TileMap.TILE_SIZE, y: path[i].y * TileMap.TILE_SIZE }, 200, egret.Ease.sineIn).call(function () {
                        if (Math.abs(this.x - (gridX * TileMap.TILE_SIZE)) < 10 && Math.abs(this.y - (gridY * TileMap.TILE_SIZE)) < 10) {
                            this.PlayerX.Idle();
                        }

                    });
                    this.PlayerX.Move(path[i].x * TileMap.TILE_SIZE, path[i].y * TileMap.TILE_SIZE);
                }
            }
            else {
                // egret.Tween.removeTweens(PlayerTween);
                this.walkable = false;
            }
        }
    }
}

class StaMac {
    private nowSta: Sta;

    public Reload(S: Sta): void {
        if (this.nowSta) {
            this.nowSta.exit();
        }
        this.nowSta = S;
        this.nowSta.Load();
    }
}
interface Sta {
    Load();
    exit();
}

class MoveSta implements Sta {
    private Player: playerAction;
    private X: number;
    private Y: number;
    constructor(x: number, y: number, Player: playerAction) {
        this.X = x;
        this.Y = y;
        this.Player = Player;
    }

    Load() {
        // var xInterval = this.X - this.Player.x;
        // if (xInterval > 0) {
        //     this.Player.scaleX = 1;
        // } else {
        // this.Player.anchorOffsetX = this.Player.width / 2;
        
        // this.Player.anchorOffsetX -= this.Player.width / 2;
        // this.Player.scaleX = -1;
        // }

        this.Player.PlayAni(this.Player.MoveAni);

    }
    exit() {
        this.Player.Modle++;
    }

}
class IdleSta implements Sta {
    private Player: playerAction;
    constructor(Player: playerAction) {
        this.Player = Player;
    }
    Load() {
        this.Player.PlayAni(this.Player.IdleAni);
    }
    exit() {
        this.Player.Modle++;
    }

}


class playerAction extends egret.DisplayObjectContainer {

    public MyPhoto: egret.Bitmap;
    private MySta: StaMac = new StaMac;
    public MoveSpeed: number = 64;
    public ChaTime: number = 150;
    public Modle: number = 0;
    public IdleAni: Array<egret.Texture> = new Array<egret.Texture>();
    public MoveAni: Array<egret.Texture> = new Array<egret.Texture>();
    public constructor() {
        super();
        this.MyPhoto = this.createBitmapByName("1_png");
        this.MyPhoto.height = 64;
        this.MyPhoto.width = 64;
        this.anchorOffsetX = 0;
        this.anchorOffsetY = 0;
        this.addChild(this.MyPhoto);
        this.LoadAni();

    }
    private LoadAni() {
        var texture: egret.Texture = RES.getRes("1_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("2_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("3_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("4_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("5_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("6_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("011_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("012_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("013_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("014_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("015_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("016_png");
        this.MoveAni.push(texture);
    }

    public PlayAni(Ani: Array<egret.Texture>) {

        var count = 0;
        var Bit = this.MyPhoto;
        var M = this.Modle;
        var timer: egret.Timer = new egret.Timer(125, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, Play, this);
        timer.start();

        function Play() {
            Bit.texture = Ani[count];
            if (count < Ani.length - 1) {
                count++;
            }
            else { count = 0; }
            if (this.Modle != M) {
                timer.stop();
            }
        }
    }

    public Move(x: number, y: number) {
        var moveState: MoveSta = new MoveSta(x, y, this);
        this.MySta.Reload(moveState);

    }

    public Idle() {

        var idleState: IdleSta = new IdleSta(this);
        this.MySta.Reload(idleState);


    }



    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
