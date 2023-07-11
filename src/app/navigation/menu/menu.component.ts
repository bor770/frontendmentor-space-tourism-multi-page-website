import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { pages, translatePage } from '../pages.model';
import { Width } from '../../shared/layout/layout.model';
import * as fromRoot from '../../store/root.reducer';

@Component({
  imports: [CommonModule, LetDirective, RouterModule],
  selector: 'app-menu',
  standalone: true,
  styleUrls: ['./menu.component.css', `./mobile.menu.component.css`],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  pages = pages;
  translatePage = translatePage;
  width$: Observable<Width>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }
}
