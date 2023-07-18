import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { filter, map } from 'rxjs';

import * as LayoutActions from './layout.actions';
import * as NavigationActions from '../../../navigation/store/navigation.actions';

@Injectable()
export class LayoutEffects {
  setMobile = createEffect(() => {
    return this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      filter((result) => result.matches),
      map(() => LayoutActions.setWidth({ width: 'mobile' }))
    );
  });

  setTablet = createEffect(() => {
    return this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Medium])
      .pipe(
        filter((result) => result.matches),
        map(() => LayoutActions.setWidth({ width: 'tablet' }))
      );
  });

  setDesktop = createEffect(() => {
    return this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(
        filter((result) => result.matches),
        map(() => LayoutActions.setWidth({ width: 'desktop' }))
      );
  });

  closeMobileMenu = createEffect(() => {
    return this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .pipe(map(() => NavigationActions.closeMobileMenu()));
  });

  constructor(private breakpointObserver: BreakpointObserver) {}
}
