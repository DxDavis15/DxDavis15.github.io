var me = {
    firstName: "Delwin",
    lastName: "Davis",
    age: 33,
    kid: ["Cruz"],
}

for(var key in me) {
    console.log(key);
    console.log(me[key])
}



var grades = {
    "english": 80,
    "math": 77,
    "spanish": 90,
    "history": 87,
    "CS": 100.
};

var total = 0;

for (var subject in grades) {
    total += grades[subject]
}

console.log(total) 

var average = total / 5;

console.log(average)