import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public extractData(res: any) {

    let body = res.json();
    return body;
  }
}
