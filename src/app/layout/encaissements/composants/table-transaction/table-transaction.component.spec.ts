import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTransactionComponent } from './table-transaction.component';

describe('TableTransactionComponent', () => {
  let component: TableTransactionComponent;
  let fixture: ComponentFixture<TableTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
