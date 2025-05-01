{
//Union and Intersection types


//union type
type FrontendDeveloper = 'fakibaj' | 'juniorDev'
type FullStackDeveloper = 'FrontendDev' | 'expertDeveloper'


 type Developer = FrontendDeveloper | FullStackDeveloper

const newDev: FrontendDeveloper = "fakibaj"


type User = {
    name: string,
    gmail?: string,
    gender: 'Male'| ' Female',
    blodGroup: "O+" | "A+" | "AB+"

}

const user1: User ={
    name :"Amir",
    gender:"Male",
    blodGroup: "O+"
}



type FrontendDev = {
    skills: string[],
    designation1: "frontendDeveloper"
}

type BackendDeveloper = {
   skills: string[],
   designation2: "backendDeveloper"
}

type FullStackDev = FrontendDev & BackendDeveloper
const fullStackDeveloper: FullStackDev ={
    skills: ['HTML','CSS','Express'],
    designation1: "frontendDeveloper",
    designation2: "backendDeveloper"
}


}