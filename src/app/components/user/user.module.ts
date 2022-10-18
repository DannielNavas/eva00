import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelUserComponent } from './panel-user/panel-user.component';
import { MatButtonModule } from '@angular/material/button';
import { ModalIngresoComponent } from './modal-ingreso/modal-ingreso.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from '@ngneat/input-mask';



@NgModule({
  declarations: [
    PanelUserComponent,
    ModalIngresoComponent
  ],
  imports: [
      CommonModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      InputMaskModule
    ],
  exports: [
    PanelUserComponent
  ]
})
export class UserModule { }
