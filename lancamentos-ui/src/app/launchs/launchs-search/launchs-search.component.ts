import {Component, OnInit, ViewChild} from '@angular/core';
import {LaunchFilter, LaunchService} from '../launch.service';
import {LazyLoadEvent} from 'primeng/api/lazyloadevent';
import {ToastyService} from 'ng2-toasty';
import {ConfirmationService} from 'primeng';
import 'rxjs/add/operator/catch';
import {ErrorHandlerService} from '../../core/error-handler.service';

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

  @ViewChild('table', {static: true}) table;

  constructor(private launchService: LaunchService,
              private errorHandlerService: ErrorHandlerService,
              private toastyService: ToastyService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.search();
  }

  search(page = 0) {
    this.filter.page = page;

    this.launchService.search(this.filter)
      .subscribe(resp => {
          this.totalElements = resp.totalElements;
          this.launchs = resp.content;
        },
        error => this.errorHandlerService.handle(error)
      );
  }

  changePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

  deleteConfirm(launch: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.delete(launch);
      }
    });
  }

  delete(launch: any) {
    this.launchService.delete(launch.id)
      .subscribe(() => {
          this.table.first = 0;
          this.search();
          this.toastyService.success('Lançamento excluído com sucesso!');
        },
        error => this.errorHandlerService.handle(error)
      );
  }
}
