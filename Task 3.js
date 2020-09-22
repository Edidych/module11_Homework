function getSum(a){
    return function(b){
        return a + b;
    }
}

let result = getSum(1);

console.log(result(5));

//or сокрощенно

console.log(result(5)(1));