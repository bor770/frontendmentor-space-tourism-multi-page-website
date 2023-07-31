import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';

import { BasePageComponent } from '../../shared/base-page/base-page.component';

@Component({
  imports: [CommonModule, LetDirective, RouterModule],
  selector: 'app-home',
  standalone: true,
  styleUrls: [
    './styles/home.component.css',
    `./styles/mobile.home.component.css`,
    `./styles/tablet.home.component.css`,
    `./styles/desktop.home.component.css`,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent extends BasePageComponent {}
