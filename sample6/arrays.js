// let arr = ["first", 2, 3, "four", 5];
// /*arr[99] = 99;
// console.log(arr.length);*/
// /*arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");*/
//
// /*for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }*/
// arr.forEach(function(item, i, mass){
//     console.log(i + ':' + item + " (array: " + mass + ")");
// });
// console.log(arr);
//
// let mass = [1,3,4,6,7];
//
// for(let key in mass){
//     console.log(key);
// }
//
// for(let key of mass){
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];
//
// arr = ans.split(',');
// console.log(arr);
// let arr = ["afasdf", "zfasdfa", "fsadfe", "fasdfew"],
//     i = arr.join(', ');
// console.log(i);
let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}

console.log(arr);

let j = arr.slice(-2,-1);
console.log(j);