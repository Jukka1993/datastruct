var arr = require("../../2Kints");
var bubbleSort = require("./bubbleSort");
var insertionSort = require("./insertionSort");
var shellSort = require("./shellSort");
var selectSort = require("./selectSort");
var heapSort = require("./heapSort");
// arr.arr = [2,3,1,5,4,7,8,13,12,6,15,9];
console.log(arr);
var isDecrease = true;
for(var i =0 ;i<arr.arr.length-1;i++){
    if(arr.arr[i]<arr.arr[i+1]){
        isDecrease = false;
        break;
    }
}
console.log("*************$$$$");
heapSort(arr.arr);
var isDecrease1 = true;
for(var i =0 ;i<arr.arr.length-1;i++){
    if(arr.arr[i]<arr.arr[i+1]){
        isDecrease1 = false;
        break;
    }
}
console.log(arr);
console.log("before is decrease",isDecrease);
console.log("end is decrease",isDecrease1);