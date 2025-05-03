{
    //function with generic 
    
    //this is normal function
    const createArray = (param: string): string[] => {
       return[param]
    }
    const ressult = createArray('Bangladesh');

  // now type function use by generic

  const createArrayWithGeneric = <T>(param: T) : T[] =>{
        return [param]
  }

  const resultGeneric = createArrayWithGeneric<string>('Bangladesh')

  interface User {
    name:string;
    id:number
  }
  const resultGenenicObj = createArrayWithGeneric<User>({name:'Tauhid', id:1234})



 // generic with tuple

 const genericTuple = <T,Q>(param1 : T, param2 :Q) : [T, Q] =>{
    return[param1, param2]
 }

 const resultWithTuple =  genericTuple<string, string>('Bangladesh',"India");
 const resultWithTupleObject = genericTuple<string, {name:string}>('Bangladesh',{name:'Asia'})


 //more practice use generic on function

 const addCourseToStudent = <T>(student : T) =>{
    const course = 'Next level web Development'
    const jobpalacement = 'It will be Life time suport'
    return {
         ...student, course,jobpalacement
    }

 }

 const Student1 = addCourseToStudent({name:'Tauhid', email:'t@gmail.com', passion:"web development"})
 const student2 = addCourseToStudent({name:'Ruksana', email:'r@gmail.com', love:'Drawing'})

    //
}