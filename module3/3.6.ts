{
    //access Modifiers

    class BankAccount {
      public readonly  id: number ;
      public  name: string;
       protected _balance: number;

        constructor(id:number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit (amount : number){
                this._balance = this._balance + amount
        }
//user getter
        get balance (){
            return this._balance
        }
    }
// access protected variable
    

    const goribManusherAccount = new BankAccount(101, 'Tauhid', 20);
    //call getter & setter
    goribManusherAccount.deposit =30
    const myBalace = goribManusherAccount.balance
    
    console.log(myBalace);
    
    

    //
}