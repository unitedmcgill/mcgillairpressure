import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { RebuildsComponent }   from './rebuilds.component';

const routes: Routes = [
    {
        path: '',
        component: RebuildsComponent,
        data: {
            title: 'Rebuilds/Upgrades'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RebuildsRoutingModule {}
