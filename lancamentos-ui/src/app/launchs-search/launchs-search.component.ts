import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchs-search',
  templateUrl: './launchs-search.component.html',
  styleUrls: ['./launchs-search.component.css']
})
export class LaunchsSearchComponent implements OnInit {

  launchs = [
    {
      type: 'EXPENSE', description: 'Compra de arroz', dueDate: new Date(2019, 6, 30),
      payday: new Date(2019, 7, 30), value: 50.55, person: 'Raimundo'
    },
    {
      type: 'RECIPE', description: 'Receita da boa', dueDate: new Date(2020, 1, 2),
      payday: new Date(2020, 7, 30), value: 121.62, person: 'Lisp'
    },
    {
      type: 'EXPENSE', description: 'Compra de suco', dueDate: new Date(2020, 5, 3),
      payday: new Date(2020, 9, 30), value: 68.99, person: 'Marcos'
    }
  ];

  headers = ['Pessoa', 'Descrição', 'Vencimento', 'Pagamento', 'Valor', ''];

  constructor() { }

  ngOnInit() {
  }

}
