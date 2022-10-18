import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@core/services/firebase.service';
import { UserService } from '@core/services/user/user.service';
import { IUserData } from '../models/user-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-user',
  templateUrl: './panel-user.component.html',
  styleUrls: ['./panel-user.component.scss']
})
export class PanelUserComponent implements OnInit {
    dataUser!: IUserData;
    constructor(private userService: UserService, private firebaseService: FirebaseService, private router: Router) { }

    ngOnInit(): void {
        this.dataUser = this.getDataUser();
    }

    getDataUser(): IUserData {
        return this.userService.getDataUser();
    }

    logout(): void {
        this.firebaseService.logout();
        sessionStorage.clear();
        this.router.navigate(['/']);

    }
}
