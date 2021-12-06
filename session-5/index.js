// TASK 1
function getGrade (total) { 
    if (total > 90) {
        console.log('You got an A+');
    }
   
    if (total > 80 && total <= 90) {
        console.log('You got an A') 
    }

    if (total  > 70 && total <= 80) {
        console.log('You got a B')
    }

    if (total > 60 && total <= 70){
        console.log ('You got a C')
    }

    if (total > 50 && total <= 60){
        console.log ('You got a D')
    }

    if (total > 40 && total <= 50){
        console.log ('You got an E')
    }

    if (total > 30 && total <= 40){
        console.log ('You got an F')
    }

    if (total < 30)  {
        console.log ('You failed ')
    }


};

console.log(getGrade(85));
console.log(getGrade(67));
console.log(getGrade(53));


// TASK 2 

function getGrade (total) {
    switch (true) {
        case total > 90:
        console.log('You got an A+');
        break;

        case total > 80 && total <= 90:
        console.log('You got an A');
        break;

        case total > 70 && total <= 80:
        console.log('You got a B');
        break;

        case total > 60 && total <= 70:
        console.log('You got a C');
        break;
    
        case total > 50 && total <= 60:
        console.log('You got a D');
        break;

        case total > 40 && total <=50:
        console.log('You got an E');
        break;

        case total > 30 && total <= 40:
        console.log('You got an F');
        break;

        case total > 30:
        console.log('YOU FAILED');
        break;
      
};

}

console.log(getGrade(47));
console.log(getGrade(58));


// console.log instead of return gives undefined in the console 



