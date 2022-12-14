var rl = require('readline-sync');

function getArray(arr:number[], size:number) {
    for (let i = 0; i < size; i++) {
        arr[i] = rl.question();
    }
    return arr;
}

function displayArray(arr:number[]) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + " ";
    }
    console.log("Array elements are " + str);
}

let size = parseInt(rl.question("Enter the array size: "));
let arr:number[] = [];
arr = getArray(arr, size);
displayArray(arr);

export{}