import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { VdProductsComponent }   from './vdproducts.component';

const routes: Routes = [
    {
        path: '',
        component: VdProductsComponent,
        data: {
            title: 'Products'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VdProductsRoutingModule {}
