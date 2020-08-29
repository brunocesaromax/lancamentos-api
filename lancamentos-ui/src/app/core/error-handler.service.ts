import {Injectable} from '@angular/core';
import {ToastyService} from 'ng2-toasty';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toastyService: ToastyService) {
  }

  handle(errorResponse: any) {
    let msg: string;

    if (errorResponse instanceof HttpErrorResponse && errorResponse.status >= 400 && errorResponse.status < 500) {
      msg = errorResponse.error[0].msgUser;

    } else if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.log('Ocorreu um erro:', errorResponse);
    }

    this.toastyService.error(msg);
  }
}
