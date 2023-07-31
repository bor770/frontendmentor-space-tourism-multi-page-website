import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';

import { BaseDataPageComponent } from '../../shared/base-pages/base-data-page/base-data-page.component';

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
export class DestinationComponent extends BaseDataPageComponent {}
