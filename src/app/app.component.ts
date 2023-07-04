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
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'space-tourism-multi-page-website';
  category$: Observable<string>;
  width$: Observable<Width>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.category$ = this.store.select(fromRoot.selectRouterCategory);
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }
}
