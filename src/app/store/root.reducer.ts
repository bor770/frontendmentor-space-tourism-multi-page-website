import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import * as fromLayout from '../shared/layout/store/layout.reducer';

interface State {
  layout: fromLayout.State;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.layoutReducer,
  router: routerReducer,
};
