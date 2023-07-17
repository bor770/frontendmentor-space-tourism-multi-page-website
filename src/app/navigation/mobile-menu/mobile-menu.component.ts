import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { MenuComponent } from '../menu/menu.component';
import * as NavigationActions from '../store/navigation.actions';

@Component({
  imports: [CommonModule, MenuComponent],
  selector: 'app-mobile-menu',
  standalone: true,
  styleUrls: ['./mobile-menu.component.css'],
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent {
  constructor(private store: Store) {}

  onClose() {
    this.store.dispatch(NavigationActions.closeMenu());
  }
}
