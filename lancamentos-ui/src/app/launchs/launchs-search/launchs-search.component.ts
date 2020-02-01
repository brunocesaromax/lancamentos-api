import {Component, OnInit} from '@angular/core';
import {LaunchFilter, LaunchService} from '../launch.service';

@Component({
  selector: 'app-launchs-search',
  templateUrl: './launchs-search.component.html',
  styleUrls: ['./launchs-search.component.css']
})

export class LaunchsSearchComponent implements OnInit {

  filter = new LaunchFilter();
  launchs = [];
  headers = ['Pessoa', 'Descrição', 'Vencimento', 'Pagamento', 'Valor', ''];

  constructor(private launchService: LaunchService) {
  }

  ngOnInit() {
    this.search();
  }

  search() {
    this.launchService.search(this.filter)
      .subscribe(resp => {
        console.log(resp);
        this.launchs = resp.content;
      });
  }
}
