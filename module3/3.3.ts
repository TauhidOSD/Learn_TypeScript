{
    //
 // type guard use by typeof operator

 const add = (param1: string | number, param2: string | number) : 
 string | number =>{
 
    if( typeof param1 === 'number' &&  typeof param2 === 'number'){
        return param1+ param2
    }else {
        return param1.toString() + param2.toString()
    }

     
 }

 const result1 = add ('2',4)
 console.log(result1);
 
// in gard

type NormalUser = {
    name: string;

}
type AdminUser = {
    name: string;
    role:'admin';
}

const getUser = (user : NormalUser | AdminUser) =>{
    if('role' in user ){
        console.log(`My name is ${user.name} and My role is ${user.role}`);
        
    }else{
        console.log(`My name is ${user.name} `);
        
    }
}

const normalUser :NormalUser ={
    name:'Tauhid'
    
}

const adminUser: AdminUser ={
    name:"Amir",
    role:"admin"
}

getUser(adminUser)
getUser(normalUser)

    //
}