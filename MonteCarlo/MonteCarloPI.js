function calculatePi(count){
    var inCircleCount = 0;
    for(var i = 0;i<count;i++){
        var x = Math.random()*2;
        var y = Math.random()*2;
        var deltaX = x-1;
        var deltaY = y-1;
        if(deltaX*deltaX + deltaY*deltaY <= 1){
            inCircleCount++;
        }
    }
    var rate = inCircleCount/count;
    return rate * 4;
}
console.log(calculatePi(10000000));