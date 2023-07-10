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

import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { Width } from '../layout/layout.model';
import * as fromRoot from '../../store/root.reducer';

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
  imports: [CommonModule, LetDirective, MobileMenuComponent],
  selector: 'app-navigation',
  standalone: true,
  styleUrls: ['./navigation.component.css'],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  isMenuDisplayed = false;
  width$: Observable<Width>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }

  onMenuToggle() {
    this.isMenuDisplayed = !this.isMenuDisplayed;
  }
}
