import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { createDemoData } from 'src/app/services/data.service';

import { HeroEditPowerComponent } from './hero-edit-power.component';

describe('HeroEditPowerComponent', () => {
  let component: HeroEditPowerComponent;
  let fixture: ComponentFixture<HeroEditPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NzFormModule,
        NzSelectModule,
        BrowserAnimationsModule,
      ],
      declarations: [HeroEditPowerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEditPowerComponent);
    component = fixture.componentInstance;
    const data = createDemoData();
    component.hero = data.heroes[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
