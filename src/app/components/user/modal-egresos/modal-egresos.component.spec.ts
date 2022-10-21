import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEgresosComponent } from './modal-egresos.component';

describe('ModalEgresosComponent', () => {
  let component: ModalEgresosComponent;
  let fixture: ComponentFixture<ModalEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEgresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
