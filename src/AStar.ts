class AStar {
    _open = new Array();
    _closed = new Array();
    _grid: Grid;
    _endNode: Node_G;
    _startNode: Node_G;
    _path = new Array;
    // private var _heuristic:Function = manhattan;
    // private var _heuristic:Function = euclidian;
    _heuristic: Function = this.diagonal;
    _straightCost: number = 1.0;
    _diagCost: number = Math.SQRT2;
    public AStar() {
    }
    public findPath(grid: Grid): Boolean {
        this._grid = grid;
        this._open = new Array();
        this._closed = new Array();
        this._startNode = this._grid._startNode;
        this._endNode = this._grid.endNode;
        this._startNode.g = 0;
        this._startNode.h = this._heuristic(this._startNode);
        this._startNode.f = this._startNode.g + this._startNode.h;
        return this.search();
    }
    public search(): Boolean {
        var node: Node_G = this._startNode;
        while (node != this._endNode) {
            var startX: number = Math.max(0, node.x - 1);
            var endX: number = Math.min(this._grid.numCols - 1, node.x + 1);
            var startY: number = Math.max(0, node.y - 1);
            var endY: number = Math.min(this._grid.numRows - 1, node.y + 1);
            for (var i: number = startX; i <= endX; i++) {
                for (var j: number = startY; j <= endY; j++) {
                    var test: Node_G = this._grid._nodes(i, j);
                    if (test == node || !test.walkable || !this._grid._nodes(node.x, test.y).walkable || !this._grid._nodes(test.x, node.y).walkable) {
                        continue;
                    }
                    var cost: number = this._straightCost;
                    if (!((node.x == test.x) || (node.y == test.y))) {
                        cost = this._diagCost;
                    }
                    var g: number = node.g + cost * test.costMultiplier;
                    var h: number = this._heuristic(test);
                    var f: number = g + h;
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.f > f) {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = node;
                        }
                    }
                    else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parent = node;
                        this._open.push(test);
                    }
                }
            }

            for (var o: number = 0; o < this._open.length; o++) {
            }
            this._closed.push(node);
            if (this._open.length == 0) {
                console.log("no path found");
                return false
            }
            // this._open.sortOn("f", Array.NUMERIC);

            node = this._open.shift() as Node_G;
        }
        this.buildPath();
        return true;
    }

    private isOpen(a: Node_G): Boolean {
        for (var i: number = 0; i < this._open.length; i++) {
            if (this._open[i] == a) {
                return true;
            }
        }

        return false;
    }
    private isClosed(a: Node_G): Boolean {
        for (var i: number = 0; i < this._closed.length; i++) {

            if (this._closed[i] == a) {

                return true;
            }
        }

        return false;
    }
    private buildPath(): void {
        this._path = new Array();
        var node: Node_G = this._endNode;
        this._path.push(node);
        while (node != this._startNode) {
            node = node.parent;
            this._path.unshift(node);
        }
    }
    private manhattan(node: Node_G): number {

        return Math.abs(node.x - this._endNode.x) * this._straightCost + Math.abs(node.y + this._endNode.y) * this._straightCost;
    }
    private euclidian(node: Node_G): number {
        var dx: number = node.x - this._endNode.x;
        var dy: number = node.y - this._endNode.y;
        return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
    }
    private diagonal(node: Node_G): number {
        var dx: number = Math.abs(node.x - this._endNode.x);
        var dy: number = Math.abs(node.y - this._endNode.y);
        var diag: number = Math.min(dx, dy);
        var straight: number = dx + dy;
        return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
    }
}