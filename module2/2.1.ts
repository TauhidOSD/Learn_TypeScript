{
 // type assertion  
 let anything : any
 
 anything = 'next level web Develop';
 anything = 124;

//  (anything as string)


// type a assertion
 
const KgToGm = (value: string | number  ): string |number | undefined => {
 
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value)*1000
        return `The converted value is ${convertedValue}`

    }if (typeof value === 'number'){
        return value*1000
    }


}
const result1 = KgToGm(1000) as number
const result2 = KgToGm("1000") as number  // use type assertion 

//

type CustomError ={
    message: string
}


try{

}catch(error){
    console.log((error as CustomError).message);
    
}


}