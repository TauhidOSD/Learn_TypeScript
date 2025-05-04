{
    //

    type Sheikh ={
        bike:string;
        car:string;
        plane: string
    }

    type vehicle<T> = T extends keyof Sheikh ? true : false 
    type hasCar = vehicle<'car'>
    //
}