import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ant design
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { HeroRoutingModule } from './hero-routing.module';
import { FormContainerComponent } from './containers/form-container/form-container.component';
import { HeroDisplayComponent } from './components/hero-display/hero-display.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroEditNamesComponent } from './components/hero-edit-names/hero-edit-names.component';
import { HeroEditPowerComponent } from './components/hero-edit-power/hero-edit-power.component';
import { HeroEditQualifierComponent } from './components/hero-edit-qualifier/hero-edit-qualifier.component';
import { QualifiersPipe } from './pipes/qualifiers.pipe';
import { LikesEditComponent } from './components/likes-edit/likes-edit.component';
import { ForbiddenNameValidationDirective } from './validation/forbidden-name-validation.directive';

@NgModule({
  declarations: [
    FormContainerComponent,
    HeroDisplayComponent,
    HeroFormComponent,
    HeroEditNamesComponent,
    HeroEditPowerComponent,
    HeroEditQualifierComponent,
    QualifiersPipe,
    LikesEditComponent,
    ForbiddenNameValidationDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzPageHeaderModule,
    NzSelectModule
  ]
})
export class HeroModule { }
