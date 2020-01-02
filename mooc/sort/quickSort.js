function quickSort(arr){
    doQuickSort(arr,0,arr.length-1);
}
function doQuickSort(arr,left,right){
    if(right - left < 100){
        //while count of numbers is less then 100,insertions sort is more efficient than quicksort.
        insertionSort(arr,left,right);
    }else{
        //select pivot
        var center = Math.floor((left+ right)/2);
        var temp = arr[left];
        if(arr[left]>arr[center]){
            arr[left] = arr[center];
            arr[center]= temp;
        }
        if(arr[left]>arr[right]){
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
        if(arr[center]>arr[right]){
            temp = arr[center];
            arr[center] = arr[right];
            arr[right] = temp;
        }
        temp = arr[center];
        arr[center] = arr[right -1];
        arr[right-1] = temp;
        var pivot = temp;
        //partition subset
        var i = left;
        var j = right -1;
        for(;;){
            while(arr[++i]<pivot){}
            while(arr[--j]>pivot){}
            if(i<j){
                var temp1 = arr[i];
                arr[i] = arr[j];
                arr[j] = temp1;
            } else {
                break;
            }
        }
        var temp2 = arr[i];
        arr[i] = arr[right-1];
        arr[right-1] = temp2;
        //recursive handle subset
        doQuickSort(arr,left,i-1);
        doQuickSort(arr,i+1,right);
    }
}
function insertionSort(arr,left,right){
    var i = left +1;
    for(;i<=right;i++){
        var temp = arr[i];
        for(var j = i;j>left;j--){
            if(arr[j-1]>temp){
                arr[j] = arr[j-1];
            }else {
                break;
            }
        }
        arr[j] = temp;
    }
}
module.exports = quickSort;
// module.exports = insertionSort;