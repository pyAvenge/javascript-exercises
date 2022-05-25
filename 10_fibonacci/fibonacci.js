const fibonacci = function(a) {
    let b = parseInt(a)
    if (b<0){
        return "OOPS"
    }
    else if ((b == 0) || (b == 1)){
        return 1
    }
    else{
        fibZero = 0
        fibOne = 1
            for (i=0;i<b-1;i++){
                numberFib = fibZero+fibOne
                fibZero = fibOne
                fibOne = numberFib
            }
        }
return numberFib
};

// Do not edit below this line
module.exports = fibonacci;
