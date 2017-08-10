import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { AcServicesComponent }   from './acservices.component';

const routes: Routes = [
    {
        path: '',
        component: AcServicesComponent,
        data: {
            title: 'AcServices/Gaskets'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcServicesRoutingModule {}
