import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mark } from './pages/mark/mark'
const routes: Routes = [
  {
    path: 'mark',
    component: Mark
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
