{
    //polymorphism

    class Person {
        getSleep() {
            console.log(`The normal person sleep 8 hours per day`);
            
        }
    }

    class Student {
       getSleep(){
            console.log(`The student sleep 7 hours per day`);
            
        }
    }

    class Developer  {
        getSleep(){
            console.log(`The developer sleep 6 hours per day`);
        
        }
    }

    const getSleepingHours = (parma : Person) =>{
            parma.getSleep()
    }

    const person1 = new Person
    const person2 = new Student
    const person3 = new Developer

    // getSleepingHours(person1)
    // getSleepingHours(person2)
    // getSleepingHours(person3)
    //



    // more polymorphism example
 
    class Shape {
        getArea(): number {
            return 0;
        }
    }
//Pi * r*r
    class Circle extends Shape{
        radius : number 
        constructor(radius: number){
            super();
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }

    class Area extends Shape {
        length : number
        width: number 
        constructor(length: number , width: number ) {
            super()
            this.length = length
            this.width = width
        }
        getArea(): number {
            return this.length * this.width
        }

     
            
        }
        const getShapeArea = (parma : Shape) => {
            console.log(parma.getArea());
    }
  const shape1 = new Shape
  const shape2 = new Circle(10)
  const shape3 = new Area(10, 12)

  getShapeArea(shape1)
  getShapeArea(shape2)
  getShapeArea(shape3)


    //
}