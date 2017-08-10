import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { VdCustomersComponent }   from './vdcustomers.component';

const routes: Routes = [
    {
        path: '',
        component: VdCustomersComponent,
        data: {
            title: 'Customers'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VdCustomersRoutingModule {}
