import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEgresosComponent } from './table-egresos.component';

describe('TableEgresosComponent', () => {
  let component: TableEgresosComponent;
  let fixture: ComponentFixture<TableEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEgresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
