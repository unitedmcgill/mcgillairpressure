/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VdProductsComponent } from './vdproducts.component';

describe('ContactUsComponent', () => {
  let component: VdProductsComponent;
  let fixture: ComponentFixture<VdProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
