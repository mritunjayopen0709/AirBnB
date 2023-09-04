import { Component } from '@angular/core';
import { icons } from 'src/app/shared/interfaces/icon.iterface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(){}
  icons : icons[]=[];
  

}
