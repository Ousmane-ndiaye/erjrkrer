import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRestaurantsComponent } from './table-restaurants.component';

describe('TableRestaurantsComponent', () => {
  let component: TableRestaurantsComponent;
  let fixture: ComponentFixture<TableRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
