const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const part = nums.slice(2, 5); // slice() will get the element from 2nd index of nums array
// to before 5th no index of nums array.
// note: slice() don't cut or delete those elements from the nums array

console.log(part);
console.log(nums); // here we can see slice() don't remove those elements

const removedEl = nums.splice(2, 5, 18, 20, 50); // splice() will remove the elements
// start with the 2nd index's element of nums array and end with after countdown 5 element
// from starting element. splice() will also insert elements by it's extra parameter .
// in that case splice() will insert 18, 20, 50 from the 2nd index of nums array.

console.log(removedEl);
console.log(nums); // here we can see splice() removed those elements and  also
// insert elements on that position.

const joinEL = nums.join(""); // join() will join all the elements of array & return as a string.
console.log(joinEL);

const joinEL1 = nums.join(" "); // join elements with a white spec
console.log(joinEL1);

const joinEL2 = nums.join(","); // join elements with coma
console.log(joinEL2);
console.log(typeof(joinEL2)); // here we can check the data type. it's string