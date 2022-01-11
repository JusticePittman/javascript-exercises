const sumAll = function() {
    let sum = 0;
    let range = Array.from(arguments);
    if((range.every(value => Number.isInteger(value))) && (range.every(value => value >= 0))){
        for( let i = Math.min(...range); i <= Math.max(...range); i++){
            sum += i;
        };
        return sum;
    } else {
        return 'ERROR';
    };
};
// Do not edit below this line
module.exports = sumAll;
