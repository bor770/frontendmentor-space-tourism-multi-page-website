import {
  RouterReducerState,
  getRouterSelectors,
  routerReducer,
} from '@ngrx/router-store';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromLayout from '../shared/layout/store/layout.reducer';

interface State {
  layout: fromLayout.State;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.layoutReducer,
  router: routerReducer,
};

const selectLayout = createFeatureSelector<fromLayout.State>(`layout`);

export const selectLayoutWidth = createSelector(
  selectLayout,
  fromLayout.selectWidth
);

export const selectRouterCategory = createSelector(
  getRouterSelectors().selectCurrentRoute,
  (route) => route?.url[0]?.path ?? `home`
);
