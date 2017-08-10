import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { AcServicesComponent }       from './acservices.component';
import { AcServicesRoutingModule }   from './acservices-routing.module';

@NgModule({
    imports: [
        AcServicesRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        AcServicesComponent
    ]
})
export class AcServicesModule { }
