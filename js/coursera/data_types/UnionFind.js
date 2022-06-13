class UnionFind {
    constructor(n){
        this.id = [];
        this.sz = [];
        for(var i = 0; i<n; i++) {
            this.id.push(i);
            this.sz.push(1);
        }
    }

    _root(i){
        while(i != this.id[i]){
            this.id[i] = this.id[this.id[i]];
            i = this.id[i];
        }
        return i;
    }

    connected(p, q){
        return this._root(p) == this._root(q);
    }

    union(p, q){
        let i = this._root(p);
        let j = this._root(q);
        if(i==j)
            return;
        if( this.sz[i]<this.sz[j]){
            this.id[i] = j;
            this.sz[j] += this.sz[i];
        }else {
            this.id[j] = i;
            this.sz[i] += this.sz[j];
        }
    }

    get ID(){
        return this.id;
    }

    get SZ(){
        return this.sz;
    }

}

let UF = new UnionFind(10);
console.log(UF.ID);
console.log(UF.SZ);
function startTimer(callback) {
    let time = performance.now()
    callback();
    console.log(`Time: ${performance.now() - time}`);
    console.log('----------');
    console.log(array);
}

let button_union = document.querySelector('.union');

button_union.addEventListener('click',()=>{
    let q_val = document.querySelector('.q').value;
    let p_val = document.querySelector('.p').value;
    console.log(`union(${p_val},${q_val})`);
    UF.union(p_val,q_val);
    console.log(UF.ID);
    console.log(`SZ: ${UF.SZ}`);
})