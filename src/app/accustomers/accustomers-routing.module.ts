import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { AcCustomersComponent }   from './accustomers.component';

const routes: Routes = [
    {
        path: '',
        component: AcCustomersComponent,
        data: {
            title: 'Customers'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcCustomersRoutingModule {}
