//1. swap two  number without using third variable

/* let a=10;
let b=4;

a=a+b //14
b=a-b//10
a=a-b //4

console.log(a);
console.log(b); */

//4.Convert a string "123" into a number. 

/* let str="123";
let strToNum=Number(str);
console.log(typeof(strToNum)); */

//5.Convert a number 123 into a string. 

/* let num=123;
let numToStr=num.toString();
console.log(typeof(numToStr));
console.log(numToStr); */

//8.Find the largest of two numbers. 

/* let a=10;
let b=20;

if(a>b){
    console.log(a + 'is the largest number');
}else{
    console.log(b + 'is the largest number');
}
 */

//9.Find the largest of three numbers.

/* let arr=[10,3,30];

   let num=arr.sort((a,b)=>a-b)
    console.log(num);    
console.log('largest number is'+ num[2]); */

//11.Check whether a number is even or odd.

/* function checkEven(num:number){

    if(num%2==0){
        console.log(num + "is an even number");
    }else{
        console.log(num + "is not an even number");
    }

}

checkEven(10); */

//12.Calculate the area of a circle.

/* let radius = 5;

let Area=Math.PI*radius*radius;
console.log("Area of the circle is " + Area); */

//13.Calculate simple interest.

//SI=PRT/100;

/* let P=10000;
let R=5;
let T=2;

let SI=P*R*T/100;
console.log("Simple interest is " + SI);
 */

//16.Reverse a string.

/* let str="hello";
let revStr="";

for (let i = str.length-1; i >=0; i--) {
    revStr+=str[i];
}

console.log(revStr); */

//17.Check whether a string is a palindrome. 

/* let str="madam";

let revStr=str.split("").reverse().join("");
console.log(typeof(revStr));
//console.log(revStr);
if(str==revStr){
    console.log("string is palindrome");
}else{
    console.log("string is not palindrome");
} */

//18.Count the number of vowels in a string. 

/* let string="hello world";

let vowels=['a','e','i','o','u'];

let strArr=string.split("");
console.log(strArr);
let count=0;
for (let i = 0; i < strArr.length; i++) {
   for (let j = 0; j < vowels.length; j++) {
    if(strArr[i]==vowels[j]){
        count++;

    }
    
   }
}

console.log("Number of vowels:", count); */


//19.Count vowels and consonants separately. 

/* let string = "hello world";

let vowels = ['a', 'e', 'i', 'o', 'u'];

let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < string.length; i++) {

    if (vowels.includes(string[i])) {
        vowelCount++;
    } 
    else if (string[i] !== " ") {
        consonantCount++;
    }
}

console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount); */

//20.	Count the number of words in a sentence.

/* let string="Hello Welcome to JavaScript World for programming"

let words=string.split(" ");
console.log(words);
console.log("number of words in the sentence is: "+ words.length); //7 */

//21. Find the length of a string without using .length

/* let string="Hello Welcome to JavaScript World for programming";
//console.log("Length of the string is:"+ string.length);
 let count=0;

for(let char of string){
    count++
}

console.log(count);  */

//22.Find the first character of a string.
/* let str="JavaScript";
let element;
for (let i = 0; i < str.length; i++) {
    element = str[0];
 
    
}

console.log(element); */

//23.Find the last character of a string. 

/* let str="programmingww";
let lastChar;
for(let i=0;i<str.length;i++){
    lastChar=str[str.length-1];
}

console.log(lastChar); */

//24.Convert a string to uppercase without using .toUpperCase(). 

/* let str="hello world";

let result="";

for(let i=0;i<str.length;i++){

    let charCode=str.charCodeAt(i);
    if(charCode>=97 && charCode<=122){
        result+=String.fromCharCode(charCode-32);
    }else{
        result+=str[i];
    }
}

console.log(result); */

//25. Convert a string to lowercase without using .toLowerCase().

/* let str="Hello WorlD";
let result="";
for(let i=0;i<str.length;i++){
    let charCode=str.charCodeAt(i);
    if(charCode>=65 && charCode<=90){
        result+=String.fromCharCode(charCode+32);
    }else{
        result+=str[i];
    }
}

console.log(result); */

//26.Remove all spaces from a string.

/* let str="Hello World"

let result="";
for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        result+=str[i];
    }
    
}

console.log(result); */

//27.Replace all spaces with -

/* let str="Hello Welcome to JavaScript World"
let result="";
for(let i=0;i<str.length;i++){
    if(str[i]==" "){
        result+="-";
    }else if(str[i]!==" "){
        result+=str[i];
    }
}

console.log(result); */

//28.Find the frequency of each character. Input: "hello"
/* 
function countFrequency(str: string) {

    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                count++
            }
        }
        console.log(str[i] + ": " + count);

    }



}

countFrequency("hello");

let frequency: {
    [key: string]: number
} = {}; */
/* 
Input:
"I Love Java"

Output:
Java Love I

5- Java Program:
Input:
"I Love Java"

Output:
avaJ evoL I

6- Java Program:
Input:
abc-2019

Output:
abc
2019 */

//input "I Love JavaScript" -->Output JavaScript Love I

//let str="I Love JavaScript";

/* let splitStr=str.split(" ").reverse().join(" ");
console.log(splitStr); */
/* let words = str.split(" ");
let result="";
for(let i=words.length-1;i>=0;i--){
    result+=words[i] + " ";
}
console.log(result.trim()); */
/* 
Input:
"I Love Java"

Output:
avaJ evoL I */

/* let str="I Love Java";

let result="";
for(let i=str.length-1;i>=0;i--){
    result+=str[i];
}

console.log(result); */

/* Input:
abc-2019

Output:
abc
2019 */

//let str="abc-2019";
/* 
let result=str.split("-").join("\n");
console.log(result); */
/* let [text, number]=str.split("-"); //object destructing , typeOf return of split is object
console.log(text);
console.log(number); */

//Write a JavaScript program to find the second-largest number in an array without using sorting/bubble sort.
/* 
let arr=[10,2,3,30,20,46];
let largest=arr[0];
let secondLargest=arr[0];

for(let num of arr){
    if(num>largest){
        secondLargest=largest;
        largest=num;
    }
}

console.log(secondLargest); */

/* 👉 How do you integrate your playwright framework with GitHub? Explain branching strategy, pull request, code review and merge conflicts handling?

👉 How do you integrate your automation suite with Jenkins? Explain CI/CD pipeline steps from GitHub push to Jenkins execution? */

//I/O: i love india 
//O/P- i evol aidni

/* let str="i love india"
let rev=str.split(" ");
let reverseWord=rev.map(Element=>Element.split("").reverse().join(""));
console.log(reverseWord.join(" ")); */
/* 
let str = "i love india";
let words=str.split(" ");
let result="";

for(let i=0;i<words.length;i++){
    for(let j=words[i].length-1;j>=0;j--){
        result+=words[i][j];
    }

     result = result + " ";
}

console.log(result.trim()); */

//8.	Find the largest of two numbers. 

/* let input="my name is sachin"
//Output: is my name Sachin
let word=input.split(" ").sort().join(" ")
console.log(word);
 */

//replace a word from an sring
//Modifying
/* let str1="Hello World! JavaScript"
console.log(str1.replace("Hello","Hi"));
console.log(str1.replaceAll("i","j"));
let str2=" My name is Abdul";

const newStr=str1.concat(str2);
console.log(newStr);
 */

//String Comparison

/* const str1="Apple";
const str2="apple";

console.log(str1===str2);
console.log(str1.includes("hi"));
console.log(str1.localeCompare(str2));
 */

//Splitting and Joining String