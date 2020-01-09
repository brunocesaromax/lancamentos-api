import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-launchs-grid',
  templateUrl: './launchs-grid.component.html',
  styleUrls: ['./launchs-grid.component.css']
})
export class LaunchsGridComponent {

  @Input() launchs = [];
  @Input() headers = [];
}
