class RedBlackTree {

    constructor() {
        this.root = null;
    }

    _isRed (node) {
        return node ? node.RED == true : false;
    }

    put (key, value) {
        this.root = this._putRecursive(this.root, key, value);
    }

    get (key) {
        return this._getRecursive(this.root, key);
    }

    _getRecursive (node, key) {
        if (node == null) return null;
        if (key == node.key) return node;

        let cmp = node.compareTo(key);

        if (cmp > 0) node = this._getRecursive(node.right, key);
        if (cmp < 0) node = this._getRecursive(node.left, key);

        return node;
    }

    _putRecursive (node, key, value) {
        if (node == null) return new Node(key, value, true);
        let cmp = node.compareTo(key);

        if (cmp > 0) node.right = this._putRecursive(node.right, key, value);
        if (cmp < 0) node.left = this._putRecursive(node.left, key, value);
        else node.value = value;

        if (this._isRed(node.right) && !this._isRed(node.left)) node = this._rotateLeft(node);
        if (this._isRed(node.left) && this._isRed(node.left.left)) node = this._rotateRight(node);
        if (this._isRed(node.left) && this._isRed(node.right)) node = this._flopColor(node);

        return node;
    }

    _rotateRight (node) {
        let top = node;
        let left = node.left;
        node = left;
        top.left = left.right;
        left.right = top;
        node.RED = top.RED;
        node.right.RED = true
        return node;
    }

    _rotateLeft (node) {
        let right = node.right;
        let top = node;
        node = right;
        top.right = node.left;
        node.left = top;
        node.RED = top.RED;
        top.RED = true;
        return node;
    }

    _flopColor (node) {
        node.RED = true;
        node.right.RED = false;
        node.left.RED = false;
        return node;
    }

}

class Node {
    constructor(key, value, RED) {
        this.key = key;
        this.value = value;
        this.RED = RED;
        this.left = null;
        this.right = null;
    }

    toString() {
        return `Key: ${this.key}\nValue: ${this.value}`;
    }

    compareTo (a) {
        let key = parseInt(this.key);
        a = parseInt(a);
        if ( key < a ) {
            return 1;
        } else if ( key > a ) {
            return -1;
        } else { return 0 }
    }
}

let button_Put = document.querySelector('.RedBlackPut');

let RBTree = new RedBlackTree();

button_Put.addEventListener('click', ()=>{
    let key = document.querySelector('.RB_Key').value;
    let value = document.querySelector('.RB_Value').value;
    RBTree.put(key, value);
    console.log(RBTree);
});

function test() {
    RBTree.put(10, 1);
    console.log(RBTree);
    RBTree.put(5, 2);
    console.log(RBTree);
    RBTree.put(3, 3);
    console.log(RBTree);
    RBTree.put(11, 4);
    console.log(RBTree);
    RBTree.put(1, 5);
    console.log(RBTree);
    console.log("/////////////////////");
    console.log(RBTree.get(3));
}

test();




