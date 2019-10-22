import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambresComponent } from './chambres.component';

describe('ChambresComponent', () => {
  let component: ChambresComponent;
  let fixture: ComponentFixture<ChambresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChambresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
