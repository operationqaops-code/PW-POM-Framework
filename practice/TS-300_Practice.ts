//8.Find the largest of two numbers. 

//import { count } from "node:console";

/* let a=10;
let b=20;

if(a>b){
    console.log("largest number is"+":" +a);
}else{
    console.log("Largest number is"+":"+b); 
}*/


//9.Find the largest of three numbers.

/* let num=[10,20,5,9,34,23,67,23];
let largest = num[0];

for(let i=0;i<=num.length;i++){
    if(num[i]>largest){
        largest=num[i];

    }
}

console.log(largest);
 */

//10.Check whether a number is positive, negative, or zero.

/* function checkNumber(num:any){

    if(num==0){
        console.log("input number is zero");
    }else if(num>0){
        console.log("input number is Positive");
    }else if(num<0){
        console.log("input number is Negative");
    }else{
        console.log("input number is other than zero,positive & Negative");
    }
}

checkNumber(5); */

//11.Check whether a number is even or odd.

/* function checkEven(num:any){

    if(num%2==0){
        console.log(num + "is an even number");
    }else{
        console.log(num + "is a odd number");
    }

}
checkEven(8); */
/* 
16.	Reverse a string. 
Input: "hello"
Output: "olleh"
 */

/* let input="hello";

let rev=input.split("").reverse().join("");
console.log(rev); */

/* let input="hello"

let str="";
for(let i=input.length-1;i>=0;i--){
    str+=input[i];
}
console.log(str); */

/* 17.	Check whether a string is a palindrome. 
madam → true
hello → false */
/* let str="madam";
let result="";
for(let i=str.length-1;i>=0;i--){
    result+=str[i];
}
console.log(result);
if(result==str){
    console.log("input string is palindrome");
}else{
    console.log("input string is not palindrome");
}
 */
//18.Count the number of vowels in a string. 
/* 
let str="Hello Worldeee";

let vowels:string[]=['a','e','i','o','u'];
let vowelCount=0;

for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i].toLowerCase())){
        vowelCount++

    }
}

console.log("Total number of vowels contains in the string is:"+vowelCount); */
//19.Count vowels and consonants separately.

//20.Count the number of words in a sentence.
/* let str="Hello Welcome to Js World!";
let Words=str.split(" ");
console.log(Words.length); */

//22.Find the first character & last  of a string. 

/* let str="Hello";
for(let i=0;i<str.length;i++){
   
}

 console.log(str[0]);
 console.log(str[str.length-1]); */

//26.Remove all spaces from a string.
/* 
let str="Hello JavaScript,Welcome to Programming world";
let result=str.split(" ").join("").split(",").join("");
console.log(result); */

//28.Find the frequency of each character.
/* let str = "Hello";


for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        if (str[i] == str[j]) {
            count++;
        }


    }

    console.log(str[i] + ": " + count);

} */

//i love india
//ouput: i evol aidni

/* let str="i love india"
let rev=str.split(" ");
let reverseWord=rev.map(word=>word.split("").reverse().join(""));
console.log(reverseWord.join(" ")); */
/* 
let str = "i love india";
let words = str.split(" ");
console.log(words);
let result = "";

for (let i = 0; i < words.length; i++) {
    for (let j = words[i].length - 1; j >= 0; j--) {
        result += words[i][j];

    }
    result = result + " ";
}

console.log(result.trim()); */
/* 
let nums = [-1, 0, 1, 2, -1, -4];
let result = [];

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {

            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
}

console.log(result); */

/* I/O-I Love India
O/P- I evol aidni */

/* let str="i love india";
let result=str.split(" ").map(words=>words.split("").reverse().join("")).join(" ");
console.log(result); */

/* let str="i love india";
let words=str.split(" ");
let result="";

for(let i=0;i<words.length;i++){
    for(let j=words[i].length-1;j>=0;j--){
        result+=words[i][j];
    }
    result+=" ";

}
console.log(result.trim()); */

//find the largest number from an array

/* let num=[10,3,54,60,20,9];
let maxNum=Math.max(...num);//... spread operator 
console.log(maxNum); */

/* let num=[10,3,54,60,20,9];
let largest=num[0];

for(let i=0;i<num.length;i++){
    if(num[i]>largest){
        largest=num[i];
    }
}

console.log(largest); */

//find out second largest from an array elements

/* let arr=[10,3,5,8,20,10,22,11];
let largest=arr[0];
let secondLargest=arr[0];
for(let num of arr){
    if(num>largest){
        secondLargest=largest;
        largest=num;
    }
}

console.log(secondLargest); */

//input "I Love JavaScript" -->Output JavaScript Love I
/* 
let str="I Love JavaScript";

let result=str.split(" ").reverse().join(" ")
console.log(result);
let words=str.split(" ");
let result="";
for(let i=words.length-1;i>=0;i--){
    result+=words[i]+ " ";
}

console.log(result); */

//Write a program to handle Promises by async await

/* function startTheMachine(): Promise<void>{
    return new Promise<void>((resove, reject)=>{
        setTimeout(()=>{
            let result=true;
            if(result){
                console.log("Machine Started");
                resove();
            }else{
                console.log("Start Machine Failed");
                reject();
            }
            
        },2000);
    });
}


function boilTheWater(): Promise<void>{
    return new Promise<void>((resove, reject)=>{
        setTimeout(()=>{
            let result=true;
            if(result){
                console.log("Water Boiling Started");
                resove();
            }else{
                console.log("Failed to boil water!");
                reject();
            }
            
        },6000);
    });
}

function addCoffePowder(): Promise<void>{
    return new Promise<void>((resove, reject)=>{
        setTimeout(()=>{
            let result=true;
            if(result){
                console.log("Added Coffee powder");
                resove();
            }else{
                console.log("Failed to add Coffee Powder");
                reject();
            }
            
        },4000);
    });
}

function pourIntoCup(): Promise<void>{
    return new Promise<void>((resove, reject)=>{
        setTimeout(()=>{
            let result=true;
            if(result){
                console.log("Pouring into Cup");
                resove();
            }else{
                console.log("Failed to pour into cup");
                reject();
            }
            
        },1000);
    });
}

async function test1(): Promise<void>{
    await startTheMachine();
    await boilTheWater();
    await addCoffePowder();
    await pourIntoCup();


}

test1(); */

//call back function example

/* function addtwoNumber(cb:any){
    let a=10;
    let b=20;
    console.log(a+b);
    cb();

}

function printResult(){
    console.log("this is a test function");
}

addtwoNumber(printResult); */

//single level inheritance example

/* class father{

     run():void {
        console.log("Father is a good runner");
    }

    dance():void{
        console.log("Father is a good dancer");
    }

}

class son extends father{
    canSing():void{
        console.log("son can sing well");

    }
}

let s1=new son();
s1.run();
s1.dance();
s1.canSing(); */

//i love india->i evol aidni

/* let str="i love india";
let result=str.split(" ").map(words=>words.split("").reverse().join("")).join(" ");
console.log(result); */

/* let str="i love india";
let words=str.split(" ");
let result="";
for(let i=0;i<words.length;i++){
    for(let j=words[i].length-1;j>=0;j--){
        result+=words[i][j];
    }
    result+=" ";
}
console.log(result); */

//input "I Love JavaScript" -->Output JavaScript Love I

let str="I Love JavaScript";
let words=str.split(" ");
let result="";

for(let i=words.length-1;i>=0;i--){
    result+=words[i]+ " ";
}

console.log(result);
