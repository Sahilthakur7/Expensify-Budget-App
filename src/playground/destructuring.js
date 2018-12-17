console.log("Zlatan");

const person = {
    name: 'Amit',
    age: 22,
    location: {
        city: 'Shimla',
        temp: 4
    }
};

const { name = 'Karanvir', age } = person;
const { city, temp } = person.location;

console.log(`${name} is ${age} years old`);
console.log(`It's ${temp} in ${city}`);
