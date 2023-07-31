import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import data from '../../../../assets/data/data.json';
import { BasePageComponent } from '../base-page/base-page.component';
import * as fromRoot from '../../../store/root.reducer';

@Component({
  imports: [CommonModule],
  selector: 'app-base-data-page',
  standalone: true,
  styleUrls: ['./base-data-page.component.css'],
  templateUrl: './base-data-page.component.html',
})
export class BaseDataPageComponent extends BasePageComponent implements OnInit {
  data = data;
  index$: Observable<number>;

  ngOnInit(): void {
    super.ngOnInit();
    this.index$ = this.store.select(fromRoot.selectRouterIndex);
  }

  getImagePath(path: string) {
    return path.replace(`./assets`, `../../../assets/images`);
  }
}
