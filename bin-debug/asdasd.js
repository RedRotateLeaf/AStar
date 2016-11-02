// class Player extends egret.DisplayObjectContainer {
//     public static PlayerSpeed = 2;
//     public Polepic: egret.Bitmap;
//     private MySta: StateMachine = new StateMachine;
//     public MoveSpeed: number = 20;
//     public Modle: number = 0;
//     public IdleAnime: Array<egret.Texture> = new Array<egret.Texture>();
//     public MoveAnime: Array<egret.Texture> = new Array<egret.Texture>();
//     public constructor() {
//         super();
//         this.Polepic = this.createBitmapByName("01_png");
//         this.Polepic.width = 0.7*TileMap.TileSize;
//         this.Polepic.height = TileMap.TileSize;
//         this.addChild(this.Polepic);
//         this.LoadPic(); 
//     }
//     private createBitmapByName(name:string):egret.Bitmap {
//         var result = new egret.Bitmap();
//         var texture:egret.Texture = RES.getRes(name);
//         result.texture = texture;
//         return result;
//     }
//     public PlayAnimation(Ani: Array<egret.Texture>) {
//         var count = 0;
//         var Bit = this.Polepic;
//         var M = this.Modle;
//         //console.log("M:"+M);
//         var timer: egret.Timer = new egret.Timer(100, 0);
//         timer.addEventListener(egret.TimerEvent.TIMER, Play, this);
//         timer.start();
//         function Play() {
//             Bit.texture = Ani[count];
//             if (count < Ani.length - 1) {
//                 //   console.log(Ani.length+" "+count);
//                 count++;
//             }
//             else { count = 0; }
//             if (this.Modle != M) {
//                 //console.log("tM:"+M+" nowM:"+this.Modle); 
//                 timer.stop();
//             }
//         }
//     }
//     public Move() {
//         var MS: Move = new Move(this);
//         this.MySta.Reload(MS);
//     }
//     public Idle() {
//         var IS: Idle = new Idle(this);
//         this.MySta.Reload(IS);
//     }
// }
// class Idle implements State {
//     private Player: Player;
//     constructor(Player: Player) {
//         this.Player = Player;
//     }
//     Load() {
//         this.Player.PlayAnimation(this.Player.IdleAnime);
//     }
//     exit() {
//         this.Player.Modle++;
//     }
// }
// class Move implements State {
//     private Player: Player;
//     private X:number;
//     private Y:number;
//     constructor(Player: Player) {
//         this.Player = Player;
//     }
//      Load() {
//         this.Player.PlayAnimation(this.Player.MoveAnime);
//     }
//     exit() {
//         this.Player.Modle++;
//     }
// }
// interface State {
//     Load();
//     exit();
// }
// class StateMachine {
//     private nowSta: State;
//     public Reload(S: State): void {
//         if (this.nowSta) {
//             this.nowSta.exit();
//         }
//         this.nowSta = S;
//         this.nowSta.Load();
//     }
// }
// class TileMap extends egret.DisplayObjectContainer{
//     public static TileSize = 64;
//     public static Playerwidth = 64;
//     public static Playerheight = 64;
//     private timer: egret.Timer;
//     private Time: number;
//     constructor(){
//         super();  
//         this.init();
//     }
//     private init(){
//         //地图
//         for(var i = 0; i < config.length; i++){
//             var data = config[i];                       
//             var tile = new Tile(data);
//             this.addChild(tile);
//         }
//         //角色
//         var player = new Player();
//         player.width = TileMap.Playerwidth;
//         player.height = TileMap.Playerheight;
//         var playerX = 0;
//         var playerY = 0;
//         this.addChild(player);
//         //站立
//         player.Idle();
//         var move = false;
//         var playerTween;
//         var time: number = 0;
//         this.timer = new egret.Timer(50, time);
//         this.touchEnabled = true;
//         this.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e: egret.TouchEvent){
//             playerTween = egret.Tween.get(player);
//             var localX = e.localX;
//             var localY = e.localY;
//             var gridX = Math.floor(localX / TileMap.TileSize);
//             var gridY = Math.floor(localY / TileMap.TileSize);
//             //tilenode节点
//             var grid = new Grid(10, 10);
//             for(var i = 0; i < config.length; i++){
//                 grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
//             }
//             var aStar : AStar  = new AStar();
//             grid.setStartNode(playerX, playerY);
//             grid.setEndNode(gridX,gridY);
//             //findPath
//             if(aStar.findPath(grid))
//             {
//                 var path = aStar.PATH; 
//                 var pathX = 0;
//                 var pathY = 0;      
//                 var distance = 0; 
//                 for(var i = 0; i < path.length; i++)
//                     {
//                         move =true;
//                         pathX = path[i].x * TileMap.TileSize;
//                         pathY = path[i].y * TileMap.TileSize
//                         playerX = gridX;
//                         playerY = gridY;
//                         distance = path.length*TileMap.TileSize;
//                         console.log("distance:",distance);
//                         time = distance / Player.PlayerSpeed;
//                         console.log("start");
//                         //this.timer.start();
//                         playerTween.to({x : pathX, y: pathY}, distance/Player.PlayerSpeed, egret.Ease.sineIn).call(function()
//                         { 
//                             console.log("time",distance/Player.PlayerSpeed);
//                              if(Math.abs(player.x - (gridX * TileMap.TileSize)) < 10 && Math.abs(player.y - (gridY * TileMap.TileSize)) < 10){
//                                    player.Idle();
//                              }
//                          }); 
//                          player.Move();
//                         //player.PlayAnimation(player.IdleAnime);
//                     }
//                 }
//         },this);
//     }
// }
//# sourceMappingURL=asdasd.js.map