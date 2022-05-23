const sumAll = function(...args) {
    let checkOne = typeof(args[1])
    let checkTwo = typeof(args[0])
    if ((args[1]>0 &&  args[0]>0) && (checkOne == 'number' && checkTwo=='number')){
let sortedArgs = args.sort(function(a,b){return b-a}) 
let reversedArgs = args.reverse(function(a,b){return b-a})
let lastNumber = reversedArgs.pop()
let firstNumber = reversedArgs.shift()
let finalSum = 0
    for (let i=firstNumber;i<lastNumber+1;i++){
finalSum +=i
}
return finalSum

    }
else{
    return "ERROR"
}

};

// Do not edit below this line
module.exports = sumAll;
