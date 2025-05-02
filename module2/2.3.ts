{
    //Generic type
    type GenericArray<T> = Array<T>

    const rollNumber: GenericArray<number> = [1,2,3]

    const mentors: GenericArray<String> = ["Mezba", "Mir", "Nahid"]

    const boolArray: GenericArray<boolean> = [true, false, true]

    // use  array of Object by Genetic

    const user : GenericArray<{name: string, age: number} > = [
        {
        name: "tauhid",
        age: 32
            
        },
        {
            name: "amir",
            age:32
        },
        
    ]

    // generic tuple
    type GenericTuple<X,Y> = [X,Y]

    const person: GenericTuple<string, string> = ['Amir', "Tauhid"]
    const UserInfo: GenericTuple<number, {name:string, email:string}> = [123, { name:'Tauhid', email: "@gmail.com"}]
    
}