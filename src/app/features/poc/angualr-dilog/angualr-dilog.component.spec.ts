import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngualrDilogComponent } from './angualr-dilog.component';

describe('AngualrDilogComponent', () => {
  let component: AngualrDilogComponent;
  let fixture: ComponentFixture<AngualrDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngualrDilogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngualrDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
