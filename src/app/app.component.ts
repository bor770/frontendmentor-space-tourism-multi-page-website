import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';

@Component({
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'space-tourism-multi-page-website';
}
