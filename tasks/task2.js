function findSumOfFibonacciTermsSatisfyingCondition(max_value, condition) {
    let result = 0;
    for(let a = 1, b = 2; a < max_value;) {
        const new_b = a + b;
        a = b;
        b = new_b;
    
        if (condition(a)) {
            result += a;
        }
    }
    return result;
}

const sum = findSumOfFibonacciTermsSatisfyingCondition(4e6, a => (a % 2 === 0));
console.log(sum);
