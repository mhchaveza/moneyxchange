import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor() { }

  /**currency API end point. Visit: https://currencylayer.com/quickstart for more info */
  get currencyApi() {
    return 'http://www.apilayer.net/api/live?access_key=2bccb4faa391f1cbaeb2b8c3414ddd5f'; 
}  
}
