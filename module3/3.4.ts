{
    //instance of guard

    class Animal {
        name: string;
        speacies: string;

        constructor(name: string, speacies : string){
            this.name = name
            this. speacies = speacies
        }
        makeSound(){
            console.log('I am sounding');
            
        }
    }

    class Dog extends Animal {
        constructor(name:string, speacies: string){
            super(name, speacies )
        }
        makeBarking() {
            console.log('I am Barking');
            
        }

    }

    class Cat extends Animal {
        constructor(name:string, speacies : string){
            super(name, speacies)
        }
        makeMeawing(){
            console.log('I am meawing');
            
        }
    }

 const getAnimal = (animal : Animal) => {
         
    if(animal instanceof Dog){
            animal.makeBarking()
         } else if (animal instanceof Cat){
            animal.makeMeawing()
         } else {
            animal.makeSound()
         }
 }

  const cat = new Cat('Meaw Bhai', 'cat')
  const dog = new Dog ('Dog Bhai', 'dog')
  getAnimal(dog)
}