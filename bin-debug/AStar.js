var AStar = (function () {
    function AStar() {
        this._open = new Array();
        this._closed = new Array();
        this._path = new Array;
        this._heuristic = this.diagonal;
        this._straightCost = 1.0;
        this._diagCost = Math.SQRT2;
    }
    var d = __define,c=AStar,p=c.prototype;
    // public AStar() {
    // }
    p.findPath = function (grid) {
        this._grid = grid;
        this._open = new Array();
        this._closed = new Array();
        this._startNode = this._grid._startNode;
        this._endNode = this._grid._endNode;
        this._startNode.g = 0;
        this._startNode.h = this._heuristic(this._startNode);
        this._startNode.f = this._startNode.g + this._startNode.h;
        return this.search();
    };
    p.search = function () {
        var Search_node = this._startNode;
        while (Search_node != this._endNode) {
            var startX = Math.max(0, Search_node.x - 1);
            var endX = Math.min(this._grid._numCols - 1, Search_node.x + 1);
            var startY = Math.max(0, Search_node.y - 1);
            var endY = Math.min(this._grid._numRows - 1, Search_node.y + 1);
            for (var i = startX; i <= endX; i++) {
                for (var j = startY; j <= endY; j++) {
                    var test = this._grid._nodes[i][j]; //(i,j)?
                    if (test == Search_node || !test.walkable || !this._grid._nodes[Search_node.x][test.y].walkable || !this._grid._nodes[test.x][Search_node.y].walkable) {
                        continue;
                    }
                    var cost = this._straightCost;
                    if (!((Search_node.x == test.x) || (Search_node.y == test.y))) {
                        cost = this._diagCost;
                    }
                    var g = Search_node.g + cost * test.costMultiplier;
                    var h = this._heuristic(test);
                    var f = g + h;
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.f > f) {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = Search_node;
                        }
                    }
                    else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parent = Search_node;
                        this._open.push(test);
                    }
                }
            }
            // for (var o: number = 0; o < this._open.length; o++) {
            // }
            this._closed.push(Search_node);
            if (this._open.length == 0) {
                console.log("no path found");
                return false;
            }
            // this._open.sortOn("f", Array.NUMERIC);
            this._open.sort(function (a, b) {
                return a.f - b.f;
            });
            Search_node = this._open.shift();
        }
        this.buildPath();
        return true;
    };
    p.isOpen = function (a) {
        for (var i = 0; i < this._open.length; i++) {
            if (this._open[i] == a) {
                return true;
            }
        }
        return false;
    };
    p.isClosed = function (a) {
        for (var i = 0; i < this._closed.length; i++) {
            if (this._closed[i] == a) {
                return true;
            }
        }
        return false;
    };
    p.buildPath = function () {
        this._path = new Array();
        var node = this._endNode;
        this._path.push(node);
        while (node != this._startNode) {
            node = node.parent;
            this._path.unshift(node);
        }
    };
    p.manhattan = function (node) {
        return Math.abs(node.x - this._endNode.x) * this._straightCost + Math.abs(node.y - this._endNode.y) * this._straightCost;
    };
    p.euclidian = function (node) {
        var dx = node.x - this._endNode.x;
        var dy = node.y - this._endNode.y;
        return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
    };
    p.diagonal = function (node) {
        var dx = Math.abs(node.x - this._endNode.x);
        var dy = Math.abs(node.y - this._endNode.y);
        var diag = Math.min(dx, dy);
        var straight = dx + dy;
        return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
    };
    return AStar;
}());
egret.registerClass(AStar,'AStar');
// class AStar {
//           //待查列表
// 		  _openList: Node_G[] = [];
//           //已查列表
// 		  _closedList: Node_G[] = [];  
//           //最终路径
// 		  _path: Node_G[] = [];
// 		  _grid: Grid;
// 		  _startNode: Node_G;
// 		  _endNode: Node_G;
//           //设置启发函数
// 	      _heuristic: Function = this.diagonal;
// 		  _straightCost: number = 1.0;
// 		  _diagCost: number = Math.SQRT2;
// 	      public findPath(grid: Grid): Boolean {
// 			  this._grid = grid;
// 			  this._openList = new Array();
// 			  this._closedList = new Array();
// 			  this._startNode = this._grid._startNode;
// 			  this._endNode = this._grid._endNode;
// 			  this._startNode.g = 0;
// 			  this._startNode.h = this._heuristic(this._startNode);
// 			  this._startNode.f = this._startNode.g + this._startNode.h;
// 			  return this.search();
// 			}
// 			//一直到找到路为止
// 			public search(): Boolean {
// 				var currentNode: Node_G = this._startNode;
// 				while (currentNode != this._endNode) {
// 					//保证节点不在地图外
// 					var startX: number = Math.max(0, currentNode.x - 1);
// 					var endX: number = Math.min(this._grid._numCols - 1, currentNode.x + 1);
// 					var startY: number = Math.max(0, currentNode.y - 1);
// 					var endY: number = Math.min(this._grid._numRows - 1, currentNode.y + 1);
// 					for (var i: number = startX; i <= endX; i++) {
// 						for (var j: number = startY; j <= endY; j++) {
// 							var test: Node_G = this._grid._nodes[i][j];
// 							//检测节点为当前节点或不可通过时，无需计算代价
// 							if (test == currentNode || !test.walkable||!this._grid._nodes[currentNode.x][test.y].walkable||!this._grid._nodes[test.x][currentNode.y].walkable){
// 								continue;
// 							}
// 							var cost: number = this._straightCost;
// 							if (!((currentNode.x == test.x) || (currentNode.y == test.y))){
// 								cost = this._diagCost;
// 							}
// 							var g: number = currentNode.g + cost;
// 							var h: number = this._heuristic(test);
// 							var f: number = g + h;
// 							if (this.isOpen(test) || this.isClosed(test)) {
// 								if (test.f > f) {
// 									test.f = f;
// 									test.g = g;
// 									test.h = h;
// 									test.parent = currentNode;
// 								}
// 							}else{
// 								test.f = f;
// 								test.g = g;
// 								test.h = h;
// 								test.parent = currentNode;
// 								this._openList.push(test);
// 							}
// 						}
// 					}
// 					this._closedList.push(currentNode);  
// 					//待查列表
// 					if (this._openList.length == 0) {
// 						return false;
// 					}
// 					this._openList.sort(function (a, b) {
// 						return a.f - b.f;
// 					});
// 					currentNode = this._openList.shift() as Node_G;
// 				}
// 				this.buildPath();
// 				return true;
// 			}
// 			public isOpen(node: Node_G): Boolean {
// 				for (var i: number = 0; i < this._openList.length; i++) {
// 					if (this._openList[i] == node) {
// 						return true;
// 					}
// 				}
// 				return false;
// 			}
// 			public isClosed(node: Node_G): Boolean {
// 				for (var i: number = 0; i < this._closedList.length; i++) {
// 					if (this._closedList[i] == node) {
// 						return true;
// 					}
// 				}
// 				return false;
// 			}
// 			public buildPath(): void {
// 				this._path = new Array();
// 				var node: Node_G = this._endNode;
// 				this._path.push(node);
// 				while (node != this._startNode){
// 					node = node.parent;
// 					this._path.unshift(node);  
// 				}
// 			}
// 			public manhattan(node: Node_G): number {
// 				return Math.abs(this._endNode.x - node.x) * this._straightCost + Math.abs(this._endNode.y - node.y) * this._straightCost;
// 			}
// 			public euclidian(node: Node_G): number {
// 				var dx: number = this._endNode.x - node.x;
// 				var dy: number = this._endNode.y - node.y;
// 				return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
// 			}
// 			public diagonal(node: Node_G): number {
// 				var dx: number = Math.abs(this._endNode.x - node.x);
// 				var dy: number = Math.abs(this._endNode.y - node.y);
// 				var diag: number = Math.min(dx, dy);
// 				var straight: number = dx + dy;
// 				return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
// 			}
// 		} 
//# sourceMappingURL=AStar.js.map