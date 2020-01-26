import {Component, OnInit} from '@angular/core';
import {LaunchService} from '../launch.service';

@Component({
  selector: 'app-launchs-search',
  templateUrl: './launchs-search.component.html',
  styleUrls: ['./launchs-search.component.css']
})
export class LaunchsSearchComponent implements OnInit {

  launchs = [];
  headers = ['Pessoa', 'Descrição', 'Vencimento', 'Pagamento', 'Valor', ''];

  constructor(private launchService: LaunchService) {
  }

  ngOnInit() {
    this.search();
  }

  search() {
    this.launchService.search()
      .subscribe(resp => {
        this.launchs = resp.content;
      });
  }
}
