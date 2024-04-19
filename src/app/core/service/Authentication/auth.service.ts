import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../models/interfaces/loginInterface';
import { APIConstant } from '../../constant/APIConstant';
import { environment } from 'src/environments/environment.development';
import { TokenResponse } from '../../models/interfaces/tokenInterface';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginUrl = `${environment.apiBaseUrl}${APIConstant.login.getLoginUrl}`;


  public constructor(private http: HttpClient) { }

  public loginUser(userData:IUser) {
    return this.http.post<TokenResponse>(this.loginUrl, userData);
  }
}
