import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '@core/services/firebase.service';
import { HotToastService } from '@ngneat/hot-toast';
import { createMask } from '@ngneat/input-mask';


@Component({
    selector: 'app-modal-ingreso',
    templateUrl: './modal-ingreso.component.html',
    styleUrls: ['./modal-ingreso.component.scss']
})
export class ModalIngresoComponent implements OnInit {
    ingresosForm!: FormGroup;
    currencyInputMask = createMask({
        alias: 'numeric',
        groupSeparator: ',',
        digits: 2,
        digitsOptional: false,
        prefix: '$ ',
        placeholder: '0',
    });
    constructor(public dialogRef: MatDialogRef<ModalIngresoComponent>, private formBuild: FormBuilder, private firebaseService: FirebaseService, private toastService: HotToastService) { }

    ngOnInit(): void {
        this.initFormIngresos();
    }

    initFormIngresos(): void {
        this.ingresosForm = this.formBuild.nonNullable.group({
            motivo: ['', [Validators.required]],
            valor: [0, [Validators.required]],
        })
    }

    onSubmit(): void {
        if (this.ingresosForm.valid) {
            this.sendDataFirebase();
        }
    }
    sendDataFirebase() {
        this.ingresosForm.get('valor')?.setValue(this.ingresosForm.get('valor')?.value.replace(/\D/g, ''));
        this.firebaseService.create(this.ingresosForm.value).then(data => { this.toastService.success('Se ha creado correctamente'); this.toastService.success('Registrado exitosamente') }).catch(err => console.log(err));
    }
}
