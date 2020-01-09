import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-persons-search',
  templateUrl: './persons-search.component.html',
  styleUrls: ['./persons-search.component.css']
})
export class PersonsSearchComponent implements OnInit {

  persons = [
    {
      name: 'Raimundao', city: 'Goiânia', state: 'GO', status: true
    },
    {
      name: 'Maria das Graças', city: 'Cuiaba', state: 'MT', status: false
    },
    {
      name: 'Bruno', city: 'Coritiba', state: 'PR', status: true
    }
  ];

  headers = ['Nome', 'Cidade', 'Estado', 'Status', ''];

  constructor() {
  }

  ngOnInit() {
  }

}
