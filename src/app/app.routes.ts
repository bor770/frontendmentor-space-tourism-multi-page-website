import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { component: HomeComponent, path: `` },
  {
    loadComponent: () =>
      import(`./crew/crew.component`).then((m) => m.CrewComponent),
    path: `crew/:id`,
  },
  {
    loadComponent: () =>
      import(`./destination/destination.component`).then(
        (m) => m.DestinationComponent
      ),
    path: `destination/:id`,
  },
  {
    loadComponent: () =>
      import(`./technology/technology.component`).then(
        (m) => m.TechnologyComponent
      ),
    path: `technology/:id`,
  },
];
