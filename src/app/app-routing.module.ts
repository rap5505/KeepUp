import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { MyExpenseComponent } from './budget/my-expense/my-expense.component';
import { AddExpenseComponent } from './budget/add-expense/add-expense.component';
import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'addExpense', component: AddExpenseComponent },
  { path: 'myExpense', component: MyExpenseComponent },
  { path: 'calorie', component: CalorieTrackerComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
