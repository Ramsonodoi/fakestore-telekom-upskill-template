import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustominputfieldComponent } from './custominputfield.component';

describe('CustominputfieldComponent', () => {
  let component: CustominputfieldComponent;
  let fixture: ComponentFixture<CustominputfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustominputfieldComponent]
    });
    fixture = TestBed.createComponent(CustominputfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
