class Person {
    constructor(name='anonymous',age=0){
        this.name = name; 
        this.age = age;
    } 

    getGreeting(){
        return `How are you today ${ this.name }?`;
    }

    getDescription(){
        return `The person is named ${this.name} and is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    } 
    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += `and is majoring in ${this.major}`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name,age,homeLocation){
        super(name,age,homeLocation)
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasHomeLocation()){
            description += `and is from ${this.homeLocation}`
        }
        else{
            description += `and is from nowhere`;
        }
    }
}

const me = new Student("Sahil",22,'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const third = new Traveller("Oggy",21,'Jindh');
console.log(third.getDescription());
