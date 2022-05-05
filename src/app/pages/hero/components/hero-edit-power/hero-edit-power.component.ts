import { AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import { NgModel } from '@angular/forms';
import { delay, skip } from 'rxjs';
import { formViewProvider } from 'src/app/form-view-provider';
import { Hero, powers } from 'src/app/model';

@Component({
  selector: 'app-hero-edit-power',
  templateUrl: './hero-edit-power.component.html',
  styleUrls: ['./hero-edit-power.component.less'],
  viewProviders: [formViewProvider],
})
export class HeroEditPowerComponent implements AfterViewInit {

  @Input() hero!: Hero;

  @ViewChild('power') power!: NgModel;
  powers = powers;

  onPowerChange() {
    this.hero.powerQualifier = undefined;
  }

  ngAfterViewInit(): void {
    this.listenToPowerChanges();
  }

  /** Listen for changes to hero Power.
   * Ridiculously complicated but shows that you can listen to valueChanges observable */
  private listenToPowerChanges() {
     this.power?.valueChanges?.pipe(
      skip(1), // Ignore the initial value when component loads
      // Ng Quirk: valueChanges emits before NgModel updates the model.
      delay(1), // Wait a tick before displaying the model value.
    )
    .subscribe(v => {
      console.log(`"${v}"", emitted by power's valueChanges observable`);
      console.log(`model.power is "${this.hero.power}"`);
    });
  }
}
