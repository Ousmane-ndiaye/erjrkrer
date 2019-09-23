import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListeProfilComponent } from './table-liste-profil.component';

describe('TableListeProfilComponent', () => {
  let component: TableListeProfilComponent;
  let fixture: ComponentFixture<TableListeProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListeProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
