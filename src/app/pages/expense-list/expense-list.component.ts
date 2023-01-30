import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  data = [];

  constructor( private expenseService: ExpenseService, private router: Router) { }

  ngOnInit() {
    this.getExpenses();
  }

  toNewExpense() {
    this.router.navigate(['/expense-add']);
  }

  toModify(id) {
    this.router.navigate(['/expense-modify/'+id]);
  }

  getExpenses() {
    this.expenseService.fetch((data) => {
      this.data = data;
    })
  }

  deleteExpense(id) {
    this.expenseService.delete(id, () => {
      this.getExpenses();
    });
  }

}
