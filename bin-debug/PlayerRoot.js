var PlayerRoot = (function (_super) {
    __extends(PlayerRoot, _super);
    function PlayerRoot() {
        _super.call(this);
        this.Player = new egret.Bitmap();
        this.Player.width = 64;
        this.Player.height = 64;
        this.Player.x = 0;
        this.Player.y = 0;
        this.Player.texture = RES.getRes("bg_jpg");
        this.PlayerX = 0;
        this.PlayerY = 0;
        this.addChild(this.Player);
    }
    var d = __define,c=PlayerRoot,p=c.prototype;
    p.Action = function (e) {
        var PlayerTween = egret.Tween.get(this.Player);
        var localX = e.localX;
        var localY = e.localY;
        var gridX = Math.floor(localX / TileMap.TILE_SIZE);
        var gridY = Math.floor(localY / TileMap.TILE_SIZE);
        var NewGrid = new Grid(10, 11);
        console.log("ismove:  ");
        for (var i = 0; i < config.length; i++) {
            NewGrid.setWalkable(config[i].x, config[i].y, config[i].walkable);
        }
        var aStar = new AStar();
        NewGrid.setStartNode(this.PlayerX, this.PlayerY);
        NewGrid.setEndNode(gridX, gridY);
        //有路
        if (aStar.findPath(NewGrid)) {
            var path = aStar._path;
            if (!this.walkable) {
                for (var i = 0; i < path.length; i++) {
                    this.walkable = true;
                    this.PlayerX = gridX;
                    this.PlayerY = gridY;
                    PlayerTween.to({ x: path[i].x * TileMap.TILE_SIZE, y: path[i].y * TileMap.TILE_SIZE }, 500, egret.Ease.sineIn)
                        .call(function () {
                        if (Math.abs(this.Player.x - (gridX * TileMap.TILE_SIZE)) < 10 && Math.abs(this.Player.y - (gridY * TileMap.TILE_SIZE)) < 10) {
                            this.walkable = false;
                        }
                    });
                }
            }
            else {
                egret.Tween.removeTweens(PlayerTween);
                this.walkable = false;
            }
        }
    };
    return PlayerRoot;
}(egret.DisplayObjectContainer));
egret.registerClass(PlayerRoot,'PlayerRoot');
//# sourceMappingURL=PlayerRoot.js.map