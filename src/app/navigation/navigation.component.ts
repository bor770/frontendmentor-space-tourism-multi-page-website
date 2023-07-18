import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MenuComponent } from './menu/menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { Width } from '../shared/layout/layout.model';
import * as fromRoot from '../store/root.reducer';
import * as NavigationActions from './store/navigation.actions';

@Component({
  animations: [
    trigger(`menu`, [
      state(`in`, style({ transform: `translateX(0)` })),
      transition(`void => *`, [
        style({ transform: `translateX(100%)` }),
        animate(500),
      ]),
      transition(`* => void`, [
        animate(500, style({ transform: `translateX(100%)` })),
      ]),
    ]),
  ],
  imports: [CommonModule, LetDirective, MenuComponent, MobileMenuComponent],
  selector: 'app-navigation',
  standalone: true,
  styleUrls: ['./navigation.component.css'],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  isMobileMenuOpen$: Observable<boolean>;
  width$: Observable<Width>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isMobileMenuOpen$ = this.store.select(
      fromRoot.selectNavigationIsMobileMenuOpen
    );
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }

  onOpenMobileMenu() {
    this.store.dispatch(NavigationActions.openMobileMenu());
  }
}
