// Probem - Given two finite non-empty sets, find their Cartesian Product.

function cartesianProduct(arr1, arr2) {
    const result = []
    for(let i = 0; i < arr1.length; i++) {
        for(let k = 0; k < arr2.length; k++) {
            result.push([arr1[i], arr2[k]])
        }
    }
    return result

}

const arr1 = [1, 2]
const arr2 = [3, 4, 5]
console.log(cartesianProduct(arr1, arr2)) // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4],[2, 5]]

// Big-O = O(mn)