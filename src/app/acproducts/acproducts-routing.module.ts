import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { AcProductsComponent }   from './acproducts.component';

const routes: Routes = [
    {
        path: '',
        component: AcProductsComponent,
        data: {
            title: 'Products'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcProductsRoutingModule {}
