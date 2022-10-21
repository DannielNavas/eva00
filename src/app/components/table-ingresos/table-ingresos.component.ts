import { Component, OnInit } from '@angular/core';
import { IIngresos } from '@components/user/models/ingresos.interface';
import { FirebaseService } from '@core/services/firebase.service';

@Component({
    selector: 'app-table-ingresos',
    templateUrl: './table-ingresos.component.html',
    styleUrls: ['./table-ingresos.component.scss']
})
export class TableIngresosComponent implements OnInit {
    displayedColumns: string[] = ['motivo', 'valor'];
    dataSource!: IIngresos[];
    total: number = 0;
    constructor(private firebaseService: FirebaseService) { }

    ngOnInit(): void {
        this.getDataFirebase();
    }

    getDataFirebase(): void {
        this.firebaseService.getAll().subscribe((data) => {
            this.dataSource = data;
            this.total = this.sumaTotal();
        });
    }

    sumaTotal(): number {
        return this.dataSource.reduce((total, data) => total + data.valor, 0);
    }
}
