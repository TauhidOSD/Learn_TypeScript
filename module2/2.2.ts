{
//interface


//use type alias
type user1 ={
    name: string;
    age: string;
}

// type extend
type UserWithRole1 = user1 & {role : string}

const user: UserWithRole1 ={
    name:"amir",
    age:"32",
    role: "Student"
}

//use interface

interface user2 {
    name: string;
    age: number;
}

//type extend
interface UserWithRole2 extends user2 {
    role: string
}

const user2: UserWithRole2 ={
    name:'Tauhid',
    age:23,
    role: "Student"
}


// array diclear by type alias

type roll1 = number[];
const number: roll1 = [1,2,3]


// array diclear by interface

interface roll2 {
    [index:number] : string | number | boolean
}
const number2 : roll2 = ['ed',12, true]



//function in type alias

type Add1 = (num1: number, num2: number) => number
const Add : Add1 =(num1 , num2) => num1 + num2


//function in interface

interface Add2 {
    (num1: number, num2: number) : number
}
const add: Add2 = (num1, num2) => num1* num2

}