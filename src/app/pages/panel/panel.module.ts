import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { UserModule } from '@components/user/user.module';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TableIngresosModule } from '@components/table-ingresos/table-ingresos.module';



@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
      PanelRoutingModule,
      UserModule,
      MatButtonModule,
      MatDialogModule,
      TableIngresosModule
  ]
})
export class PanelModule { }
