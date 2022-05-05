import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { createDemoData } from 'src/app/services/data.service';

import { LikesEditComponent } from './likes-edit.component';

describe('LikesEditComponent', () => {
  let component: LikesEditComponent;
  let fixture: ComponentFixture<LikesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LikesEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesEditComponent);
    component = fixture.componentInstance;
    const data = createDemoData();
    const vm = { hero: data.heroes[0], likes: data.likes };
    component.model = vm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
