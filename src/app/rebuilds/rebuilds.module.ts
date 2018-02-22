import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { RebuildsComponent }       from './rebuilds.component';
import { RebuildsRoutingModule }   from './rebuilds-routing.module';

@NgModule({
    imports: [
        RebuildsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        RebuildsComponent
    ]
})
export class RebuildsModule { }
