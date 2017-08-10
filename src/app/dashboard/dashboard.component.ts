import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { ConfigService }        from '../services/config.service';

@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor( public config : ConfigService ) { }

    ngOnInit(): void {
        
    }
}
