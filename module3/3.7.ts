{
   // static

   class counter1{
      static count1 : number = 0

    static  increment1 (){
        return counter1.count1 = counter1.count1 + 1
      }
      decrement2 (){
        return counter1.count1 = counter1.count1 - 1
      }
   }
    console.log(counter1.increment1());
    console.log(counter1.increment1());
    // console.log(counter1.increment1());
    





    // without static

    class Counter {
        count : number =0

        increment(){
            return (this.count = this.count +1);
        }

        decrement() {
            return (this.count = this. count -1);
        }
    }

    const instance1 = new Counter
    // console.log(instance1.increment());
    // console.log(instance1.increment());
    // console.log(instance1.increment());

    const instance2 = new Counter
    // console.log(instance2.increment());



    
    
}