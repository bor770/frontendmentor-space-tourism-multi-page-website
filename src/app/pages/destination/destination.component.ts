import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import data from '../../../assets/data/data.json';

@Component({
  imports: [CommonModule],
  selector: 'app-destination',
  standalone: true,
  styleUrls: ['./destination.component.css'],
  templateUrl: './destination.component.html',
})
export class DestinationComponent {
  data = data;
}
