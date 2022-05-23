import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditeProductComponent } from './add-edite-product.component';

describe('AddEditeProductComponent', () => {
  let component: AddEditeProductComponent;
  let fixture: ComponentFixture<AddEditeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditeProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
