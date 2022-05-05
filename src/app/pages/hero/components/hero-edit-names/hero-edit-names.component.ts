import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Hero } from 'src/app/model';

@Component({
  selector: 'app-hero-edit-names',
  templateUrl: './hero-edit-names.component.html',
  styleUrls: ['./hero-edit-names.component.less'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class HeroEditNamesComponent  {

  @Input() hero!: Hero;

}
