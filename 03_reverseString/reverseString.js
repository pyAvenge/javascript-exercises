const reverseString = function(string) {
   const stringS = string
    const arrayString = stringS.split("");
   const reverseArray = arrayString.reverse();
   const newArray = reverseArray.join("");
   return newArray;
};

// Do not edit below this line
module.exports = reverseString;
