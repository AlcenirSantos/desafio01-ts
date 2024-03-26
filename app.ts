import { CompanyAccount } from './class/CompanyAccount'
import { KidAccount } from './class/KidAccount';
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.deposit(100));
console.log(peopleAccount.withdraw(10));
console.log(peopleAccount.getBalance());
console.log(peopleAccount.getName());
console.log(peopleAccount.validateStatus());
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.deposit(150));
console.log(companyAccount.withdraw(12));
console.log(companyAccount.getLoan(390));
console.log(companyAccount.getBalance());
console.log(companyAccount.getName());
console.log(companyAccount.validateStatus());

const kidAccount: KidAccount = new KidAccount('Teste', 30);
console.log(kidAccount.deposit(350));
console.log(kidAccount.withdraw(120));
console.log(kidAccount.getBalance());
console.log(kidAccount.getName());
console.log(kidAccount.validateStatus());
