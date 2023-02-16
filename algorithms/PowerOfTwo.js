// Problem - Given a postive integer 'n', determine if the number is power of 2 or not

function isPowerOfTwo(n) {
    if(n < 1) {
        return false
    }
    while(n > 1) {
        if(n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(-4)); // false

// Big-O = O(logn)