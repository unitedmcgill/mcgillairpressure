import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { ControlComponent }       from './control.component';
import { ControlRoutingModule }   from './control-routing.module';

@NgModule({
    imports: [
        ControlRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        ControlComponent
    ]
})
export class ControlModule { }
