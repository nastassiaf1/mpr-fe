import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { environment } from '@environments/environment';
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {}

  login({ login, password }: User) {
    return this.http.post<User>(`${environment.apiUrl}/api/users/login`, { login, password })
      .pipe(map(user => {
          return user;
      }));
  }

  logout() {
    //
  }

  register({ login, password, email }: User) {
    return this.http.post<User>(`${environment.apiUrl}/api/users/register`, { login, password, email })
      .pipe(map(user => {
          return user;
      }));
  }
}
