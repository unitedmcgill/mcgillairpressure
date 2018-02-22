import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { VdCustomersComponent }       from './vdcustomers.component';
import { VdCustomersRoutingModule }   from './vdcustomers-routing.module';

@NgModule({
    imports: [
        VdCustomersRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        VdCustomersComponent 
    ]
})
export class VdCustomersModule { }
