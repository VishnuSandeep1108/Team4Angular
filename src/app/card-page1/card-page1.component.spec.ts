import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPage1Component } from './card-page1.component';

describe('CardPage1Component', () => {
  let component: CardPage1Component;
  let fixture: ComponentFixture<CardPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPage1Component]
    });
    fixture = TestBed.createComponent(CardPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
