function selectSort(arr){
    for(var i =0;i<arr.length;i++){
        var maxIndex = i;
        var maxValue = arr[i];
        for(var j=i;j<arr.length;j++){
            if(arr[j] > maxValue){
                maxValue = arr[j];
                maxIndex = j;
            }
        }
        arr[maxIndex] = arr[i];
        arr[i] = maxValue;
    }
}
module.exports = selectSort;