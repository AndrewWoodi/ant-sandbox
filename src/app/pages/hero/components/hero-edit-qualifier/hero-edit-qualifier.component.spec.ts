import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { powers } from 'src/app/model';
import { createDemoData } from 'src/app/services/data.service';

import { HeroEditQualifierComponent } from './hero-edit-qualifier.component';

@Pipe({ name: 'qualifiers' })
class MockPipe implements PipeTransform {
  transform(powerSource: string) {
    const power = powers.find((p) => p.name === powerSource);
    return power ? power.qualifiers : [];
  }
}

describe('HeroEditQualifierComponent', () => {
  let component: HeroEditQualifierComponent;
  let fixture: ComponentFixture<HeroEditQualifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NzSelectModule,
        NzFormModule,
        BrowserAnimationsModule,
      ],
      declarations: [HeroEditQualifierComponent, MockPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEditQualifierComponent);
    component = fixture.componentInstance;
    const data = createDemoData();
    component.hero = data.heroes[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
