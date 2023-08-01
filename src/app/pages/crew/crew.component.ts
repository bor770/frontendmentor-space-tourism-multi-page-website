import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';

import { BaseDataPageComponent } from '../../shared/base-pages/base-data-page/base-data-page.component';

@Component({
  imports: [CommonModule, LetDirective, RouterModule],
  selector: 'app-crew',
  standalone: true,
  styleUrls: [
    `../../shared/styles/page.css`,
    `../../shared/styles/mobile.page.css`,
    `../../shared/styles/tablet.page.css`,
    `../../shared/styles/desktop.page.css`,
    './styles/crew.component.css',
    `./styles/mobile.crew.component.css`,
    `./styles/tablet.crew.component.css`,
    `./styles/desktop.crew.component.css`,
  ],
  templateUrl: './crew.component.html',
})
export class CrewComponent extends BaseDataPageComponent {}
