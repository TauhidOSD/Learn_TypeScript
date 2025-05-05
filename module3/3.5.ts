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

        addDeposit (amount : number){
                this._balance = this._balance + amount
        }

        getBalance (){
            return this._balance
        }
    }
// access protected variable
    class Studenyt extends BankAccount {
        test(){
            this._balance
        }
    }

    const goribManusherAccount = new BankAccount(101, 'Tauhid', 20);
    goribManusherAccount.addDeposit(12)

    const myBalace = goribManusherAccount.getBalance()
    console.log(myBalace);
    
    

    //
}