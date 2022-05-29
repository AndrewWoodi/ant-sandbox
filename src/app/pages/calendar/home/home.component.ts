import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays, differenceInCalendarMonths, differenceInMonths, setHours } from 'date-fns';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  today = new Date();

  constructor() {}

  ngOnInit(): void {}

  isInvalidExpiryDate = (current: Date): boolean =>
    differenceInCalendarDays(current, this.today) <= 0 ||
    differenceInMonths(current, this.today) >= 3;
}
