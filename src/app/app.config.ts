import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { LayoutEffects } from './shared/layout/store/layout.effects';
import { routes } from './app.routes';
import * as fromRoot from './store/root.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(LayoutEffects),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideRouterStore(),
    provideStore(fromRoot.reducers),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
