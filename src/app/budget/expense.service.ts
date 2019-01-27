import { Expense } from "./expense.model";
import { Subject } from "rxjs";


export class ExpenseService {
  private expenses: Expense[] = [];
  private expensesUpdated = new Subject<Expense[]>();

  getExpense() {
    return [...this.expenses];
  }

  getExpenseUpdate() {
    return this.expensesUpdated.asObservable();
  }

  addExpense(title: string, price: number) {
    const expense: Expense = { title: title, price: price };
    this.expenses.push(expense);
    this.expensesUpdated.next([...this.expenses]);
  }
}
