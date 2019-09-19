import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncaissementsComponent } from './encaissements.component';

describe('EncaissementsComponent', () => {
  let component: EncaissementsComponent;
  let fixture: ComponentFixture<EncaissementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncaissementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncaissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
