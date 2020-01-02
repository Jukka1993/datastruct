var arr = require("../../2Kints");
var bubbleSort = require("./bubbleSort");
var insertionSort = require("./insertionSort");
var quickSort = require("./quickSort");
var shellSort = require("./shellSort");
var selectSort = require("./selectSort");
var heapSort = require("./heapSort");
// arr.arr = [2,3,1,5,4,7,8,13,12,6,15,9];

quickSort(arr.arr);
var isSorted = true;
var isIncrease = true;
if(arr.arr[0]< arr.arr[arr.arr.length-1]){
    isIncrease = true;
} else {
    isIncrease = false;
}
for(var i = 0;i<arr.arr.length-1;i++){
    if(arr.arr[i]<=arr.arr[i+1] !==isIncrease){
        isSorted = false;
        // console.log("i,i+1",i,i+1,arr)
        break;
    }
}
console.log(arr.arr);
console.log("isSorted = ",isSorted,"  isIncrease=",isIncrease);
