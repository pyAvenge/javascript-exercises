const palindromes = function (string) {
    stringLower = string.toLowerCase()
    let arrayOfString = stringLower.split("")
    let cleanArrayOne = arrayOfString.filter(remove)
    let cleanArrayTwo = arrayOfString.filter(remove)
    let reverseArray = cleanArrayOne.reverse()
    function remove (value){
        return value !='!' && value != ',' && value != '.' && value != ' '
        }
let result
function check (reverseArray,cleanArrayTwo){
    for (let i in reverseArray){
        if (reverseArray[i] === cleanArrayTwo[i]){
            result = true
        
        } else {
            result = false
            break
        
    }
       
}

}

check(reverseArray,cleanArrayTwo)
return result
};

// Do not edit below this line
module.exports = palindromes;
