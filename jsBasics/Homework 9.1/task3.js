// Homework 9.1 - Task 3


const car1 = { // object 1
    brand: "Hyundai",
    model: "Getz",
    year: 2025,
};

const car2 = { // object 2
    brand: "BYD",
    model: "SeaLion07",
    owner: "Sharu manufacturing",
};  


const car3 = { ...car1, ...car2 }; // Spread overriding properties of car1 with car2 
console.log(car3); 

