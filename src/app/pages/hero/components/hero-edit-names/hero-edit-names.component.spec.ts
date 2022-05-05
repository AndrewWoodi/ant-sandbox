import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createDemoData } from 'src/app/services/data.service';

import { HeroEditNamesComponent } from './hero-edit-names.component';

describe('HeroEditNamesComponent', () => {
  let component: HeroEditNamesComponent;
  let fixture: ComponentFixture<HeroEditNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEditNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEditNamesComponent);
    component = fixture.componentInstance;
    const data = createDemoData();
    component.hero = data.heroes[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
