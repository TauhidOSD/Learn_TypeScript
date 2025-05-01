{
    //type alias

    //we are use type alias for save our time


    // use type alias for object

     type Student ={
        name: string;
        age: number;
        gender: string;
        contact?: string
     }

    const student1: Student = {
        name: 'Tauhid',
        age:38,
        gender:"male",
        contact:"01700000"
    }

    const student2 : Student ={
            name: "amir",
            age: 45,
            gender:"male",

    }

    const Student3: Student ={
        name:"Salma",
        age: 45,
        gender:"female",
        contact:"0178788908"
    }


    //string type type Alias

    type UserName = string
    type IsAdmin = boolean

    const UserName: UserName = "Amir"
    const IsAdmin: IsAdmin = true

    //use type alias on function
  type Add = (num1: number , num2: number) => number
    const add:Add = (num1, num2) => num1 + num2


    // const student1 : {
    //     name: string;
    //     age: number ;
    //     gender: string;
    //     contact?: string

    // }={
    //     name:'Tauhid',
    //     age:23,
    //     gender: "male",
    //     contact:"017000000"
    // }

    // const student2 : {
    //     name : string;
    //     age: number;
    //     gender: string;

    // }={
    //     name:"Mir",
    //     age:34,
    //     gender: "male"
    // }





}