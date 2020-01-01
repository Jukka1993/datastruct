function shellSort(arr){
    var sedgewick = [929,505,209,109,41,19,5,1];
    for(var i = 0;i<sedgewick.length;i++){
        var p = sedgewick[i];
        var j = p;
        for(;j<arr.length;j+=p){
            var temp = arr[j];
            for(var k = j;k>=p;k-=p){
                if(arr[k-p]<temp){
                    arr[k] = arr[k-p];
                } else {
                    break;
                }
            }
            arr[k] = temp;
        }
    }
}
module.exports = shellSort;