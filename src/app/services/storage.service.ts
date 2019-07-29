import { Injectable } from '@angular/core';
import { CurrencyRegister } from '../model/currency-register';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private currentRate: CurrencyRegister = null;
  private localStorageService;

  constructor() { 
    this.localStorageService = localStorage;
    this.currentRate = this.loadCurrentRate();
  }

/**saves in local storage the specified currency register */
  setCurrentRate(rate: CurrencyRegister): void {
    this.currentRate = rate;
    this.localStorageService.setItem('currentRate', JSON.stringify(rate));
  }

/**load from local storage the currency register */
  loadCurrentRate(): CurrencyRegister {
    var currentRate = this.localStorageService.getItem('currentRate');
    return (currentRate) ? <CurrencyRegister>JSON.parse(currentRate) : null;
  }

  getCurrentRate() : CurrencyRegister{
    return this.currentRate;
  }

}
