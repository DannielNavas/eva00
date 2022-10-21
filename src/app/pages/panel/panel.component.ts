import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEgresosComponent } from '@components/user/modal-egresos/modal-egresos.component';
import { ModalIngresoComponent } from '@components/user/modal-ingreso/modal-ingreso.component';
import { FirebaseService } from '@core/services/firebase.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {}

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(ModalIngresoComponent, {
            width: '450px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }

    openDialogEgresos(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(ModalEgresosComponent, {
            width: '450px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }

}
