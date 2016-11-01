var config = [
    { x: 0, y: 0, walkable: true, image: "Road_png" },
    { x: 1, y: 0, walkable: false, image: "Wall_png" },
    { x: 2, y: 0, walkable: true, image: "Road_png" },
    { x: 3, y: 0, walkable: true, image: "Road_png" },
    { x: 4, y: 0, walkable: true, image: "Road_png" },
    { x: 5, y: 0, walkable: false, image: "Wall_png" },
    { x: 6, y: 0, walkable: true, image: "Road_png" },
    { x: 7, y: 0, walkable: true, image: "Road_png" },
    { x: 8, y: 0, walkable: false, image: "Wall_png" },
    { x: 9, y: 0, walkable: true, image: "Road_png" },
    { x: 0, y: 1, walkable: true, image: "Road_png" },
    { x: 1, y: 1, walkable: false, image: "Wall_png" },
    { x: 2, y: 1, walkable: true, image: "Road_png" },
    { x: 3, y: 1, walkable: true, image: "Road_png" },
    { x: 4, y: 1, walkable: true, image: "Road_png" },
    { x: 5, y: 1, walkable: false, image: "Wall_png" },
    { x: 6, y: 1, walkable: true, image: "Road_png" },
    { x: 7, y: 1, walkable: false, image: "Wall_png" },
    { x: 8, y: 1, walkable: false, image: "Wall_png" },
    { x: 9, y: 1, walkable: true, image: "Road_png" },
    { x: 0, y: 2, walkable: true, image: "Road_png" },
    { x: 1, y: 2, walkable: false, image: "Wall_png" },
    { x: 2, y: 2, walkable: false, image: "Wall_png" },
    { x: 3, y: 2, walkable: true, image: "Road_png" },
    { x: 4, y: 2, walkable: false, image: "Wall_png" },
    { x: 5, y: 2, walkable: false, image: "Wall_png" },
    { x: 6, y: 2, walkable: true, image: "Road_png" },
    { x: 7, y: 2, walkable: false, image: "Wall_png" },
    { x: 8, y: 2, walkable: true, image: "Road_png" },
    { x: 9, y: 2, walkable: true, image: "Road_png" },
    { x: 0, y: 3, walkable: true, image: "Road_png" },
    { x: 1, y: 3, walkable: false, image: "Wall_png" },
    { x: 2, y: 3, walkable: true, image: "Road_png" },
    { x: 3, y: 3, walkable: true, image: "Road_png" },
    { x: 4, y: 3, walkable: true, image: "Road_png" },
    { x: 5, y: 3, walkable: false, image: "Wall_png" },
    { x: 6, y: 3, walkable: true, image: "Road_png" },
    { x: 7, y: 3, walkable: false, image: "Wall_png" },
    { x: 8, y: 3, walkable: true, image: "Road_png" },
    { x: 9, y: 3, walkable: false, image: "Wall_png" },
    { x: 0, y: 4, walkable: true, image: "Road_png" },
    { x: 1, y: 4, walkable: false, image: "Wall_png" },
    { x: 2, y: 4, walkable: false, image: "Wall_png" },
    { x: 3, y: 4, walkable: true, image: "Road_png" },
    { x: 4, y: 4, walkable: false, image: "Wall_png" },
    { x: 5, y: 4, walkable: false, image: "Wall_png" },
    { x: 6, y: 4, walkable: true, image: "Road_png" },
    { x: 7, y: 4, walkable: false, image: "Wall_png" },
    { x: 8, y: 4, walkable: true, image: "Road_png" },
    { x: 9, y: 4, walkable: false, image: "Wall_png" },
    { x: 0, y: 5, walkable: true, image: "Road_png" },
    { x: 1, y: 5, walkable: true, image: "Road_png" },
    { x: 2, y: 5, walkable: true, image: "Road_png" },
    { x: 3, y: 5, walkable: true, image: "Road_png" },
    { x: 4, y: 5, walkable: true, image: "Road_png" },
    { x: 5, y: 5, walkable: true, image: "Road_png" },
    { x: 6, y: 5, walkable: true, image: "Road_png" },
    { x: 7, y: 5, walkable: true, image: "Road_png" },
    { x: 8, y: 5, walkable: true, image: "Road_png" },
    { x: 9, y: 5, walkable: true, image: "Road_png" },
    { x: 0, y: 6, walkable: true, image: "Road_png" },
    { x: 1, y: 6, walkable: false, image: "Wall_png" },
    { x: 2, y: 6, walkable: false, image: "Wall_png" },
    { x: 3, y: 6, walkable: true, image: "Road_png" },
    { x: 4, y: 6, walkable: false, image: "Wall_png" },
    { x: 5, y: 6, walkable: false, image: "Wall_png" },
    { x: 6, y: 6, walkable: false, image: "Wall_png" },
    { x: 7, y: 6, walkable: false, image: "Wall_png" },
    { x: 8, y: 6, walkable: false, image: "Wall_png" },
    { x: 9, y: 6, walkable: true, image: "Road_png" },
    { x: 0, y: 7, walkable: true, image: "Road_png" },
    { x: 1, y: 7, walkable: false, image: "Wall_png" },
    { x: 2, y: 7, walkable: true, image: "Road_png" },
    { x: 3, y: 7, walkable: true, image: "Road_png" },
    { x: 4, y: 7, walkable: true, image: "Road_png" },
    { x: 5, y: 7, walkable: false, image: "Wall_png" },
    { x: 6, y: 7, walkable: true, image: "Road_png" },
    { x: 7, y: 7, walkable: true, image: "Road_png" },
    { x: 8, y: 7, walkable: false, image: "Wall_png" },
    { x: 9, y: 7, walkable: true, image: "Road_png" },
    { x: 0, y: 8, walkable: true, image: "Road_png" },
    { x: 1, y: 8, walkable: false, image: "Wall_png" },
    { x: 2, y: 8, walkable: false, image: "Wall_png" },
    { x: 3, y: 8, walkable: true, image: "Road_png" },
    { x: 4, y: 8, walkable: false, image: "Wall_png" },
    { x: 5, y: 8, walkable: false, image: "Wall_png" },
    { x: 6, y: 8, walkable: true, image: "Road_png" },
    { x: 7, y: 8, walkable: false, image: "Wall_png" },
    { x: 8, y: 8, walkable: false, image: "Wall_png" },
    { x: 9, y: 8, walkable: true, image: "Road_png" },
    { x: 0, y: 9, walkable: true, image: "Road_png" },
    { x: 1, y: 9, walkable: false, image: "Wall_png" },
    { x: 2, y: 9, walkable: true, image: "Road_png" },
    { x: 3, y: 9, walkable: true, image: "Road_png" },
    { x: 4, y: 9, walkable: true, image: "Road_png" },
    { x: 5, y: 9, walkable: false, image: "Wall_png" },
    { x: 6, y: 9, walkable: true, image: "Road_png" },
    { x: 7, y: 9, walkable: true, image: "Road_png" },
    { x: 8, y: 9, walkable: true, image: "Road_png" },
    { x: 9, y: 9, walkable: true, image: "Road_png" },
];
var PlayerZ = (function (_super) {
    __extends(PlayerZ, _super);
    function PlayerZ() {
        _super.call(this);
        this.player = new egret.Bitmap();
        this.playerX = 0;
        this.playerY = 0;
        // var move = false;
        this.player.width = 64;
        this.player.height = 64;
        this.player.texture = RES.getRes("bg_jpg");
        this.addChild(this.player);
    }
    var d = __define,c=PlayerZ,p=c.prototype;
    p.Action = function (e) {
        var move = false;
        var playerTween = egret.Tween.get(this.player);
        console.log("ismove:  " + move);
        var localX = e.localX;
        var localY = e.localY;
        var gridX = Math.floor(localX / TileMap.TILE_SIZE);
        var gridY = Math.floor(localY / TileMap.TILE_SIZE);
        //生成与地图对应的各个节点
        var grid = new Grid(10, 10);
        for (var i = 0; i < config.length; i++) {
            grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
        }
        var aStar = new AStar();
        grid.setStartNode(this.playerX, this.playerY);
        grid.setEndNode(gridX, gridY);
        //有路
        if (aStar.findPath(grid)) {
            var path = aStar._path;
            if (!move) {
                for (var i = 0; i < path.length; i++) {
                    move = true;
                    this.playerX = gridX;
                    this.playerY = gridY;
                    playerTween.to({ x: path[i].x * TileMap.TILE_SIZE, y: path[i].y * TileMap.TILE_SIZE }, 500, egret.Ease.sineIn)
                        .call(function () {
                        if (Math.abs(this.player.x - (gridX * TileMap.TILE_SIZE)) < 10 && Math.abs(this.player.y - (gridY * TileMap.TILE_SIZE)) < 10) {
                            console.log("到达目的地");
                            move = false;
                        }
                    });
                }
            }
            else {
                egret.Tween.removeTweens(playerTween);
                console.log("remove");
                move = false;
            }
        }
        else {
            console.log("无法到达");
        }
    };
    return PlayerZ;
}(egret.DisplayObjectContainer));
egret.registerClass(PlayerZ,'PlayerZ');
//# sourceMappingURL=PlayerZ.js.map