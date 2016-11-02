var PlayerRoot = (function (_super) {
    __extends(PlayerRoot, _super);
    function PlayerRoot() {
        _super.call(this);
        this.PlayerX = new playerAction();
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
    var d = __define,c=PlayerRoot,p=c.prototype;
    p.Action = function (e) {
        var PlayerTween = egret.Tween.get(this);
        var localX = e.localX;
        var localY = e.localY;
        var gridX = Math.floor(localX / TileMap.TILE_SIZE);
        var gridY = Math.floor(localY / TileMap.TILE_SIZE);
        var grid = new Grid(10, 10);
        for (var i = 0; i < config.length; i++) {
            grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
        }
        var aStar = new AStar();
        grid.setStartNode(this.playerTempTargetX, this.playerTempTargetY);
        grid.setEndNode(gridX, gridY);
        if (aStar.findPath(grid)) {
            var path = aStar._path;
            if (!this.walkable) {
                for (var i = 1; i < path.length; i++) {
                    this.walkable = true;
                    this.playerTempTargetX = gridX;
                    this.playerTempTargetY = gridY;
                    // this.PlayerX.Move(path[i].x * TileMap.TILE_SIZE, path[i].y * TileMap.TILE_SIZE);
                    // PlayerTween.to({ x: path[i].x * TileMap.TILE_SIZE, y: path[i].y * TileMap.TILE_SIZE }, 200, egret.Ease.sineIn)
                    //     .call(function () {
                    //         console.log("Math.abs(this.PlayerX.x - (gridX * TileMap.TILE_SIZE)):" + Math.abs(this.PlayerX.x - (gridX * TileMap.TILE_SIZE)));
                    //         if (Math.abs(this.PlayerX.x - (gridX * TileMap.TILE_SIZE)) < 10 && Math.abs(this.PlayerX.y - (gridY * TileMap.TILE_SIZE)) < 10) {
                    //             this.walkable = false;
                    //         }
                    //     });
                    // distance = path.length * TileMap.TileSize;
                    // console.log("distance:", distance);
                    // time = distance / Player.PlayerSpeed;
                    // console.log("start");
                    // //this.timer.start();
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
    };
    return PlayerRoot;
}(egret.DisplayObjectContainer));
egret.registerClass(PlayerRoot,'PlayerRoot');
var StaMac = (function () {
    function StaMac() {
    }
    var d = __define,c=StaMac,p=c.prototype;
    p.Reload = function (S) {
        if (this.nowSta) {
            this.nowSta.exit();
        }
        this.nowSta = S;
        this.nowSta.Load();
    };
    return StaMac;
}());
egret.registerClass(StaMac,'StaMac');
var MoveSta = (function () {
    function MoveSta(x, y, Player) {
        this.X = x;
        this.Y = y;
        this.Player = Player;
    }
    var d = __define,c=MoveSta,p=c.prototype;
    p.Load = function () {
        // var xInterval = this.X - this.Player.x;
        // if (xInterval > 0) {
        //     this.Player.scaleX = 1;
        // } else {
        // this.Player.anchorOffsetX = this.Player.width / 2;
        // this.Player.anchorOffsetX -= this.Player.width / 2;
        // this.Player.scaleX = -1;
        // }
        this.Player.PlayAni(this.Player.MoveAni);
    };
    p.exit = function () {
        this.Player.Modle++;
    };
    return MoveSta;
}());
egret.registerClass(MoveSta,'MoveSta',["Sta"]);
var IdleSta = (function () {
    function IdleSta(Player) {
        this.Player = Player;
    }
    var d = __define,c=IdleSta,p=c.prototype;
    p.Load = function () {
        this.Player.PlayAni(this.Player.IdleAni);
    };
    p.exit = function () {
        this.Player.Modle++;
    };
    return IdleSta;
}());
egret.registerClass(IdleSta,'IdleSta',["Sta"]);
var playerAction = (function (_super) {
    __extends(playerAction, _super);
    function playerAction() {
        _super.call(this);
        this.MySta = new StaMac;
        this.MoveSpeed = 64;
        this.ChaTime = 150;
        this.Modle = 0;
        this.IdleAni = new Array();
        this.MoveAni = new Array();
        this.MyPhoto = this.createBitmapByName("1_png");
        this.MyPhoto.height = 64;
        this.MyPhoto.width = 64;
        this.anchorOffsetX = 0;
        this.anchorOffsetY = 0;
        this.addChild(this.MyPhoto);
        this.LoadAni();
    }
    var d = __define,c=playerAction,p=c.prototype;
    p.LoadAni = function () {
        var texture = RES.getRes("1_png");
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
    };
    p.PlayAni = function (Ani) {
        var count = 0;
        var Bit = this.MyPhoto;
        var M = this.Modle;
        var timer = new egret.Timer(125, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, Play, this);
        timer.start();
        function Play() {
            Bit.texture = Ani[count];
            if (count < Ani.length - 1) {
                count++;
            }
            else {
                count = 0;
            }
            if (this.Modle != M) {
                timer.stop();
            }
        }
    };
    p.Move = function (x, y) {
        var moveState = new MoveSta(x, y, this);
        this.MySta.Reload(moveState);
    };
    p.Idle = function () {
        var idleState = new IdleSta(this);
        this.MySta.Reload(idleState);
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return playerAction;
}(egret.DisplayObjectContainer));
egret.registerClass(playerAction,'playerAction');
//# sourceMappingURL=PlayerRoot.js.map