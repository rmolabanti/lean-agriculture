import { Component } from '@angular/core';
import { Institute } from './institute';
import { Plant } from './plants/plant.model';
import { bambooPlant } from './plants/bamboo.plant';

const INSTITUTES : Institute[] = [
  {id:1, name:'consortium of crop-industry specialists'},
  {id:2, name:'Centre for Environment and Agriculture and the Tata Strategic Management Group'},
  {id:3, name:'the Crop Care Federation of India'},
  {id:4, name:'crop-care industry association'},
  {id:5, name:'aibono',url:'http://aibono.com/'}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lean Farming Blog!';
  institutes = INSTITUTES;
  plant = bambooPlant;
}
