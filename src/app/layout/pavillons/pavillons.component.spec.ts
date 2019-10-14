import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PavillonsComponent } from './pavillons.component';

describe('PavillonsComponent', () => {
  let component: PavillonsComponent;
  let fixture: ComponentFixture<PavillonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PavillonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PavillonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
