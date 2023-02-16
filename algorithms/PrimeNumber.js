// Problem - Given a natural number 'n' determine if the number is prime or not.

function isPrime(n) {
    if(n < 2) {
        return false
    }
    for(let i = 2; i < n; i++) {
        if(n % 2 == 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// Big-O = 0(n)