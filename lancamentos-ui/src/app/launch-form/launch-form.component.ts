import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-launch-form',
  templateUrl: './launch-form.component.html',
  styleUrls: ['./launch-form.component.css']
})
export class LaunchFormComponent implements OnInit {
  types = [
    { label: 'Receita', value: 'RECEIPT' },
    { label: 'Despesa', value: 'EXPENSE' }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
