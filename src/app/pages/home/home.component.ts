import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Width } from '../../shared/layout/layout.model';
import * as fromRoot from '../../store/root.reducer';

@Component({
  imports: [CommonModule, LetDirective, RouterModule],
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  width$: Observable<Width>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }
}
