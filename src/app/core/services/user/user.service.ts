import { Injectable } from '@angular/core';
import { IUserData } from '@components/user/models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor() { }

    getDataUser(): IUserData  {
        const user = sessionStorage.getItem('user');
        if (user) {
            return JSON.parse(user) as IUserData;
        }
        return {} as IUserData;
    }

    setDataUser(user: any): void {
        sessionStorage.setItem('user', JSON.stringify(user));
    }
}
