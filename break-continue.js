const numbers = [1, -5, 2, -13, 5, 3, -6, 7, 9, 12];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 6){
        break;
    }
    console.log(numbers[i]);
}

for(let j = 0; j < numbers.length; j++){
    if(numbers[j] < 0){ // check the negative numbers
        continue; // ignore negative numbers
    }
    console.log(numbers[j]);
}