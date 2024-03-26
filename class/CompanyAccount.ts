import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): string => {
    if(this.validateStatus()){
      this.deposit(value);
      return `Você fez um emprestimo no valor de ${value}`;
    }
    return 'Conta inativa';
  }
}
