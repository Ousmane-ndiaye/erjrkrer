import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarteComponent } from './add-carte.component';

describe('AddCarteComponent', () => {
  let component: AddCarteComponent;
  let fixture: ComponentFixture<AddCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
