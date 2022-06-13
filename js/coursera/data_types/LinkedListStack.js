class LinkedListStack {
    constructor(){
        this.first = null;
    }

    push(data){
        let node = new Node(data);
        let oldFirst = this.first;
        this.first = node;
        this.first.next = oldFirst;
    }

    isEmpty(){
        return this.first==null;
    }

    pop(){
        let oldFirst = this.first;
        this.first = oldFirst.next;
        return oldFirst.data;
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}