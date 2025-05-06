{
    //abstraction

    interface Vehicle {
        startEngine () : void
        stopEngine () : void
        move () : void
    }

    //real implement

    class Car implements Vehicle {
        startEngine(): void {
            console.log(`I am starting the car engine`);
            
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`);
            
        }

        move(): void {
            console.log(`I am moving the car`);
            
        }
    }

    const toyotaCar = new Car
    toyotaCar.startEngine()


    //Abstract class

    abstract class vehicle2  {
        abstract startEngine() : void
        abstract stopEngine() : void
        abstract moveEngine() : void
    }

    class ToyotaCar extends vehicle2{
        startEngine(): void {
            console.log('Start the engine');
            
        }
        stopEngine(): void {
            console.log(`stop the engine`);
            
        }
        moveEngine(): void {
            console.log(`moving the engine`);
            
        }
    }




    //
}