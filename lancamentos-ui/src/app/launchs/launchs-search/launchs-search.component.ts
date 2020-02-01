import {Component, OnInit} from '@angular/core';
import {LaunchFilter, LaunchService} from '../launch.service';
import {LazyLoadEvent} from 'primeng/api/lazyloadevent';

@Component({
  selector: 'app-launchs-search',
  templateUrl: './launchs-search.component.html',
  styleUrls: ['./launchs-search.component.css']
})

export class LaunchsSearchComponent implements OnInit {

  totalElements = 0;
  filter = new LaunchFilter();
  launchs = [];
  headers = ['Pessoa', 'Descrição', 'Vencimento', 'Pagamento', 'Valor', ''];

  constructor(private launchService: LaunchService) {
  }

  ngOnInit() {
    // this.search();
  }

  search(page = 0) {
    this.filter.page = page;

    this.launchService.search(this.filter)
      .subscribe(resp => {
        console.log(resp);
        this.totalElements = resp.totalElements;
        this.launchs = resp.content;
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }
}
