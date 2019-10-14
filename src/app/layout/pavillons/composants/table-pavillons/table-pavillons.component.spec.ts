import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePavillonsComponent } from './table-pavillons.component';

describe('TablePavillonsComponent', () => {
  let component: TablePavillonsComponent;
  let fixture: ComponentFixture<TablePavillonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePavillonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePavillonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
