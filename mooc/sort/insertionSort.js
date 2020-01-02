function insertSort(arr){
    for(var i = 1;i<arr.length;i++){
        var j = i;
        var temp = arr[i];
        for(;j>0;j--){
            if(arr[j-1]<temp){
                arr[j] = arr[j-1];
            } else {
                break;
            }
        }
        arr[j] = temp;
    }
}
/**
 * 从大到小
 * 最好O(n)
 * 最坏O(n^2)
 * 稳定的
 * @param {number[]} arr 
 */
function insertionSort(arr){
    for(var i = 1;i<arr.length;i++){
        var temp = arr[i];
        var j = i;
        for(;j>0;j--){
            if(temp > arr[j-1]){
                arr[j] = arr[j-1];
            } else {
                break;
            }
        }
        arr[j] = temp;
    }
}
module.exports = insertionSort;