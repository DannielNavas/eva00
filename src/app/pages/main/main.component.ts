import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData } from '@components/user/models/user-data';
import { FirebaseService } from '@core/services/firebase.service';
import { UserService } from '@core/services/user/user.service';
import { EConfigRoutes } from '@utils/routes/config-routes.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private firebaseService: FirebaseService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

    loginWithGoogle() {
        this.firebaseService.loginWithGoogle()
            .then(response => {
                this.userService.setDataUser(response.user);
                this.router.navigateByUrl(EConfigRoutes.panel);
            })
            .catch(error => console.log(error))
    }

}
