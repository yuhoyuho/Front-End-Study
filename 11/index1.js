const person = {
    name : {
        firstName : "Gildong",
        lastName : "Hong",
    },
    age : 20,
    
    likes : ["apple", "samsung"],
    
    printHello : function () {
        return "Hello";
    }
}

console.log(person.name.firstName);
console.log(person.name.lastName);

person.name.firstName = "kim";
console.log(person.name.firstName)
console.log(person.name);

person.country = "korea";
console.log(person);
console.log(person.country);

delete person.country;
console.log(person);