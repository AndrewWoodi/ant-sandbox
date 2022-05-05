import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero, HeroAndLikes } from 'src/app/model';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less'],
})
export class HeroFormComponent implements OnInit {
  @Input() vm!: HeroAndLikes | null;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  @ViewChild('heroForm') form!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  addHero() {
    const hero = { id: -1, name: '', power: '' } as Hero;
    const vm = { hero: hero, likes: [] };
    this.vm = vm;
    this.form.reset(); // clear status flags from previous hero editing
  }

  onSubmit() {
    this.save.emit(this.vm);
  }
}
