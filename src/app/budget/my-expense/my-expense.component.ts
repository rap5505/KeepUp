import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ExpenseService } from '../expense.service';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-my-expense',
  templateUrl: './my-expense.component.html',
  styleUrls: ['./my-expense.component.css']
})
export class MyExpenseComponent implements OnInit, OnDestroy {

  // expenses = [
  //   {title: 'Car', prize: 20000},
  //   {title: 'house', prize: 15000},
  //   {title: 'pizza', prize: 15}
  // ];

  expenses: Expense[] = [];
  private expensesSub: Subscription;

  constructor(public expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenses = this.expenseService.getExpense();
    this.expensesSub = this.expenseService.getExpenseUpdate()
      .subscribe((expenses: Expense[]) => {
        this.expenses = expenses;
      });
  }

  ngOnDestroy() {
    this.expensesSub.unsubscribe();
  }
}
