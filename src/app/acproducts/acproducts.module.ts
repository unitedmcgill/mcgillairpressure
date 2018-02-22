import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { AcProductsComponent }       from './acproducts.component';
import { AcProductsRoutingModule }   from './acproducts-routing.module';

@NgModule({
    imports: [
        AcProductsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        AcProductsComponent 
    ]
})
export class AcProductsModule { }
