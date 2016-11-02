var PlayerRoot = (function (_super) {
    __extends(PlayerRoot, _super);
    function PlayerRoot() {
        _super.call(this);
        this.Player = new egret.Bitmap();
        this.Player.width = 64;
        this.Player.height = 64;
        this.Player.texture = RES.getRes("bg_jpg");
        this.playerTempTargetX = 0;
        this.playerTempTargetY = 0;
        this.walkable = false;
        this.addChild(this.Player);
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
                for (var i = 0; i < path.length; i++) {
                    this.walkable = true;
                    this.playerTempTargetX = gridX;
                    this.playerTempTargetY = gridY;
                    PlayerTween.to({ x: path[i].x * TileMap.TILE_SIZE, y: path[i].y * TileMap.TILE_SIZE }, 200, egret.Ease.sineIn)
                        .call(function () {
                        if (Math.abs(this.Player.x - (gridX * TileMap.TILE_SIZE)) == 0 && Math.abs(this.Player.y - (gridY * TileMap.TILE_SIZE)) == 0) {
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