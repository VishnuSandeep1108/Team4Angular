import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueShopComponent } from './continue-shop.component';

describe('ContinueShopComponent', () => {
  let component: ContinueShopComponent;
  let fixture: ComponentFixture<ContinueShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinueShopComponent]
    });
    fixture = TestBed.createComponent(ContinueShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
