const global1 = "I am a global variable"; // global1 is a global variable. 
//we can use global variables everywhere into our programme.

function myFunc(){
    let local1 = "I am a local variable(local1)"; // local1 is a local variable.
    // we can only use local variables in side of our local blocks. in that case we can
    // use our local1 variable only in to our myFunc function.

    const combine = global1 + " " + local1;  // here we can use global1 in to our
    //function. because global1 is a global variable.

    return combine;
}

const result1 = myFunc();
console.log(result1);
// console.log(local1); // we can't use local1 out side.

// Closure
function stopWatch(){
    let i = 0;
    return function(){
        i++;
        return i;
    }
}

const clock1 = stopWatch();
const clock2 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock1());

// Hoisting

function myhois(){
    var nums = 20;

    if(nums < 100){
       var result = 50;
    }

    console.log("my result " + result); // result is a local variable , but we declare
    // result as a var. so js will hoist it's declaration to it's parents. for that reason
    // we can use the variable which is declare as var outside of our local block
    return result;
}

console.log(myhois());