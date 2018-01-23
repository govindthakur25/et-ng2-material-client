import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from '../shared/material.module';
import { ExpenseTrackerAppComponent } from './expensetracker-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  { path: '', component: ExpenseTrackerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]    
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ],
  declarations: [
    ExpenseTrackerAppComponent, 
    ToolbarComponent, 
    SidenavComponent, 
    MainContentComponent
  ]
})
export class ExpenseTrackerModule { }
