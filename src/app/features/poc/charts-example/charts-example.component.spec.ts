import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsExampleComponent } from './charts-example.component';

describe('ChartsExampleComponent', () => {
  let component: ChartsExampleComponent;
  let fixture: ComponentFixture<ChartsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
