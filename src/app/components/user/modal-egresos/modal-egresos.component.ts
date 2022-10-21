import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '@core/services/firebase.service';
import { HotToastService } from '@ngneat/hot-toast';
import { createMask } from '@ngneat/input-mask';
import { EMes } from '../models/mes.enum';

@Component({
    selector: 'app-modal-egresos',
    templateUrl: './modal-egresos.component.html',
    styleUrls: ['./modal-egresos.component.scss']
})
export class ModalEgresosComponent implements OnInit {
    formEgresos!: FormGroup;
    currencyInputMask = createMask({
        alias: 'numeric',
        groupSeparator: ',',
        digits: 2,
        digitsOptional: false,
        prefix: '$ ',
        placeholder: '0',
    });
    meses: string[] = [EMes.Enero, EMes.Febrero, EMes.Marzo, EMes.Abril, EMes.Mayo, EMes.Junio, EMes.Julio, EMes.Agosto, EMes.Septiembre, EMes.Octubre, EMes.Noviembre, EMes.Diciembre];
    constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalEgresosComponent>, private firebaseService: FirebaseService, private toastService: HotToastService) { }

    ngOnInit(): void {
        this.initFormEgresos();
    }

    initFormEgresos(): void {
        this.formEgresos = this.formBuilder.group({
            tipo: ['', [Validators.required]],
            valor: ['', [Validators.required]],
            mes: [''],
            recurrente: [''],
        });
    }

    onSubmit(): void {
        if (this.formEgresos.valid) {
            this.createEgreso();
        }
    }

    createEgreso(): void {
        this.formEgresos.get('valor')?.setValue(this.formEgresos.get('valor')?.value.replace(/\D/g, ''));
        this.firebaseService.createEgreso(this.formEgresos.value).then(() => {
            this.toastService.success('Registro exitoso');
            this.dialogRef.close();
        }).catch(() => {
            this.toastService.error('Tuvimos un error al realizar el registro');
        });
    }
}
