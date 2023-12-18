const arr1 = [3, 2];
const arr2 = [3, 2];


let symDifference = arr1.filter(x => !arr2.includes(x))
                        .concat(arr2.filter(x => !arr1.includes(x)));
console.log(symDifference); // [1, 2, 6]