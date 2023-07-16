import { createReducer, on } from '@ngrx/store';

import * as NavigationActions from './navigation.actions';

export interface State {
  isMenuOpen: boolean;
}

const initialState: State = { isMenuOpen: false };

export const navigationReducer = createReducer(
  initialState,
  on(
    NavigationActions.toggleMenu,
    (state): State => ({ ...state, isMenuOpen: !state.isMenuOpen })
  )
);

export const selectIsMenuOpen = (state: State) => state.isMenuOpen;
