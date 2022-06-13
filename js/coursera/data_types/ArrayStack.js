class ArrayStack {
    constructor(){
        this.list = new Array(2);
        this.n = 0;
    }

    push(data){
        if(this.n == this.list.length){
            this.resize(this.n*2);
        }
        this.list[this.n] = data;
        this.n++;
    }

    pop(){
        if(this.n <= this.list.length/4){
            this.resize(this.list.length/2);
        }
        this.n--;
        let item = this.list[this.n];
        this.list[this.n] = null;
        return item;
    }

    resize(n){
        let list = new Array(n);
        for(var i = 0; i < n; i++){
            list[i] = this.list[i];
        }
        this.list = list;
    }
}