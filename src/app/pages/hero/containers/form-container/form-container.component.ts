import { Component } from '@angular/core';
import { map } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { deepClone, HeroAndLikes } from '../../../../model';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.less']
})
export class FormContainerComponent{


  editing = true;

  constructor(private dataService: DataService) { }

    /** Current hero graph straight from cache */
  currentHeroAndLikes$ = this.dataService.currentHeroAndLikes$;

  /** Observable of the ViewModel: a reshaped, cloned, current hero data. */
  vm$ = this.currentHeroAndLikes$.pipe(
    map(data => deepClone(data))
  );

  save(vm: HeroAndLikes) {
    this.dataService.saveHeroAndLikes(vm);
    // this.editing = false;
  }

  close() {
    this.editing = false;
  }


}
