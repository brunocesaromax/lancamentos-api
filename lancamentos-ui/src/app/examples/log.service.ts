import {Inject} from '@angular/core';

export class LogService {

  constructor(@Inject('LogPrefix') private prefix: string) {
  }

  log(msg: string) {
    console.log(`LOG: ${this.prefix}`);
  }
}
