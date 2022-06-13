class Graph {
    constructor(){
        this.nodes = [];
    }

    add(data,cost,edges){
        this.nodes.push(new GraphNode(data,cost,edges));
    }

    bfs(callback){
        let queue = new Queue();
        queue.add(this.nodes[0]);
        let visited = [];
        visited.push(this.nodes[0]);

        while(!queue.isEmpty){
            let current = queue.get();
            callback(current);
            for(var i = 0; i<current.edges.length; i++){
                let node = this.find(current.edges[i]);
                let vis = visited.includes(node);
                if( !vis ){
                    queue.add(node);
                    visited.push(node)
                }
            }
        }
    }

    find(data){
        return this.nodes.find(item=>{
            if(item.data == data){
                return item;
            }
        })
    }

}

class GraphNode {
    constructor(data,cost,edges) {
        this.id = `f${(+new Date).toString(16)}`;
        this.data = data;
        this.cost = cost;
        this.edges = edges;
    }

    addEdge(edge){
        this.edges.push(edge);
    }

    remove(edge){
        let removedInd = this.edges.findIndex((item, index)=>{
            if(item == edge){
                return index;
            }
        })
        this.edges.splice(removedInd,1);
    }
}

(function init() {
    let graph = new Graph();
    graph.add('A', 3, ['B', 'C']);
    graph.add('B', 2, ['E', 'C', 'D']);
    graph.add('C',5,['A','B']);
    graph.add('D',2,['A','E']);
    graph.add('E',1,['D','B']);
    console.log(graph.bfs(item=>{
        console.log(item);
    }))
})()