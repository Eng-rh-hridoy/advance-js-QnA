// we cant get undefined by many way
let pakhi;
console.log("no1" + " is " + pakhi);

let arry = [1, 2, 3];
console.log("no2" + " is " + arry[11]);

let obj = {name:"solaiman", age: 38, phone: 589632}
console.log("no3" + " is " + obj.address);

function add(a, b){
    console.log(a + b);
    // return... 
}
let result = add(5, 8);
console.log("no4" + " is " + result);

function mull(x, y){
    console.log(x * y);
}
let gunKoro = mull(5); // if we don't give any parameter then we get an undefined
console.log("no5" + " is " + gunKoro);

let Num = undefined;
console.log("no6" + " is " + Num);

//////////////////////////////////////////////////

//************** null ******************//
// usually  we don't  get null
// actually we manually define a variable as a null. Ex- Name = null;