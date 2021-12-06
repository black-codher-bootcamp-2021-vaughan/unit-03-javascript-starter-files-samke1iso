// TASK 1
function getGrade (total) { 
    if (total > 90) {
        console.log('You got an A+');
    }
   
    if (total > 80, total <= 90) {
        console.log('You got an A') 
    }

    if (total  > 70, total <= 80) {
        console.log('You got a B')
    }

    if (total > 60, total <= 70){
        console.log ('You got a C')
    }

    if (total > 50, total <= 60){
        console.log ('You got a D')
    }

    if (total > 40, total <= 50){
        console.log ('You got a E')
    }

    if (total > 30, total <= 40){
        console.log ('You got a F')
    }

    if (total < 30)  {
        console.log ('You failed ')
    }


};

console.log(getGrade(85));
// console.log(getGrade(67));
// console.log(getGrade(53));



