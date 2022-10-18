import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableIngresosComponent } from './table-ingresos.component';


@NgModule({
    declarations: [TableIngresosComponent],
  imports: [
    CommonModule,
      MatTableModule
    ],
    exports: [TableIngresosComponent]

})
export class TableIngresosModule { }
