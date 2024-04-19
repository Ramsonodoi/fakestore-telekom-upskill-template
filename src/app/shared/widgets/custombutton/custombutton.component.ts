import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custombutton',
  templateUrl: './custombutton.component.html',
  styleUrls: ['./custombutton.component.css']
})
export class CustombuttonComponent {
  @Input()
  public type!: 'button' | 'submit';
  @Input() public disabled?: boolean;
  @Input() public label!:string; 
}
