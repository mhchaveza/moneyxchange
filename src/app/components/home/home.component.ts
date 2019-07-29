import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor() 
  { 
  }

  ngOnInit() {
  }

}
