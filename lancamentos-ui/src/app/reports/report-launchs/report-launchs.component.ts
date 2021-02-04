import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-launchs',
  templateUrl: './report-launchs.component.html',
  styleUrls: ['./report-launchs.component.css']
})
export class ReportLaunchsComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  constructor() {
  }

  ngOnInit() {
  }

  generate() {
    console.log(this.startDate);
    console.log(this.endDate);
  }

}
