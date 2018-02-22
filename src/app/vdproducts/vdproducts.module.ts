import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { VdProductsComponent }       from './vdproducts.component';
import { VdProductsRoutingModule }   from './vdproducts-routing.module';

@NgModule({
    imports: [
        VdProductsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        VdProductsComponent 
    ]
})
export class VdProductsModule { }
