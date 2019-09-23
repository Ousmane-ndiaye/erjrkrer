import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRechargesComponent } from './table-recharges.component';

describe('TableRechargesComponent', () => {
  let component: TableRechargesComponent;
  let fixture: ComponentFixture<TableRechargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRechargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRechargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
