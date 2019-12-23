var heap = require("./heap");
var nums = [];
for(var i = 0;i<100;i++){
    var temp = Math.floor(Math.random() * 100000);
    if(nums.indexOf(temp) === -1){
        nums.push(temp);
    }
}
var isDecrease = true;
for(var i =0 ;i<nums.length-1;i++){
    if(nums[i]<nums[i+1]){
        isDecrease = false;
        break;
    }
}
console.log("before is decrease",isDecrease);
// console.log("before nums==============",nums);
// const newHeap = heap.createHeapLow([6,0,7,8,4,9,13,24,5,33,26,17,98,45,72,36,58,43,19]);
const newHeap = heap.createHeapLow(nums);
// console.log(newHeap);
var temp1 = [];
while(newHeap.size > 0){
    temp1.push(heap.get(newHeap));
}

var isDecrease1 = true;
for(var i =0 ;i<temp1.length-1;i++){
    if(temp1[i]<temp1[i+1]){
        isDecrease1 = false;
        break;
    }
}
console.log("end is decrease",isDecrease1);
// console.log("over nums*****************",temp1);