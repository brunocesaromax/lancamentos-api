import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-report-launchs',
  templateUrl: './report-launchs.component.html',
  styleUrls: ['./report-launchs.component.css']
})
export class ReportLaunchsComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  constructor(private reportsService: ReportsService,
              private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Relatório');
  }

  generate() {
    this.reportsService.reportLaunchsByPerson(this.startDate, this.endDate)
      .then(report => {
        const url = window.URL.createObjectURL(report);
        window.open(url);
      });
  }
}
