import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ExpenseService } from "../expense.service";

@Component({
  selector: "app-add-expense",
  templateUrl: "./add-expense.component.html",
  styleUrls: ["./add-expense.component.css"]
})
export class AddExpenseComponent implements OnInit {
  enteredTitle: "";
  enteredPrice: "";


  constructor(public expenseService: ExpenseService) {}

  ngOnInit() {}

  onAddExpense(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.expenseService.addExpense(form.value.title, form.value.price);
    form.resetForm();
  }
}
