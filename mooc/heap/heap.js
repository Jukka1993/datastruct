//最大堆啊啊
function createHeapLow(nums){
    var newHeap = {
        size:0,
        arr:[Infinity]
    };
    for(var i =0;i<nums.length;i++){
        insert(newHeap,nums[i]);
    }
    return newHeap;
}
function createHeapHigh(nums){

}
function insert(heap,data){
    heap.size++;
    heap.arr[heap.size] = data;
    var i = heap.size;
    for(;heap.arr[Math.floor(i/2)]<data;i = Math.floor(i/2)){
        heap.arr[i] = heap.arr[Math.floor(i/2)]
    }
    heap.arr[i] = data;

    return heap;
}
function get(heap){
    var max = heap.arr[1];  //准备返回的元素
    var temp = heap.arr[heap.size];//最后的元素
    heap.size--;
    heap.arr[1] = temp;
    var child = 2;
    for(;child<= heap.size;child = child *2){
        if(child < heap.size && heap.arr[child] < heap.arr[child+1]){
            child++;
        }
        if(temp > heap.arr[child]){
            break;
        } else {
            heap.arr[Math.floor(child/2)] = heap.arr[child];
        }
    }
    heap.arr[Math.floor(child/2)] = temp;
    return max;
}
exports.createHeapLow = createHeapLow;
exports.insert = insert;
exports.get = get;
exports.createHeapHigh = createHeapHigh;