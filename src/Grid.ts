class Node_G {

    public x: number;
    public y: number;
    public f: number;
    public g: number;
    public h: number;
    public walkable: boolean;
    public parent: Node_G;
    public costMultiplier: number = 1.0;

    public constructor(x: number, y: number) {

        this.x = x;
        this.y = y;
    }

}
class Grid {
	_startNode: Node_G;
	_endNode: Node_G;
	_nodes;
	_numCols: number;
	_numRows: number;

	public constructor(numCols: number, numRows: number) {
		this._numCols = numCols;
		this._numRows = numRows;
		this._nodes = new Array();
		for (var i: number = 0; i < this._numCols; i++) {
			this._nodes[i] = new Array();
			for (var j: number = 0; j < this._numRows; j++) {
				this._nodes[i][j] = new Node_G(i, j);
			}
		}
	}
	////////////////////////////////////////
	// public methods
	////////////////////////////////////////
	/**
	* Returns the node at the given coords.
	* @param x The x coord.
	* @param y The y coord.
	*/
	public getNode(x: number, y: number): Node_G {
		return this._nodes[x][y] as Node_G;
	}
	/**
	* Sets the node at the given coords as the end node.
	* @param x The x coord.
	* @param y The y coord.
	*/
	public setEndNode(x: number, y: number): void {
		this._endNode = this._nodes[x][y] as Node_G;
	}
	/**
	* Sets the node at the given coords as the start node.
	* @param x The x coord.
	* @param y The y coord.
	*/
	public setStartNode(x: number, y: number): void {
		this._startNode = this._nodes[x][y] as Node_G;
	}
	
	/**
	* Sets the node at the given coords as walkable or not.
	* @param x The x coord.
	* @param y The y coord.
	*/
	public setWalkable(x: number, y: number, value: Boolean): void {
		this._nodes[x][y].walkable = value;
	}
	////////////////////////////////////////
	// getters / setters
	////////////////////////////////////////
	/**
	* Returns the end node.
	*/
	public get endNode(): Node_G {
		return this._endNode;
	}
	/**
	* Returns the number of columns in the grid.
	*/
	public get numCols(): number {
		return this._numCols;
	}
	/**
	* Returns the number of rows in the grid.
	*/
	public get numRows(): number {
		return this._numRows;
	}
	/**
	* Returns the start node.
	*/
	public get startNode(): Node_G {
		return this._startNode;
	}
}