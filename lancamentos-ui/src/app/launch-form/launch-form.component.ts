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

  categories = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 }
  ];

  persons = [
    { label: 'João', value: 4 },
    { label: 'Sebastião', value: 9 },
    { label: 'Maria', value: 3 },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
