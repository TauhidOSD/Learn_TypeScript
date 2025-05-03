{
    //
// generic constrain with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;

}

type owner1 = 'bike' | 'car' | 'ship' //manually set 
type owner2 = keyof Vehicle  //use keyof for same work

const person1 : owner1 = 'bike'// press ctrl + space ,show bike, car, ship
const person2 : owner2 = 'car' // show same result



// constrain Using keyof on a function

const getPropertyValue =  <X, Y extends keyof X >(obj: X , key:Y) =>{
    
    return obj[key];
}

const user ={
    name:'Amir',
    age:32,
    address:'Dhaka'
}

const car ={
    model: 'Toyota',
    year:2011
}

const result = getPropertyValue(car,'year')

    
    //
}