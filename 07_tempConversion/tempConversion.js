const ftoc = function(f) {
cTemp = (f-32)*(5/9)
precision = Math.pow(10, 1)
return Math.ceil(cTemp * precision) / precision

};

const ctof = function(c) {
  fTemp = (c*(9/5))+32
  precision = Math.pow(10, 1)
  return Math.ceil(fTemp * precision) / precision

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
