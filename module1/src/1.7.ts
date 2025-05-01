{// this second use for practice otherwise we can,t redeclear same function into other file 


//learn spread operator
//use spread operator on array
const bros1: string[]= ['sakib', 'racel','sabbir']
const bros2: string[] = ['eyasin', 'nafiz']

bros1.push(...bros2)

//use spread operator on object
const mentor1 = {
    typeScrip:'Mezba',
    redux: 'mir',
    dbms: 'Mizan'
}

const mentor2 = {
    prisma: 'Firoj',
    next: 'Tonmoy',
    cloud: 'Nahid'
}

const mentorList ={
    ...mentor1,
    ...mentor2
}


//rest operator 

const greetFriend = (...friends : string[]) =>{
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string )=> console.log(`Hi ${friend}`)
    )
    
}

greetFriend('abul','kabul','babul')



}