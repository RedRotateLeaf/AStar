var AStar = (function () {
    function AStar() {
        this._open = new Array();
        this._closed = new Array();
        this._path = new Array;
        // private var _heuristic:Function = manhattan;
        // private var _heuristic:Function = euclidian;
        this._heuristic = this.diagonal;
        this._straightCost = 1.0;
        this._diagCost = Math.SQRT2;
    }
    var d = __define,c=AStar,p=c.prototype;
    p.AStar = function () {
    };
    p.findPath = function (grid) {
        this._grid = grid;
        this._open = new Array();
        this._closed = new Array();
        this._startNode = this._grid._startNode;
        this._endNode = this._grid.endNode;
        this._startNode.g = 0;
        this._startNode.h = this._heuristic(this._startNode);
        this._startNode.f = this._startNode.g + this._startNode.h;
        return this.search();
    };
    p.search = function () {
        var node = this._startNode;
        while (node != this._endNode) {
            var startX = Math.max(0, node.x - 1);
            var endX = Math.min(this._grid.numCols - 1, node.x + 1);
            var startY = Math.max(0, node.y - 1);
            var endY = Math.min(this._grid.numRows - 1, node.y + 1);
            for (var i = startX; i <= endX; i++) {
                for (var j = startY; j <= endY; j++) {
                    var test = this._grid._nodes(i, j);
                    if (test == node || !test.walkable || !this._grid._nodes(node.x, test.y).walkable || !this._grid._nodes(test.x, node.y).walkable) {
                        continue;
                    }
                    var cost = this._straightCost;
                    if (!((node.x == test.x) || (node.y == test.y))) {
                        cost = this._diagCost;
                    }
                    var g = node.g + cost * test.costMultiplier;
                    var h = this._heuristic(test);
                    var f = g + h;
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
            for (var o = 0; o < this._open.length; o++) {
            }
            this._closed.push(node);
            if (this._open.length == 0) {
                console.log("no path found");
                return false;
            }
            // this._open.sortOn("f", Array.NUMERIC);
            node = this._open.shift();
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
        return Math.abs(node.x - this._endNode.x) * this._straightCost + Math.abs(node.y + this._endNode.y) * this._straightCost;
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
//# sourceMappingURL=AStar.js.map