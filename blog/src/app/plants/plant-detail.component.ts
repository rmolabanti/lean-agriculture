import { Component, Input } from '@angular/core';

import { Plant } from './plant.model';
@Component({
  selector: 'plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls : ['./plant-detail.component.css']
})
export class PlantDetailComponent {
  @Input() plant: Plant;
}
