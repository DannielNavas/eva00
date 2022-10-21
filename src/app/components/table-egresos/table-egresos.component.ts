import { Component, OnInit } from '@angular/core';
import { IEgresos } from '@components/user/models/egresos.interface';
import { FirebaseService } from '@core/services/firebase.service';

@Component({
    selector: 'app-table-egresos',
    templateUrl: './table-egresos.component.html',
    styleUrls: ['./table-egresos.component.scss']
})
export class TableEgresosComponent implements OnInit {
    displayedColumns: string[] = ['tipo', 'valor', 'mes', 'pago'];
    dataSource!: IEgresos[];
    total: number = 0;
    constructor(private firebaseService: FirebaseService) { }

    ngOnInit(): void {
        this.getDataFirebase();
    }

    getDataFirebase(): void {
        this.firebaseService.getAllEgreso().subscribe((data) => {
            console.log(data);
            this.dataSource = data;
            this.total = this.sumaTotal();
        });
    }

    sumaTotal(): number {
        return this.dataSource.reduce((total, data) => total + Number(data.valor), 0);
    }

}
