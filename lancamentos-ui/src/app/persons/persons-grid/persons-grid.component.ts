import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-persons-grid',
  templateUrl: './persons-grid.component.html',
  styleUrls: ['./persons-grid.component.css']
})
export class PersonsGridComponent {

  @Input() persons = [];
  @Input() headers = [];
}
