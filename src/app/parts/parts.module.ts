import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { PartsComponent }       from './parts.component';
import { PartsRoutingModule }   from './parts-routing.module';

@NgModule({
    imports: [
        PartsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        PartsComponent
    ]
})
export class PartsModule { }
