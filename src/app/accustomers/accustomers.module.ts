import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { AcCustomersComponent }       from './accustomers.component';
import { AcCustomersRoutingModule }   from './accustomers-routing.module';

@NgModule({
    imports: [
        AcCustomersRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        AcCustomersComponent 
    ]
})
export class AcCustomersModule { }
