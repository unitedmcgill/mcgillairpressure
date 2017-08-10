import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { PilotComponent }   from './pilot.component';

const routes: Routes = [
    {
        path: '',
        component: PilotComponent,
        data: {
            title: 'Pilot/Testing'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PilotRoutingModule {}
