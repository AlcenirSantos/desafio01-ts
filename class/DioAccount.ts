export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }
  
  getName = (): string => {
    return this.name
  }

  deposit = (value: number): string => {
    if (this.validateStatus()) {
      this.balance += value
      return `Você depositou ${value} e seu novo saldo é ${this.balance}`
    }
    return 'Conta inativa';
  }
  
  withdraw = (value: number): string => {
    if (this.validateStatus()) {
      if(this.validateBalance(value)){
        this.balance -= value
        return `Você sacou ${value} e seu novo saldo é ${this.balance}`
      }else{
        return 'Saldo insuficiente'
      }
    }
    return 'Conta inativa';
  }

  getBalance = (): number => {
    return this.balance
  }

  private validateBalance = (value: number): boolean => {
    return this.balance > value ? true : false;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
