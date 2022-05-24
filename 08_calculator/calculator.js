const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
  let sum = 0
	for (let i=a.length;i--;){
    sum += a[i]
  }
  return sum
};

const multiply = function(a) {
  let count = 1
for (i in a){
  count = a[i]*count
}
return count
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
  if (a == 0){
    return 1
  }else{
	let count = 1
  for (i=2;i<a+1;i++){
    count = i*count
  }
  return count
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
