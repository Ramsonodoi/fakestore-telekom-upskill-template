import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/service/cart/cart.service';

import { CustombuttonComponent } from 'src/app/shared/widgets/custombutton/custombutton.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: () => '1'
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        CartService
      ],
      imports: [HttpClientModule, CustombuttonComponent]
    });
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
