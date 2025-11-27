// Homework 6.2 - Task 2

// Function declaration
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log('Function Declaration:');
console.log('She is 25 and she is adult: ' + isAdult(25)); 
console.log('She is 15 and she is adult: ' + isAdult(15));

//Shorter version of the function declaration
function isAdultShort(age) {
    return age >= 18;
}    
console.log('\nShorter version of the function declaration:');   
console.log('She is 25 and she is adult: '+ isAdultShort(25));
console.log('She is 15 and she is adult: '+ isAdultShort(15));

// Function expression
const isAdultExpr = function(age) {
    return age >= 18;
};  
console.log('\nFunction Expression:');
console.log('He is 25 and he is adult: ' + isAdultExpr(25)); 
console.log('He is 15 and he is adult: ' + isAdultExpr(15));

// Arrow function
const isAdultArrow = age => age >= 18;
console.log('\nArrow Function:');
console.log('She is 25 and she is adult: ' + isAdultArrow(25)); 
console.log('She is 15 and she is adult: ' + isAdultArrow(15)); 