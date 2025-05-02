{
//
//nullable type

const searchName = (value: string | null) =>{

    if(value){
        console.log('searching');
        
    }else{
        console.log('there is no searching');
        
    }
}

searchName(null)



//unknown value

const getSpeedInMeeterPerSecond = (value: unknown) =>{
    if(typeof value === 'number'){
        const convertedSpeed = (value * 1000)/3600 ;
        console.log(`The converted value is ${convertedSpeed} ms^-1`);
        
    }else if(typeof value === 'string'){
      const [result, unit] = value.split(' ')
      const convertedSpeed = (parseFloat(result)*1000)/3600;
      console.log(`The converted value is ${convertedSpeed} ms^-2`);
      
    }
    else{
        console.log('wrong input');
        
    }
}
getSpeedInMeeterPerSecond('1000 km');


//never 
const throwError = (msg: string): never =>{
    throw new Error(msg);
}
throwError('Show error ')


//

}