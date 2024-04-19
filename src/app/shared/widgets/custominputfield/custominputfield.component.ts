import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

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
    @Input()  public  control = new FormControl();
      

}
