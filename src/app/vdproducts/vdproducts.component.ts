import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-vdproducts',
  templateUrl: './vdproducts.component.html',
  styleUrls: ['./vdproducts.component.scss']
})
export class VdProductsComponent implements OnInit {

  constructor(
    private router: Router) { }
    
  ngOnInit() {
  }

  public gotoGaskets(){
    this.router.navigate(['/parts']);
  }
}
