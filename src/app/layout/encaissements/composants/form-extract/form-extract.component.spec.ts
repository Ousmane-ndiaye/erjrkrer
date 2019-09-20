import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExtractComponent } from './form-extract.component';

describe('FormExtractComponent', () => {
  let component: FormExtractComponent;
  let fixture: ComponentFixture<FormExtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
