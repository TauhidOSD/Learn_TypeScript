{
//destructuring


//object destructuring
const user = {
 id : 132,
 name : {
    firstName: 'Kanij',
    middleName: 'Fatema',
    lastName: 'onika'
 },
 contact: "01707000000",
 address: 'uganda'



}

const {contact, name:{middleName : midName }} = user // middleName : midName it means name Alias



//array destructuring

const myFriend = ['racel', 'anik', 'nirob', 'monica', 'shakib', 'mahi']

const [a,b,bestfriend,...rest] = myFriend

}