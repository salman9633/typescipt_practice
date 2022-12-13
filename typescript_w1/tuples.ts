/* 
tuples are just like an array a kind 
of specialized array that is given to us 
by typescript with some restriction on to it 
*/ 

const user:(string|number)[]=[1,3,4,"salman",2,4]//normal array initialization with more than one data type

const user2:[string,number]=["salman",1]//tuple
//in tuples order of the array is really matters
/* in above the 1st element of the array must be a string 
   and the second must be number . so it arranged in a
   presicive order
*/ 


type User= [number,string,number,boolean]

const newUser:User=[1,"qwe",1,false]
newUser[1]="1"//we can reassign an element in the array but here to data type matters 