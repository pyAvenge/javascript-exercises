const leapYears = function(a) {

    if (a%4==0){
        if(a%100 !=0){
            return true
        }
        else if (a%400 == 0){
            return true
        }
        else {
            return false
        }
    }
    else if (a%100 == 0 && a%400 == 0){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
