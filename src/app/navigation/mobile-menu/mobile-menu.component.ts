import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { MenuComponent } from '../menu/menu.component';

@Component({
  imports: [CommonModule, MenuComponent],
  selector: 'app-mobile-menu',
  standalone: true,
  styleUrls: ['./mobile-menu.component.css'],
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent {
  @Output() closed = new EventEmitter();

  onClose() {
    this.closed.emit();
  }
}
