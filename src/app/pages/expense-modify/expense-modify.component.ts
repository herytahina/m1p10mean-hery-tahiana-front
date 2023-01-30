import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-modify',
  templateUrl: './expense-modify.component.html',
  styleUrls: ['./expense-modify.component.scss']
})
export class ExpenseModifyComponent implements OnInit {
  loading = false;
  
  expense = {};

  titleError = false;
  amountError = false;

  constructor(private expenseService: ExpenseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getExpense(this.route.snapshot.params['id']);
  }

  backToList() {
    this.router.navigate(['/expense']);
  }

  getExpense(id) {
    this.expenseService.fetchOne(id, (data) => {
      this.expense = data;
      console.log(data);
    })
  }

  checkError(form: NgForm) {
    this.loading = true;
    (form.value.title == "") ? this.titleError = true : this.titleError = false;
    (form.value.amount == "") ? this.amountError = true : this.amountError = false;

    if(!this.titleError && !this.amountError) this.submitForm(form);
    else this.loading = false;
  }

  submitForm(form: NgForm) {
    this.loading = true;
    this.expenseService.update(this.route.snapshot.params.id, form.value, () => {
        this.loading = false;
        this.router.navigateByUrl('/expense');
    })
  }
}
