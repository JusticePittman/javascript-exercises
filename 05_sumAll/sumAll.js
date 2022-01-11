const sumAll = function(num1, num2) {
    let sum = 0;
    let min = Math.min(arguments[0], arguments[1]);
    let max = Math.max(arguments[0], arguments[1]);
    
    if((Number.isInteger(num1) && Number.isInteger(num2)) && (min >= 0 && max >= 0)){
        for( let i = min; i <= max; i++){
            sum += i;
        };
        return sum;
    } else {
        return 'ERROR';
    };

    

    console.log(sum);
};
sumAll(1, [1,2,3]);
// Do not edit below this line
module.exports = sumAll;
