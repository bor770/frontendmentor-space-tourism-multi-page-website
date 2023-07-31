import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: ``, pathMatch: 'full', redirectTo: `home` },
  { path: `crew`, pathMatch: 'full', redirectTo: `crew/1` },
  {
    loadComponent: () =>
      import(`./pages/crew/crew.component`).then((m) => m.CrewComponent),
    path: `crew/:index`,
  },
  { path: `destination`, pathMatch: 'full', redirectTo: `destination/1` },
  {
    loadComponent: () =>
      import(`./pages/destination/destination.component`).then(
        (m) => m.DestinationComponent
      ),
    path: `destination/:index`,
  },
  { component: HomeComponent, path: `home` },
  {
    loadComponent: () =>
      import(`./pages/technology/technology.component`).then(
        (m) => m.TechnologyComponent
      ),
    path: `technology/:index`,
  },
  { path: `technology`, pathMatch: 'full', redirectTo: `technology/1` },
];
