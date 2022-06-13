class Tree {
    constructor(data){
        this.parent = new Node(data);
        this._root = this.parent;
    }

    traverseMY(){

        let stack = new Stack();
        let current = this.parent;
        console.log(current.data);

        while (current){
            current.children.forEach(node=>{
                console.log(node.data);
                stack.add(node);
            })
            current = stack.get();
        }
    }

    traverseDF(callback){
        (function recursive(currentNode) {

            for(var i = 0; i< currentNode.children.length; i++){
                recursive(currentNode.children[i]);
            }

            callback(currentNode);

        })(this.parent)
    }

    traverseBF(callback){
        let queue = new Queue();

        queue.add(this._root);

        let current = queue.get();

        while (current){
            current.children.forEach(node=>{
                queue.add(node);
            })
            callback(current)
            current = queue.get();
        }
    }

    include(data,callback = null){
        let isInclude = null;
        this.traverseBF(node=>{
            if (node.data == data){
                isInclude = node;
            }
        })
        if (callback){
            callback(isInclude);
        }
        return isInclude;
    }

    addNode(data,parentData){
        let parentNode = this.include(parentData)
        if(parentNode){
            let node = new Node(data);
            node.parent = parentNode;
            parentNode.children.push(node);
        }else{
            console.warn("There is no node in the tree!")
        }
    }

    removeNode(data){
        let node = this.include(data);
        if (node){
            let index = node.parent.children.findIndex(n=>{
                if(n.data == data){
                    return true;
                }
            })
            node.parent.children.splice(index,1);
            node.children = null;
            node.parent = null;
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}

class Stack{
    constructor() {
        this.elements = []
    }

    get(){
        return this.elements.pop();
    }

    add(data){
        this.elements.push(data)
    }
}

class Queue{
    constructor(){
        this._elements = [];
    }

    get(){
        return this._elements.shift();
    }

    add(data){
        this._elements.push(data);
    }

    get isEmpty(){
        return this._elements.length == 0
    }
}

class BinaryTree{
    constructor(data) {
        this.parent = new BinaryNode(data);
        this._root = this.parent;
        this.leftNode
        this.rightNode
    }

    add(data){
        (function recursive(data,node) {
            if(data<node.data){
                if( node.left == null){
                    node.left = new BinaryNode(data);
                    node.left.parent = node;
                }
                else{
                    recursive(data,node.left);
                }
            }
            else{
                if( node.right == null){
                    node.right = new BinaryNode(data);
                    node.right.parent = node;
                }
                else{
                    recursive(data,node.right);
                }
            }
        })(data,this._root);
    }

    //Depth-first search (DFS)
    inOrder(callback){
        (function recurcive(node) {
            if(node == null)
                return;
            recurcive(node.left);
            callback(node);
            recurcive(node.right);
        })(this._root)
    }

    preOrder(callback){
        (function recurcive(node) {
            if(node == null)
                return;
            callback(node);
            recurcive(node.left);
            recurcive(node.right);
        })(this._root)
    }

    postOrder(callback){
        (function recurcive(node) {
            if(node == null)
                return;
            recurcive(node.left);
            recurcive(node.right);
            callback(node);
        })(this._root)
    }

    //Breadth-first search (BFS)

    bfs(callback){
        let queue = new Queue();
        queue.add(this._root);
        let current = queue.get();

        while (current){
            if(current.left)
                queue.add(current.left);
            if(current.right)
                queue.add(current.right)
            callback(current);
            current = queue.get();
        }
    }

}

class BinaryNode{
    constructor(data){
        this.data = data;
        this.parent = null;
        this.leftNode = null;
        this.rightNode = null;
    }
}



// let tree = new Tree("1");
// tree.addNode('1-1','1');
// tree.addNode('1-2','1');
// tree.addNode('1-3','1');
// tree.addNode('1-3-1','1-3');
// tree.addNode('1-3-1-1','1-3-1');
// tree.addNode('1-2-1','1-2');
// tree.removeNode('1-3-1');
// console.log(tree);
// tree.traverseDF((node=>{
//     console.log(node.data);
// }));
// console.log("------------------");
// tree.traverseBF((node=>{
//     console.log(node.data);
// }));
// console.log("------------------");
// console.log(tree.include("1-1"));
