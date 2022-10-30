const repeatString = function(str,num) {
    if (num > 0){
        return str.repeat(num)
    }
    if ((num === 0) || ('')){
        return ''
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
