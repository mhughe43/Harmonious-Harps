import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatepolicyPageComponent } from './privatepolicy-page.component';

describe('PrivatepolicyPageComponent', () => {
  let component: PrivatepolicyPageComponent;
  let fixture: ComponentFixture<PrivatepolicyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatepolicyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatepolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
