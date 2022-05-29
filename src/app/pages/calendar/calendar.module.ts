import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { HomeComponent } from './home/home.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CalendarRoutingModule, NzCalendarModule],
})
export class CalendarModule {}
