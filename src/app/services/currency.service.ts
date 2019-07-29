import { Injectable } from '@angular/core';
import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { EndpointsService } from './endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currencyUrl : string;
  constructor(private http: HttpClient, private shared: SharedService, private endpointService : EndpointsService) { 
    this.currencyUrl = endpointService.currencyApi;
  }

  /**returns the current USD and EUR rates */
  GetUsdEurRate(): Observable<any>{
    return this.http.get(this.currencyUrl+'& currencies = USD,EUR & format = 1').pipe()
  }
}
