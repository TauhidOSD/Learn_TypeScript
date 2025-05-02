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
    
    

    //
}