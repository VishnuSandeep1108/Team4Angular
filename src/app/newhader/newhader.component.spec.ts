import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhaderComponent } from './newhader.component';

describe('NewhaderComponent', () => {
  let component: NewhaderComponent;
  let fixture: ComponentFixture<NewhaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewhaderComponent]
    });
    fixture = TestBed.createComponent(NewhaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
