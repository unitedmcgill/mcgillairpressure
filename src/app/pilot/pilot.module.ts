import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { PilotComponent }       from './pilot.component';
import { PilotRoutingModule }   from './pilot-routing.module';

@NgModule({
    imports: [
        PilotRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        PilotComponent
    ]
})
export class PilotModule { }
