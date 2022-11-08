const sumAll = function(a, b) {
  if ((typeof a === "string") || (typeof b === "string")) {
    return 'ERROR'
} else if (a < 0 || b < 0) {
    return 'ERROR'
} else if ((a >= 0) && (b >= 0)) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  let sum = 0
  for (let j = min; j <= max; j++) //can be shortened to: for(; min < max; min++)
      sum += j
      return sum 
} else {
    return 'ERROR'
}  

};

// Do not edit below this line
module.exports = sumAll;
