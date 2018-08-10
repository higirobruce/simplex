import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SuppliersComponent } from './suppliers.component';

const routes: Routes = [
  {
    path: '',
    component: SuppliersComponent,
    data: {
      title: 'Suppliers'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule {}