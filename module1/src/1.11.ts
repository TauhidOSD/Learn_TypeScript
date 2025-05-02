{
    //
   const age:number =20
    if(age>=18){
        console.log('adult');
        
    }else{
        console.log('not adult');
        
    }

    const isAdult = age >= 18 ? 'adult' : 'not Adult'
    console.log({isAdult});
    

    // nullish coalescing operator 

    const isAuthenticated = ''

    const result1 = isAuthenticated ?? 'guest'
    console.log({result1});
    const result2 = isAuthenticated ? isAuthenticated: 'guest'
    console.log({result2});
    
    //use optional chaining also nullish operator

    type User = {
        name: string;
        address:{
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string; // use optional type operator '?'
        }
    }


    const user: User = {
        name: 'Amir',
        address:{
            city: 'Dhaka',
            road: 'Savar',
            presentAddress:'Khagan'
        }
    }
    //use nullish operator also optional chaining
    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent Address'
    console.log({permanentAddress});
    
    

    //
}