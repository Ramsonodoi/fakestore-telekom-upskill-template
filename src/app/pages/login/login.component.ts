
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenResponse } from 'src/app/core/models/interfaces/tokenInterface';
import { AuthService } from 'src/app/core/service/Authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public errorMessage: string | undefined;
  public constructor(public authService: AuthService, private router: Router){

  }
  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required])
  }); 

  public onLogin(){
    if(this.loginForm.valid){
      this.authService.loginUser(this.loginForm.value).subscribe(
        (response: TokenResponse)=> {
          if(response.token){
            localStorage.setItem('token', response.token);
            this.router.navigate(['product-page']);
          } 
        },
        (error) => {
          if (error.error && typeof error.error === 'string') {
            this.errorMessage = error.error;
          }
        }
      
      ) ;
    }
  }


}
