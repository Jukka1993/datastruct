//最大堆啊啊
/**
 * 低效的建堆方式 
 * O(NlogN);
 * @param {number[]} nums 
 */
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
/**
 * 高效的建堆方式
 * @param {number[]} nums 
 */
function createHeapHigh(nums){
    var newHeap = {
        size : nums.length,
        arr:[Infinity]
    }
    for(var num of nums){
        newHeap.arr.push(num);
    }
    var i = Math.floor(nums.length/2);
    for(;i>0;i--){
        var parent = i;
        var temp = newHeap.arr[i];
        var child = parent *2;
        for(;parent*2<=newHeap.size;parent = child){
            child = parent *2;
            if(child<newHeap.size && newHeap.arr[child]<newHeap.arr[child+1]){
                child++;
            }
            if(newHeap.arr[child]<= temp){
                break;
            } else {
                newHeap.arr[parent] = newHeap.arr[child];
            }
        }
        newHeap.arr[parent] = temp;
    }
    return newHeap;
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
            //让child指向左右孩子中最大的那个
            //child<heap.size则表示有右孩子
            //heap.arr[child]<heap.arr[child+1]表示右孩子比左孩子大
            //因此,若存在右孩子且右孩子比左孩子大,则child指向右孩子
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