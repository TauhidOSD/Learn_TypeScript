{
    // inheritance

    class Person {
        name:string;
        age: number ;
        address : string;

        constructor (name: string, age: number , address: string){
            this.name = name;
            this.age = age;
            this. address = address;
        }

        getSleep(sleep : number){
            console.log(`${this.name} sleep for ${sleep} hours`);
            
        }
    }



    class Student extends Person {
        constructor(name: string, age: number, address : string){
            super(name, age, address)
        }
        
    }

    class Teacher extends Person {
        designation : string;

        constructor(name: string, age: number , address : string, designation: string){
            super(name, age, address )
            this.designation = designation
            
        }

        takeClass(numberOfClass : number){
                console.log(`${this.name} will take ${numberOfClass} classes`);
                
        }
    }

    const student = new Student('Tauhid', 23, 'Tangail')
    const teacher = new Teacher('Mezba', 35, 'Ctg', 'Profesor' )
    student.getSleep(7)
    teacher.takeClass(4)

}