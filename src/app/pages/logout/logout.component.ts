import { Component } from '@angular/core';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  {  






  public logoutUser(){
    localStorage.clear();
    window.location.href = '';
  }
}
