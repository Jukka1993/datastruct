function heapSort(arr){
    var maxIndex = arr.length -1;
    for(var i = Math.ceil(maxIndex/2)-1;i>=0;i--){
        percDown(arr,i,maxIndex);
    }
    for(var j = arr.length-1;j>0;){
        var temp = arr[0];
        arr[0] = arr[j];
        arr[j] = temp;
        j--;
        percDown(arr,0,j);
    }
}
/**
 * 将arr构成的完全二叉树中root节点及其左右子树(截止到maxInde包含maxIndex)调成堆
 * 前提是左右子树本身就是堆
 * @param {number[]} arr 
 * @param {number} root 
 * @param {number} maxIndex 
 */
function percDown(arr,root,maxIndex){
    var parent = root;
    var child = parent * 2 + 1;
    var temp = arr[root];
    for(;parent * 2 + 1<= maxIndex;parent = child){
        child = parent * 2 + 1;
        if(child<maxIndex && arr[child+1]< arr[child]){
            child++;
        }
        if(arr[child]< temp){
            arr[parent] = arr[child];
        } else {
            break;
        }
    }
    arr[parent] = temp;
}
module.exports = heapSort;