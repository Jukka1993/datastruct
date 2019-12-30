/**
 * 冒泡排序
 * 最好 O(n)
 * 最坏 O(n^2)
 * 稳定
 * 适用于单链表
 * @param {number[]} arr 数组
 */
function bubbleSort(arr){
    for(var p = arr.length-1;p>=1;p--){
        var ok = true;
        for(var i =0;i<p;i++) {
            if(arr[i]<arr[i+1]){
                ok = false;
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        if(ok){
            break;
        }
    }
}
module.exports = bubbleSort;