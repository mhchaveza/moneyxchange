import { Component, OnInit } from '@angular/core';
import { NavLink } from './model/nav-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'moneyxchange';
  navLinks: NavLink[] = [];

  ngOnInit(): void {
    this.navLinks = [
        {label: 'EUR to USD', path: '/home'},
        {label: 'Other', path: '/other'},
        {label: 'About us', path: '/about'},
        {label: 'Contact', path: '/contact'}
    ];
  }
}

