import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expensetracker-app',
  template: `
   <app-sidenav></app-sidenav>
  `,
  styles: []
})
export class ExpenseTrackerAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
