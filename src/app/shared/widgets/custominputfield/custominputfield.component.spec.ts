import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustominputfieldComponent } from './custominputfield.component';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('CustominputfieldComponent', () => {
  let component: CustominputfieldComponent;
  let fixture: ComponentFixture<CustominputfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustominputfieldComponent, MatFormFieldModule]
    });
    fixture = TestBed.createComponent(CustominputfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
