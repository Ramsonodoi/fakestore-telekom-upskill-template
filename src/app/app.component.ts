import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'fakestore';
  
  public constructor(private router: Router){}

  public hideLogout(): boolean {
    return this.router.url === '/';
  }

}
