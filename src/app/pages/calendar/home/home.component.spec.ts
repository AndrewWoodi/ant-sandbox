import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark today as an invalid expiry date', () => {
    expect(component.isInvalidExpiryDate(new Date())).toBeTrue();
  });

  it('should mark tomorrow as a valid expiry date', () => {

    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(component.isInvalidExpiryDate(tomorrow)).toBeFalse();
  });
  it('should mark 84 days into the future as a valid expiry date', () => {
    let almostThreeMonths = new Date();
    almostThreeMonths.setDate(almostThreeMonths.getDate() + 84);
    expect(component.isInvalidExpiryDate(almostThreeMonths)).toBeFalse();
  });

it('should mark 93 days into the future as an invalid expiry date', () => {
    let afterThreeMonths = new Date();
    afterThreeMonths.setDate(afterThreeMonths.getDate() + 93);
    expect(component.isInvalidExpiryDate(afterThreeMonths)).toBeTrue();
  });

});
