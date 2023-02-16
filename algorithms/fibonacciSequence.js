// Fibonacci sequence

// Problem - Given a number 'n', find the first 'n' elements of the Fibonaaci sequence.
// In Mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding once.

// The first two numbers in the sequence are o and 1

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(4) = [0,1,1,2]
// fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacci(n) {
    const fib = [0,1]
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(5)); // [0,1,1,2,3]
console.log(fibonacci(6)); // [0,1,1,2,3,5]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

// Big-O = 0(n)