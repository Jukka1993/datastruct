// var data = [1, 2, -2, 3, 4, 5, -4, 6, -7, 9, 22, -13];
// var data = [1, 2, -2, 3, 4, 5, -4, 6, -7, 9, 22];

var data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxsubseqfunc1(arr) {  // O(n^3) 暴力
    var max = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            var sum = 0;
            for (var k = i; k <= j; k++) {
                sum += arr[k];
            }
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}
function maxsubseqfunc2(arr) {  // O(n^2) 暴力上的优化
    var max = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        for (var j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}
// var data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//      index   0, 1,  2, 3,  4, 5, 6,  7, 8
function maxsubseqfunc3(arr, begin, end) { // O(Nlog(N)) 分治
    if (begin >= end) {
        var finalMax1 = arr[begin];
        return finalMax1;
    }
    var mid = Math.floor((begin + end) / 2);
    var leftMax = maxsubseqfunc3(arr,begin,mid-1);
    var rightMax = maxsubseqfunc3(arr,mid+1,end);
    var crossMax = arr[mid];
    var sum = arr[mid];
    for (var i = 1; i <= mid - begin; i++) {
        sum += arr[mid - i];
        if (sum > crossMax) {
            crossMax = sum;
        }
    }
    sum = crossMax;
    for (var j = 1; j <= end - mid; j++) {
        sum += arr[mid + j];
        if (sum > crossMax) {
            crossMax = sum;
        }
    }
    var finalMax = Math.max(leftMax, rightMax, crossMax);
    return finalMax;
}
function maxsubseqfunc4(arr){   // O(n) 在线处理法
    var sum = 0;
    var max = -Infinity;
    for(var i = 0;i < arr.length;i++){
        sum += arr[i];
        if(sum > max){
            max = sum;
        } 
        if(sum<0){
            sum = 0;
        }
    }
    return max;
}

console.log(maxsubseqfunc1(data));
console.log(maxsubseqfunc2(data));
console.log(maxsubseqfunc3(data, 0, data.length - 1));
console.log(maxsubseqfunc4(data));

