import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.scss']
})
export class ExpenseAddComponent implements OnInit {
  loading = false;

  titleError = false;
  amountError = false;

  constructor(private expenseService: ExpenseService, private router: Router) { }

  ngOnInit() {
  }

  backToList() {
    this.router.navigate(['/expense']);
  }

  checkError(form: NgForm) {
    this.loading = true;
    (form.value.title == "") ? this.titleError = true : this.titleError = false;
    (form.value.amount == "") ? this.amountError = true : this.amountError = false;

    if(!this.titleError && !this.amountError) this.submitForm(form);
    else this.loading = false;
  }

  submitForm(form: NgForm) {
    this.expenseService.add(form.value, () => {
      this.loading = false;
      this.router.navigateByUrl('/expense');
    })
  }

}
