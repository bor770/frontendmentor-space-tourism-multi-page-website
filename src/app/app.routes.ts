import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { component: HomeComponent, path: `` },
  {
    loadComponent: () =>
      import(`./pages/crew/crew.component`).then((m) => m.CrewComponent),
    path: `crew/:index`,
  },
  {
    loadComponent: () =>
      import(`./pages/destination/destination.component`).then(
        (m) => m.DestinationComponent
      ),
    path: `destination/:index`,
  },
  {
    loadComponent: () =>
      import(`./pages/technology/technology.component`).then(
        (m) => m.TechnologyComponent
      ),
    path: `technology/:index`,
  },
];
