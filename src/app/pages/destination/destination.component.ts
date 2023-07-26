import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import data from '../../../assets/data/data.json';
import { Width } from '../../shared/layout/layout.model';
import * as fromRoot from '../../store/root.reducer';

@Component({
  imports: [CommonModule, LetDirective, RouterModule],
  selector: 'app-destination',
  standalone: true,
  styleUrls: [
    './styles/destination.component.css',
    `./styles/mobile.destination.component.css`,
    `./styles/tablet.destination.component.css`,
    `./styles/desktop.destination.component.css`,
  ],
  templateUrl: './destination.component.html',
})
export class DestinationComponent implements OnInit {
  data = data;
  index$: Observable<number>;
  width$: Observable<Width>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.index$ = this.store.select(fromRoot.selectRouterIndex);
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }

  getImagePath(path: string) {
    return path.replace(`./assets`, `../../../assets/images`);
  }

  getRouterLink(index: number) {
    return `/destination/${index + 1}`;
  }
}
