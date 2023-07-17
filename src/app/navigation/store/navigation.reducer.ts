import { createReducer, on } from '@ngrx/store';

import * as NavigationActions from './navigation.actions';

export interface State {
  isMenuOpen: boolean;
}

const initialState: State = { isMenuOpen: false };

export const navigationReducer = createReducer(
  initialState,
  on(
    NavigationActions.closeMenu,
    (state): State => ({ ...state, isMenuOpen: false })
  ),
  on(
    NavigationActions.openMenu,
    (state): State => ({ ...state, isMenuOpen: true })
  )
);

export const selectIsMenuOpen = (state: State) => state.isMenuOpen;
