{
//
//basic oop of typeScript

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string){
        this. name = name;
        this. species = species;
        this . sound =  sound
    }

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
        
    }
}

const dog = new Animal('german separd vhai', 'dog','geaw geaw')
const cat = new Animal ('parsian vhai','cat', 'meaw meaw')
cat.makeSound();
dog.makeSound()

//


// uporer same kaj ta aro easyly kora jaite pare

class Animal1 {

    constructor(public name:string, public species: string, public sound: string){}
     makeSound1(){
        console.log(`The crazy ${this.name} says ${this.sound}`);
        
     }
    
}
const dog1 = new Animal1 ('german vhai' ,'dog', 'geaw geaw')
const cat1 = new Animal1 ('persian vhai' ,'cat', 'meaw meaw')
cat1.makeSound1()
dog1.makeSound1()
}