import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceIntroService {

  constructor() { }

  getData() {
    // console.log("loaded data")
    return [
      {
        name: "a",
        number: "1"
      },
      {
        name: "b",
        number: "2"
      },
      {
        name: "c",
        number: "3"
      }
    ]
  }

}
