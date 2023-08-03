import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';

import { BaseDataPageComponent } from '../../shared/base-pages/base-data-page/base-data-page.component';

@Component({
  imports: [CommonModule, LetDirective, RouterModule],
  selector: 'app-technology',
  standalone: true,
  styleUrls: [
    `../../shared/styles/page.css`,
    `../../shared/styles/mobile.page.css`,
    `../../shared/styles/tablet.page.css`,
    `../../shared/styles/desktop.page.css`,
    './styles/technology.component.css',
    './styles/mobile.technology.component.css',
    './styles/tablet.technology.component.css',
    './styles/desktop.technology.component.css',
  ],
  templateUrl: './technology.component.html',
})
export class TechnologyComponent extends BaseDataPageComponent {}
