{
    //


    const arrayOfNumber : number[] = [1,2,3,4]

    const arrayOfString : string[] = arrayOfNumber.map(number => number.toString())
    console.log(arrayOfString);
    
    // mapped type

    type AreaNumber = {
        height : string ;
        width: number ;
        length: string;
    }

    // type AreaString = {
    //     [Key in keyof AreaNumber] : number
       
        
    // }

    // dainamic key diclear korte parbo akhon generic type use kore
    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const Area1: AreaString<{height:string, width:number, length: number}> = {
            height:'100',
            width:123,
            length: 100
    }
    
  
    
    
  


    //
}