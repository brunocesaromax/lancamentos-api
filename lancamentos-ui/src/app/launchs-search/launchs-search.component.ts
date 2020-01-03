import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchs-search',
  templateUrl: './launchs-search.component.html',
  styleUrls: ['./launchs-search.component.css']
})
export class LaunchsSearchComponent implements OnInit {

  launchs = [
    {
      type: 'EXPENSE', description: 'Compra de arroz', dueDate: '30/06/2019',
      payday: '30/07/2019', value: 50.55, person: 'Raimundo'
    },
    {
      type: 'RECIPE', description: 'Receita da boa', dueDate: '02/01/2020',
      payday: '30/07/2020', value: 121.62, person: 'Lisp'
    },
    {
      type: 'EXPENSE', description: 'Compra de suco', dueDate: '03/05/2020',
      payday: '30/07/2020', value: 68.99, person: 'Marcos'
    }
  ];

  headers = ['Pessoa', 'Descrição', 'Vencimento', 'Pagamento', 'Valor'];

  constructor() { }

  ngOnInit() {
  }

}
