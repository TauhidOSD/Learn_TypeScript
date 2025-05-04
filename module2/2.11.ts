{
    //utility 

    //pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        phone: string;
    }

    type NameAge = Pick<Person, 'name' | 'age'>

    //omit 
    type ContactInfo = Omit<Person, 'name' | 'email'> // baki gulo show korbe

    //required

    type PersonRequired = Required<Person> // person er sob gulo value kai required kore dibe
    //partial
    type PersonPartial = Partial<Person>

    //readOnly

    type Student = {
        name: String;
        age: number;
        email: string

    }

    // type PersonReadonly = Readonly<Student> // PersonReadonly type taw bosano jabe same kaj korbe

    const Person1: Readonly<Student> = {
        name: "tauhid",
        age: 23,
        email: 't@gmail.com'
    }
    // Person1.name="amir" // readony howya te amr akhane value rediclear korte parbo nh

    //Record 

    // type Obj = {
    //     a: string;
    //     b: string;
    //     c: string;

    // }

    type Obj = Record<string,string >

    const Obj1: Obj = {
        a: 'aa',
        b: 'bb',
        // c: 6 for fix this issue

    }

    // use Unknown on Record

    type Person3 = Record<string, unknown>
    const Per: Person3 ={
        name: "Tauhid",
        age: 32,
        isStudent: true
    }




    //
}