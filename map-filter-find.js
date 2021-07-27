const arry = [20,15,14,18,30,28];

// map
// map function return a new array
arry.map(function (x, index, array){  // by map function we can access single element
    // of our declared array, the element's index num & we all can access full array.
    console.log(x * x, index, array);
});
// map by arrow function
// arry.map((x, index, array) => console.log(x * x, index, array));

////////////////////////////////////////////////////////////////

// filter
// filter function also return a new array it filter elements if we give any 
// condition on it
const result = arry.filter(function(x){
    return x < 18; // here we check the element is bigger than 18 or not
});
console.log(result);
// filter by arrow function
const resultArrow = arry.filter((x) => x < 18);
console.log(resultArrow);

/////////////////////////////////////////////////////

// find
// find function is not return new array. it just return the first element by check 
//given condition from the array
const getElement = arry.find(function(x){
    return x > 20;
})
console.log(getElement);
// find by arrow function
const findElement = arry.find((x) => x > 20);
console.log(findElement);