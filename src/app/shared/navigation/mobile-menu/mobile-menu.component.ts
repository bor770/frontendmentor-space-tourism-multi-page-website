import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

import { pages, translatePage } from '../pages.model';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-mobile-menu',
  standalone: true,
  styleUrls: ['./mobile-menu.component.css'],
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent {
  pages = pages;
  translatePage = translatePage;

  @Output() closed = new EventEmitter();

  onClose() {
    this.closed.emit();
  }
}
