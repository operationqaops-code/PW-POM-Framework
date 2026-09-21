//replace a word from an sring
//Modifying
/* let str1="Hello World! JavaScript"
console.log(str1.replace("Hello","Hi"));
console.log(str1.replaceAll("i","j"));
let str2=" My name is Abdul";

const newStr=str1.concat(str2);
console.log(newStr);
 */

import { error } from "console";

//String Comparison

/* const str1="Apple";
const str2="apple";

console.log(str1===str2);
console.log(str1.includes("hi"));
console.log(str1.localeCompare(str2));
 */

//Splitting and Joining String

/* const str1="Hello Welcome to  JavaScript";
let strToArray=str1.split(" ")
console.log(strToArray);
console.log(strToArray.join(" and ")); */

//Q1. Truncate the text
//Write a function called Truncate that checks length of given string-str and if
//it surpasses a specified maximum length,maxlength,it replaces the end of the string
//with the ellipsis charecter "..." so that the length matches the maximum length
//input:str="Subscribe to RoadSideCoder", maxlength=6

/* function truncate(str: string,maxlength: number){
    if(str.length>maxlength){
        return str.slice(0,maxlength)+"..."
    }else{
        return str;
    }

}

console.log(truncate("Subscribe to RoadSideCoder",6)); */

//Q2.Palindrome Number
//An Integer is Palindrome when it reads the same forward and backward
//input x=121-->True
//input x=10--->False

/* let num=10;
let numtoStr=num.toString();
let rev=numtoStr.split("").reverse().join("");
if(numtoStr==rev){
    console.log("number is an palindrome number");
}else{
    console.log("not palindrome");
} */

//Q3.Hamming Distance
//Given two String x="hello" , y="hwllr"
//output=2
//Explanation:
//hello
//hwllr
// |  |

/* function hammingDistance(x: string,y: string){
    if(x.length!==y.length){
        throw new Error("String Must be same length");
    }
    let distance=0;
    for(let i=0;i<x.length;i++){
        if(x[i]!==y[i]){
            distance++;
        }
    }
    return distance;

}

console.log(hammingDistance("hello","hwlwr")); */

//Array

//Find out second largest element from an array

let arr=[2,6,7,10,12,4,12];
/* let largest=arr[0]; 
let secondLargest=arr[0]; //2

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        
        secondLargest=largest;
        console.log("second Largest : "+ secondLargest);
        largest=arr[i];
        console.log("Largest: "+ largest);
    }
} */
//console.log(secondLargest);
let num=Array.from(new Set(arr)); 
//First find out the unique set of element from the given input array then convert it to array by Array.form method 
let sortElement=num.sort((a,b)=>b-a); //apply sorting in descending order
console.log(sortElement[1]); //print second element of the array i.e second largest number

//Q2 Rotate Array By k
// Given an integer array nums, rotate the array by k steps,
//where k is non-negative

//input :nums=[1,2,3,4,5,6,7],k=3 --->>> Output: [5,6,7,1,2,3,4]
//input :nums=[-1,-100,3,99],k=2 ---->>> Output: [3,99,-1,-100]

/* function rotateArray(nums: string | any[],k: number){
    let size=nums.length;
    if(size>k){
        k=k%size;
    }
    const rotated=nums.splice(size-k,size); //7-3=4,7 -->5,6,7
    nums.unshift(...rotated); //5,6,7,1,2,3,4
    return nums;

}

console.log(rotateArray([1,2,3,4,5,6,7],3)); */