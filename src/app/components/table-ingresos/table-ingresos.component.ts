import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@core/services/firebase.service';

@Component({
  selector: 'app-table-ingresos',
  templateUrl: './table-ingresos.component.html',
  styleUrls: ['./table-ingresos.component.scss']
})
export class TableIngresosComponent implements OnInit {
    displayedColumns: string[] = ['motivo', 'valor'];
    dataSource: any = {};
    constructor(private firebaseService: FirebaseService) { }

    ngOnInit(): void {
        this.getDataFirebase();
  }

    getDataFirebase(): void {
        this.firebaseService.getAll().subscribe((data) => {
            this.dataSource = data as [{ motivo: string; valor: number }];
        });
    }

}
