import { Injectable } from '@angular/core';

@Injectable()
// Production class
export class LoggerService {
  log(msg: any) {
    console.log('LoggerService.log() ->', msg);

    // Put some code that logs to a server
  }
}
