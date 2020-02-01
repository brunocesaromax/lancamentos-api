import {Component, OnInit} from '@angular/core';
import {LaunchFilter, LaunchService} from '../launch.service';

@Component({
  selector: 'app-launchs-search',
  templateUrl: './launchs-search.component.html',
  styleUrls: ['./launchs-search.component.css']
})

export class LaunchsSearchComponent implements OnInit {

  description: string;
  dueDayStart: Date;
  dueDayEnd: Date;
  launchs = [];
  headers = ['Pessoa', 'Descrição', 'Vencimento', 'Pagamento', 'Valor', ''];

  constructor(private launchService: LaunchService) {
  }

  ngOnInit() {
    this.search();
  }

  search() {
    const filter: LaunchFilter = {
      description: this.description,
      dueDayStart: this.dueDayStart,
      dueDayEnd: this.dueDayEnd
    };

    this.launchService.search(filter)
      .subscribe(resp => {
        this.launchs = resp.content;
      });
  }
}
