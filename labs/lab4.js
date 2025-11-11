// const color = ["red", "blue", "green",];

// const red = color[0];
// const [red, blue, green, yellow] = color;

// console.log(red, green, blue, yellow);
// const numbers = [1, 2, 3, 4, 5];
// const [second, , four] = numbers;

// console.log(second, four);


// Array Destructuring
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

// Object Destructuring
//Bài 1 
const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};

function getUserInfo(user) {
    const name = user.personalInfo.name;
    const email = user.personalInfo.contact.email;
    return {
        name,
        email
    };
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }

//Bài 2
function createProduct({ name, price, category = "general", inStock = true }) {
    return {
        name: name,
        price: price,
        category: category,
        inStock: inStock
    };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }

// Promises

//Bài 1
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

delay(2000).then(() => console.log("2 seconds passed"));

//Bài 2
function fetchMultipleData(urls) {
    // Your code here
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
    console.log(users)
);