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
import * as fromNavigation from '../navigation/store/navigation.reducer';

interface State {
  layout: fromLayout.State;
  navigation: fromNavigation.State;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.layoutReducer,
  navigation: fromNavigation.navigationReducer,
  router: routerReducer,
};

const selectLayout = createFeatureSelector<fromLayout.State>(`layout`);

export const selectLayoutWidth = createSelector(
  selectLayout,
  fromLayout.selectWidth
);

const selectNavigation =
  createFeatureSelector<fromNavigation.State>(`navigation`);

export const selectNavigationIsMobileMenuOpen = createSelector(
  selectNavigation,
  fromNavigation.selectIsMobileMenuOpen
);

export const selectRouterCategory = createSelector(
  getRouterSelectors().selectCurrentRoute,
  (route) => route?.url[0]?.path ?? `home`
);
