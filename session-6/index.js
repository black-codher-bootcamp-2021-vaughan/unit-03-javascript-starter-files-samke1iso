// Use this randomNumber inside of the while/for loops to generate a random number
// const randomNumber = Math.round(Math.random() * 10);

// ****************************************************TASK 1****************************************************

let count = 1
const randomNumber = Math.round(Math.random() * 10);

while (count < 10) {
    const randomNumber = Math.round(Math.random() * 10);
    console.log(randomNumber);
    count++;
};

// console.log(randomNumber); (redudant line because of DRY)










// ****************************************************TASK 2****************************************************

// Rewrite the WHILE loop from the previous task as a FOR loop




let count = 0
const randomNumber = Math.round(Math.random() * 10);

for (let count = 0; count <= 10; count++) {
    const randomNumber = Math.round(Math.random() * 10);
    console.log(randomNumber);
};





