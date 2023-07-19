import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NavigationComponent } from './navigation/navigation.component';
import { Width } from './shared/layout/layout.model';
import * as fromRoot from './store/root.reducer';

@Component({
  imports: [CommonModule, RouterOutlet, LetDirective, NavigationComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: [
    './styles/app.component.css',
    `./styles/mobile.app.component.css`,
    `./styles/tablet.app.component.css`,
    `./styles/desktop.app.component.css`,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'space-tourism-multi-page-website';
  page$: Observable<string>;
  width$: Observable<Width>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.page$ = this.store.select(fromRoot.selectRouterCategory);
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }
}
