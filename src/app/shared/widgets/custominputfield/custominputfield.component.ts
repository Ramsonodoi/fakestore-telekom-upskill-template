import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custominputfield',
  templateUrl: './custominputfield.component.html',
  styleUrls: ['./custominputfield.component.css']
})
export class CustominputfieldComponent {
      @Input()
  public placeholder!: string;
      @Input()
      public type!: string;  
      

}
