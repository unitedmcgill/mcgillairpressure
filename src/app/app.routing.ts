import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/authguard';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'acproducts',
                loadChildren: './acproducts/acproducts.module#AcProductsModule'
            },
            {
                path: 'vdproducts',
                loadChildren: './vdproducts/vdproducts.module#VdProductsModule'
            },
            {
                path: 'control',
                loadChildren: './control/control.module#ControlModule'
            },
            {
                path: 'pilot',
                loadChildren: './pilot/pilot.module#PilotModule'
            },
            {
                path: 'rebuilds',
                loadChildren: './rebuilds/rebuilds.module#RebuildsModule'
            },
            {
                path: 'parts',
                loadChildren: './parts/parts.module#PartsModule'
            },
            {
                path: 'acservices',
                loadChildren: './acservices/acservices.module#AcServicesModule'
            },
            {
                path: 'accustomers',
                loadChildren: './accustomers/accustomers.module#AcCustomersModule'
            },
            {
                path: 'vdcustomers',
                loadChildren: './vdcustomers/vdcustomers.module#VdCustomersModule'
            },
            {
                path: 'contactus',
                loadChildren: './contactus/contactus.module#ContactUsModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#LocationModule'
            }            
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
