//Learning function 

// Normal function 

function add(num1: number, num2: number =10 ): number{ //here are added default value in num2 parameter
  
    return num1 + num2;
}
add(2,3)

// Arrow function

const addArrow = (num1: number , num2: number ): number => num1 + num2

// object --> function --> method

const poorUser = {
    name:'Amir',
    balance: 0,
    // this function call by method & it will be allows normal function
    addBalance(balance: number ): string{
         return `My new Balance is  ${this.balance + balance}`
    }
    
}

// map array

const arr : number[] = [1,4,10]
const newArray: number[] = arr.map((element :number): number => element*element)


