import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencyForm = new FormGroup({
    source: new FormControl(''),
    target: new FormControl(''),
  });

  //// PEDIENTE IMPLEMENTAR LA PERSISTENCIA DE LA TASA DE CAMBIO
  constructor(private currencyService: CurrencyService, private storage : StorageService) {

  }

  clearInput(){
    this.currencyForm.setValue({
      source: null,
      target: null
    })
  }

  requestValue() {
    this.currencyService.GetUsdEurRate().subscribe(
      x => {
        console.log("SUCCESS", x);
        var rate = x.quotes.USDEUR;
        console.log("RATE", rate);
        var sourceValue = this.currencyForm.value.source;
        if (sourceValue != null) {
          console.log("SOURCE", sourceValue);
          this.currencyForm.setValue({
            source: sourceValue,
            target: sourceValue / rate
          }

          );
        }
      },
      err => {
        console.log("ERROR", err);
      }
    )
  }

  ngOnInit() {
  }

}
