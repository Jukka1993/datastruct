function mergeSort(arr){
    const tempArr = [];
    mSort(arr,tempArr,0,arr.length-1);
}
function mSort(arr,tempArr,left,right){
    if(left<right){
        //2 2.5->2 3
        var center = Math.floor((left+right)/2);
        mSort(arr,tempArr,left,center);
        mSort(arr,tempArr,center+1,right);
        merge(arr,tempArr,left,center+1,right);
    }
}
function merge(arr,tempArr,left,right,rightEnd){
    var leftEnd = right -1;
    var tempL = left;
    var leftBegin = left;
    while(left<=leftEnd && right<=rightEnd){
        if(arr[left]<arr[right]){
            tempArr[tempL++] = arr[left++];
        } else {
            tempArr[tempL++] = arr[right++];
        }
    }
    while(left<=leftEnd){
        tempArr[tempL++] = arr[left++];
    }
    while(right<=rightEnd){
        tempArr[tempL++] = arr[right++];
    }
    for(var i = rightEnd;i>=leftBegin;i--){
        arr[i] = tempArr[i];
    }
}
module.exports = mergeSort;