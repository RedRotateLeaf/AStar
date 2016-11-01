var Node_G = (function () {
    function Node_G(x, y) {
        this.costMultiplier = 1.0;
        this.x = x;
        this.y = y;
    }
    var d = __define,c=Node_G,p=c.prototype;
    return Node_G;
}());
egret.registerClass(Node_G,'Node_G');
var Grid = (function () {
    function Grid(numCols, numRows) {
        this._numCols = numCols;
        this._numRows = numRows;
        this._nodes = new Array();
        for (var i = 0; i < this._numCols; i++) {
            this._nodes[i] = new Array();
            for (var j = 0; j < this._numRows; j++) {
                this._nodes[i][j] = new Node_G(i, j);
            }
        }
    }
    var d = __define,c=Grid,p=c.prototype;
    ////////////////////////////////////////
    // public methods
    ////////////////////////////////////////
    /**
    * Returns the node at the given coords.
    * @param x The x coord.
    * @param y The y coord.
    */
    p.getNode = function (x, y) {
        return this._nodes[x][y];
    };
    /**
    * Sets the node at the given coords as the end node.
    * @param x The x coord.
    * @param y The y coord.
    */
    p.setEndNode = function (x, y) {
        this._endNode = this._nodes[x][y];
    };
    /**
    * Sets the node at the given coords as the start node.
    * @param x The x coord.
    * @param y The y coord.
    */
    p.setStartNode = function (x, y) {
        this._startNode = this._nodes[x][y];
    };
    /**
    * Sets the node at the given coords as walkable or not.
    * @param x The x coord.
    * @param y The y coord.
    */
    p.setWalkable = function (x, y, value) {
        this._nodes[x][y].walkable = value;
    };
    d(p, "endNode"
        ////////////////////////////////////////
        // getters / setters
        ////////////////////////////////////////
        /**
        * Returns the end node.
        */
        ,function () {
            return this._endNode;
        }
    );
    d(p, "numCols"
        /**
        * Returns the number of columns in the grid.
        */
        ,function () {
            return this._numCols;
        }
    );
    d(p, "numRows"
        /**
        * Returns the number of rows in the grid.
        */
        ,function () {
            return this._numRows;
        }
    );
    d(p, "startNode"
        /**
        * Returns the start node.
        */
        ,function () {
            return this._startNode;
        }
    );
    return Grid;
}());
egret.registerClass(Grid,'Grid');
//# sourceMappingURL=Grid.js.map