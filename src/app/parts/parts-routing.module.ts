import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { PartsComponent }   from './parts.component';

const routes: Routes = [
    {
        path: '',
        component: PartsComponent,
        data: {
            title: 'Parts/Gaskets'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartsRoutingModule {}
