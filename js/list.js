class List{
    constructor(){
        this._length = 0;
        this.head = null;
    }

    add(value){
        let node = new NodeList(value);

        if(this._length == 0){
            this.head = node;
            this._length++;
            return node;
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this._length++;
        return node;
    }

    searchNode(position){
        if(position>this._length || position<1 || this._length==0)
            return null;
        let currentPos = 1;
        let currentNode = this.head;
        while (currentPos<position){
            currentNode = currentNode.next;
            currentPos++;
        }
        return currentNode;
    }

    remove(position){
        if(position>this._length || position<1 || this._length==0)
            return null;
        let node = this.searchNode(position);
        if(position == 1){
            this.head = node.next;
            return  node;
        }
        let prevNode = this.searchNode(position-1);
        prevNode.next = node.next;
        this._length--;
        return node;
    }

}

class NodeList{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class DoublyList extends List{
    constructor(){
        super();
        this.tail = null;
    }

    add(value){
        let node = new DoublyNode(value);

        if(this._length == 0){
            this.head = node;
            this.tail = node;
            this._length++;
            return node;
        }

        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
        this._length++;
        return node;
    }

    remove(position){
        if(position>this._length || position<1 || this._length==0)
            return null;
        let node = this.searchNode(position);
        if(position == 1){
            this.head = node.next;
            this.head.previous = null;
            this._length--;
            return node;
        }else if (position == this._length){
            this.tail = node.previous;
            this.tail.next = null;
            this._length--;
            return node;
        }else{
            let prevNode = node.previous;
            let nextNode = node.next;
            prevNode.next = nextNode;
            nextNode.previous = prevNode;
            this._length--;
            return node;
        }
    }
}

class DoublyNode extends Node{
    constructor(data){
        super(data);
        this.previous = null;

    }
}

// let list = new List();
// list.add('1');
// list.add('2');
// list.add('3');
// console.log(list);
// console.log(list.searchNode(2));
// console.log(list.remove(2));
// console.log(list);
// console.log('-----------');
// let dList = new DoublyList();
// dList.add('1');
// dList.add('2');
// dList.add('3');
// console.log(dList);
// console.log(dList.searchNode(2));
// console.log(dList.remove(1));
// console.log(dList);
// console.log('-----------');


