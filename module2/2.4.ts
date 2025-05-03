{
    //interface generic

    interface Developer<T, X=null> {
        name: string;
        computer:{
            brand: string;
            model:string;
            releaseYear:number;
        };
        smartwatch: T,
        bike?:X
    }

  interface EmilabWatch {
    brand:string;
    model:string;
    display:string;
}

    const poorDeveloper: Developer<EmilabWatch> ={
        name:"Tauhid",
        computer:{
            brand:"Asus",
            model:'X-55G',
            releaseYear:2013
        },
        smartwatch:{
            brand:'Emilab',
            model:'ksx32',
            display:"OLED",
        }
    }

  type AppleWatch ={
    brand: string;
    model:string;
    heartTrack:boolean;
    sleepTrack:boolean;
}

 interface Yamaha {
    model:string;
    engine:string
 }

    const richDeveloper: Developer<AppleWatch,Yamaha > ={
        name:"Amir",
        computer:{
            brand:"Apple",
            model:'X-54H2',
            releaseYear:2018
        },
        smartwatch:{
            brand:'Apple',
            model:'LS-32',
            heartTrack:true,
            sleepTrack:true,
        },
        bike:{
            model:"yamaha",
            engine:"150cc"
        }
        
    }

    

    //
}