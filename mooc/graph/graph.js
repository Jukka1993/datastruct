function MatrixGraph(vCount,eCount,eArr){
    this.vCount = vCount;
    if(eCount === null ||eCount === undefined){
        this.eCount = 0;
    } else {
        this.eCount = eCount;
    }
    if(eArr === null || eArr === undefined){
        this.eArr = [];
        for(var i =0;i<vCount;i++){
            const temp1 = [];
            for(var j =0;j<vCount;j++){
                temp1.push(0);
            }
            this.eArr.push(temp1);
        }
    } else {
        this.eArr = eArr;
    }
    this.visited = [];
    this.queue = [];
}

MatrixGraph.prototype.addE = function(v1,v2) {
    this.eArr[v1][v2] = 1;
    this.eArr[v2][v1] = 1;
}
MatrixGraph.prototype.dfs = function(i){
    console.log("深度优先搜索");
    this.visited = [];
    this.doDfs(i);
}
MatrixGraph.prototype.doDfs = function(i){
    this.visited[i] = true;
    console.log("visit",i);
    for(var j = 0;j< this.vCount;j++){
        if(this.eArr[i][j] === 1){
            if(this.visited[j] !== true){
                this.doDfs(j);
            }
        }
    }
}
MatrixGraph.prototype.bfs = function(i){
    console.log("广度优先搜索");
    this.visited = [];
    this.queue = [];
    this.doBfs(i);
}
MatrixGraph.prototype.doBfs = function(i){
    this.queue.push(i);
    this.visited[i] = true;
    while(this.queue.length>0){
        const out = this.queue.shift();
        console.log("visit",out);
        for(var j =0;j<this.vCount;j++){
            if(this.eArr[out][j] === 1 && this.visited[j] !== true){
                this.visited[j] = true;
                this.queue.push(j);
            }
        }
    }
}
MatrixGraph.prototype.singleSourcePath = function(source,dest){
    const paths = this.doSingleSourcePath(source,dest);
    const stack = [];
    // stack.push
    var cur = dest;
    while(cur !== source){
        stack.push(cur);
        cur = paths[cur];
    }
    stack.push(source);
    const finalPath = [];
    while(stack.length > 0){
        finalPath.push(stack.pop());
    }
    return finalPath;
}
MatrixGraph.prototype.doSingleSourcePath = function(source,dest){
    this.dist = [];
    this.dist[source] = 0;
    this.queue = [];
    const path = [];
    this.queue.push(source);
    while(this.queue.length> 0){
        const out = this.queue.shift();
        for(var j = 0;j<this.vCount;j++){
            if(this.eArr[out][j] === 1 && this.dist[j] === undefined){//this.visited[j] !== true){
                this.dist[j] = this.dist[out]+1;
                path[j] = out;
                if(j === dest){
                    return path;
                } else {
                    this.queue.push(j);
                }
            }
        }
    }
}

// function LNode(data){
//     this.data = data;
// }
function LGraph(vCount){
    this.vCount = vCount;
    this.counts = [];
    this.vEdge = [];
    for(var i = 0;i<vCount;i++){
        this.vEdge.push([]);
    }
}
LGraph.prototype.addE = function(v1,v2){
    this.vEdge[v1].push(v2);
    this.vEdge[v2].push(v1);
}
exports.MatrixGraph = MatrixGraph;
