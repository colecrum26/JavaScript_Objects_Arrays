console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const arr1 = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;
function arraySum(sum){
    for (let i = 0; i < arr1.length; i++){
        sum += arr1[i];
        console.log(sum)
    }
    return sum;
}

arraySum(sum);

// HIGHER ORDER FUNCTIONS
// arr1.forEach((sum) => {
//     sum += sum;
//     console.log(sum);
// })

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


