// Factorial of a number

// Problem - Given an integer 'n', find the factorial of the integer.

// In mathematics, the factroial of a non-negative integer 'n', denoted n!, is the product of all positive
// integers less than or equal to 'n'.

// Factorial of zero is 1.
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

function factorial(n) {
    let result = 1;
    for(let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(4)); // 4*3*2*1 = 24
console.log(factorial(5)); // 5*4*3*2*1 = 120

// Big-O = 0(n)