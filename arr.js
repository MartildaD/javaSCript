
function reverseArray(array) {
    const result = [];
    for(const item of array) {
    result.unshift(item);
    }
    return result;
} 


function reverseArrayInPlace(array) {
    for(let i = 0; i < Math.floor(array.length/2); i++){
    const old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
}
    return array;
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
