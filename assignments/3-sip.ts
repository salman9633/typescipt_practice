const read=require('readline-sync');

let p:number=Number(read.question("enter the principle amount = "));
let r=read.question("Interest rate = ");
let n=read.question("Number of years = ");
let s=((p)*parseFloat(r)*parseFloat(n))/100;
console.log('simple interest = '+s);