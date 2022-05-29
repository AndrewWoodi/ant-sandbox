import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'hero',
    loadChildren: () =>
      import('./pages/hero/hero.module').then((m) => m.HeroModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./pages/calendar/calendar.module').then((m) => m.CalendarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
