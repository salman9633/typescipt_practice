var rl = require('readline-sync');

var str:string = rl.question("Enter a string: ");
let flag = 0;

let len = str.length - 1

for (let x of str) {
    if (x != str[len]) {
        flag = 1;
        break;
    }
    len--;
}

if (flag == 0) {
    console.log("The given string is palindrome");
} else {
    console.log( "The given string is not a palindrome");
}

export{}