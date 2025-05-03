{
    //
    //constraints

    const addCourseToStudent = <T extends {id:number; name: string; email: string } >(student : T) =>{
        const course = 'Next level web Development'
        const jobpalacement = 'It will be Life time suport'
        return {
             ...student, course,jobpalacement
        }
    
     }
    
     const Student1 = addCourseToStudent({
        emni:'emni',
        id:101,
        name:'Tauhid',
        email:'t@gmail.com',
        passion:"web development"
    })
     const Student2 = addCourseToStudent({
        id:102,
        name:'Tauhid',
        email:'t@gmail.com',
        passion:"web development"
    })
     const student3 = addCourseToStudent({
        id:103,
        name:'Ruksana', 
        email:'r@gmail.com', 
        love:'Drawing'
    })
    


    //

}