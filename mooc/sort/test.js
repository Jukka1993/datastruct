var arr = require("../../2Kints");
var bubbleSort = require("./bubbleSort");
var insertionSort = require("./insertionSort");
var quickSort = require("./quickSort");
console.log(arr);
console.log("*************$$$$");
insertionSort(arr.arr);
console.log(arr);
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
console.log("isSorted = ",isSorted,"  isIncrease=",isIncrease);