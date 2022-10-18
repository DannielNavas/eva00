import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIngresosComponent } from './table-ingresos.component';

describe('TableIngresosComponent', () => {
  let component: TableIngresosComponent;
  let fixture: ComponentFixture<TableIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIngresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
