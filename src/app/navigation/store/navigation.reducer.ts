import { createReducer, on } from '@ngrx/store';

import * as NavigationActions from './navigation.actions';

export interface State {
  isMobileMenuOpen: boolean;
}

const initialState: State = { isMobileMenuOpen: false };

export const navigationReducer = createReducer(
  initialState,
  on(
    NavigationActions.closeMobileMenu,
    (state): State => ({ ...state, isMobileMenuOpen: false })
  ),
  on(
    NavigationActions.openMobileMenu,
    (state): State => ({ ...state, isMobileMenuOpen: true })
  )
);

export const getIsMobileMenuOpen = (state: State) => state.isMobileMenuOpen;
