// const color = ["red", "blue", "green",];

// const red = color[0];
// const [red, blue, green, yellow] = color;

// console.log(red, green, blue, yellow);
// const numbers = [1, 2, 3, 4, 5];
// const [second, , four] = numbers;

// console.log(second, four);

//Bài 1
function getFirstLast(array) {
    const [first, , , last] = array;
    console.log(first, last);
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

//Bài 2
function swapElements(arr) {
    [arr[1], arr[3]] = [arr[3], arr[1]];
    return arr;
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]
