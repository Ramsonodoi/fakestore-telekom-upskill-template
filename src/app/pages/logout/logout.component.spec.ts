import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { MatCardModule } from '@angular/material/card';
import { CustombuttonComponent } from 'src/app/shared/widgets/custombutton/custombutton.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      imports: [MatCardModule,CustombuttonComponent]
    });
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
