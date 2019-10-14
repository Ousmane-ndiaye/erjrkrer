import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPavillonComponent } from './add-pavillon.component';

describe('AddPavillonComponent', () => {
  let component: AddPavillonComponent;
  let fixture: ComponentFixture<AddPavillonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPavillonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPavillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
