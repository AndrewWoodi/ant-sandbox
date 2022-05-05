import { Component, Input } from '@angular/core';
import { formViewProvider } from 'src/app/form-view-provider';
import { Hero, powers } from 'src/app/model';

@Component({
  selector: 'app-hero-edit-qualifier',
  templateUrl: './hero-edit-qualifier.component.html',
  styleUrls: ['./hero-edit-qualifier.component.less'],
  viewProviders: [formViewProvider],
})
export class HeroEditQualifierComponent {
  @Input() hero!: Hero;

  isOther(): boolean {
    return this.hero.power === 'Other';
  }

  get hasQualifiers() {
    const pow = powers.find((p) => p.name === this.hero.power);
    return pow && pow.qualifiers && pow.qualifiers.length > 0;
  }
}
