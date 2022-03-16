import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LebalComponent } from './lebal.component';

describe('LebalComponent', () => {
  let component: LebalComponent;
  let fixture: ComponentFixture<LebalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LebalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LebalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
