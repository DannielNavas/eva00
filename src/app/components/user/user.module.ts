import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelUserComponent } from './panel-user/panel-user.component';
import { MatButtonModule } from '@angular/material/button';
import { ModalIngresoComponent } from './modal-ingreso/modal-ingreso.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from '@ngneat/input-mask';
import { ModalEgresosComponent } from './modal-egresos/modal-egresos.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    PanelUserComponent,
    ModalIngresoComponent,
    ModalEgresosComponent
  ],
  imports: [
      CommonModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      InputMaskModule,
      MatSelectModule,
      MatCheckboxModule
    ],
  exports: [
    PanelUserComponent
  ]
})
export class UserModule { }
