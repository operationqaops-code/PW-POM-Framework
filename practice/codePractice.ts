//i love india
//ouput: i evol aidni

let str="i love india";
/* let rev=str.split(" ").map(Word=>Word.split("").reverse().join("")).join(" ")
console.log(rev);
 */

let rev=str.split(" ");
let result = "";

for(let i=0;i<rev.length;i++){
    for(let j=rev[i].length-1;j>=0;j--){
        
            result+=rev[i][j];
        
    }

    result = result + " ";

}

console.log(result);

//sort numbers

let num=[10,-2,3,4,65];

let sortnum=num.sort();
console.log(sortnum);