import { DioAccount } from "./DioAccount"

export class KidAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): string => {
    if(this.validateStatus()){
      this.deposit(value+10);
      return `Você fez um deposito no valor de ${value} e seu saldo atual é ${this.getBalance()}`;
    }
    return 'Conta inativa';
  }
}
