import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableEgresosComponent } from './table-egresos.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
    declarations: [
        TableEgresosComponent
    ],
    imports: [
        CommonModule,
        MatTableModule
    ],
    exports: [
        TableEgresosComponent
    ]
})
export class TableEgresosModule { }
